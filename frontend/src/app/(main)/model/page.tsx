"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "../../../../public/models/Sofa1-mod";

const Page = () => {
  return (
    <div className="h-screen flex justify-center pt-32">
      <Canvas shadows>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <directionalLight position={[-10, 10, 5]} intensity={1} castShadow />
          <Environment preset="apartment" />
          <OrbitControls
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            enableZoom={true}
            enablePan={true}
            minDistance={1}
            maxDistance={3}
            target={[0, 0, 0]}
          />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Page;
