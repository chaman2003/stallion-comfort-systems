import React from "react";
import Link from "next/link";
import { futureGoals, visionPoints } from "@/lib/data";

const Vision = () => {
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
          <span className="text-gray-800">Vision</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Vision</h1>
        <div className="max-w-4xl">
          <p className="text-xl text-gray-700 mb-8">
            We envision a future where innovative design meets sustainable
            practices, creating furniture that not only enhances living spaces
            but also contributes to a better world for generations to come.
          </p>
        </div>
      </div>

      {/* Vision Points */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionPoints.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-medium mb-4">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Future Goals */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-12">Future Goals</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {futureGoals.map((goal, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <div className="text-3xl font-serif text-gold">{goal.year}</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-medium mb-2">{goal.goal}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;
