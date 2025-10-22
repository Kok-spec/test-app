import { Html } from "@react-three/drei";
import PanoramaViewer from "./PanoramaViewer";

interface Arrow {
  position: [number, number, number];
  next: number;
  type: '↑' | '↓' | '→' | '←';
}

interface Props {
  viewIndex: number;
  onNavigate: (index: number) => void;
}

function PanoramaWithArrows({ viewIndex, onNavigate }: Props) {
  const arrows: Arrow[][] = [
    // Index = 0右上
    [{ position: [100, 0, 0], next: 4, type: '↓' }],
    // 左上1
    [
      { position: [-100, 0, 0], next: 2, type: '↓' },
    ],
    // 左真ん中2
    [
      { position: [-100, 0, 0], next: 1, type: '↑' },
      { position: [100, 0, 0], next: 3, type: '↓' },
      { position: [50, 0, 70], next: 4, type: '→' },
    ],
    // 左下3
    [
      { position: [-100, 0, 0], next: 2, type: '↑' },
    ],
    // 右下4
    [{ position: [-100, 0, 0], next: 2, type: '←' },
     { position: [50, 0, 0], next: 0, type: '↑' }
    ],
  ];

  return (
    <PanoramaViewer viewIndex={viewIndex}>
      {arrows[viewIndex].map((arrow, i) => (
        <Html key={i} position={arrow.position}>
          <button
            className="arrow-button text-3xl text-white bg-black bg-opacity-50 px-2 py-1 rounded hover:bg-opacity-80 transition"
            onClick={() => onNavigate(arrow.next)}
          >
            {arrow.type}
          </button>
        </Html>
      ))}
    </PanoramaViewer>
  );
}

export default PanoramaWithArrows;