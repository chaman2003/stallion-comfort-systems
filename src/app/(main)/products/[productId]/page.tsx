"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import ProductTable from "@/components/global/productTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  Settings,
  Star,
  Cuboid,
  Smartphone,
  Check,
  Share2,
  ZoomIn,
  ArrowLeft,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Lazy load the model component to reduce initial page load time
const Model = lazy(() => import("../../../../../public/models/Sofa1-mod"));

// Model path constant for consistent reference
const MODEL_PATH = "/models/sofa1-mod.gltf";

const Products = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [previewImage, setPreviewImage] = useState<null | number>(null); // For hover preview
  const [activeTab, setActiveTab] = useState<"image" | "3d" | "ar">("image");
  const [selectedColor, setSelectedColor] = useState("Whisper White");
  const [selectedSize, setSelectedSize] = useState("1 Seater");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  // Use the preview image for display, fallback to current image when not hovering
  const displayImage = previewImage !== null ? previewImage : currentImage;

  // Preload the 3D model when component mounts
  useEffect(() => {
    // Preload the model immediately when component mounts
    useGLTF.preload(MODEL_PATH);

    // Mark model as loaded so we know preloading has started
    setModelLoaded(true);
  }, []);

  const imageArray = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
    "/assets/6.jpg",
  ];

  const fabricColors = [
    { name: "Whisper White", color: "#f5f5f0" },
    { name: "Charcoal Grey", color: "#36454f" },
    { name: "Midnight Blue", color: "#145da0" },
    { name: "Sage Green", color: "#9caf88" },
  ];

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1));
  };

  const handleGetQuote = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      setTimeout(() => {
        window.location.href = "/contact";
      }, 1000);
    }, 1500);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Reset preview image when tab changes and preload 3D model if switching to 3D tab
  useEffect(() => {
    setPreviewImage(null);

    // If switching to 3D tab, ensure model is preloaded
    if (activeTab === "3d" && !modelLoaded) {
      useGLTF.preload(MODEL_PATH);
      setModelLoaded(true);
    }
  }, [activeTab, modelLoaded]);

  // Custom loading fallback for 3D model - Used outside the Canvas
  const ModelLoadingFallback = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-sm text-gray-500">Loading 3D model...</p>
      </div>
    </div>
  );

  // Three.js compatible loading component
  const ThreeLoadingFallback = () => {
    return null; // This empty return is important - we'll show loader outside the Canvas instead
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fullscreen Image Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={toggleFullscreen}
        >
          <button
            className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-white/20"
            onClick={toggleFullscreen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="relative w-full max-w-6xl max-h-screen">
            <Image
              src={imageArray[currentImage]}
              alt="Product fullscreen view"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
            >
              <ArrowLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      )}

      <main className="pt-20 lg:pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex text-sm text-gray-500">
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/category/living-room"
                className="hover:text-gold transition-colors"
              >
                Living Room
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/category/living-room/sofas"
                className="hover:text-gold transition-colors"
              >
                Sofas
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800 font-medium">Laszlo Sofa</span>
            </nav>
          </div>

          {/* Product Display Section - Optimized fit */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Left Column - Product Visuals - Optimized height */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <Tabs
                  value={activeTab}
                  onValueChange={(value) =>
                    setActiveTab(value as "image" | "3d" | "ar")
                  }
                  className="flex flex-col"
                >
                  <div className="border-b border-gray-200">
                    <TabsList className="w-full h-12">
                      <TabsTrigger
                        value="image"
                        className="flex-1 h-full data-[state=active]:bg-gray-50"
                      >
                        <ZoomIn className="h-4 w-4 mr-2" />
                        <span>Product Images</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="3d"
                        className="flex-1 h-full data-[state=active]:bg-gray-50"
                      >
                        <Cuboid className="h-4 w-4 mr-2" />
                        <span>3D View</span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="ar"
                        className="flex-1 h-full data-[state=active]:bg-gray-50"
                      >
                        <Smartphone className="h-4 w-4 mr-2" />
                        <span>AR View</span>
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  {/* Images Tab - Optimized fit */}
                  <TabsContent value="image" className="flex-1">
                    <div className="flex flex-col md:flex-row">
                      {/* Thumbnails - Optimized */}
                      <div className="md:w-20 p-2 flex md:flex-col gap-2 order-2 md:order-1 overflow-x-auto md:overflow-y-auto md:justify-start">
                        {imageArray.map((src, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            onMouseEnter={() => setPreviewImage(index)}
                            onMouseLeave={() => setPreviewImage(null)}
                            className={`flex-shrink-0 border-2 transition-colors rounded-md ${
                              currentImage === index
                                ? "border-gold shadow-md"
                                : "border-transparent hover:border-gray-300"
                            }`}
                          >
                            <Image
                              src={src}
                              alt={`View ${index + 1}`}
                              width={70}
                              height={70}
                              className="object-cover w-[66px] h-[66px]"
                            />
                          </button>
                        ))}
                      </div>

                      {/* Main Image - Optimized fit */}
                      <div className="flex-1 relative order-1 md:order-2 p-3">
                        <div className="relative aspect-[4/3] w-full">
                          <Image
                            src={imageArray[displayImage]}
                            alt="Product main view"
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-contain transition-opacity duration-300"
                            priority
                          />

                          {/* Navigation Arrows */}
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
                            aria-label="Previous image"
                          >
                            <ArrowLeft size={18} />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
                            aria-label="Next image"
                          >
                            <ArrowRight size={18} />
                          </button>

                          {/* Fullscreen Button */}
                          <button
                            onClick={toggleFullscreen}
                            className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
                            aria-label="View fullscreen"
                          >
                            <ZoomIn size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* 3D View Tab - Adjusted height to match image tab */}
                  <TabsContent value="3d" className="aspect-[4/3] w-full">
                    <div className="relative w-full h-full bg-gray-50">
                      {/* Show DOM loading fallback when Suspense is still loading */}
                      <Suspense fallback={<ModelLoadingFallback />}>
                        <Canvas
                          shadows
                          className="w-full h-full"
                          camera={{ position: [0, 0, 4.5], fov: 35 }}
                        >
                          <ambientLight intensity={0.6} />
                          <spotLight
                            position={[5, 8, 5]}
                            angle={0.2}
                            penumbra={1}
                            intensity={0.8}
                            castShadow
                          />
                          <directionalLight
                            position={[-5, 8, 3]}
                            intensity={0.6}
                            castShadow
                          />
                          <Environment preset="apartment" />
                          <group
                            scale={0.7}
                            position={[0, -0.6, 0]}
                            rotation={[0, Math.PI / 6, 0]}
                          >
                            <Model />
                          </group>
                          <OrbitControls
                            minPolarAngle={Math.PI / 4}
                            maxPolarAngle={Math.PI * 0.6}
                            enableZoom={true}
                            enablePan={false}
                            minDistance={3}
                            maxDistance={6}
                            target={[0, -0.2, 0]}
                          />
                        </Canvas>
                      </Suspense>
                      <div className="absolute bottom-4 left-4 bg-white px-3 py-1.5 rounded-md text-sm font-medium shadow-md">
                        Drag to rotate | Scroll to zoom
                      </div>
                    </div>
                  </TabsContent>

                  {/* AR View Tab - Adjusted height to match image tab */}
                  <TabsContent
                    value="ar"
                    className="aspect-[4/3] w-full flex items-center justify-center"
                  >
                    <div className="text-center max-w-md p-6">
                      <Smartphone className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        Experience in Your Space
                      </h3>
                      <p className="text-gray-500 mb-5">
                        Scan the QR code with your smartphone camera to view
                        this product in your own space using augmented reality.
                      </p>
                      <div className="bg-white p-4 rounded-lg shadow-md inline-block mb-3">
                        {/* Placeholder for QR code - you'll need to generate a real one */}
                        <div className="w-[150px] h-[150px] bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">QR Code</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        Compatible with iOS 12+ and Android 8.0+ devices
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Right Column - Product Details */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-28 bg-white rounded-xl shadow-sm p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl font-bold">
                    Laszlo Camel Brown Boucle Sofa
                  </h1>
                  <button
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Add to favorites"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold">₹20,000</span>
                  <span className="text-gray-500 text-sm">Inc. all taxes</span>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} size={16} fill="#000" />
                      ))}
                      <Star size={16} />
                    </div>
                    <span className="text-sm ml-1">
                      <Link
                        href="#reviews"
                        className="hover:underline text-gray-600"
                      >
                        4 Reviews
                      </Link>
                    </span>
                  </div>

                  <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                    <Share2 className="h-4 w-4 mr-1" />
                    <span>Share</span>
                  </button>
                </div>

                <Separator className="my-6" />

                {/* Product Description */}
                <div className="mb-6">
                  <p className="text-gray-700">
                    Contemporary apartment sofa with premium boucle upholstery
                    and solid wood frame. Designed for both style and comfort
                    with high-density foam cushions.
                  </p>
                </div>

                {/* Fabric Selection */}
                <div className="mb-8">
                  <h3 className="font-medium mb-3">Select Fabric</h3>
                  <p className="text-sm text-gray-600 mb-3">{selectedColor}</p>
                  <div className="grid grid-cols-4 gap-3">
                    {fabricColors.map((fabric) => (
                      <div
                        key={fabric.name}
                        onClick={() => setSelectedColor(fabric.name)}
                        className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all aspect-square ${
                          selectedColor === fabric.name
                            ? "border-gold"
                            : "border-transparent hover:border-gray-300"
                        }`}
                        style={{ backgroundColor: fabric.color }}
                        aria-label={fabric.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-8">
                  <h3 className="font-medium mb-3">Select Size</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedSize("1 Seater")}
                      className={`py-3 border rounded-md transition-colors ${
                        selectedSize === "1 Seater"
                          ? "border-gold bg-gold/5 text-gold"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      1 Seater
                    </button>
                    <button
                      onClick={() => setSelectedSize("2 Seater")}
                      className={`py-3 border rounded-md transition-colors ${
                        selectedSize === "2 Seater"
                          ? "border-gold bg-gold/5 text-gold"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      2 Seater
                    </button>
                  </div>
                </div>

                {/* Customization Options */}
                <div className="mb-8">
                  <div className="bg-gray-50 rounded-md p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Customization Options</span>
                      <Settings size={16} />
                    </div>
                  </div>
                </div>

                {/* Buttons - Get Quote and Leave Review */}
                <div className="flex flex-col space-y-4 mb-8">
                  {/* Get Quote Button - Made more visible */}
                  <Button
                    onClick={handleGetQuote}
                    className={`w-full py-6 text-lg font-semibold bg-gold hover:bg-gold/90 shadow-md transform hover:-translate-y-0.5 transition-all text-black ${
                      loading || showSuccess ? "pointer-events-none" : ""
                    }`}
                    disabled={loading || showSuccess}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : showSuccess ? (
                      <span className="flex items-center justify-center text-black">
                        <Check className="mr-2 h-5 w-5" /> Success!
                      </span>
                    ) : (
                      "Get a Quote"
                    )}
                  </Button>

                  {/* Leave a Review Button */}
                  <Button
                    variant="outline"
                    className="w-full py-6 text-base flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-50"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Leave a Review
                  </Button>
                </div>

                {/* Product Specs Summary */}
                <div className="mt-6 text-sm text-gray-600 space-y-3 bg-gray-50 p-4 rounded-md">
                  <div className="flex items-start">
                    <span className="font-medium w-1/3">Dimensions:</span>
                    <span>80"W x 36"D x 34"H</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium w-1/3">Material:</span>
                    <span>Premium Boucle Fabric, Solid Wood Frame</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium w-1/3">Delivery:</span>
                    <span>4-6 weeks</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium w-1/3">ID:</span>
                    <span>ST1234</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Product Information */}
          <div className="mb-16">
            <ProductTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
