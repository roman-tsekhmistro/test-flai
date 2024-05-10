/** @format */

import beautyIcon from '../assets/icons/audience-icons/beauty.svg';
import healthIcon from '../assets/icons/audience-icons/health.svg';
import musicIcon from '../assets/icons/audience-icons/music.svg';
import otherIcon from '../assets/icons/audience-icons/other.svg';
import showIcon from '../assets/icons/audience-icons/show.svg';
import sportIcon from '../assets/icons/audience-icons/sport.svg';
import travelIcon from '../assets/icons/audience-icons/travel.svg';

export const audienceItem = [
  {
    text: 'Beauty',
    completedPercent: 40,
    icon: beautyIcon,
    area: '1 / 1 / 2 / 2',
  },
  {
    text: 'Music',
    completedPercent: 31,
    icon: musicIcon,
    area: '2 / 1 / 3 / 2',
  },
  {
    text: 'Travel',
    completedPercent: 22,
    icon: travelIcon,
    area: ' 3 / 1 / 4 / 2',
  },
  { text: 'Show', completedPercent: 14, icon: showIcon, area: '1 / 2 / 2 / 3' },
  {
    text: 'Sport',
    completedPercent: 12,
    icon: sportIcon,
    area: ' 2 / 2 / 3 / 3',
  },
  {
    text: 'Health',
    completedPercent: 9,
    icon: healthIcon,
    area: '3 / 2 / 4 / 3',
  },
  {
    text: 'Other',
    completedPercent: 6,
    icon: otherIcon,
    area: ' 4 / 2 / 5 / 3',
  },
];
