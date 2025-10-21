import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import panoramaImage from './panorama-image.jpg'; // ←同じフォルダなので ./ でOK！

const PanoramaViewer = () => {
  const texture = useLoader(TextureLoader, panoramaImage);

  return (
    <Canvas className="w-full h-full">
      <OrbitControls enableZoom={false} />
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
    </Canvas>
  );
};

export default PanoramaViewer;