"use client";

import React from "react";
import Link from "next/link";

const Craftsmanship = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Craftsmanship</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">The Art of Craftsmanship</h1>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-700 mb-8">
            At Stallion Stainless, our craftspeople combine traditional techniques with modern innovation
            to create furniture that stands the test of time. Each piece tells a story of dedication,
            precision, and uncompromising quality.
          </p>
        </div>
      </div>

      {/* Master Craftspeople Section */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-serif mb-8">Our Master Craftspeople</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://placehold.co/600x400/001F3F/FFFFFF.png?text=Thomas+Greene" 
                alt="Thomas Greene, Metal Artisan" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Thomas Greene</h3>
              <p className="text-gold mb-3">Master Metal Artisan</p>
              <p className="text-gray-700 mb-4">
                With over 25 years of experience, Thomas leads our metal fabrication team.
                His expertise in precision welding and metal finishing techniques creates the
                seamless joints and flawless surfaces our furniture is known for.
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Signature piece:</span> The Infinity Table
              </p>
              <Link href="/team/thomas-greene" className="text-gold hover:underline inline-flex items-center mt-4">
                Meet Thomas <span className="ml-1">→</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://placehold.co/600x400/001F3F/FFFFFF.png?text=Maria+Chen" 
                alt="Maria Chen, Design Director" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Maria Chen</h3>
              <p className="text-gold mb-3">Design Director</p>
              <p className="text-gray-700 mb-4">
                Maria brings her background in industrial design and architecture to create
                furniture that balances form and function. Her innovative designs push the
                boundaries of what&apos;s possible with stainless steel.
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Signature piece:</span> The Cascade Chair
              </p>
              <Link href="/team/maria-chen" className="text-gold hover:underline inline-flex items-center mt-4">
                Meet Maria <span className="ml-1">→</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://placehold.co/600x400/001F3F/FFFFFF.png?text=Carlos+Rodriguez" 
                alt="Carlos Rodriguez, Finishing Specialist" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Carlos Rodriguez</h3>
              <p className="text-gold mb-3">Finishing Specialist</p>
              <p className="text-gray-700 mb-4">
                Carlos masters the final and crucial steps in our production process.
                His attention to detail ensures that every surface achieves the perfect
                texture, sheen, and durability our customers expect.
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Signature piece:</span> The Helix Shelving System
              </p>
              <Link href="/team/carlos-rodriguez" className="text-gold hover:underline inline-flex items-center mt-4">
                Meet Carlos <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Award-Winning Products Section */}
      <div className="bg-gray-50 py-16 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8">Award-Winning Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/001F3F/FFFFFF.png?text=Infinity+Table" 
                  alt="Infinity Table" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Infinity Table</h3>
                <p className="text-gray-700 mb-4">
                  Our signature dining table features a seamless loop base that appears to defy gravity.
                  The precision-engineered structure supports a 12mm tempered glass top with unmatched stability.
                </p>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-gold">★</span>
                  <span className="text-gray-700">2023 International Design Excellence Award</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold">★</span>
                  <span className="text-gray-700">Featured in Architectural Digest</span>
                </div>
                <Link href="/products/tables/infinity" className="text-gold hover:underline inline-flex items-center mt-4">
                  View details <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/001F3F/FFFFFF.png?text=Cascade+Chair" 
                  alt="Cascade Chair" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Cascade Chair</h3>
                <p className="text-gray-700 mb-4">
                  This ergonomic dining chair features a flowing stainless steel frame that cradles
                  a premium leather seat. The design balances visual lightness with exceptional comfort.
                </p>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-gold">★</span>
                  <span className="text-gray-700">Red Dot Design Award Winner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold">★</span>
                  <span className="text-gray-700">Milan Furniture Fair Innovation Prize</span>
                </div>
                <Link href="/products/seating/cascade" className="text-gold hover:underline inline-flex items-center mt-4">
                  View details <span className="ml-1">→</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/001F3F/FFFFFF.png?text=Helix+Shelving" 
                  alt="Helix Shelving System" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Helix Shelving System</h3>
                <p className="text-gray-700 mb-4">
                  Our modular shelving system uses a spiral support structure that eliminates the need
                  for traditional brackets. The result is a floating effect that showcases both the items
                  displayed and the engineering behind them.
                </p>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-gold">★</span>
                  <span className="text-gray-700">Interior Design Best of Year Award</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gold">★</span>
                  <span className="text-gray-700">Furniture Innovation Excellence Prize</span>
                </div>
                <Link href="/products/storage/helix" className="text-gold hover:underline inline-flex items-center mt-4">
                  View details <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Standards Section */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-serif mb-8">Our Design Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-start mb-8">
              <div className="bg-gold rounded-full w-12 h-12 flex items-center justify-center shrink-0 mr-4">
                <span className="text-[#001F3F] text-xl font-semibold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Material Quality</h3>
                <p className="text-gray-700">
                  We use only premium 304 and 316 grade stainless steel sourced from certified suppliers.
                  All materials undergo rigorous testing for strength, durability, and finish quality
                  before entering our production process.
                </p>
                <Link href="/materials" className="text-gold hover:underline inline-flex items-center mt-3">
                  Learn about our materials <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="bg-gold rounded-full w-12 h-12 flex items-center justify-center shrink-0 mr-4">
                <span className="text-[#001F3F] text-xl font-semibold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Precision Engineering</h3>
                <p className="text-gray-700">
                  Each joint, curve, and connection in our furniture is precision-engineered to
                  tolerances of 0.1mm or less. This attention to detail ensures structural integrity
                  and a seamless aesthetic that defines our brand.
                </p>
                <Link href="/process/engineering" className="text-gold hover:underline inline-flex items-center mt-3">
                  Our engineering approach <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start mb-8">
              <div className="bg-gold rounded-full w-12 h-12 flex items-center justify-center shrink-0 mr-4">
                <span className="text-[#001F3F] text-xl font-semibold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Finish Excellence</h3>
                <p className="text-gray-700">
                  Our multi-stage finishing process ensures surfaces that are not only beautiful but
                  resistant to scratches, fingerprints, and environmental factors. Each piece undergoes
                  a minimum of seven finishing steps before final inspection.
                </p>
                <Link href="/materials" className="text-gold hover:underline inline-flex items-center mt-3">
                  Learn about our materials <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            <div className="flex items-start mb-8">
              <div className="bg-gold rounded-full w-12 h-12 flex items-center justify-center shrink-0 mr-4">
                <span className="text-[#001F3F] text-xl font-semibold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ergonomic Design</h3>
                <p className="text-gray-700">
                  While aesthetic appeal is important, we never compromise on comfort and usability.
                  Our seating products are tested for ergonomic performance, with designs refined
                  through multiple prototypes and user testing sessions.
                </p>
                <Link href="/process/engineering" className="text-gold hover:underline inline-flex items-center mt-3">
                  Our engineering approach <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Collaboration Section */}
      <div className="bg-gray-50 py-16 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8">Technical Collaboration</h2>
          <p className="text-xl text-gray-700 mb-10 max-w-4xl">
            The partnership between our artisans and engineering team creates the perfect balance
            of form and function that defines Stallion Stainless furniture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/001F3F/FFFFFF.png?text=Design+Process" 
                  alt="Design Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Design Process</h3>
                <p className="text-gray-700">
                  Our design process begins with hand sketches that capture the essence of a concept.
                  These are then translated into detailed CAD models, which allow our engineers to analyze
                  structural integrity while preserving the designer&apos;s vision.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/001F3F/FFFFFF.png?text=Prototyping" 
                  alt="Prototyping" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Prototyping</h3>
                <p className="text-gray-700">
                  We create multiple prototypes for each design, testing different manufacturing techniques,
                  material thicknesses, and joint designs. This iterative process ensures that the final
                  product meets both our aesthetic and structural standards.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/001F3F/FFFFFF.png?text=Quality+Assurance" 
                  alt="Quality Assurance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-700">
                  Every piece undergoes rigorous testing that goes beyond industry standards. From weight-bearing
                  tests to finish durability assessments, our quality assurance team ensures that each item
                  that leaves our workshop meets our exacting standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4">
        <div className="bg-[#001F3F] rounded-lg p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-4">Experience Our Craftsmanship</h2>
            <p className="text-xl mb-8">
              Visit our workshop to see our craftspeople in action and understand the level of
              detail and care that goes into every piece of Stallion Stainless furniture.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-gold text-[#001F3F] font-medium rounded-md hover:bg-gold/90 transition-colors"
            >
              Book a Workshop Tour
            </Link>
            <Link 
              href="/materials" 
              className="inline-block px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-[#001F3F] transition-colors ml-4"
            >
              Explore Our Materials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craftsmanship; 