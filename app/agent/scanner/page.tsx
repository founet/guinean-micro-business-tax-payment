"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function QRScannerPage() {
  const [scannedData, setScannedData] = useState(null);
  const [manualInput, setManualInput] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScannedData(JSON.parse(data));
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    try {
      setScannedData(JSON.parse(manualInput));
    } catch (error) {
      console.error('Invalid JSON input');
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">QR Code Scanner</h1>
      <Card>
        <CardHeader>
          <CardTitle>Scan QR Code</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              {/* QR Scanner component would go here */}
              <p>QR Scanner Placeholder</p>
            </div>
            <Button onClick={() => handleScan('{"amount": 1000, "paymentMethod": "orange_money"}')}>
              Simulate Scan
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Manual Input</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleManualSubmit} className="space-y-4">
            <Input
              value={manualInput}
              onChange={(e) => setManualInput(e.target.value)}
              placeholder='Enter JSON data (e.g., {"amount": 1000, "paymentMethod": "orange_money"})'
            />
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
      {scannedData && (
        <Card>
          <CardHeader>
            <CardTitle>Scanned Data</CardTitle>
          </CardHeader>
          <CardContent>
            <pre>{JSON.stringify(scannedData, null, 2)}</pre>
            <Button className="mt-4">Validate Payment</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}