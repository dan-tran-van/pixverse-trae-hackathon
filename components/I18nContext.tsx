'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { AudienceKey } from '@/types/campaign';
import { getLocaleFromAudience, type LocaleKey, type TranslationKey, type Translations, TRANSLATIONS } from '@/data/i18n';

interface I18nContextValue {
  locale: LocaleKey;
  setLocale: (locale: LocaleKey) => void;
  setAudienceLocale: (audience: AudienceKey) => void;
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function interpolate(template: string, vars?: Record<string, string | number>) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, name: string) => {
    const v = vars[name];
    return v === undefined ? `{${name}}` : String(v);
  });
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleKey>('en');

  useEffect(() => {
    const stored = localStorage.getItem('locale');
    if (stored === 'en' || stored === 'vi' || stored === 'ja' || stored === 'zh' || stored === 'ko') {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (next: LocaleKey) => {
    setLocaleState(next);
    localStorage.setItem('locale', next);
  };

  const setAudienceLocale = (audience: AudienceKey) => {
    const next = getLocaleFromAudience(audience);
    setLocale(next);
  };

  const value = useMemo<I18nContextValue>(() => {
    const dict: Translations = TRANSLATIONS[locale];
    return {
      locale,
      setLocale,
      setAudienceLocale,
      t: (key, vars) => interpolate(dict[key] ?? TRANSLATIONS.en[key] ?? key, vars),
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

