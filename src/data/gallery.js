// Real photos, imported so Astro optimizes/resizes them at build time
// (see ResponsiveImage.astro). Add new files to src/assets/images/... and
// import them here — nothing else needs to change.
import couple01 from '../assets/images/portraits/couple-01.jpg';
import couple02 from '../assets/images/portraits/couple-02.jpg';
import couple03 from '../assets/images/portraits/couple-03.jpg';
import moment01 from '../assets/images/moments/moment-01.jpg';
import moment02 from '../assets/images/moments/moment-02.jpg';
import moment03 from '../assets/images/moments/moment-03.jpg';
import trevorHeadshot from '../assets/images/about/trevor-headshot.jpg';

// PLACEHOLDER IMAGES — only used where real photos don't exist yet
// (currently: senior portraits). Once real session photos are ready,
// import and add them the same way as the couples photos above, and
// this placeholder() helper can be dropped entirely.
function placeholder(seed, width = 1200, height = 1500) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}?grayscale`;
}

// Interleaves two arrays so a combined gallery reads as one body of work
// rather than two blocks. Handles unequal lengths (e.g. an empty array)
// gracefully — it just falls back to the non-empty one, in order.
function interleave(a, b) {
  const result = [];
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (a[i]) result.push(a[i]);
    if (b[i]) result.push(b[i]);
  }
  return result;
}

// ---- Portraits (senior + couples sessions) ----

export const couples = [
  { src: couple01, alt: 'Couple laughing together at an indoor gathering, candid black and white portrait' },
  { src: couple02, alt: 'Established couple embracing and smiling, black and white portrait' },
  { src: couple03, alt: 'Couple walking arm in arm through a garden pathway, laughing' },
];

// No real senior portraits yet — add them here the same way as `couples`
// above once session photos are ready.
export const seniors = [];

// Single combined Portraits gallery.
export const portraits = interleave(seniors, couples);

// Portraits cover — reuses the couple-embracing shot from the gallery.
export const portraitsCover = {
  src: couple02,
  alt: 'Established couple embracing and smiling, black and white portrait',
};

// ---- Moments (events — receptions, celebrations, candid coverage) ----

export const moments = [
  { src: moment01, alt: 'Guest laughing at a candlelit dinner table during a celebration' },
  { src: moment02, alt: 'Guests laughing together at a restaurant during an event' },
  { src: moment03, alt: 'Man giving a toast to guests at a celebration dinner' },
];

// Moments cover — reuses the toast shot from the gallery. Already black
// and white, so no CSS desaturation needed (unlike the old stock photo).
export const momentsCover = {
  src: moment03,
  alt: 'Man giving a toast to guests at a celebration dinner',
};

// ---- Homepage ----

// Curated set for the homepage masonry — real photos from both
// categories, since home links to the category chooser rather than one
// specific gallery.
export const home = [
  { ...couples[0], href: '/portfolio/' },
  { ...moments[0], href: '/portfolio/' },
  { ...couples[1], href: '/portfolio/' },
  { ...moments[1], href: '/portfolio/' },
  { ...couples[2], href: '/portfolio/' },
  { ...moments[2], href: '/portfolio/' },
];

export const about = {
  src: trevorHeadshot,
  alt: 'Portrait of Trevor Ludwyck',
};
