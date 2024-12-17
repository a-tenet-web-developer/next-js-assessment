'use client';

import { useState } from 'react';
import { NavSection } from './nav-section';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Home,
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Settings,
  MessageSquare,
  Menu,
} from 'lucide-react';

const navigationItems = [
  { 
    title: 'Home', 
    href: '/', 
    icon: <Home className="h-5 w-5" />,
    subItems: [
      { title: 'Overview', href: '/' },
      { title: 'Analytics', href: '/analytics' },
    ]
  },
  { 
    title: 'Dashboard', 
    href: '/dashboard', 
    icon: <LayoutDashboard className="h-5 w-5" />,
    subItems: [
      { title: 'Main Dashboard', href: '/dashboard' },
      { title: 'Statistics', href: '/dashboard/statistics' },
    ]
  },
  { 
    title: 'Projects', 
    href: '/projects', 
    icon: <FolderKanban className="h-5 w-5" />,
    subItems: [
      { title: 'All Projects', href: '/projects' },
      { title: 'Active', href: '/projects/active' },
      { title: 'Archived', href: '/projects/archived' },
    ]
  },
  { 
    title: 'Tasks', 
    href: '/tasks', 
    icon: <CheckSquare className="h-5 w-5" />,
    subItems: [
      { title: 'All Tasks', href: '/tasks' },
      { title: 'Assigned to me', href: '/tasks/assigned' },
      { title: 'Created by me', href: '/tasks/created' },
    ]
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: <Settings className="h-5 w-5" />,
    subItems: [
      { title: 'My Details', href: '/settings/details' },
      { title: 'My Profile', href: '/settings/profile' },
      { title: 'Security', href: '/settings/security' },
      { title: 'Integrations', href: '/settings/integrations' },
      { title: 'Billing', href: '/settings/billing' },
    ],
  },
  { 
    title: 'Messages', 
    href: '/messages', 
    icon: <MessageSquare className="h-5 w-5" />,
    subItems: [
      { title: 'Inbox', href: '/messages' },
      { title: 'Sent', href: '/messages/sent' },
      { title: 'Archived', href: '/messages/archived' },
    ]
  },
];

export default function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="h-full flex flex-col gap-2 p-4">
      <div className="flex items-center gap-2 px-2 mb-6">
        <div className="h-8 w-8 rounded-lg bg-orange-500" />
        <div className="flex flex-col">
          <h2 className="font-semibold">Overview</h2>
          <div className="flex gap-2 text-sm text-muted-foreground">
            <span>My account</span>
            <span>•</span>
            <span>Shared with me</span>
          </div>
        </div>
      </div>
      <div className="px-2 mb-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="w-full h-9 px-8 rounded-md bg-secondary text-sm"
          />
          <svg
            className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
      <nav className="space-y-1">
        {navigationItems.map((item) => (
          <NavSection
            key={item.href}
            title={item.title}
            href={item.href}
            icon={item.icon}
            subItems={item.subItems}
          />
        ))}
      </nav>
    </div>
  );

  return (
    <>
      <aside className="hidden md:flex w-64 border-r bg-background">
        <SidebarContent />
      </aside>

      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="ml-2">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
}