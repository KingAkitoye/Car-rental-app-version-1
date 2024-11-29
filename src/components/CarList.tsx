import { memo } from 'react';
import { Car } from '@/types';
import CarCard from './CarCard';

interface CarListProps {
  cars: Car[];
  onRent: (car: Car) => void;
}

function CarList({ cars, onRent }: CarListProps) {
  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-muted-foreground">
          No cars found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onRent={onRent} />
      ))}
    </div>
  );
}

export default memo(CarList);