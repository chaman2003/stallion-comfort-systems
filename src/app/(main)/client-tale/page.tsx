"use client";

import React from "react";
import Link from "next/link";

const ClientTale = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/heritage" className="hover:text-gold transition-colors">
            Heritage
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Client Tale</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Client Tales</h1>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-700 mb-8">
            Our journey is defined by the relationships we build with our clients. 
            Discover how our furniture has transformed spaces and experiences across the world.
          </p>
        </div>
      </div>

      {/* Featured Testimonial */}
      <div className="container mx-auto px-4 mb-20">
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://placehold.co/800x600/001F3F/FFFFFF.png?text=Luxury+Penthouse" 
                alt="Luxury Penthouse with Stallion Furniture" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <div className="text-5xl text-gold mb-4">&ldquo;</div>
              <p className="text-xl text-gray-700 italic mb-6">
                The craftsmanship of Stallion&apos;s stainless steel furniture completely transformed our hotel lobby.
                Five years later, it still looks as pristine as the day it was installed, despite the high traffic
                and continuous use. The investment has more than paid for itself.
              </p>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/150x150/001F3F/FFFFFF.png?text=James"
                  alt="James Wilson"
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-medium">James Wilson</p>
                  <p className="text-gray-500">Design Director, Grand Plaza Hotels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Stories Grid */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-serif mb-12">Client Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {/* Story 1 */}
          <div className="flex flex-col">
            <img 
              src="https://placehold.co/800x500/001F3F/FFFFFF.png?text=Restaurant+Interior" 
              alt="Modern Restaurant Interior" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-medium mb-3">Refined Dining Experience</h3>
            <p className="text-gray-600 mb-4">
              When designing our Michelin-starred restaurant, we needed furniture that was both luxurious and durable.
              Stallion&apos;s custom stainless steel dining collection has withstood years of daily use while maintaining its elegance.
            </p>
            <div className="mt-auto">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/150x150/001F3F/FFFFFF.png?text=Lisa"
                  alt="Lisa Chen"
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-medium">Lisa Chen</p>
                  <p className="text-sm text-gray-500">Owner, Azure Restaurant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story 2 */}
          <div className="flex flex-col">
            <img 
              src="https://placehold.co/800x500/001F3F/FFFFFF.png?text=Luxury+Home" 
              alt="Luxury Home Interior" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-medium mb-3">Timeless Home Design</h3>
            <p className="text-gray-600 mb-4">
              We wanted our home to reflect both contemporary design and timeless quality.
              Stallion&apos;s custom living room collection has become the centerpiece of our space,
              drawing compliments from everyone who visits.
            </p>
            <div className="mt-auto">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/150x150/001F3F/FFFFFF.png?text=Robert"
                  alt="Robert Johnson"
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-medium">Robert & Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Homeowners, New York</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story 3 */}
          <div className="flex flex-col">
            <img 
              src="https://placehold.co/800x500/001F3F/FFFFFF.png?text=Office+Space" 
              alt="Designer Office Space" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-medium mb-3">Innovative Workspace</h3>
            <p className="text-gray-600 mb-4">
              For our tech startup&apos;s headquarters, we needed furniture that embodied innovation.
              Stallion&apos;s modular office system allowed us to create a flexible environment that
              has evolved with our growing team over the years.
            </p>
            <div className="mt-auto">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/150x150/001F3F/FFFFFF.png?text=Maya"
                  alt="Maya Patel"
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-medium">Maya Patel</p>
                  <p className="text-sm text-gray-500">CEO, TechNova</p>
                </div>
              </div>
            </div>
          </div>

          {/* Story 4 */}
          <div className="flex flex-col">
            <img 
              src="https://placehold.co/800x500/001F3F/FFFFFF.png?text=Hotel+Suite" 
              alt="Luxury Hotel Suite" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-medium mb-3">Elevated Hospitality</h3>
            <p className="text-gray-600 mb-4">
              When renovating our luxury boutique hotel, we chose Stallion for all 50 suites.
              The durability of the stainless steel pieces has significantly reduced our maintenance costs
              while providing our guests with an exceptional experience.
            </p>
            <div className="mt-auto">
              <div className="flex items-center">
                <img
                  src="https://placehold.co/150x150/001F3F/FFFFFF.png?text=Carlos"
                  alt="Carlos Rodriguez"
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                />
                <div>
                  <p className="font-medium">Carlos Rodriguez</p>
                  <p className="text-sm text-gray-500">Managing Director, Elysian Hotels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-serif mb-8">Client Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl text-gold mb-4">&ldquo;</div>
            <p className="text-gray-700 mb-6">
              The attention to detail in Stallion&apos;s furniture is unmatched. Five years after purchase,
              every piece still looks brand new despite daily use in our busy family home.
            </p>
            <div className="flex items-center">
              <div className="mr-3">
                <p className="font-medium">David Williams</p>
                <p className="text-sm text-gray-500">London, UK</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl text-gold mb-4">&ldquo;</div>
            <p className="text-gray-700 mb-6">
              As an interior designer, I&apos;ve specified Stallion pieces for dozens of high-end projects.
              The quality and craftsmanship have never disappointed, and my clients always rave about their purchases.
            </p>
            <div className="flex items-center">
              <div className="mr-3">
                <p className="font-medium">Emma Thompson</p>
                <p className="text-sm text-gray-500">Principal Designer, ETC Design</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl text-gold mb-4">&ldquo;</div>
            <p className="text-gray-700 mb-6">
              We&apos;ve outfitted three commercial spaces with Stallion furniture over the past decade.
              The durability and timeless design have made it one of our best investments.
            </p>
            <div className="flex items-center">
              <div className="mr-3">
                <p className="font-medium">Michael Zhang</p>
                <p className="text-sm text-gray-500">Property Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4">
        <div className="bg-[#001F3F] text-white rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-4">Share Your Story</h2>
            <p className="text-xl mb-8">
              We&apos;d love to hear how Stallion furniture has transformed your space.
              Submit your testimonial and photos for a chance to be featured.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-gold text-[#001F3F] font-medium rounded-md hover:bg-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTale; 