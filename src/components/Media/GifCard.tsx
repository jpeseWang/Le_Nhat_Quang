import React from "react";
import Image from "next/image";
interface GifProps {
  title: string;
  imgSrc: string;
}
export const GifCard: React.FC<GifProps> = ({ title, imgSrc }) => {
  return (
    <div className="my-1 h-auto w-[255px]">
      <Image
        src={imgSrc}
        alt="Gif Card"
        width={255}
        height={255}
        className="rounded"
      />
    </div>
  );
};
