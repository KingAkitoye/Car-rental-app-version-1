export interface Car {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  type: string;
  seats: number;
  transmission: 'Manual' | 'Automatic';
  fuelType: 'Petrol' | 'Diesel' | 'Electric';
  available: boolean;
}

export interface FilterOptions {
  type: string;
  transmission: string;
  fuelType: string;
  minPrice: number;
  maxPrice: number;
}