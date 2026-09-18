// PLACEHOLDER IMAGES
// Each entry's `src` points to a picsum.photos placeholder. To drop in real
// photography later, replace `src` with a local path (e.g. "/images/portraits/01.jpg")
// placed in /public/images/ — the gallery/hero components don't need to change.
// `alt` text is a placeholder too; write real descriptive alt text per image
// when actual photos are added.

function placeholder(seed, width = 1200, height = 1500) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}?grayscale`;
}

// Placeholder hero — a studio portrait (black and white, free Unsplash
// License, photo by Nik Bagherzadegan: unsplash.com/photos/09O1mBwgSJU).
// Replace with a real session photo when one's ready; no other change
// needed since ResponsiveImage already builds a srcset for this host.
export const hero = {
  src: 'https://images.unsplash.com/photo-1782144893518-a3b15d098e34?auto=format&fit=crop&q=80&w=2400',
  alt: 'Placeholder — studio portrait, seated, dramatic low-key lighting',
};

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
