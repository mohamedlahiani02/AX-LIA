'use client';

import Image from 'next/image';
import { useEffect, useState, type FormEvent, type PointerEvent, type ReactNode } from 'react';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

export function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia(reducedMotionQuery).matches) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % words.length), 2200);
    return () => window.clearInterval(timer);
  }, [words.length]);
  return (
    <span className="rotor">
      <span key={index} className="rotor-word">
        {words[index]}
      </span>
    </span>
  );
}

type PointerZoneProps = { className: string; tilt?: boolean; children: ReactNode };

export function PointerZone({ className, tilt = false, children }: PointerZoneProps) {
  function onMove(event: PointerEvent<HTMLDivElement>) {
    const element = event.currentTarget;
    const box = element.getBoundingClientRect();
    const x = event.clientX - box.left;
    const y = event.clientY - box.top;
    element.style.setProperty('--mx', `${x}px`);
    element.style.setProperty('--my', `${y}px`);
    if (tilt) {
      element.style.setProperty('--ry', `${(x / box.width - 0.5) * 10}deg`);
      element.style.setProperty('--rx', `${(0.5 - y / box.height) * 10}deg`);
    }
  }
  function onLeave(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty('--rx', '0deg');
    event.currentTarget.style.setProperty('--ry', '0deg');
  }
  return (
    <div className={className} onPointerMove={onMove} onPointerLeave={tilt ? onLeave : undefined}>
      {children}
    </div>
  );
}

export function Reel({ tabs }: { tabs: { img: string; t: string }[] }) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((current) => (current + 1) % tabs.length);
  return (
    <div className="reel">
      <div className="reel-tabs" role="tablist">
        {tabs.map((tab, position) => (
          <button
            key={tab.img}
            type="button"
            role="tab"
            aria-selected={position === index}
            className="reel-tab"
            onClick={() => setIndex(position)}
          >
            {tab.t}
            {position === index && <span key={index} className="reel-progress" onAnimationEnd={next} />}
          </button>
        ))}
      </div>
      <div className="reel-screen">
        <div className="reel-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="reel-stage">
          {tabs.map((tab, position) => (
            <Image
              key={tab.img}
              src={`/img/${tab.img}`}
              alt={position === index ? `${tab.t} — AXÉLIA` : ''}
              aria-hidden={position !== index}
              width={1440}
              height={900}
              sizes="(max-width: 1000px) 100vw, 1000px"
              priority={position === 0}
              className={position === index ? 'is-active' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type FieldName = 'name' | 'establishment' | 'email' | 'phone';

type DemoFormProps = {
  locale: string;
  labels: Record<FieldName, string>;
  text: { submit: string; sending: string; required: string; invalidEmail: string; success: string; prepare: string; failure: string };
};

const fieldTypes: Record<FieldName, { type: string; autoComplete: string }> = {
  name: { type: 'text', autoComplete: 'name' },
  establishment: { type: 'text', autoComplete: 'organization' },
  email: { type: 'email', autoComplete: 'email' },
  phone: { type: 'tel', autoComplete: 'tel' },
};

const fieldNames = Object.keys(fieldTypes) as FieldName[];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function DemoForm({ locale, labels, text }: DemoFormProps) {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(fieldNames.map((name) => [name, String(data.get(name) ?? '').trim()])) as Record<FieldName, string>;
    const found: Partial<Record<FieldName, string>> = {};
    for (const name of fieldNames) {
      if (!values[name]) found[name] = text.required;
    }
    if (values.email && !emailPattern.test(values.email)) found.email = text.invalidEmail;
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, locale }),
      });
      setStatus(response.ok ? 'sent' : 'failed');
    } catch {
      setStatus('failed');
    }
  }

  if (status === 'sent') {
    return (
      <div className="card" role="status">
        <h3>{text.success}</h3>
        <p>{text.prepare}</p>
      </div>
    );
  }

  return (
    <form className="card form" onSubmit={onSubmit} noValidate>
      {fieldNames.map((name) => (
        <div key={name} className="field">
          <label htmlFor={`demo-${name}`}>{labels[name]}</label>
          <input
            id={`demo-${name}`}
            name={name}
            type={fieldTypes[name].type}
            autoComplete={fieldTypes[name].autoComplete}
            required
            aria-invalid={errors[name] ? true : undefined}
            aria-describedby={errors[name] ? `demo-${name}-error` : undefined}
          />
          {errors[name] && (
            <p className="field-error" id={`demo-${name}-error`}>
              {errors[name]}
            </p>
          )}
        </div>
      ))}
      <button type="submit" className="btn" disabled={status === 'sending'}>
        {status === 'sending' ? text.sending : text.submit}
      </button>
      {status === 'failed' && (
        <p className="field-error" role="alert">
          {text.failure}
        </p>
      )}
    </form>
  );
}
