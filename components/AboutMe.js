import Image from "next/image";

import { FaHandshake } from "react-icons/fa";
import {
  SiAndroid,
  SiDart,
  SiFlutter,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import ankan from "../public/assets/images/ankan.jpg";

export default function AboutMe() {
  return (
    <div className="text-center text-black mb-10">
      <div className="pt-10 mx-auto flex justify-center ">
        <div className="border-4 border-gray-400 dark:border-gray-200 rounded-full transform hover:scale-105 transition duration-300">
          <Image
            src={ankan}
            alt="Ankan's Image"
            height={282}
            width={282}
            sizes="30vw"
            priority
            className="rounded-full filter dark:grayscale "
          />
        </div>
      </div>
      <div className="text-4xl mt-10 dark:text-white font-bold flex justify-center gap-4">
        Hi I&apos;m Ankan{" "}
        <FaHandshake className="w-10 md:w-16 text-orange-300 dark:text-amber-700  transform hover:translate-y-2 transition duration-300" />
      </div>
      <p className="text-2xl mt-2 text-gray-800 dark:text-gray-200 font-semibold">
        Learning and Building Flutter Apps
      </p>
      <div className="text-xl text-gray-600 dark:text-gray-400 font-medium mt-2">
        <p>an App Developer from Kolkata, WB, India</p>
        <p>I specialize in building Flutter Apps</p>
      </div>
      <div className="flex justify-evenly mt-6 md:mt-20">
        <SiDart className="text-sky-800 w-16 h-16 md:w-36 md:h-36" />
        <SiFlutter className="text-sky-500 w-16 h-16 md:w-36 md:h-36" />
        <SiAndroid className="text-green-500 w-16 h-16 md:w-36 md:h-36" />
        <SiReact className="text-teal-500 w-16 h-16 md:w-36 md:h-36" />
        <SiJavascript className="text-yellow-400 w-16 h-16 md:w-36 md:h-36" />
      </div>
    </div>
  );
}
