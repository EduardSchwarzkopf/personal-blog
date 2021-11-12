import Link from "next/link";
import DateFormatter from "./date-formatter";

// Ouput first 20 Words if the content is longer than 20 words
const truncate = (content, limit = 20) => {
  if (content.split(" ").length > limit) {
    return content.split(" ").slice(0, limit).join(" ") + " ...";
  }
  return content;
};

export default ({
  title,
  description,
  href,
  as,
  isExternal,
  date,
  isActive,
}) => {
  const activeBackgroundColor = "bg-gray-100";
  const activeBackground = isActive ? activeBackgroundColor : null;
  const dateString = date ? <DateFormatter dateString={date} /> : null;

  return (
    <Link href={href} as={as}>
      <a
        target={isExternal ? "_blank" : ""}
        rel={isExternal ? "noopener, noreferrer" : ""}
        className={`flex py-3 lg:py-2 px-3.5 border-b lg:border-none rounded-md hover:${activeBackgroundColor} m-2 text-sm ${activeBackground}`}
      >
        <div className="flex flex-col justify-center">
          <div className="font-medium">{title}</div>
          <div className="text-accents-3">{dateString}</div>
          <div className="">{truncate(description)}</div>
        </div>
      </a>
    </Link>
  );
};
