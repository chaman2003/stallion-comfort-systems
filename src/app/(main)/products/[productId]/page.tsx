"use client";

import Navigation from "@/components/global/navigation";
import ProductTable from "@/components/global/productTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Settings, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  const [imageState, setImageState] = React.useState("/assets/1.jpg");

  const imageArray = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
    "/assets/6.jpg",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 md:pt-24">
        <div className="container px-10 flex justify-between gap-14 items-center mb-8">
          <div className="py-6 flex items-center">
            <div className="w-1/4 space-y-4">
              {imageArray.map((src, index) => (
                <Image
                  onClick={() => {
                    setImageState(src);
                  }}
                  src={src}
                  alt="Images"
                  className="cursor-pointer border p-2"
                  width={100}
                  height={100}
                />
              ))}
            </div>
            <div className="w-3/4">
              <Image
                className="w-full"
                width={600}
                height={600}
                src={imageState}
                alt="Main Image"
              />
            </div>
          </div>
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

              <div className="border h-14 mb-6 w-full flex justify-between items-center">
                <span className="mx-auto w-full p-2 text-center border-r hover:bg-gray-100 cursor-pointer">
                  1 Seater
                </span>
                <span className="mx-auto w-full p-2 text-center hover:bg-gray-100 cursor-pointer">
                  2 Seater
                </span>
              </div>
              <div>
                <div className="overflow-scroll">
                  <p className="p-4 border bg-gray-50 flex justify-between font-bold w-full">
                    Fabric
                    <Settings />
                  </p>
                  <div className="border  w-full">
                    <div className="p-4 flex flex-wrap gap-3">
                      <Image
                        alt="fabric-1"
                        className="border"
                        width={100}
                        height={100}
                        src={"/assets/fabric-1.jpg"}
                      />
                      <Image
                        alt="fabric-1"
                        className="border"
                        width={100}
                        height={100}
                        src={"/assets/fabric-1.jpg"}
                      />
                      <Image
                        alt="fabric-1"
                        className="border"
                        width={100}
                        height={100}
                        src={"/assets/fabric-1.jpg"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-6">
                <Button
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                  className="w-full text-lg cursor-pointer font-semibold py-2"
                  size={"lg"}
                >
                  Get a quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductTable />
    </div>
  );
};

export default Products;
