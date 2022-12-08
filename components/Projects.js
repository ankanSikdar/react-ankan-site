import Image from "next/image";
import drinksAppImage from "../public/assets/images/drinks-app.png";
import expenseAppImage from "../public/assets/images/expense-app.png";
import instagramAppImage from "../public/assets/images/instagram-app.png";
import placesAppImage from "../public/assets/images/places-app.png";
import shopAppImage from "../public/assets/images/shop-app.png";
import Heading from "./Heading";

function ProjectsLink({ gitHubUrl }) {
  return (
    <div className="hover:ring-4 ring-gray-400  transition-all rounded-lg ">
      <a href={gitHubUrl} target="_blank" rel="noreferrer" className="">
        <div className="flex mt-3 w-48 h-14 bg-[#24292F] text-white rounded-lg items-center justify-center cursor-pointer ">
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
            <div className="text-xl font-semibold font-sans -mt-1">GitHub</div>
          </div>
        </div>
      </a>
    </div>
  );
}

function ProjectCard({ appImage, appName, appUrl }) {
  return (
    <div className="max-w-md mx-auto dark:bg-gray-800 rounded-xl shadow-lg bg-gray-200 border-4 border-gray-400 md:max-w-sm">
      <div className="flex">
        <div className="flex flex-col mb-8 items-center text-center px-10 py-4">
          <div className="uppercase tracking-wide text-4xl md:text-4xl text-black dark:text-white font-semibold my-6 text-center">
            <div className="flex items-center justify-center gap-10 relative">
              <Image
                src={appImage}
                alt="featured"
                width={"100"}
                height={"100"}
                // height={120}
                // width={120}
                sizes={""}
                className="w-24 h-24 rounded-md p-2 border-4 border-gray-400 bg-gray-100 dark:bg-gray-900"
              />
              <div className="">{appName}</div>
            </div>
          </div>
          <div>
            <ProjectsLink gitHubUrl={appUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <Heading title={"Projects"} />

      <div className="flex gap-10 flex-wrap mx-2 md:mx-10">
        <ProjectCard
          appName={"Shop App"}
          appImage={shopAppImage}
          appUrl={"https://github.com/ankanSikdar/flutter-shop-app"}
        />
        <ProjectCard
          appName={"Favorite Places"}
          appImage={placesAppImage}
          appUrl={"https://github.com/ankanSikdar/flutter-favorite-places"}
        />
        <ProjectCard
          appName={"Drinks Wiki"}
          appImage={drinksAppImage}
          appUrl={"https://github.com/ankanSikdar/flutter-drinks-wiki"}
        />
        <ProjectCard
          appName={"Expense Tracker"}
          appImage={expenseAppImage}
          appUrl={"https://github.com/ankanSikdar/flutter-expense-tracker"}
        />
        <ProjectCard
          appName={"Insta Clone"}
          appImage={instagramAppImage}
          appUrl={"https://github.com/ankanSikdar/flutter-instagram"}
        />
      </div>
    </div>
  );
}
