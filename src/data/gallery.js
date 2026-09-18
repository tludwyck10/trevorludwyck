// PLACEHOLDER IMAGES
// Each entry's `src` points to a picsum.photos placeholder. To drop in real
// photography later, replace `src` with a local path (e.g. "/images/portraits/01.jpg")
// placed in /public/images/ — the gallery/hero components don't need to change.
// `alt` text is a placeholder too; write real descriptive alt text per image
// when actual photos are added.

function placeholder(seed, width = 1200, height = 1500) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}?grayscale`;
}

export const hero = {
  src: placeholder('tlp-hero', 2400, 1600),
  alt: 'Placeholder — portrait hero image',
};

export const featured = [
  { src: placeholder('tlp-feat-1', 1200, 1500), alt: 'Placeholder — portrait, natural light', href: '/work/' },
  { src: placeholder('tlp-feat-2', 1200, 1500), alt: 'Placeholder — portrait, golden hour', href: '/work/' },
  { src: placeholder('tlp-feat-3', 1200, 1500), alt: 'Placeholder — portrait, studio light', href: '/work/' },
  { src: placeholder('tlp-feat-4', 1200, 1500), alt: 'Placeholder — portrait, natural light', href: '/work/' },
];

export const seniors = [
  { src: placeholder('tlp-sr-1', 1400, 1750), alt: 'Placeholder — senior portrait 1' },
  { src: placeholder('tlp-sr-2', 1400, 1750), alt: 'Placeholder — senior portrait 2' },
  { src: placeholder('tlp-sr-3', 1400, 1750), alt: 'Placeholder — senior portrait 3' },
  { src: placeholder('tlp-sr-4', 1400, 1750), alt: 'Placeholder — senior portrait 4' },
  { src: placeholder('tlp-sr-5', 1400, 1750), alt: 'Placeholder — senior portrait 5' },
  { src: placeholder('tlp-sr-6', 1400, 1750), alt: 'Placeholder — senior portrait 6' },
  { src: placeholder('tlp-sr-7', 1400, 1750), alt: 'Placeholder — senior portrait 7' },
  { src: placeholder('tlp-sr-8', 1400, 1750), alt: 'Placeholder — senior portrait 8' },
];

export const couples = [
  { src: placeholder('tlp-cp-1', 1400, 1750), alt: 'Placeholder — couples portrait 1' },
  { src: placeholder('tlp-cp-2', 1400, 1750), alt: 'Placeholder — couples portrait 2' },
  { src: placeholder('tlp-cp-3', 1400, 1750), alt: 'Placeholder — couples portrait 3' },
  { src: placeholder('tlp-cp-4', 1400, 1750), alt: 'Placeholder — couples portrait 4' },
  { src: placeholder('tlp-cp-5', 1400, 1750), alt: 'Placeholder — couples portrait 5' },
  { src: placeholder('tlp-cp-6', 1400, 1750), alt: 'Placeholder — couples portrait 6' },
  { src: placeholder('tlp-cp-7', 1400, 1750), alt: 'Placeholder — couples portrait 7' },
  { src: placeholder('tlp-cp-8', 1400, 1750), alt: 'Placeholder — couples portrait 8' },
];

export const about = {
  src: placeholder('tlp-about', 1400, 1750),
  alt: 'Placeholder — portrait of Trevor Ludwyck',
};

// Single combined Work gallery — interleaved so the page reads as one body
// of portrait work rather than two categorized sets.
export const portfolio = seniors.flatMap((image, i) => [image, couples[i]]).filter(Boolean);
