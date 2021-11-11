import Link from "next/link";
import { useNavigation } from "./Providers/NavigationContext";

export function NavigationLink({
  link: {
    href,
    label,
    icon: Icon,
    trailingAccessory: Accessory,
    isActive,
    isExternal,
  },
}) {
  const { toggleMenu } = useNavigation();
  return (
    <li className="flex items-stretch space-x-1">
      <Link href={href}>
        <a
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          onClick={isExternal ? null : toggleMenu}
          className={`flex flex-1 space-x-3 px-2 py-1.5 text-sm font-medium text-hl-color rounded-md hover:bg-gray-100 ${
            isActive ? "bg-gray-100" : null
          }`}
        >
          <span className="flex items-center justify-center">
            <Icon />
          </span>
          <span className="flex-1">{label}</span>
          {Accessory && (
            <span className="flex items-center justify-center w-4 text-black dark:text-white text-opacity-40">
              <Accessory />
            </span>
          )}
        </a>
      </Link>
    </li>
  );
}
