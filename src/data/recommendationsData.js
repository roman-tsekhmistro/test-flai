/** @format */

export const recommendationsList = [
  { name: '02:15 Recommendations for your song', checkbox: true },
  {
    name: 'Duration for segments of your sound promo',
    checkbox: '',
    child: [
      { name: 'Duration for segments of your sound promo', checkbox: false },
      { name: 'Duration for segments of your sound promo', checkbox: true },
    ],
  },
  { name: 'Release day', checkbox: false, blocked: true },
  { name: 'Promotion', checkbox: true },
  { name: 'Duet', checkbox: false, blocked: true },
  {
    name: 'The best location for the potential of your sound',
    checkbox: false,
    blocked: true,
  },
];
