'use client';

import { useState, type FormEvent } from 'react';
import type { ModuleInfo, ModuleKey } from '@/lib/site';

type ModuleMapProps = {
  modules: (ModuleInfo & { count: string; link: string })[];
  hereLabel: string;
  moreLabel: string;
};

export function ModuleMap({ modules, hereLabel, moreLabel }: ModuleMapProps) {
  const [active, setActive] = useState<ModuleKey>(modules[0].key);
  const current = modules.find((module) => module.key === active) ?? modules[0];
  return (
    <div className="map">
      <div className="map-tabs" role="tablist">
        {modules.map((module) => {
          const selected = module.key === active;
          return (
            <button
              key={module.key}
              type="button"
              role="tab"
              id={`tab-${module.key}`}
              aria-selected={selected}
              aria-controls="map-panel"
              className="map-tab"
              onMouseEnter={() => setActive(module.key)}
              onFocus={() => setActive(module.key)}
              onClick={() => setActive(module.key)}
            >
              <strong>
                {selected && <span className="dot" title={hereLabel} />}
                {module.name}
              </strong>
              <span>{module.count}</span>
            </button>
          );
        })}
      </div>
      <div className="map-panel" role="tabpanel" id="map-panel" aria-labelledby={`tab-${current.key}`}>
        <p>{current.tag}</p>
        <ul>
          {current.blocks.map((block) => (
            <li key={block}>{block}</li>
          ))}
        </ul>
        <a className="more" href={current.link}>
          {moreLabel}
        </a>
      </div>
    </div>
  );
}

type SwitchProps = {
  withoutLabel: string;
  withLabel: string;
  rows: { t: string; without: string; with: string }[];
};

export function SwitchPanel({ withoutLabel, withLabel, rows }: SwitchProps) {
  const [on, setOn] = useState(true);
  return (
    <div className="switch">
      <div className="toggle" role="group">
        <button type="button" aria-pressed={!on} onClick={() => setOn(false)}>
          {withoutLabel}
        </button>
        <button type="button" aria-pressed={on} onClick={() => setOn(true)}>
          {withLabel}
        </button>
      </div>
      <dl className={on ? 'switch-rows is-on' : 'switch-rows'} aria-live="polite">
        {rows.map((row) => (
          <div key={row.t}>
            <dt>{row.t}</dt>
            <dd>{on ? row.with : row.without}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

type BillingProps = {
  label: string;
  monthlyLabel: string;
  annualLabel: string;
  title: string;
  monthly: string;
  annual: string;
  quote: string;
};

export function HostingCard({ label, monthlyLabel, annualLabel, title, monthly, annual, quote }: BillingProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <article className="card">
      <h3>{title}</h3>
      <p className="price">{quote}</p>
      <div className="toggle" role="group" aria-label={label}>
        <button type="button" aria-pressed={!isAnnual} onClick={() => setIsAnnual(false)}>
          {monthlyLabel}
        </button>
        <button type="button" aria-pressed={isAnnual} onClick={() => setIsAnnual(true)}>
          {annualLabel}
        </button>
      </div>
      <p aria-live="polite">{isAnnual ? annual : monthly}</p>
    </article>
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
