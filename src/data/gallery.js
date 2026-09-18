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

export const seniors = Array.from({ length: 8 }, (_, i) => {
  const [w, h] = ratioFor(i);
  return { src: placeholder(`tlp-sr-${i + 1}`, w, h), alt: `Placeholder — senior portrait ${i + 1}` };
});

export const couples = Array.from({ length: 8 }, (_, i) => {
  const [w, h] = ratioFor(i + 2); // offset so interleaved rhythm doesn't repeat seniors' pattern
  return { src: placeholder(`tlp-cp-${i + 1}`, w, h), alt: `Placeholder — couples portrait ${i + 1}` };
});

export const about = {
  src: placeholder('tlp-about', 1400, 1750),
  alt: 'Placeholder — portrait of Trevor Ludwyck',
};

// Single combined Work gallery — interleaved so the page reads as one body
// of portrait work rather than two categorized sets.
export const portfolio = seniors.flatMap((image, i) => [image, couples[i]]).filter(Boolean);

// Small curated set for the homepage masonry — distinct seeds from the
// Work gallery so returning from home to /work/ doesn't repeat images.
export const home = Array.from({ length: 7 }, (_, i) => {
  const [w, h] = ratioFor(i + 1);
  return { src: placeholder(`tlp-home-${i + 1}`, w, h), alt: `Placeholder — portrait ${i + 1}`, href: '/work/' };
});
