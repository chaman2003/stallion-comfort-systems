"use client";

import React from "react";
import Link from "next/link";

const Achievement = () => {
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
          <span className="text-gray-800">Achievement</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Achievements</h1>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-700 mb-8">
            For over three decades, we have been recognized for our commitment to innovation,
            quality craftsmanship, and exceptional design in the stainless steel furniture industry.
          </p>
        </div>
      </div>

      {/* Innovation Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-serif mb-8">Innovation</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://placehold.co/800x600/001F3F/FFFFFF.png?text=Stainless+Steel+Innovation" 
                alt="Stainless Steel Innovation" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-medium mb-4">Pioneering Stainless Steel Furniture</h3>
              <p className="text-gray-700 mb-4">
                In 1985, we introduced the first-ever collection of luxury furniture crafted entirely from stainless steel.
                This revolutionary approach challenged traditional furniture manufacturing norms and established
                a new category in the industry.
              </p>
              <p className="text-gray-700 mb-4">
                Our patented forming techniques allowed for previously impossible designs, combining
                the strength and durability of stainless steel with elegant, flowing forms that defied
                expectations of what metal furniture could be.
              </p>
              <p className="text-gray-700">
                Today, our innovative methods have influenced countless manufacturers worldwide, cementing
                our position as industry pioneers in stainless steel furniture design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recognition Section */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-serif mb-8">Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recognition Item 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-medium">Architectural Digest</h3>
            </div>
            <p className="text-gray-600">
              &ldquo;The foremost innovators in stainless steel furniture, blending industrial materials with luxury aesthetics.&rdquo;
            </p>
            <p className="text-sm text-gray-500 mt-4">Featured, 2022</p>
          </div>

          {/* Recognition Item 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-medium">International Design Council</h3>
            </div>
            <p className="text-gray-600">
              &ldquo;Setting new standards in material innovation and sustainable luxury furniture manufacturing.&rdquo;
            </p>
            <p className="text-sm text-gray-500 mt-4">Industry Report, 2021</p>
          </div>

          {/* Recognition Item 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-medium">Manufacturing Excellence Group</h3>
            </div>
            <p className="text-gray-600">
              &ldquo;Their production methods have revolutionized how we think about metal furniture manufacturing.&rdquo;
            </p>
            <p className="text-sm text-gray-500 mt-4">Industry Recognition, 2020</p>
          </div>

          {/* Recognition Item 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl">🏪</span>
              </div>
              <h3 className="text-xl font-medium">Retail Design Institute</h3>
            </div>
            <p className="text-gray-600">
              &ldquo;A brand that consistently delivers products that combine functionality, durability, and timeless design.&rdquo;
            </p>
            <p className="text-sm text-gray-500 mt-4">Member Spotlight, 2019</p>
          </div>
        </div>
      </div>

      {/* Awards & Certifications Section */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-serif mb-8">Awards & Certifications</h2>
        
        <div className="space-y-12">
          {/* Award Group 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#001F3F] text-white p-6">
              <h3 className="text-2xl font-medium">Design Excellence</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center text-white font-bold">A</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Gold Medal - International Furniture Design Awards</h4>
                    <p className="text-gray-600 mt-1">Awarded for our innovative Curve Collection, recognized for pushing the boundaries of stainless steel furniture design.</p>
                    <p className="text-sm text-gray-500 mt-2">2021</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center text-white font-bold">A</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Best of Show - Milan Furniture Fair</h4>
                    <p className="text-gray-600 mt-1">Our Infinity Table series received critical acclaim for its seamless blend of form and function.</p>
                    <p className="text-sm text-gray-500 mt-2">2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Award Group 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#001F3F] text-white p-6">
              <h3 className="text-2xl font-medium">Sustainability & Manufacturing</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center text-white font-bold">C</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">ISO 14001 Environmental Management Certification</h4>
                    <p className="text-gray-600 mt-1">Recognition of our commitment to minimize environmental impact in all manufacturing processes.</p>
                    <p className="text-sm text-gray-500 mt-2">2020 - Present</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center text-white font-bold">A</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Green Manufacturing Excellence Award</h4>
                    <p className="text-gray-600 mt-1">Recognized for our innovative water recycling system that reduced water consumption in our production by 85%.</p>
                    <p className="text-sm text-gray-500 mt-2">2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Award Group 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-[#001F3F] text-white p-6">
              <h3 className="text-2xl font-medium">Business Excellence</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center text-white font-bold">A</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Entrepreneur of the Year - Furniture Category</h4>
                    <p className="text-gray-600 mt-1">Our founder recognized for revolutionary contributions to the furniture industry.</p>
                    <p className="text-sm text-gray-500 mt-2">2022</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold flex items-center justify-center text-white font-bold">A</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Best Luxury Furniture Brand</h4>
                    <p className="text-gray-600 mt-1">Voted by industry professionals as the leading luxury stainless steel furniture manufacturer.</p>
                    <p className="text-sm text-gray-500 mt-2">2020, 2021, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Award Group 4 - Jindal Stainless Awards */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
            <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white p-6 relative">
              <div className="absolute -top-3 -right-3 bg-gold text-white text-xs px-3 py-1 rounded shadow-md transform rotate-3">
                2002
              </div>
              <h3 className="text-2xl font-serif font-medium mb-1">Stainless Steel Innovation</h3>
              <div className="w-20 h-1 bg-gold rounded-full"></div>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex flex-col">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-gold to-amber-500 flex items-center justify-center text-white font-bold shadow-md">
                      <span className="text-xl">🏆</span>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-xl font-medium text-[#001F3F]">Jindal Stainless Awards 2002</h4>
                      <div className="w-16 h-0.5 bg-gold my-2"></div>
                      <p className="text-gray-700 mt-2 leading-relaxed">
                        The Jindal Stainless Awards 2002 recognized excellence in design and innovation using stainless steel. Stallion Systems (P) Ltd., Bangalore was awarded the <span className="font-semibold text-[#001F3F]">Third Prize</span> for their work on the BFL Software, Bangalore project. The award was presented by Jindal Strips Limited, part of the Jindal Stainless Group, and signed by A. Ratan Jindal (Vice Chairman & Managing Director) and N.C. Mathur.
                      </p>
                      <div className="flex items-center mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm text-gray-500 ml-2">March 26, 2002</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-1 h-8 bg-gold rounded-full mr-3"></div>
                      <h5 className="text-lg font-medium text-gray-800">Significance</h5>
                    </div>
                    <p className="text-gray-700 mb-6 italic pl-4 border-l-2 border-gray-200">
                      &ldquo;This award represents a distinguished accomplishment in the field of architectural or industrial design leveraging stainless steel materials.&rdquo;
                    </p>
                    
                    <div className="mt-8">
                      <h5 className="text-lg font-medium text-gray-800 mb-4">Award Gallery</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                          <img 
                            src="/heritage/achievements/jindal-award1.jpg" 
                            alt="Jindal Stainless Award Certificate" 
                            className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white px-4 pb-4 text-sm">Award Certificate</p>
                          </div>
                        </div>
                        <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                          <img 
                            src="/heritage/achievements/jindal-award2.jpg" 
                            alt="Jindal Stainless Award" 
                            className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white px-4 pb-4 text-sm">Award Presentation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Milestones Section */}
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-serif mb-12">Additional Milestones</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Milestone 1 */}
          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">📰</div>
            <h3 className="text-xl font-medium mb-4">Media Features</h3>
            <p className="text-gray-600 mb-4">
              Featured in over 50 international design publications, including cover stories in Architectural Digest, Elle Decor, and Interior Design Magazine.
            </p>
            <p className="text-sm text-gold">2018-Present</p>
          </div>

          {/* Milestone 2 */}
          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-medium mb-4">Sustainability Leadership</h3>
            <p className="text-gray-600 mb-4">
              Pioneered a closed-loop manufacturing process that recycles 98% of stainless steel waste, setting a new industry standard for sustainable production.
            </p>
            <p className="text-sm text-gold">2015</p>
          </div>

          {/* Milestone 3 */}
          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-medium mb-4">Museum Collections</h3>
            <p className="text-gray-600 mb-4">
              Our signature pieces have been acquired by design museums worldwide, including the Museum of Modern Art and the Design Museum London.
            </p>
            <p className="text-sm text-gold">2010-Present</p>
          </div>

          {/* Milestone 4 */}
          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-medium mb-4">Industry Leadership</h3>
            <p className="text-gray-600 mb-4">
              Founding member of the Sustainable Furniture Council, actively shaping policies for environmentally responsible manufacturing.
            </p>
            <p className="text-sm text-gold">2017</p>
          </div>

          {/* Milestone 5 */}
          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-medium mb-4">Product Innovation</h3>
            <p className="text-gray-600 mb-4">
              Successfully launched our groundbreaking modular stainless steel system that allows for infinite furniture configurations.
            </p>
            <p className="text-sm text-gold">2019</p>
          </div>

          {/* Milestone 6 */}
          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-medium mb-4">Educational Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Established scholarship programs with leading design schools worldwide to foster the next generation of innovative furniture designers.
            </p>
            <p className="text-sm text-gold">2016-Present</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement; 