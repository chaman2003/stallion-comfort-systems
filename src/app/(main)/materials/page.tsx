"use client";

import React from "react";
import Link from "next/link";

const Materials = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Materials</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Premium Materials</h1>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-700 mb-8">
            Every piece of Stallion Stainless furniture begins with the finest materials available.
            Our rigorous selection process ensures that only premium-grade components find their
            way into our workshop.
          </p>
        </div>
      </div>

      {/* Material Categories Overview */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-serif mb-10">Material Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-56 overflow-hidden">
              <img
                src="https://placehold.co/600x400/001F3F/FFFFFF.png?text=Primary+Materials"
                alt="Primary Materials"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Primary Materials</h3>
              <p className="text-gray-700 mb-4">
                The foundational elements of our furniture, including premium stainless steel,
                carefully sourced for its structural integrity and finish quality.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-56 overflow-hidden">
              <img
                src="https://placehold.co/600x400/001F3F/FFFFFF.png?text=Secondary+Materials"
                alt="Secondary Materials"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Secondary Materials</h3>
              <p className="text-gray-700 mb-4">
                Essential complementary components including high-density cushioning,
                marine-grade plywood, and precision hardware that ensure comfort and longevity.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-56 overflow-hidden">
              <img
                src="https://placehold.co/600x400/001F3F/FFFFFF.png?text=Tertiary+Materials"
                alt="Tertiary Materials"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Tertiary Materials</h3>
              <p className="text-gray-700 mb-4">
                Finishing elements including premium leather, high-performance fabrics,
                and decorative accents that complete the aesthetic vision of each piece.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Materials Section */}
      <div className="bg-gray-50 py-16 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-10">Primary Materials</h2>
          
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <img
                  src="https://placehold.co/800x500/001F3F/FFFFFF.png?text=304+Stainless+Steel"
                  alt="304 Stainless Steel"
                  className="rounded-lg w-full h-auto shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-3">304 Stainless Steel</h3>
                <p className="text-gray-700 mb-4">
                  Our primary structural material, 304 stainless steel offers an exceptional balance of
                  corrosion resistance, formability, and finish quality. This austenitic steel contains
                  18% chromium and 8% nickel, providing excellent resistance to atmospheric corrosion.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-semibold mb-2">Technical Specifications</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><span className="font-medium">Tensile Strength:</span> 515 MPa</li>
                    <li><span className="font-medium">Yield Strength:</span> 205 MPa</li>
                    <li><span className="font-medium">Hardness:</span> 201 HB max</li>
                    <li><span className="font-medium">Standard:</span> ASTM A240</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  We source our 304 stainless steel exclusively from mills certified to ISO 9001
                  standards, ensuring consistent quality and traceability in every batch.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img
                  src="https://placehold.co/800x500/001F3F/FFFFFF.png?text=316+Stainless+Steel"
                  alt="316 Stainless Steel"
                  className="rounded-lg w-full h-auto shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-3">316 Stainless Steel</h3>
                <p className="text-gray-700 mb-4">
                  Reserved for our outdoor and high-humidity environment pieces, 316 stainless steel contains
                  molybdenum, which gives it enhanced corrosion resistance, particularly against chlorides
                  and industrial solvents. This makes it ideal for coastal residences and spa areas.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-semibold mb-2">Technical Specifications</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li><span className="font-medium">Tensile Strength:</span> 485 MPa</li>
                    <li><span className="font-medium">Yield Strength:</span> 170 MPa</li>
                    <li><span className="font-medium">Hardness:</span> 217 HB max</li>
                    <li><span className="font-medium">Standard:</span> ASTM A240</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Our 316 stainless steel undergoes additional testing for marine environment
                  suitability before being approved for use in our outdoor collections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Materials Section */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-serif mb-10">Secondary Materials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 overflow-hidden">
              <img
                src="https://placehold.co/800x600/001F3F/FFFFFF.png?text=High-Density+Foam"
                alt="High-Density Foam"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">High-Density Foam Cushioning</h3>
              <p className="text-gray-700 mb-4">
                Our seating features multi-layer high-resilience foam with densities ranging from
                2.2 to 2.8 pounds per cubic foot. This carefully selected material provides the
                perfect balance of support and comfort while maintaining its shape over time.
              </p>
              <div className="mb-4">
                <h4 className="font-medium mb-1">Key Properties:</h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>OEKO-TEX® Standard 100 certified</li>
                  <li>CertiPUR-US® compliant</li>
                  <li>Free from harmful flame retardants</li>
                  <li>Low VOC emissions for improved indoor air quality</li>
                </ul>
              </div>
              <Link href="/products/seating" className="text-gold hover:underline inline-flex items-center">
                View our seating collection <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 overflow-hidden">
              <img
                src="https://placehold.co/800x600/001F3F/FFFFFF.png?text=Marine+Grade+Plywood"
                alt="Marine Grade Plywood"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Marine-Grade Plywood</h3>
              <p className="text-gray-700 mb-4">
                For internal structures requiring wood elements, we exclusively use BS1088
                marine-grade plywood. This high-performance material features cross-laminated
                veneers bonded with waterproof adhesive, ensuring exceptional dimensional stability.
              </p>
              <div className="mb-4">
                <h4 className="font-medium mb-1">Key Properties:</h4>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>FSC-certified sustainable sourcing</li>
                  <li>Void-free construction</li>
                  <li>WBP (Weather and Boil Proof) glue bond</li>
                  <li>Exceptional screw holding capacity</li>
                </ul>
              </div>
              <Link href="/sustainability" className="text-gold hover:underline inline-flex items-center">
                Learn about our sustainability commitment <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tertiary Materials Section */}
      <div className="bg-gray-50 py-16 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-10">Tertiary Materials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://placehold.co/800x600/001F3F/FFFFFF.png?text=Premium+Leather"
                  alt="Premium Italian Leather"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Premium Italian Leather</h3>
                <p className="text-gray-700 mb-4">
                  Sourced from tanneries in Tuscany, our full-grain leather is vegetable-tanned
                  using traditional methods. This environmentally friendly process creates leather
                  that develops a beautiful patina over time, enhancing its character with age.
                </p>
                <div className="mb-4">
                  <h4 className="font-medium mb-1">Available Finishes:</h4>
                  <ul className="text-gray-700 list-disc list-inside">
                    <li>Aniline (natural look and feel)</li>
                    <li>Semi-aniline (light protective coating)</li>
                    <li>Protected (durable finish for high-use areas)</li>
                  </ul>
                </div>
                <Link href="/products/collections/leather" className="text-gold hover:underline inline-flex items-center">
                  Explore leather furniture <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://placehold.co/800x600/001F3F/FFFFFF.png?text=Performance+Fabrics"
                  alt="Performance Fabrics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Performance Fabrics</h3>
                <p className="text-gray-700 mb-4">
                  Our curated collection of performance fabrics combines luxurious texture with
                  practical durability. These textiles feature stain resistance, fade resistance,
                  and exceptional wear ratings without sacrificing comfort or aesthetic appeal.
                </p>
                <div className="mb-4">
                  <h4 className="font-medium mb-1">Key Features:</h4>
                  <ul className="text-gray-700 list-disc list-inside">
                    <li>100,000+ double rub abrasion rating</li>
                    <li>UV resistant for color fastness</li>
                    <li>Eco-friendly manufacturing process</li>
                    <li>Easy cleaning and maintenance</li>
                  </ul>
                </div>
                <Link href="/products/collections/upholstered" className="text-gold hover:underline inline-flex items-center">
                  View fabric options <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://placehold.co/800x600/001F3F/FFFFFF.png?text=Glass+and+Stone"
                  alt="Glass and Stone Elements"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Glass and Stone Elements</h3>
                <p className="text-gray-700 mb-4">
                  For table tops and decorative accents, we select only the finest tempered glass and
                  natural stone. Our glass is tempered to European safety standards, while our stone
                  is sourced from responsible quarries with full traceability.
                </p>
                <div className="mb-4">
                  <h4 className="font-medium mb-1">Options Include:</h4>
                  <ul className="text-gray-700 list-disc list-inside">
                    <li>Ultra-clear low-iron glass</li>
                    <li>Etched and textured glass finishes</li>
                    <li>Italian marble (Carrara, Calacatta)</li>
                    <li>Granite and quartzite for durability</li>
                  </ul>
                </div>
                <Link href="/products/tables" className="text-gold hover:underline inline-flex items-center">
                  Browse table collection <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Material Selection Process */}
      <div className="container mx-auto px-4 mb-20" id="selection-process">
        <h2 className="text-3xl font-serif mb-8">Our Material Selection Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sourcing Standards</h3>
            <p className="text-gray-700 mb-6">
              Every material used in our furniture undergoes a rigorous selection process before being approved.
              We assess not only physical properties and performance characteristics but also the environmental
              and ethical aspects of production.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Supplier audits for environmental compliance and labor practices</p>
              </div>
              <div className="flex items-start">
                <div className="text-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Third-party certifications for sustainable forestry and ethical manufacturing</p>
              </div>
              <div className="flex items-start">
                <div className="text-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Chemical safety assessments for all finishes and adhesives</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quality Testing</h3>
            <p className="text-gray-700 mb-6">
              We conduct extensive in-house testing on all materials to ensure they meet our performance
              standards. This includes accelerated aging tests, stress tolerance evaluations, and
              compatibility testing with other materials used in our manufacturing process.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">UV resistance testing equivalent to 5 years of direct sunlight exposure</p>
              </div>
              <div className="flex items-start">
                <div className="text-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Abrasion and wear testing exceeding industry standards by 200%</p>
              </div>
              <div className="flex items-start">
                <div className="text-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Chemical resistance evaluation for household cleaning products and substances</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4">
        <div className="bg-[#001F3F] rounded-lg p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-4">Experience Our Materials</h2>
            <p className="text-xl mb-8">
              We invite you to visit our showroom to see and feel the quality of our materials in person.
              Our material library features samples of all our options, allowing you to make informed
              decisions for your custom piece.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href="/contact" 
                className="inline-block px-8 py-3 bg-gold text-[#001F3F] font-medium rounded-md hover:bg-gold/90 transition-colors"
              >
                Request Material Samples
              </Link>
              <Link 
                href="/craftsmanship" 
                className="inline-block px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-[#001F3F] transition-colors"
              >
                Explore Our Craftsmanship
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials; 