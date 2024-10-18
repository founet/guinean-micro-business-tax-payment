"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

export default function RoleSelectionPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold text-center">Select Your Role</h1>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Company</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Access your company dashboard and manage tax payments.</p>
              <Button asChild className="w-full">
                <Link href="/dashboard">Continue as Company</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tax Agent</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Validate payments and manage transactions.</p>
              <Button asChild className="w-full">
                <Link href="/agent">Continue as Tax Agent</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}