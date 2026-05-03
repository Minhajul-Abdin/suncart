import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="mt-10 bg-[url('https://i.ibb.co/hRrs7hh5/Gemini-Generated-Image-cyqscscyqscscyqs.png')] h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 p-20">
          <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Summer Sale <span className="text-8xl font-extrabold">50<span className="text-7xl font-light text-yellow-500">%</span></span> OFF
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Summer of a lifetime
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="px-10 bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
