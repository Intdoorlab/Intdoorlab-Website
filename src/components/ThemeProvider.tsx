'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'intdoorlab-theme';

interface ThemeContextValue {
  theme: Theme;
  /** Switch theme with the flat door-sweep transition. */
  setTheme: (next: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Inline script executed before first paint to apply the stored / system theme
 * and prevent a flash of the wrong palette.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');

  // Sync with the attribute applied by the init script
  useEffect(() => {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') {
      setThemeState(attr);
    }
  }, []);

  const applyTheme = useCallback((next: Theme) => {
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
    setThemeState(next);
  }, []);

  const setTheme = useCallback(
    (next: Theme) => {
      const root = document.documentElement;
      if (root.getAttribute('data-theme') === next) return;

      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (reducedMotion) {
        applyTheme(next);
        return;
      }

      const doc = document as ViewTransitionDocument;
      if (typeof doc.startViewTransition === 'function') {
        root.setAttribute('data-theme-sweep', next === 'dark' ? 'to-dark' : 'to-light');
        const transition = doc.startViewTransition(() => applyTheme(next));
        transition.finished.finally(() => {
          root.removeAttribute('data-theme-sweep');
        });
        return;
      }

      // Fallback: short flat colour crossfade
      root.classList.add('theme-fading');
      applyTheme(next);
      window.setTimeout(() => root.classList.remove('theme-fading'), 460);
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}

