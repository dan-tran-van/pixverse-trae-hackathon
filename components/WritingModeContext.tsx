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

  useEffect(() => {
    if (writingMode === 'vertical') {
      document.body.style.setProperty('writing-mode', 'vertical-rl');
      document.body.style.setProperty('text-orientation', 'mixed');
      document.body.dataset.writingMode = 'vertical';
      return;
    }

    document.body.style.setProperty('writing-mode', 'horizontal-tb');
    document.body.style.removeProperty('text-orientation');
    document.body.dataset.writingMode = 'horizontal';
  }, [writingMode]);

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
