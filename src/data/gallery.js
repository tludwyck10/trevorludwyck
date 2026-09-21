// Real photos, imported so Astro optimizes/resizes them at build time
// (see ResponsiveImage.astro). Add new files to src/assets/images/... and
// import them here — nothing else needs to change.
import couple01 from '../assets/images/portraits/couple-01.jpg';
import couple01Color from '../assets/images/portraits/couple-01-color.jpg';
import couple02 from '../assets/images/portraits/couple-02.jpg';
import couple02Color from '../assets/images/portraits/couple-02-color.jpg';
import couple03 from '../assets/images/portraits/couple-03.jpg';
import couple03Color from '../assets/images/portraits/couple-03-color.jpg';
import moment01 from '../assets/images/moments/moment-01.jpg';
import moment01Color from '../assets/images/moments/moment-01-color.jpg';
import moment02 from '../assets/images/moments/moment-02.jpg';
import moment02Color from '../assets/images/moments/moment-02-color.jpg';
import moment03 from '../assets/images/moments/moment-03.jpg';
import moment03Color from '../assets/images/moments/moment-03-color.jpg';
import outdoor01 from '../assets/images/outdoors/outdoor-01.jpg';
import outdoor01Color from '../assets/images/outdoors/outdoor-01-color.jpg';
import outdoor02 from '../assets/images/outdoors/outdoor-02.jpg';
import outdoor02Color from '../assets/images/outdoors/outdoor-02-color.jpg';
import outdoor03 from '../assets/images/outdoors/outdoor-03.jpg';
import outdoor03Color from '../assets/images/outdoors/outdoor-03-color.jpg';
import outdoor04 from '../assets/images/outdoors/outdoor-04.jpg';
import outdoor04Color from '../assets/images/outdoors/outdoor-04-color.jpg';
import outdoor05 from '../assets/images/outdoors/outdoor-05.jpg';
import outdoor05Color from '../assets/images/outdoors/outdoor-05-color.jpg';
import trevorHeadshot from '../assets/images/about/trevor-headshot.webp';

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
  { src: couple01, srcColor: couple01Color, alt: 'Couple laughing together at an indoor gathering, candid black and white portrait' },
  { src: couple02, srcColor: couple02Color, alt: 'Established couple embracing and smiling, black and white portrait' },
  { src: couple03, srcColor: couple03Color, alt: 'Couple walking arm in arm through a garden pathway, laughing' },
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
  { src: moment01, srcColor: moment01Color, alt: 'Guest laughing at a candlelit dinner table during a celebration' },
  { src: moment02, srcColor: moment02Color, alt: 'Guests laughing together at a restaurant during an event' },
  { src: moment03, srcColor: moment03Color, alt: 'Man giving a toast to guests at a celebration dinner' },
];

// Moments cover — reuses the toast shot from the gallery. Already black
// and white, so no CSS desaturation needed (unlike the old stock photo).
export const momentsCover = {
  src: moment03,
  alt: 'Man giving a toast to guests at a celebration dinner',
};

// ---- Outdoors (outdoor lifestyle photography) ----

export const outdoors = [
  { src: outdoor01, srcColor: outdoor01Color, alt: 'Close-up portrait lit by a headlamp, outdoors at night' },
  { src: outdoor02, srcColor: outdoor02Color, alt: 'Black retriever leaping from the water with a mallard duck, decoys scattered around' },
  { src: outdoor03, srcColor: outdoor03Color, alt: "Extreme close-up of a black dog's amber eye" },
  { src: outdoor04, srcColor: outdoor04Color, alt: 'Hunter with a headlamp walking through heavy snowfall at night, decoys in the foreground' },
  { src: outdoor05, srcColor: outdoor05Color, alt: 'Man holding a compound bow, talking with a group at an outdoor archery event' },
];

// Outdoors cover — reuses the headlamp portrait from the gallery.
export const outdoorsCover = {
  src: outdoor01,
  alt: 'Close-up portrait lit by a headlamp, outdoors at night',
};

// ---- Homepage ----

// Curated set for the homepage masonry — real photos from both
// categories, since home links to the category chooser rather than one
// specific gallery.
export const home = [
  { ...outdoors[0], href: '/portfolio/' },
  { ...couples[1], href: '/portfolio/' },
  { ...moments[1], href: '/portfolio/' },
  { ...couples[2], href: '/portfolio/' },
  { ...moments[2], href: '/portfolio/' },
];

export const about = {
  src: trevorHeadshot,
  alt: 'Portrait of Trevor Ludwyck',
};

// ---- My Three Pillars (About page) ----
// Stock placeholders for now (free Unsplash License) — swap each `src`
// for a real photo whenever one's ready, same as everywhere else.
export const pillars = {
  light: {
    src: 'https://images.unsplash.com/photo-1516575355332-d2934104e253?auto=format&fit=crop&q=80&w=1600',
    alt: 'Placeholder — a single lit window in an otherwise dark room',
  },
  contrast: {
    src: 'https://images.unsplash.com/photo-1515138692129-197a2c608cfd?auto=format&fit=crop&q=80&w=1600',
    alt: 'Placeholder — rim-lit profile portrait against a black background',
    grayscale: true,
  },
  simplicity: {
    src: 'https://images.unsplash.com/photo-1512514076443-1eef59c260b0?auto=format&fit=crop&q=80&w=1600',
    alt: 'Placeholder — two birds on a wire against an empty sky',
  },
};
