'use client';

import { useRouter } from 'next/navigation';
import { Button } from './button';
import { ArrowLeft } from 'lucide-react'; 

export default function BackButton() {
  const router = useRouter();

  return (
  <Button variant="outline"
      onClick={() => router.back()} className="bg-gray-600 hover:bg-blue-700 mt-4 text-xs text-white px-2">
      <ArrowLeft className="h-3 w-3 mr-1" />
Volver
</Button>
  );
}