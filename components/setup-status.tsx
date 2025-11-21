'use client';

import { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, Settings } from 'lucide-react';
import Card from './card';
import { Button } from './button';
import Link from 'next/link';

interface SetupStatusProps {
  className?: string;
  showInline?: boolean;
}

export function SetupStatus({ className = '', showInline = false }: SetupStatusProps) {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if setup is complete
    const setupComplete = localStorage.getItem('farmSetupComplete') === 'true';
    setIsSetupComplete(setupComplete);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  if (isSetupComplete) {
    // Show success indicator if setup is complete
    if (showInline) {
      return (
        <div className={`flex items-center gap-2 text-sm ${className}`}>
          <div className="flex items-center gap-1.5 text-[#1F8A34]">
            <CheckCircle2 className="w-4 h-4" />
            <span className="font-medium">Setup Complete</span>
          </div>
        </div>
      );
    }
    return null;
  }

  // Show warning/alert if setup is not complete
  if (showInline) {
    return (
      <div className={`flex items-center gap-2 text-sm ${className}`}>
        <div className="flex items-center gap-1.5 text-amber-600">
          <AlertCircle className="w-4 h-4" />
          <span className="font-medium">Setup Incomplete</span>
        </div>
      </div>
    );
  }

  return (
    <Card.Card className={`border-amber-400 bg-amber-50 ${className}`}>
      <Card.CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5 text-amber-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-amber-900 mb-1">Complete Your Farm Setup</h3>
            <p className="text-sm text-amber-800 mb-3">
              You haven't completed your farm setup yet. Complete the setup wizard to unlock all features and get the most out of ARMS.
            </p>
            <Link href="/setup">
              <Button
                size="sm"
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                <Settings className="w-4 h-4 mr-2" />
                Complete Setup Now
              </Button>
            </Link>
          </div>
        </div>
      </Card.CardContent>
    </Card.Card>
  );
}

export function useSetupStatus() {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setupComplete = localStorage.getItem('farmSetupComplete') === 'true';
    setIsSetupComplete(setupComplete);
    setIsLoading(false);
  }, []);

  return { isSetupComplete, isLoading };
}
