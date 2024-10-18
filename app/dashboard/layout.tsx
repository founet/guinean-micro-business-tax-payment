import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-card p-4">
        <nav className="space-y-2">
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/dashboard/payment">Make Payment</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/dashboard/history">Payment History</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/dashboard/profile">Profile</Link>
          </Button>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}