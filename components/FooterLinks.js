import { IoLogoGooglePlaystore } from "react-icons/io5";
import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
import Heading from "./Heading";

export function SocialMediaLink({ link, children }) {
  return (
    <div className="p-8">
      <div className="p-2 hover:ring-4 ring-gray-300  transition-all rounded-md">
        <a
          href={link}
          className=" text-gray-700 dark:text-gray-200"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </div>
    </div>
  );
}

export default function FooterLinks() {
  return (
    <div>
      <Heading title={"Connect with me"} />
      <div className="flex mx-auto justify-evenly flex-wrap">
        <SocialMediaLink link={"https://www.linkedin.com/in/ankansikdar/"}>
          <SiLinkedin size={60} />
        </SocialMediaLink>
        <SocialMediaLink link={"https://github.com/ankanSikdar"}>
          <SiGithub size={60} />
        </SocialMediaLink>
        <SocialMediaLink link={"https://www.instagram.com/ankan_sikdar/"}>
          <SiInstagram size={60} />
        </SocialMediaLink>
        <SocialMediaLink link={"https://twitter.com/ankan_sikdar"}>
          <SiTwitter size={60} />
        </SocialMediaLink>
        <SocialMediaLink link={"mailto:contact@ankan.dev"}>
          <SiGmail size={60} />
        </SocialMediaLink>
        <SocialMediaLink
          link={"https://play.google.com/store/apps/dev?id=6059531150910740578"}
        >
          <IoLogoGooglePlaystore size={60} />
        </SocialMediaLink>
      </div>
    </div>
  );
}
