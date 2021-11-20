import ListItem from "./ListItem";
import { useRouter } from "next/router";
import ListContainerHeader from "./ListContainerHeader";

export default ({ list, label }) => {
  const router = useRouter();
  const path = router.asPath;
  const postPrefix = "/posts";

  const innerContent = (
    <div className="relative flex-none w-full h-full max-h-screen min-h-screen overflow-y-auto bg-white border-r border-gray-150 md:w-80 xl:w-96 dark:bg-gray-900 dark:border-gray-800">
      <ListContainerHeader label={label} />
      {list.map((item) => {
        let href, asUrl;
        href = asUrl = item.href;
        let isExternal = true;
        let uniqueKey = item.slug ? item.slug : item.href;
        if (path.indexOf(postPrefix) >= 0) {
          href = postPrefix + "/[slug]";
          asUrl = postPrefix + "/" + item.slug;
          isExternal = false;
        }
        return (
          <ListItem
            key={uniqueKey}
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

  const showListContainerOnMobile = path.split("/").length === 2;

  return (
    <>
      {showListContainerOnMobile ? (
        innerContent
      ) : (
        <div className="hidden md:flex">{innerContent}</div>
      )}
    </>
  );
};
