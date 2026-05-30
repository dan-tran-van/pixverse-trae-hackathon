'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { WritingMode } from '@/types/campaign';

interface WritingModeContextValue {
  writingMode: WritingMode;
  setWritingMode: (mode: WritingMode) => void;
}

const WritingModeContext = createContext<WritingModeContextValue | null>(null);

export function WritingModeProvider({ children }: { children: React.ReactNode }) {
  const [writingMode, setWritingMode] = useState<WritingMode>('horizontal');

  useEffect(() => {
    const stored = localStorage.getItem('writing_mode');
    if (stored === 'horizontal' || stored === 'vertical') {
      setWritingMode(stored);
    }
  }, []);

  const setWritingModeAndPersist = (mode: WritingMode) => {
    setWritingMode(mode);
    localStorage.setItem('writing_mode', mode);
  };

  const value = useMemo(
    () => ({ writingMode, setWritingMode: setWritingModeAndPersist }),
    [writingMode],
  );

  return <WritingModeContext.Provider value={value}>{children}</WritingModeContext.Provider>;
}

export function useWritingMode() {
  const ctx = useContext(WritingModeContext);
  if (!ctx) {
    throw new Error('useWritingMode must be used within WritingModeProvider');
  }
  return ctx;
}

