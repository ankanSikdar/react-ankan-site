import Image from "next/image";

import android from "../public/assets/images/android.png";
import ankan from "../public/assets/images/ankan.jpg";
import dart from "../public/assets/images/dart.png";
import flutter from "../public/assets/images/flutter.png";
import js from "../public/assets/images/javascript.png";
import react from "../public/assets/images/react.png";

export default function AboutMe() {
  return (
    <div className="text-center text-black mb-10">
      <div className="pt-10 mx-auto flex justify-center ">
        <div className="border-4 border-gray-400 dark:border-gray-200 rounded-full">
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
      <h1 className="text-4xl mt-10 dark:text-white font-bold">
        Hi I&apos;m Ankan 🤝🏽
      </h1>
      <p className="text-2xl mt-2 text-gray-800 dark:text-gray-200 font-semibold">
        Learning and Building Flutter Apps
      </p>
      <div className="text-xl text-gray-600 dark:text-gray-400 font-medium mt-2">
        <p>an App Developer from Kolkata, WB, India</p>
        <p>I specialize in building Flutter Apps</p>
      </div>
      <div className="my-10 flex justify-evenly">
        <Image src={dart} alt="dart" />
        <Image src={flutter} alt="flutter" />
        <Image src={android} alt="android" />
        <Image src={react} alt="react" />
        <Image src={js} alt="javascript" />
      </div>
    </div>
  );
}
