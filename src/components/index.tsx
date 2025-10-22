import { useState } from "react";
import PanoramaWithArrows from "./PanoramaWithArrows";

interface Props {
  className?: string;
}

function KokspecDesktop({ className = "" }: Props) {
  const [viewIndex, setViewIndex] = useState(0);

  const buttonBase =
    "absolute w-[69px] h-[63px] rounded-full transition-all duration-300 hover:shadow-lg";

  return (
    <div className={`relative w-[1440px] h-[1024px] bg-white ${className}`}>
      {/* 360度ビュー */}
      <div className="absolute top-[197px] left-[103px] w-[751px] h-[629px] bg-[#f9f9f9] overflow-hidden rounded-lg">
        <PanoramaWithArrows viewIndex={viewIndex} onNavigate={setViewIndex} />
      </div>

      {/* 他のUI */}
      <div className="absolute top-[283px] left-[966px] w-[58px] h-[543px] bg-[#eaeaea]" />
      <div className="absolute top-[555px] left-[980px] w-[382px] h-[65px] bg-[#eaeaea]" />
      <div className="absolute top-[147px] left-[1301px] w-[61px] h-[459px] bg-[#eaeaea]" />

      {/* 黄色い丸ボタン（縁を細く赤に） */}
      <button
        className={`${buttonBase} top-[147px] left-[1293px] ${
          viewIndex === 0
            ? "bg-[#fcff82] ring-2 ring-red-400 scale-110 shadow-md"
            : "bg-[#fcff82]"
        }`}
        onClick={() => setViewIndex(0)}
      />
      <button
        className={`${buttonBase} top-[295px] left-[960px] ${
          viewIndex === 1
            ? "bg-[#fcff82] ring-2 ring-red-400 scale-110 shadow-md"
            : "bg-[#fcff82]"
        }`}
        onClick={() => setViewIndex(1)}
      />
      <button
        className={`${buttonBase} top-[557px] left-[966px] ${
          viewIndex === 2
            ? "bg-[#fcff82] ring-2 ring-red-400 scale-110 shadow-md"
            : "bg-[#fcff82]"
        }`}
        onClick={() => setViewIndex(2)}
      />
      <button
        className={`${buttonBase} top-[763px] left-[955px] ${
          viewIndex === 3
            ? "bg-[#fcff82] ring-2 ring-red-400 scale-110 shadow-md"
            : "bg-[#fcff82]"
        }`}
        onClick={() => setViewIndex(3)}
      />
      <button
        className={`${buttonBase} top-[555px] left-[1293px] ${
          viewIndex === 4
            ? "bg-[#fcff82] ring-2 ring-red-400 scale-110 shadow-md"
            : "bg-[#fcff82]"
        }`}
        onClick={() => setViewIndex(4)}
      />
    </div>
  );
}

export default KokspecDesktop;