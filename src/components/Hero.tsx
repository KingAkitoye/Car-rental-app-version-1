import { memo } from 'react';
import SearchForm from '@/components/SearchForm';

function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury car background"
          className="w-full h-full object-cover brightness-50"
          loading="eager"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Experience Luxury at Your Fingertips
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Premium vehicles for discerning clients. Drive in style with our curated collection.
          </p>
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default memo(Hero);