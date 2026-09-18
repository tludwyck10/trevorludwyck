// PLACEHOLDER IMAGES
// Each entry's `src` points to a picsum.photos placeholder. To drop in real
// photography later, replace `src` with a local path (e.g. "/images/portraits/01.jpg")
// placed in /public/images/ — the gallery/hero components don't need to change.
// `alt` text is a placeholder too; write real descriptive alt text per image
// when actual photos are added.

function placeholder(seed, width = 1200, height = 1500) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}?grayscale`;
}

// Varied aspect ratios so the masonry gallery reads as an editorial mosaic
// rather than a uniform grid of identical crops. Cycled by index below.
const RATIOS = [
  [1400, 1750], // 4:5 portrait
  [1500, 1500], // square
  [1350, 1800], // 3:4 portrait
  [1650, 1100], // 3:2 landscape
  [1200, 1800], // 2:3 tall portrait
];

function ratioFor(index) {
  return RATIOS[index % RATIOS.length];
}

// ---- Portraits (senior + couples sessions) ----

export const seniors = Array.from({ length: 8 }, (_, i) => {
  const [w, h] = ratioFor(i);
  return { src: placeholder(`tlp-sr-${i + 1}`, w, h), alt: `Placeholder — senior portrait ${i + 1}` };
});

export const couples = Array.from({ length: 8 }, (_, i) => {
  const [w, h] = ratioFor(i + 2); // offset so interleaved rhythm doesn't repeat seniors' pattern
  return { src: placeholder(`tlp-cp-${i + 1}`, w, h), alt: `Placeholder — couples portrait ${i + 1}` };
});

// Single combined Portraits gallery — interleaved so the page reads as one
// body of work rather than two categorized sets.
export const portraits = seniors.flatMap((image, i) => [image, couples[i]]).filter(Boolean);

// Portraits cover — a studio portrait (black and white, free Unsplash
// License, photo by Nik Bagherzadegan: unsplash.com/photos/09O1mBwgSJU).
// Replace with a real session photo when one's ready; no other change
// needed since ResponsiveImage already builds a srcset for this host.
export const portraitsCover = {
  src: 'https://images.unsplash.com/photo-1782144893518-a3b15d098e34?auto=format&fit=crop&q=80&w=2400',
  alt: 'Placeholder — studio portrait, seated, dramatic low-key lighting',
};

// ---- Moments (events — receptions, celebrations, candid coverage) ----

export const moments = Array.from({ length: 10 }, (_, i) => {
  const [w, h] = ratioFor(i + 3);
  return { src: placeholder(`tlp-mo-${i + 1}`, w, h), alt: `Placeholder — event moment ${i + 1}` };
});

// Moments cover — a candid celebration/toast (free Unsplash License, photo
// by Frankie Cordoba: unsplash.com/photos/Y8gXPB8Mq98). Shot in color, so
// it's desaturated with CSS (see CategoryCover's grayscaleImage prop) to
// stay on-palette. Replace with a real event photo when one's ready.
export const momentsCover = {
  src: 'https://images.unsplash.com/photo-1696627958251-775068a8ddbc?auto=format&fit=crop&q=80&w=2400',
  alt: 'Placeholder — candid toast at a celebration dinner',
};

// ---- Homepage ----

// Small curated set for the homepage masonry — distinct seeds from the
// Portraits gallery so returning from home doesn't repeat images. Mixes in
// a couple of Moments-style shots too, since home links to the category
// chooser rather than one specific gallery.
export const home = Array.from({ length: 7 }, (_, i) => {
  const [w, h] = ratioFor(i + 1);
  return { src: placeholder(`tlp-home-${i + 1}`, w, h), alt: `Placeholder — portrait ${i + 1}`, href: '/portfolio/' };
});

export const about = {
  src: placeholder('tlp-about', 1400, 1750),
  alt: 'Placeholder — portrait of Trevor Ludwyck',
};
