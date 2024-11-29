import { Suspense, lazy } from 'react';
import { Header } from '@/components/Header';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

const Hero = lazy(() => import('@/components/Hero'));
const Features = lazy(() => import('@/components/Features'));
const CarListingSection = lazy(() => import('@/components/CarListingSection'));

export default function App() {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <main>
          <Hero />
          <Features />
          <CarListingSection toast={toast} />
        </main>
      </Suspense>
      <Toaster />
    </div>
  );
}