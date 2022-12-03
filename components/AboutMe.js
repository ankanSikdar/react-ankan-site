import Image from "next/image";

import ankan from "../public/assets/images/ankan.jpg";

export default function AboutMe() {
  return (
    <div className="text-center text-black ">
      <div className="pt-10 mx-auto flex justify-center">
        <Image
          src={ankan}
          alt="Ankan's Image"
          height={176}
          width={176}
          sizes="30vw"
          priority
          className="rounded-full filter dark:grayscale"
        />
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
    </div>
  );
}
