import { NavLink } from 'react-router';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface Props {
  to: string;
  children: string;
  Icon: LucideIcon;

  onNavigation?: () => void;
}

export const NavItem = ({ to, Icon, children, onNavigation }: Props) => {
  return (
    <NavLink
      to={to}
      end
      onClick={onNavigation}
      className={({ isActive }) =>
        cn(
          'flex items-center px-3 py-2 text-sm rounded-md transition-colors text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-muted',
          isActive ? 'bg-muted text-neutral-900 dark:text-white' : '',
        )
      }
    >
      <Icon className="size-4 mr-3 shrink-0" />
      {children}
    </NavLink>
  );
};
