import Image from "next/image";

import ankan from "../public/assets/images/ankan.jpg";

export default function AboutMe() {
  return (
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
  );
}
