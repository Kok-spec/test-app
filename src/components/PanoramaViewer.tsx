import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import panoramaImage from './panorama-image.jpg';

const PanoramaViewer = () => {
  const texture = useLoader(TextureLoader, panoramaImage);

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
      </Canvas>
    </div>
  );
};

export default PanoramaViewer;