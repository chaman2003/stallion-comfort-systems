import React from "react";

const ProductTable = () => {
  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-md max-w-5xl">
      {/* Mobile-friendly header */}
      <div className="md:hidden mb-4">
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
          Product Details
        </h2>
      </div>

      {/* Desktop header - hidden on mobile */}
      <div className="hidden md:grid md:grid-cols-2 bg-gray-100 rounded-t-md">
        <div className="p-4 text-left font-semibold text-gray-800 border-b-2 border-gray-200">
          Product Description
        </div>
        <div className="p-4 text-left font-semibold text-gray-800 border-b-2 border-gray-200">
          Specifications
        </div>
      </div>

      {/* Content area - stacked on mobile, side-by-side on desktop */}
      <div className="md:grid md:grid-cols-2">
        {/* Description Column */}
        <div className="p-4 md:border-r border-gray-200">
          <div className="space-y-6">
            {/* Description Section */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3 pb-1 border-b border-gray-200">
                Product Overview
              </h3>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-gray-700 leading-relaxed">
                  Enhance your home with this perfect blend of contemporary
                  design and luxurious comfort. This stylish dark grey fabric
                  sofa is designed for those who appreciate modern aesthetics
                  and cozy seating. The high-density foam cushions ensure a
                  plush yet supportive feel, while the two vibrant yellow accent
                  pillows add a striking contrast.
                </p>
              </div>
            </div>

            {/* Key Features Section */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3 pb-1 border-b border-gray-200">
                Key Features
              </h3>
              <div className="bg-gray-50 p-3 rounded-md">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                    <span>
                      <span className="font-medium">Premium Upholstery:</span>{" "}
                      Soft, high-quality dark grey fabric
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                    <span>
                      <span className="font-medium">Spacious Design:</span>{" "}
                      Perfect for living rooms and offices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                    <span>
                      <span className="font-medium">High-Density Foam:</span>{" "}
                      Lasting comfort and support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                    <span>
                      <span className="font-medium">Sturdy Metal Frame:</span>{" "}
                      Stability with modern aesthetics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                    <span>
                      <span className="font-medium">Accent Pillows:</span> Two
                      yellow pillows included
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                    <span>
                      <span className="font-medium">Ergonomic Design:</span>{" "}
                      Comfortable armrests and deep seating
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section divider for mobile only */}
        <div className="md:hidden my-4 border-t border-gray-200"></div>

        {/* Specifications Column */}
        <div className="p-4">
          <div className="space-y-6">
            {/* Materials Section */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3 pb-1 border-b border-gray-200">
                Materials & Construction
              </h3>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex flex-wrap items-center">
                    <span className="w-full sm:w-1/3 text-gray-600 font-medium mb-1 sm:mb-0">
                      Product Type:
                    </span>
                    <span>Three-Seater Sofa</span>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="w-full sm:w-1/3 text-gray-600 font-medium mb-1 sm:mb-0">
                      Material:
                    </span>
                    <span>Dark Grey Fabric</span>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="w-full sm:w-1/3 text-gray-600 font-medium mb-1 sm:mb-0">
                      Frame:
                    </span>
                    <span>Reinforced Metal</span>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="w-full sm:w-1/3 text-gray-600 font-medium mb-1 sm:mb-0">
                      Legs:
                    </span>
                    <span>Metal (Black Finish)</span>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="w-full sm:w-1/3 text-gray-600 font-medium mb-1 sm:mb-0">
                      Cushion:
                    </span>
                    <span>High-Density Foam</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Section */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3 pb-1 border-b border-gray-200">
                Additional Information
              </h3>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex flex-wrap items-center">
                    <span className="w-full sm:w-1/3 text-gray-600 font-medium mb-1 sm:mb-0">
                      Seating Capacity:
                    </span>
                    <span>3 People</span>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="w-full sm:w-1/3 text-gray-600 font-medium mb-1 sm:mb-0">
                      Accessories:
                    </span>
                    <span>2 Yellow Pillows</span>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="w-full sm:w-1/3 text-gray-600 font-medium mb-1 sm:mb-0">
                      Assembly:
                    </span>
                    <span>Minimal (Tools Included)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dimensions Section - Responsive table */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3 pb-1 border-b border-gray-200">
                Dimensions
              </h3>
              <div className="bg-gray-50 p-3 rounded-md overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="pb-2 text-left font-medium text-gray-600">
                        Measurement
                      </th>
                      <th className="pb-2 text-right font-medium text-gray-600">
                        Metric
                      </th>
                      <th className="pb-2 text-right font-medium text-gray-600">
                        Imperial
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 text-left font-medium">Width</td>
                      <td className="py-2 text-right">210 cm</td>
                      <td className="py-2 text-right">82.6&quot;</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-2 text-left font-medium">Depth</td>
                      <td className="py-2 text-right">90 cm</td>
                      <td className="py-2 text-right">35.4&quot;</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-2 text-left font-medium">Height</td>
                      <td className="py-2 text-right">85 cm</td>
                      <td className="py-2 text-right">33.4&quot;</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-2 text-left font-medium">
                        Seat Height
                      </td>
                      <td className="py-2 text-right">45 cm</td>
                      <td className="py-2 text-right">17.7&quot;</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-2 text-left font-medium">Seat Depth</td>
                      <td className="py-2 text-right">55 cm</td>
                      <td className="py-2 text-right">21.6&quot;</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-2 text-left font-medium">
                        Back Height
                      </td>
                      <td className="py-2 text-right">50 cm</td>
                      <td className="py-2 text-right">19.6&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
