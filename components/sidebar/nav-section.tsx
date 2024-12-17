'use client';

import { ReactNode, useState } from 'react';
import { NavItem } from './nav-item';
import { cn } from '@/lib/utils';

interface SubNavItem {
  title: string;
  href: string;
}

interface NavSectionProps {
  title: string;
  href: string;
  icon: ReactNode;
  subItems?: SubNavItem[];
}

export function NavSection({ title, href, icon, subItems }: NavSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!subItems?.length) {
    return <NavItem title={title} href={href} icon={icon} />;
  }

  return (
    <div>
      <NavItem
        title={title}
        href={href}
        icon={icon}
        isSubmenu
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />
      {isExpanded && (
        <div className={cn('space-y-1 mt-1')}>
          {subItems.map((item) => (
            <NavItem
              key={item.href}
              title={item.title}
              href={item.href}
              icon={<span className="w-5" />}
              depth={1}
            />
          ))}
        </div>
      )}
    </div>
  );
}