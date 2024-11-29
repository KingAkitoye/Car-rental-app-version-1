import { memo } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function SearchForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Pick-up Location</label>
          <Input
            type="text"
            placeholder="Enter city or airport"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Pick-up Date</label>
          <Input
            type="date"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Return Date</label>
          <Input
            type="date"
            className="w-full"
          />
        </div>
      </div>
      <Button className="w-full mt-4 text-lg h-12">
        <Search className="mr-2 h-5 w-5" />
        Search Available Vehicles
      </Button>
    </div>
  );
}

export default memo(SearchForm);