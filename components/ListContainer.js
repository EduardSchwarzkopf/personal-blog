import ListItem from "./ListItem";
import { useRouter } from "next/router";
import ListContainerHeader from "./ListContainerHeader";

export default ({ list }) => {
  const router = useRouter();
  const path = router.asPath;
  const postPrefix = "/posts";

  const innerContent = (
    <div className="relative flex-none w-full min-h-screen overflow-y-auto bg-white border-r border-gray-150 md:w-80 xl:w-96">
      <ListContainerHeader label={/* TODO: Add generic label */ ""} />
      {list.map((item) => {
        let href, asUrl;
        href = asUrl = item.href;
        let isExternal = true;
        if (path.indexOf(postPrefix) >= 0) {
          href = postPrefix + "/[slug]";
          asUrl = postPrefix + "/" + item.slug;
          isExternal = false;
        }
        return (
          <ListItem
            key={item.slug}
            href={href}
            as={asUrl}
            isExternal={isExternal}
            title={item.title}
            date={item.date}
            description={item.excerpt}
            isActive={item.active}
          />
        );
      })}
    </div>
  );

  return (
    <>
      {path === postPrefix ? (
        innerContent
      ) : (
        <div className="hidden md:flex">{innerContent}</div>
      )}
    </>
  );
};
