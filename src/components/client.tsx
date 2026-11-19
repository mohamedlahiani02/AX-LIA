'use client';

import { type CSSProperties, type ChangeEvent, type FormEvent, type PointerEvent, type ReactNode, useEffect, useRef, useState } from 'react';

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

type VideoLabels = { play: string; pause: string; soundOn: string; soundOff: string; fullscreen: string; seek: string; label: string };

function formatTime(seconds: number): string {
  const safe = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
  return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, '0')}`;
}

export function VideoShowcase({ src, poster, labels }: { src: string; poster: string; labels: VideoLabels }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByUser = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia(reducedMotionQuery).matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pausedByUser.current) {
          video.play().catch(() => setPlaying(false));
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      pausedByUser.current = false;
      video.play().catch(() => setPlaying(false));
    } else {
      pausedByUser.current = true;
      video.pause();
    }
  }

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted && video.paused) {
      pausedByUser.current = false;
      video.play().catch(() => setPlaying(false));
    }
  }

  function seek(event: ChangeEvent<HTMLInputElement>) {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Number(event.target.value);
    setTime(video.currentTime);
  }

  function fullscreen() {
    const frame = frameRef.current;
    if (!frame) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => undefined);
    } else if (frame.requestFullscreen) {
      frame.requestFullscreen().catch(() => undefined);
    }
  }

  const progress = duration > 0 ? (time / duration) * 100 : 0;
  return (
    <div className="reel" ref={frameRef}>
      <div className="reel-screen">
        <div className="reel-bar">
          <span />
          <span />
          <span />
        </div>
        <div className={playing ? 'reel-stage is-playing' : 'reel-stage'}>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={labels.label}
            onClick={togglePlay}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
            onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
          />
          <button type="button" className="video-big-play" onClick={togglePlay} aria-label={labels.play} tabIndex={playing ? -1 : 0}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </button>
          <div className="video-controls">
            <button type="button" onClick={togglePlay} aria-label={playing ? labels.pause : labels.play}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {playing ? <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /> : <path d="M8 5.5v13l11-6.5z" />}
              </svg>
            </button>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={time}
              onChange={seek}
              aria-label={labels.seek}
              style={{ '--progress': `${progress}%` } as CSSProperties}
            />
            <span className="video-time">
              {formatTime(time)} / {formatTime(duration)}
            </span>
            <button type="button" onClick={toggleSound} aria-label={muted ? labels.soundOn : labels.soundOff} className={muted ? 'video-sound is-muted' : 'video-sound'}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
                {muted ? <path d="M15.5 9.5l5 5m0-5l-5 5" className="stroke" /> : <path d="M15.5 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12" className="stroke" />}
              </svg>
              <span>{muted ? labels.soundOn : labels.soundOff}</span>
            </button>
            <button type="button" onClick={fullscreen} aria-label={labels.fullscreen}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" className="stroke" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StickyCta({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.querySelector('.hero');
    const demo = document.getElementById('demo');
    if (!hero || !demo) return;
    const state = { pastHero: false, atDemo: false };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) state.pastHero = !entry.isIntersecting;
        if (entry.target === demo) state.atDemo = entry.isIntersecting;
      }
      setVisible(state.pastHero && !state.atDemo);
    });
    observer.observe(hero);
    observer.observe(demo);
    return () => observer.disconnect();
  }, []);
  return (
    <div className={visible ? 'sticky-cta is-visible' : 'sticky-cta'} aria-hidden={!visible}>
      <a href="#demo" className="btn" tabIndex={visible ? 0 : -1}>
        {label}
      </a>
    </div>
  );
}

type FieldName = 'name' | 'establishment' | 'email' | 'phone';
type FormLabels = Record<FieldName | 'message', string>;

type DemoFormProps = {
  locale: string;
  labels: FormLabels;
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
    const message = String(data.get('message') ?? '').trim();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, message, locale }),
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
      <div className="field">
        <label htmlFor="demo-message">{labels.message}</label>
        <textarea id="demo-message" name="message" rows={4} maxLength={2000} />
      </div>
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
