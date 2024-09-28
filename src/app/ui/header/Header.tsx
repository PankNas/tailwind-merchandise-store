import { activities, menu } from './constants';
import Link from 'next/link';
import Image from 'next/image';
import { logoIcon } from '@/assets/images';

export const Header = () => {
  return (
    <nav className="sticky flex py-7 top-0 items-center justify-between gap-8">
      <ul className="flex gap-6 text-white xl:max-w-[424px] text-sm">
        {menu.map((item) => {
          return (
            <li key={item.name}>
              <Link
                href={item.url}
                className="hover:text-white/70">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="/">
        <Image
          src={logoIcon}
          alt="Логотип"
        />
      </Link>
      <ul className="flex gap-5 xl:w-[424px] justify-end">
        {activities.map((item) => {
          return (
            <li key={item.name}>
              <Link href={item.url}>
                <Image
                  src={item.icon}
                  alt={item.name}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
