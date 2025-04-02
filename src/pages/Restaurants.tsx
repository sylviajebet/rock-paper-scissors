import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';

const restaurants = [
  {
    id: 1,
    name: "Mama's Kitchen",
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2070',
    rating: 4.8,
    cuisine: 'Local Cuisine',
    deliveryTime: '30-45',
    location: 'Westlands',
  },
  {
    id: 2,
    name: 'Urban Bites',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070',
    rating: 4.5,
    cuisine: 'Fast Food',
    deliveryTime: '20-35',
    location: 'Kilimani',
  },
  {
    id: 3,
    name: 'Healthy Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2070',
    rating: 4.7,
    cuisine: 'Healthy',
    deliveryTime: '25-40',
    location: 'Lavington',
  },
];

const Restaurants = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Restaurants in Nairobi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
              <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {restaurant.rating}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {restaurant.deliveryTime} min
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {restaurant.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;