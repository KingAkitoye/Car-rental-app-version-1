import { Shield, Clock, Banknote, HeartHandshake } from 'lucide-react';
import { memo } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Premium Service',
    description: 'Meticulously maintained luxury vehicles with professional chauffeur options',
  },
  {
    icon: Clock,
    title: 'Concierge Support',
    description: 'Dedicated 24/7 personal concierge for seamless service',
  },
  {
    icon: Banknote,
    title: 'Transparent Pricing',
    description: 'All-inclusive rates with no hidden fees or surprises',
  },
  {
    icon: HeartHandshake,
    title: 'Flexible Terms',
    description: 'Customizable rental periods and personalized arrangements',
  },
];

function Features() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Private Car Rentals Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Features);