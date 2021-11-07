import Link from "next/link";

// Ouput first 20 Words if the content is longer than 20 words
const truncate = (content, limit = 20) => {
  if (content.split(" ").length > limit) {
    return content.split(" ").slice(0, limit).join(" ") + " ...";
  }
  return content;
};

export default ({ title, description, href, as, date, isActive }) => {
  const activeBackground = isActive ? "bg-gray-100" : null;
  return (
    <Link href={href} as={as}>
      <a
        className={`flex py-3 lg:py-2 px-3.5 space-x-3 border-b lg:border-none border-gray-100 text-sm ${activeBackground}`}
      >
        <div className="flex flex-col justify-center space-y-1">
          <div className="font-medium line-clamp-3 text-gray-1000 dark:text-gray-100">
            {title}
          </div>
          <div className="line-clamp-2 text-gray-1000 dark:text-white text-opacity-60">
            {truncate(description)}
          </div>
          <div className="line-clamp-1 text-gray-1000 dark:text-white text-opacity-40">
            {date}
          </div>
        </div>
      </a>
    </Link>
  );
};
