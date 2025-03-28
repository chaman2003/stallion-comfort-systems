import Navigation from "@/components/global/navigation";
import { Separator } from "@/components/ui/separator";
import { Heart, Settings, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 flex justify-between items-center mb-8">
          <div className="py-6">Section 1</div>
          <div className="py-6">
            <div className="flex items-center gap-4 justify-between pt-4">
              <p className="font-semibold w-2/3 text-lg">
                Laszlo 80" Camel Brown Boucle Apartment Sofa
              </p>

              <Heart className="cursor-pointer" size={24} />
            </div>
            <div className="py-1.5">
              <Link className="text-sm underline font-light" href="#">
                Company Name
              </Link>
            </div>
            <div>
              <p className="font-semibold text-sm pb-2.5">20,000</p>
              <div className="flex items-center gap-2 pt-2.5">
                <Star size={15} fill="black" />
                <Star size={15} fill="black" />
                <Star size={15} fill="black" />
                <Star size={15} fill="black" />
                <Star className=" shrink-0" size={15} />
                <p className="underline text-sm font-light cursor-pointer pl-2">
                  4 Reviews
                </p>
                <div className="border-r-2 border-gray-500 size-4"></div>
                <p className="px-4 text-sm font-light ">ID : ST1234</p>
              </div>
              <div className="py-6">
                <p className="font-semibold">
                  Fabric{" "}
                  <span className="text-sm font-light">
                    Cashwool Fabric in Whisper White
                  </span>
                </p>
              </div>
              <div>
                <div className="bg-gray-500 border">
                  <p>
                    <Settings />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
