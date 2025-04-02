import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070"
          alt="Food delivery"
          className="h-[500px] w-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 rounded-lg" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Food Delivery in Nairobi
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8">
            Order from your favorite restaurants
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Enter your location"
                className="pl-10 bg-white/90 text-gray-900 w-full"
              />
            </div>
            <Button size="lg" className="md:w-auto">
              <Search className="mr-2 h-5 w-5" />
              Find Restaurants
            </Button>
          </div>
        </div>
      </div>

      <section className="mt-16 w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Fast Food', 'Local Cuisine', 'Healthy', 'Desserts'].map((category) => (
            <Link
              key={category}
              to="/restaurants"
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;