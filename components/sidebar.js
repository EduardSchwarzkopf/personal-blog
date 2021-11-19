import { useRouter } from "next/dist/client/router";
import {
  BookmarkIcon,
  ExternalLinkIcon,
  GitHubIcon,
  HomeIcon,
  Logo,
  PostsIcon,
  TwitterIcon,
} from "./Icon";
import { NavigationLink } from "./NavigiationLink";
import { useNavigation } from "./Providers/NavigationContext";
import ToggleMenuButton from "./ToggleMenuButton";
import {
  TWITTER_USERNAME,
  GITHUB_USERNAME,
  LABEL_BOOKMARK,
  LABEL_POSTS,
} from "../lib/constants";

export default function SidebarNavigation() {
  const router = useRouter();
  const { isOpen } = useNavigation();
  const links = [
    {
      label: "Home",
      icon: HomeIcon,
      href: "/",
      trailingAccessory: null,
      isActive: router.asPath === "/",
    },

    {
      label: LABEL_POSTS,
      icon: PostsIcon,
      href: "/posts",
      trailingAccessory: null,
      isActive: router.asPath.indexOf("/posts") >= 0,
    },

    {
      label: LABEL_BOOKMARK,
      icon: BookmarkIcon,
      href: "/bookmarks",
      trailingAccessory: null,
      isActive: router.asPath.indexOf("/bookmarks") >= 0,
    },

    "Social",

    {
      label: "Twitter",
      icon: TwitterIcon,
      href: `https://twitter.com/${TWITTER_USERNAME}`,
      trailingAccessory: ExternalLinkIcon,
      isActive: false,
      isExternal: true,
    },
    {
      label: "Github",
      icon: GitHubIcon,
      href: `https://github.com/${GITHUB_USERNAME}`,
      trailingAccessory: ExternalLinkIcon,
      isActive: false,
      isExternal: true,
    },
  ];

  return (
    <nav
      className={`absolute ${
        isOpen ? null : "-translate-x-full"
      } inset-y-0 left-0 translate-x-0 lg:relative flex flex-none flex-col lg:translate-x-0 w-3/4 sm:w-1/2 md:w-80 lg:w-96 2xl:w-72 3xl:w-80 z-30 lg:z-auto min-h-screen overflow-y-auto transition duration-200 ease-in-out transform bg-white border-r pb-10 sm:pb-0 border-gray-150`}
    >
      <div className="flex mt-4 ml-4 space-x-2 items-center">
        <ToggleMenuButton />
        <span className="flex text-primary items-center justify-center">
          <Logo />
        </span>
        <span className="flex-1 text-black text-1xl font-bold">Eduard</span>
      </div>
      <ul className="flex-1 px-3 py-3 space-y-1">
        {links.map((link, i) => {
          if (typeof link === "string") {
            return (
              <li
                key={i}
                className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 text-opacity-40"
              >
                {link}
              </li>
            );
          }

          return <NavigationLink key={i} link={link} />;
        })}
      </ul>
      <div className="text-center text-xs text-accents-3 mb-5">
        <p>
          powered by{" "}
          <a
            href="https://github.com/brianlovin/briOS"
            target="_blank"
            rel="noopener noreferrer"
          >
            briOS
          </a>
        </p>
      </div>
    </nav>
  );
}
