export function clamp(value: number, min = 0, max = 1): number {
  return Math.min(Math.max(value, min), max);
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

export function lerpColor(
  fromRgb: [number, number, number],
  toRgb: [number, number, number],
  t: number
): string {
  const clamped = clamp(t, 0, 1);
  const r = Math.round(lerp(fromRgb[0], toRgb[0], clamped));
  const g = Math.round(lerp(fromRgb[1], toRgb[1], clamped));
  const b = Math.round(lerp(fromRgb[2], toRgb[2], clamped));
  return `rgb(${r}, ${g}, ${b})`;
}

export interface HeroScrollVisualState {
  /** Normalised scroll progress across the hero runway [0..1] */
  scrollProgress: number;
  /** Door closing progress [0..1]: 0 = fully open, 1 = fully closed */
  doorCloseProgress: number;
  /**
   * Background mix [0..1] between the active theme's hero start and end colours
   * (light theme: #FAFAFA -> #111111). Resolved in CSS via `.hero-stage`.
   */
  backgroundMix: number;
  /**
   * Foreground mix [0..1] for text, metadata, borders and binary digits.
   * Flips briskly around the luminance crossover to avoid grey-on-grey.
   */
  foregroundMix: number;
  /** Whether hero is currently in dark-dominant state (used for header contrast in light theme) */
  isDarkHero: boolean;
}

/**
 * Computes deterministic 2D door & hero surface states from scroll progress [0..1].
 * Stages per brief:
 * - 0%:   Door fully open, Background #FAFAFA
 * - 25%:  Door begins/actively closing, Background starts darkening
 * - 50%:  Door ~halfway closed, Background noticeably darker
 * - 75%:  Door nearly closed, Background significantly darker
 * - 100%: Door fully closed, Hero reaches dark final state (#111111)
 */
export function computeHeroScrollState(rawProgress: number): HeroScrollVisualState {
  // Normalize progress so the door and dark transition fully complete slightly
  // before the sticky scroll ends, preventing sudden unpinning before 100% closed
  const p = clamp(rawProgress / 0.9, 0, 1);

  // Smooth cubic curve anchored at 0 -> 0, 0.5 -> 0.5, 1 -> 1
  const smooth = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;

  // Background begins subtly and deepens steadily to the dark end state
  const bgT = clamp((p - 0.04) / 0.96, 0, 1);
  const bgEased = bgT < 0.5 ? 2 * bgT * bgT : 1 - Math.pow(-2 * bgT + 2, 2) / 2;

  // Foreground flips briskly around the luminance crossover (0.36..0.56) to avoid low-contrast grey-on-grey
  const fgT = clamp((bgEased - 0.36) / 0.2, 0, 1);

  return {
    scrollProgress: p,
    doorCloseProgress: smooth,
    backgroundMix: bgEased,
    foregroundMix: fgT,
    isDarkHero: bgEased > 0.46,
  };
}
