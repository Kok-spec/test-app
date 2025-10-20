interface Props {
  className?: string;
}

function KokspecDesktop({ className = "" }: Props) {
  return (
    <div className={`relative top-1.5 -left-0.5 w-[1440px] h-[1024px] bg-white ${className}`}>
      <div className="absolute top-[197px] left-[103px] w-[751px] h-[629px] bg-[#d9d9d9]" />

      <div className="absolute top-[504px] left-[399px] h-4 flex items-center justify-center text-black whitespace-nowrap">
        360度カメラ画像挿入
      </div>

      <div className="absolute top-[283px] left-[966px] w-[58px] h-[543px] bg-[#d9d9d9]" />
      <div className="absolute top-[555px] left-[980px] w-[382px] h-[65px] bg-[#d9d9d9]" />
      <div className="absolute top-[147px] left-[1301px] w-[61px] h-[459px] bg-[#d9d9d9]" />

      <div className="absolute top-[295px] left-[960px] w-[69px] h-[63px] bg-[#fcff82] rounded-full" />
      <div className="absolute top-[557px] left-[966px] w-[69px] h-[63px] bg-[#fcff82] rounded-full" />
      <div className="absolute top-[763px] left-[955px] w-[69px] h-[63px] bg-[#fcff82] rounded-full" />
      <div className="absolute top-[555px] left-[1293px] w-[69px] h-[63px] bg-[#fcff82] rounded-full shadow-md" />
      <div className="absolute top-[147px] left-[1293px] w-[69px] h-[63px] bg-[#fcff82] rounded-full" />
      <div className="absolute top-[295px] left-[960px] w-[69px] h-[63px] bg-[#fcff82] rounded-full" />
    </div>
  );
}

export default KokspecDesktop;