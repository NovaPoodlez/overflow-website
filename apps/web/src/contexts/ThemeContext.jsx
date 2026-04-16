import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// HSL values for each theme phase [h, s, l]
const THEME_VARS = {
  light: {
    '--background':        [0,   0,   98],
    '--foreground':        [0,   0,   10],
    '--card':              [0,   0,  100],
    '--card-foreground':   [0,   0,   10],
    '--popover':           [0,   0,  100],
    '--popover-foreground':[0,   0,   10],
    '--primary':           [142, 71,  45],
    '--primary-foreground':[0,   0,  100],
    '--secondary':         [142, 30,  95],
    '--secondary-foreground':[142,71, 20],
    '--muted':             [142, 20,  96],
    '--muted-foreground':  [142, 20,  40],
    '--border':            [142, 20,  90],
    '--input':             [142, 20,  90],
  },
  sunset: {
    '--background':        [24,  80,  18],
    '--foreground':        [36, 100,  90],
    '--card':              [24,  70,  22],
    '--card-foreground':   [36, 100,  90],
    '--popover':           [24,  70,  22],
    '--popover-foreground':[36, 100,  90],
    '--primary':           [30, 100,  60],
    '--primary-foreground':[24,  80,  10],
    '--secondary':         [24,  60,  28],
    '--secondary-foreground':[36,100, 85],
    '--muted':             [24,  60,  25],
    '--muted-foreground':  [36,  80,  70],
    '--border':            [24,  50,  35],
    '--input':             [24,  50,  35],
  },
  dark: {
    '--background':        [225, 50,   8],
    '--foreground':        [220, 30,  92],
    '--card':              [225, 45,  11],
    '--card-foreground':   [220, 30,  92],
    '--popover':           [225, 45,  11],
    '--popover-foreground':[220, 30,  92],
    '--primary':           [142, 71,  55],
    '--primary-foreground':[142, 71,  10],
    '--secondary':         [225, 40,  18],
    '--secondary-foreground':[220,30, 85],
    '--muted':             [225, 40,  14],
    '--muted-foreground':  [220, 25,  60],
    '--border':            [225, 40,  20],
    '--input':             [225, 40,  20],
  },
};

const PHASES = ['light', 'sunset', 'dark'];
const TRANSITION_MS = 10000; // 10-second fade between phases
const HOLD_MS = 30000;       // 30 seconds at each phase

function easeInOut(t) {
  return 0.5 - Math.cos(t * Math.PI) / 2;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function applyThemeVars(from, to, progress) {
  const root = document.documentElement;
  const eased = easeInOut(progress);
  for (const prop of Object.keys(THEME_VARS.light)) {
    const [fh, fs, fl] = from[prop];
    const [th, ts, tl] = to[prop];
    const h = lerp(fh, th, eased);
    const s = lerp(fs, ts, eased);
    const l = lerp(fl, tl, eased);
    root.style.setProperty(prop, `${Math.round(h)} ${s.toFixed(1)}% ${l.toFixed(1)}%`);
  }
}

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState('light');
  const animFrameRef = useRef(null);
  const phaseIndexRef = useRef(0);

  // Start the transition to the next phase
  const transitionTo = (fromTheme, toTheme, onDone) => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / TRANSITION_MS, 1);
      applyThemeVars(THEME_VARS[fromTheme], THEME_VARS[toTheme], progress);
      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        onDone();
      }
    };
    animFrameRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    // Apply initial day theme immediately
    const root = document.documentElement;
    for (const [prop, [h, s, l]] of Object.entries(THEME_VARS.light)) {
      root.style.setProperty(prop, `${h} ${s}% ${l}%`);
    }

    let holdTimer;

    const nextPhase = () => {
      const currentIdx = phaseIndexRef.current;
      const nextIdx = (currentIdx + 1) % PHASES.length;
      const from = PHASES[currentIdx];
      const to = PHASES[nextIdx];

      transitionTo(from, to, () => {
        phaseIndexRef.current = nextIdx;
        setThemeState(PHASES[nextIdx]);
        holdTimer = setTimeout(nextPhase, HOLD_MS);
      });
    };

    // Hold on day for 30s, then start cycling
    holdTimer = setTimeout(nextPhase, HOLD_MS);

    return () => {
      clearTimeout(holdTimer);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const toggleTheme = () => {
    const currentIdx = phaseIndexRef.current;
    const nextIdx = (currentIdx + 1) % PHASES.length;
    const from = PHASES[currentIdx];
    const to = PHASES[nextIdx];
    transitionTo(from, to, () => {
      phaseIndexRef.current = nextIdx;
      setThemeState(PHASES[nextIdx]);
    });
  };

  const setTheme = (newTheme) => {
    const idx = PHASES.indexOf(newTheme);
    if (idx === -1) return;
    const from = PHASES[phaseIndexRef.current];
    transitionTo(from, newTheme, () => {
      phaseIndexRef.current = idx;
      setThemeState(newTheme);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
