import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="Leader Tailors" 
              width={100} 
              height={60}
              className="h-auto w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              HOME
            </Link>
            <Link 
              href="/services" 
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              OUR SERVICES
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              ABOUT US
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors uppercase tracking-wide"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-12">
            <Link 
              href="/cart" 
              className="text-gray-900 hover:text-gray-600 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={24} />
            </Link>
            <Link 
              href="/account" 
              className="text-gray-900 hover:text-gray-600 transition-colors"
              aria-label="User Account"
            >
              <User size={24} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;