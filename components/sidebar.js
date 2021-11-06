import { useRouter } from "next/dist/client/router";
import {
  ExternalLinkIcon,
  GitHubIcon,
  HomeIcon,
  PostsIcon,
  TwitterIcon,
} from "./Icon";
import { NavigationLink } from "./NavigiationLink";

export default function SidebarNavigation() {
  const router = useRouter();
  const links = [
    {
      label: "Home",
      icon: HomeIcon,
      href: "/",
      trailingAccessory: null,
      isActive: router.asPath === "/",
    },

    {
      label: "Posts",
      icon: PostsIcon,
      href: "/posts",
      trailingAccessory: null,
      isActive: router.asPath.indexOf("/posts") >= 0,
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

  return (
    <nav className="fixed mt-4 -translate-x-full lg:fixed flex flex-none flex-col lg:translate-x-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-56 2xl:w-72 3xl:w-80 z-30 lg:z-auto max-h-screen h-full min-h-screen overflow-y-auto transition duration-200 ease-in-out transform bg-white border-r pb-10 sm:pb-0 border-gray-150 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex mt-4 ml-4">
        <h1 className="text-1xl font-bold">Eduard</h1>
      </div>
      <ul className="flex-1 px-3 py-3 space-y-1">
        {links.map((link, i) => {
          if (typeof link === "string") {
            return (
              <li
                key={i}
                className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 dark:text-white text-opacity-40"
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
