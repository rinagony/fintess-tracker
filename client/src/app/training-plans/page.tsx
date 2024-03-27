'use client'
import { useEffect } from 'react';
import { redirect, usePathname } from 'next/navigation';

const TrainingPlansPage = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/training-plans') {
      redirect('/training-plans/available');
    }
  }, [pathname]); 

  return null;
};

export default TrainingPlansPage;