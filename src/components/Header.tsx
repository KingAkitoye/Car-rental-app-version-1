import { Car, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">Private Car Rentals</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Fleet
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Locations
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button>Book Now</Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-secondary"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-secondary"
            >
              Fleet
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-secondary"
            >
              Locations
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-secondary"
            >
              About
            </a>
            <Button className="w-full">Book Now</Button>
          </nav>
        </div>
      )}
    </header>
  );
}