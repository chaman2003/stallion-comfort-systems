"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="rounded-lg bg-gold/20 p-2">
                <div className="flex items-center">
                  <span className="text-gold font-serif text-2xl">STALLION</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Premium stainless steel furniture crafted with excellence and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/showrooms" className="text-gray-400 hover:text-gold transition-colors">
                  Showrooms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/category/living-room" className="text-gray-400 hover:text-gold transition-colors">
                  Living Room
                </Link>
              </li>
              <li>
                <Link href="/category/dining-room" className="text-gray-400 hover:text-gold transition-colors">
                  Dining Room
                </Link>
              </li>
              <li>
                <Link href="/category/bedroom" className="text-gray-400 hover:text-gold transition-colors">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-400 hover:text-gold transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-gold mt-1 shrink-0" />
                <span className="text-gray-400">+1 (310) 555-0123</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-gold mt-1 shrink-0" />
                <span className="text-gray-400">info@stallion.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold mt-1 shrink-0" />
                <span className="text-gray-400">123 Luxury Lane, Beverly Hills, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Newsletter */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for exclusive updates and offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-gold focus:outline-none"
              />
              <button className="px-6 py-3 bg-gold text-gray-900 font-medium rounded-md hover:bg-gold/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Stallion Comfort Systems. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
