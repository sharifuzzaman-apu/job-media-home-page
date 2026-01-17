export type Location = {
  id: number;
  name: string;
  image: string;
  slug?: string;
};

export const locations: Location[] = [
  {
    id: 1,
    name: 'New York',
    image: '/jobsByLocation/newyork.jpeg',
    slug: 'new-york',
  },

  {
    id: 2,
    name: 'London',
    image: '/jobsByLocation/london.jpeg',
    slug: 'london',
  },
  {
    id: 3,
    name: 'Dubai',
    image: '/jobsByLocation/newyork.jpeg',
    slug: 'dubai',
  },
  {
    id: 4,
    name: 'Berlin',
    image: '/jobsByLocation/london.jpeg',
    slug: 'berlin',
  },
  {
    id: 5,
    name: 'Toronto',
    image: '/jobsByLocation/newyork.jpeg',
    slug: 'toronto',
  },
  {
    id: 6,
    name: 'Sydney',
    image: '/jobsByLocation/london.jpeg',
    slug: 'sydney',
  },
  {
    id: 7,
    name: 'Singapore',
    image: '/jobsByLocation/newyork.jpeg',
    slug: 'singapore',
  },
  {
    id: 8,
    name: 'Tokyo',
    image: '/jobsByLocation/london.jpeg',
    slug: 'tokyo',
  },
];
