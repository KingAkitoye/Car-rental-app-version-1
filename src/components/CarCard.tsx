import { memo } from 'react';
import { Car } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Fuel, GaugeCircle } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onRent: (car: Car) => void;
}

function CarCard({ car, onRent }: CarCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <img
        src={car.image}
        alt={car.name}
        className="h-48 w-full object-cover"
        loading="lazy"
      />
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{car.name}</h3>
          <span className="text-2xl font-bold">${car.price}/day</span>
        </div>
        <p className="text-muted-foreground mb-4">{car.brand}</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="h-4 w-4" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <GaugeCircle className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-secondary">
        <Button 
          className="w-full" 
          onClick={() => onRent(car)}
          disabled={!car.available}
        >
          {car.available ? 'Rent Now' : 'Not Available'}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default memo(CarCard);