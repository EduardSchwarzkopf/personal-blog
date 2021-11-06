import Link from "next/link";

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
  const textColor = isActive ? "text-primary" : "600";
  return (
    <li className="flex items-stretch space-x-1">
      <Link href={href}>
        <a
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={`flex flex-1 space-x-3 px-2 py-1.5 text-sm font-medium ${
            isActive ? "text-hl-color" : "text-accents-3 hover:text-hl-color"
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
