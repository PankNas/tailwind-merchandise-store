import {
  accessoriesLink,
  bagsLink,
  clothesLink,
  shoesLink,
  sportLink,
} from '@/constants';
import { bagIcon, heartIcon, searchIcon } from '@/assets/images';

type HeaderLink = {
  name: string;
  url: string;
};

export const menu: HeaderLink[] = [
  {
    name: 'Одежда',
    url: clothesLink,
  },
  {
    name: 'Обувь',
    url: shoesLink,
  },
  {
    name: 'Аксессуары',
    url: accessoriesLink,
  },
  {
    name: 'Сумки',
    url: bagsLink,
  },
  {
    name: 'Товары для спорта',
    url: sportLink,
  },
];

type ActivityHeaderLink = HeaderLink & { icon: string };

export const activities: ActivityHeaderLink[] = [
  {
    name: 'Избранное',
    url: '#',
    icon: heartIcon,
  },
  {
    name: 'Корзина',
    url: '#',
    icon: bagIcon,
  },
  {
    name: 'Поиск',
    url: '#',
    icon: searchIcon,
  },
];
