import Link from "next/link";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    position: "Founder & CEO",
    bio: "With over 30 years of experience in stainless steel furniture design, John leads our company with visionary leadership.",
    image: "https://placehold.co/600x400/001F3F/FFFFFF.png?text=John+Doe"
  },
  {
    name: "Sarah Chen",
    position: "Head of Design",
    bio: "A visionary designer with a passion for innovative furniture solutions, Sarah brings 15 years of experience in luxury product design.",
    image: "https://placehold.co/600x400/001F3F/FFFFFF.png?text=Sarah+Chen"
  }
];


const About = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <div className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">About Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">About Stallion Comfort Systems</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            For over three decades, Stallion has been redefining luxury furniture through innovative stainless steel designs that combine durability, elegance, and timeless appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif mb-4">Our Heritage</h2>
            <p className="text-gray-700 mb-4">
              Founded in 1990, Stallion Comfort Systems began with a vision to revolutionize furniture design through the innovative use of stainless steel. What started as a small workshop has grown into a leading manufacturer of luxury furniture, known for pushing the boundaries of material and design.
            </p>
            <p className="text-gray-700">
              Today, our pieces can be found in prestigious locations worldwide, from luxury hotels to high-end residences, each telling a story of craftsmanship and innovation.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif mb-4">Innovation & Design</h2>
            <p className="text-gray-700 mb-4">
              Our design philosophy combines cutting-edge technology with traditional craftsmanship. We invest heavily in research and development, constantly exploring new techniques and applications for stainless steel in furniture design.
            </p>
            <p className="text-gray-700">
              Each piece is a testament to our commitment to innovation, combining ergonomic excellence with aesthetic beauty.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md flex md:flex-row flex-col">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-gold mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission and Values Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                To create furniture that stands the test of time, both in durability and design, while maintaining our commitment to sustainable manufacturing practices.
              </p>
              <p className="text-gray-600">
                We believe in pushing the boundaries of what's possible with stainless steel, transforming this industrial material into elegant, functional pieces for modern living.
              </p>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Global Impact</h3>
                <p className="text-gray-600">
                  Our furniture graces spaces in over 50 countries, contributing to the evolution of modern interior design while maintaining our commitment to sustainability and local craftsmanship.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-serif mb-6">Core Values</h2>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <span className="text-gold text-2xl">•</span>
                <div>
                  <h3 className="font-medium mb-1">Innovation in Design</h3>
                  <p className="text-gray-600">Pushing boundaries and setting new standards in furniture design and manufacturing</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-gold text-2xl">•</span>
                <div>
                  <h3 className="font-medium mb-1">Uncompromising Quality</h3>
                  <p className="text-gray-600">Maintaining the highest standards in materials, craftsmanship, and finish</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-gold text-2xl">•</span>
                <div>
                  <h3 className="font-medium mb-1">Sustainable Production</h3>
                  <p className="text-gray-600">Implementing eco-friendly practices throughout our manufacturing process</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-gold text-2xl">•</span>
                <div>
                  <h3 className="font-medium mb-1">Customer Excellence</h3>
                  <p className="text-gray-600">Delivering exceptional service and support at every interaction</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;