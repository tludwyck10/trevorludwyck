// Single source of truth for real dollar figures — used by the Investment
// page's pricing cards and the Contact page's estimate calculator, so a
// price change only has to happen in one place.

export const pricing = {
  portraits: {
    label: 'Portraits',
    tiers: [
      {
        name: 'Essential',
        price: '$550–750',
        priceMin: 550,
        priceMax: 750,
        features: ['1 location', 'Styled session', 'Online gallery', 'Digital images'],
      },
      {
        name: 'Signature',
        price: '$1,000–1,500',
        priceMin: 1000,
        priceMax: 1500,
        featured: true,
        features: ['2 locations', 'Styled session', 'Online gallery', 'Digital images', 'Premium print product'],
      },
    ],
  },
  moments: {
    label: 'Moments',
    travelFee: 75,
    tiers: [
      {
        name: 'Essential',
        price: '$450–550',
        priceMin: 450,
        priceMax: 550,
        travelRadius: 20,
        features: ['2 hours coverage', 'Travel included (20 mi)', 'Online gallery', 'Digital images'],
      },
      {
        name: 'Signature',
        price: '$850–1,000',
        priceMin: 850,
        priceMax: 1000,
        travelRadius: 30,
        featured: true,
        features: ['4 hours coverage', 'Travel included (30 mi)', 'Online gallery', 'Digital images', 'Premium print product'],
      },
    ],
  },
};
