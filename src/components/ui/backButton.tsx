'use client';

import { useRouter } from 'next/navigation';
import { Button } from './button';
import { ArrowLeft } from 'lucide-react'; 

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      onClick={() => router.back()}
      className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white py-1 px-2 rounded-full text-sm mt-4"
    >
      <ArrowLeft className="h-4 w-4" />
      Volver
    </Button>
  );
}