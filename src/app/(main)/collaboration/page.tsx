"use client";

import React from "react";
import Link from "next/link";

const Collaboration = () => {
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
          <span className="text-gray-800">Collaborations</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Collaborations</h1>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-700 mb-8">
            Through strategic partnerships and innovative collaborations, we have expanded the possibilities
            of stainless steel furniture design, creating unique solutions that blend artistry with functionality.
          </p>
        </div>
      </div>

      {/* Featured Collaboration */}
      <div className="container mx-auto px-4 mb-20">
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://placehold.co/800x600/001F3F/FFFFFF.png?text=Design+Collaboration" 
                alt="Design Collaboration" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-medium mb-4">Design Institute Partnership</h3>
              <p className="text-gray-700 mb-4">
                Our ongoing collaboration with the International Design Institute has led to groundbreaking
                innovations in sustainable furniture design, combining their expertise in material science
                with our mastery of stainless steel craftsmanship.
              </p>
              <p className="text-gray-700">
                Together, we have developed new manufacturing techniques that reduce environmental impact
                while enhancing the durability and aesthetic appeal of our furniture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Categories */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-serif mb-12">Strategic Partnerships</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-6">🎨</div>
            <h3 className="text-xl font-medium mb-4">Design Studios</h3>
            <p className="text-gray-600">
              Collaborating with renowned design studios to create exclusive furniture collections
              that push the boundaries of contemporary design.
            </p>
          </div>

          {/* Category 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-6">🏭</div>
            <h3 className="text-xl font-medium mb-4">Manufacturing Partners</h3>
            <p className="text-gray-600">
              Working with specialized manufacturers to implement innovative production techniques
              and maintain the highest quality standards.
            </p>
          </div>

          {/* Category 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-6">🌱</div>
            <h3 className="text-xl font-medium mb-4">Sustainability Initiatives</h3>
            <p className="text-gray-600">
              Partnering with environmental organizations to develop eco-friendly production methods
              and sustainable material sourcing practices.
            </p>
          </div>
        </div>
      </div>

      {/* Collaborative Projects */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-serif mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://placehold.co/800x400/001F3F/FFFFFF.png?text=Project+1" 
              alt="Eco-Friendly Collection" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-medium mb-3">Eco-Friendly Collection</h3>
              <p className="text-gray-600 mb-4">
                A revolutionary furniture line developed in partnership with environmental scientists,
                featuring 100% recyclable materials and zero-waste manufacturing processes.
              </p>
              <div className="text-sm text-gray-500">Launched 2023</div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://placehold.co/800x400/001F3F/FFFFFF.png?text=Project+2" 
              alt="Smart Furniture Initiative" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-medium mb-3">Smart Furniture Initiative</h3>
              <p className="text-gray-600 mb-4">
                Collaboration with tech industry leaders to integrate smart technology into our
                stainless steel furniture, creating innovative solutions for modern living.
              </p>
              <div className="text-sm text-gray-500">Ongoing Project</div>
            </div>
          </div>
        </div>
      </div>

      {/* Research & Development */}
      <div className="container mx-auto px-4 mb-20">
        <div className="bg-[#001F3F] text-white rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-serif mb-8">Research & Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Material Innovation</h3>
              <p className="text-gray-200 mb-6">
                Our collaboration with metallurgical experts has led to the development of new
                stainless steel alloys specifically designed for furniture manufacturing.
              </p>
              <ul className="space-y-3 text-gray-200">
                <li>• Enhanced durability and corrosion resistance</li>
                <li>• Improved aesthetic properties</li>
                <li>• Reduced environmental impact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Design Innovation</h3>
              <p className="text-gray-200 mb-6">
                Partnerships with leading design institutions have enabled us to explore new
                possibilities in furniture design and manufacturing techniques.
              </p>
              <ul className="space-y-3 text-gray-200">
                <li>• Advanced 3D modeling and prototyping</li>
                <li>• Ergonomic research and implementation</li>
                <li>• Customization capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Future Collaborations */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8">Future Initiatives</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 mb-8">
              We are constantly seeking new partnerships and collaborative opportunities to push
              the boundaries of furniture design and sustainable manufacturing.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-gold text-[#001F3F] font-medium rounded-md hover:bg-white transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;