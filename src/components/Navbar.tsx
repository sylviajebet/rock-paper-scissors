import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, User } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <UtensilsCrossed className="h-6 w-6 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">NairobiEats</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/restaurants">
              <Button variant="secondary">Restaurants</Button>
            </Link>
            <Link to="/auth">
              <Button>
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;