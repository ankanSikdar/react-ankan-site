import Image from "next/image";
import featuredImage from "../public/assets/images/featured.png";
import Heading from "./Heading";

function FeaturedLinks() {
  return (
    <div className="flex flex-col items-center mt-4 ">
      <div className="hover:ring-4 ring-gray-600 dark:ring-gray-400  transition-all rounded-lg mt-3 ">
        <a
          href="https://github.com/ankanSikdar/flutter-wuphf-chat"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex  w-48 h-14 bg-[#24292F] text-white rounded-lg items-center justify-center cursor-pointer ">
            <div className="mr-3">
              <svg viewBox="0 0 496 512" width="30">
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </div>
            <div>
              <div className="text-xs">VIEW SOURCE CODE</div>
              <div className="text-xl font-semibold font-sans -mt-1">
                GitHub
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="hover:ring-4 ring-gray-600 dark:ring-gray-400  transition-all rounded-lg mt-3 ">
        <a
          href="https://play.google.com/store/apps/details?id=dev.ankan.wuphf_chat"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex w-48 h-14 bg-black text-white rounded-lg items-center justify-center cursor-pointer">
            <div className="mr-3">
              <svg viewBox="30 336.7 120.9 129.2" width="30">
                <path
                  fill="#FFD400"
                  d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                />
                <path
                  fill="#FF3333"
                  d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                />
                <path
                  fill="#48FF48"
                  d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                />
                <path
                  fill="#3BCCFF"
                  d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs">GET IT ON</div>
              <div className="text-xl font-semibold font-sans -mt-1">
                Google Play
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default function Featured() {
  return (
    <div className="mt-20 mx-2 pb-20">
      <Heading title={"Featured Project"} />

      <div className="max-w-md mx-auto dark:bg-gray-800 rounded-xl shadow-lg bg-gray-300 overflow-hidden md:max-w-5xl border-2 border-gray-500">
        <div className="md:flex">
          <div className="flex-col mb-8">
            <div className="uppercase tracking-wide text-6xl text-white font-semibold mt-8 text-center">
              <div className="flex items-center justify-center">
                <Image
                  src={featuredImage}
                  alt="featured"
                  height={100}
                  width={100}
                  className="ml-6 md:ml-8"
                />
                <div>Wuphf Chat</div>
              </div>
            </div>
            <FeaturedLinks />
          </div>

          <div className="py-12 px-8 md:px-8 bg-gray-200 dark:bg-gray-700 border-l-2 border-gray-500">
            <a
              href="#"
              className="block mt-1 text-xl leading-tight font-medium text-gray-800 dark:text-gray-200 hover:underline"
            >
              Wuphf Chat is a full fledged chatting application made with
              Flutter
            </a>
            <ul className="list-disc ml-8 mt-3 text-gray-600 dark:text-gray-300 text-lg">
              <li>Open Source</li>
              <li>1 to 1 Chat</li>
              <li>Group Chat</li>
              <li>Get Notifications for New Chat and New Groups</li>
              <li>Robust User Presence</li>
              <li>Send Emojis and Images</li>
              <li>No need to refresh. Everything is updated realtime</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
