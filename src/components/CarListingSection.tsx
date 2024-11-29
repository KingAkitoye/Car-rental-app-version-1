import { useState, useCallback, memo } from 'react';
import CarList from '@/components/CarList';
import { Filters } from '@/components/Filters';
import { cars } from '@/data/cars';
import { Car, FilterOptions } from '@/types';
import { Toast } from '@/components/ui/toast';

interface CarListingSectionProps {
  toast: (props: { title: string; description: string }) => void;
}

function CarListingSection({ toast }: CarListingSectionProps) {
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);

  const handleFilterChange = useCallback((filters: FilterOptions) => {
    const filtered = cars.filter((car) => {
      const typeMatch = filters.type === 'all' || car.type === filters.type;
      const transmissionMatch =
        filters.transmission === 'all' || car.transmission === filters.transmission;
      const fuelTypeMatch =
        filters.fuelType === 'all' || car.fuelType === filters.fuelType;
      const priceMatch =
        car.price >= filters.minPrice && car.price <= filters.maxPrice;

      return typeMatch && transmissionMatch && fuelTypeMatch && priceMatch;
    });

    setFilteredCars(filtered);
  }, []);

  const handleRent = useCallback((car: Car) => {
    toast({
      title: 'Booking Confirmed!',
      description: `You have successfully rented the ${car.brand} ${car.name}.`,
    });
  }, [toast]);

  return (
    <main className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Available Vehicles
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Filters onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:col-span-3">
          <CarList cars={filteredCars} onRent={handleRent} />
        </div>
      </div>
    </main>
  );
}

export default memo(CarListingSection);