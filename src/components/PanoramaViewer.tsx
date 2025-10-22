import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import React from 'react';

interface Props {
  viewIndex: number;
  children?: React.ReactNode; // ✅ 追加
}

function PanoramaViewer({ viewIndex, children }: Props) {
  const images = [
    '/images/view1.jpg',
    '/images/view2.jpg',
    '/images/view3.jpg',
    '/images/view4.jpg',
    '/images/view5.jpg',
  ];

  const texture = useLoader(TextureLoader, images[viewIndex]);

  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas className="w-full h-full">
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.8}
        />
        <mesh>
          <sphereGeometry args={[500, 60, 40]} />
          <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </mesh>

        {/* ✅ 矢印や追加要素をここで描画 */}
        {children}
      </Canvas>
    </div>
  );
}

export default PanoramaViewer;