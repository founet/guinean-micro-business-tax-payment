import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AgentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-card p-4">
        <nav className="space-y-2">
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/agent">Dashboard</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/agent/scanner">QR Scanner</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/agent/transactions">Transactions</Link>
          </Button>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}