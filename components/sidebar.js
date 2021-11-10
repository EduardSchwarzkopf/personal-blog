import { useRouter } from "next/dist/client/router";
import { useToggle } from "../lib/useHooks";
import {
  BookmarkIcon,
  ExternalLinkIcon,
  GitHubIcon,
  HomeIcon,
  PostsIcon,
  TwitterIcon,
} from "./Icon";
import { NavigationLink } from "./NavigiationLink";

export default function SidebarNavigation() {
  const router = useRouter();
  const [toggle, setToggle] = useToggle(false);
  const links = [
    {
      label: "Home",
      icon: HomeIcon,
      href: "/",
      trailingAccessory: null,
      isActive: router.asPath === "/",
    },

    {
      label: "Beiträge",
      icon: PostsIcon,
      href: "/posts",
      trailingAccessory: null,
      isActive: router.asPath.indexOf("/posts") >= 0,
    },

    {
      label: "Lesezeichen",
      icon: BookmarkIcon,
      href: "/bookmarks",
      trailingAccessory: null,
      isActive: router.asPath.indexOf("/bookmarks") >= 0,
    },

    "Social",

    {
      label: "Twitter",
      icon: TwitterIcon,
      href: "https://twitter.com/EduSchwarzkopf",
      trailingAccessory: ExternalLinkIcon,
      isActive: false,
      isExternal: true,
    },
    {
      label: "Github",
      icon: GitHubIcon,
      href: "https://github.com/shinySonic",
      trailingAccessory: ExternalLinkIcon,
      isActive: false,
      isExternal: true,
    },
  ];

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  // -translate-x-full for mobile menu
  return (
    <nav
      className={`fixed ${
        toggle ? "-translate-x-full" : null
      } inset-y-0 left-0 translate-x-0 lg:relative flex flex-none flex-col lg:translate-x-0 w-3/4 sm:w-1/2 md:w-80 lg:w-96 2xl:w-72 3xl:w-80 z-30 lg:z-auto min-h-screen overflow-y-auto transition duration-200 ease-in-out transform bg-white border-r pb-10 sm:pb-0 border-gray-150`}
    >
      <div className="flex mt-4 ml-4">
        <h1 className="text-1xl font-bold">Eduard</h1>
      </div>
      <button
        onClick={handleToggle}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Button
      </button>
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
    </nav>
  );
}
