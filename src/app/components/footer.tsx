import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="Leader Tailors" 
                width={120} 
                height={80}
                className="bg-white p-2"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Crafting Excellence In Every Stitch
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Since 1985. Your Trusted Partner For Custom Tailoring And Premium Services.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Link 
                href="https://facebook.com" 
                target="_blank"
                className="hover:text-gray-400 transition-colors"
              >
                <Facebook size={24} />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="hover:text-gray-400 transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link 
                href="https://wa.me/94112221254" 
                target="_blank"
                className="hover:text-gray-400 transition-colors"
              >
                <Phone size={24} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/custom-tailoring" className="text-gray-400 hover:text-white transition-colors">
                  Custom Tailoring
                </Link>
              </li>
              <li>
                <Link href="/services/blazer-rentals" className="text-gray-400 hover:text-white transition-colors">
                  Blazer Rentals
                </Link>
              </li>
              <li>
                <Link href="/services/wedding-cars" className="text-gray-400 hover:text-white transition-colors">
                  Wedding Cars
                </Link>
              </li>
              <li>
                <Link href="/services/event-decorations" className="text-gray-400 hover:text-white transition-colors">
                  Event Decorations
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="text-gray-400 hover:text-white transition-colors">
                  Appointments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <span className="text-yellow-500">📍</span>
                <span>No. 12, Moratuwa, Sri Lanka</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <span className="text-yellow-500">📞</span>
                <span>011 2221 254 / 01</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <span className="text-yellow-500">✉️</span>
                <a href="mailto:info.tailor@gmail.com" className="hover:text-white transition-colors">
                  info.tailor@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Leader Tailors. All rights reserved. Designed with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;