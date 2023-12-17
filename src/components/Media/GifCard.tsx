import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/20/solid";
interface GifProps {
  title: string;
  imgSrc: string;
  id: string;
}
export const GifCard: React.FC<GifProps> = ({ title, imgSrc, id }) => {
  return (
    <Link href={`/gifs/${id}`}>
      <div className="group relative my-2 h-auto max-w-full">
        <Image
          src={imgSrc}
          alt="Gif Card"
          width={255}
          height={255}
          className=" cursor-pointer rounded hover:opacity-30"
        />
        <div className="absolute bottom-1 z-50 hidden px-4 font-medium text-white group-hover:inline-block ">
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};
