'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface NavItemProps {
  title: string;
  href: string;
  icon: ReactNode;
  isSubmenu?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  isActive?: boolean;
  depth?: number;
}

export function NavItem({
  title,
  href,
  icon,
  isSubmenu = false,
  isExpanded,
  onToggle,
  isActive,
  depth = 0,
}: NavItemProps) {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;

  const baseClasses = cn(
    'w-full flex items-center text-sm h-9 px-3 rounded-md transition-colors',
    depth > 0 && 'pl-9',
    isCurrentPath
      ? 'bg-secondary text-foreground'
      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
  );

  if (isSubmenu) {
    return (
      <button
        className={cn(baseClasses, 'justify-between')}
        onClick={onToggle}
      >
        <span className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </span>
        <ChevronDown
          className={cn('h-4 w-4 transition-transform', isExpanded && 'rotate-180')}
        />
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={baseClasses}
    >
      {icon}
      <span className="ml-2">{title}</span>
    </Link>
  );
}