import ListItem from "./ListItem";

export default ({ list }) => {
  return (
    <div className="relative flex-none w-full min-h-screen overflow-y-auto bg-white border-r border-gray-150 md:w-80 xl:w-96">
      {list.map((post) => (
        <ListItem
          key={post.slug}
          href="/posts/[slug]"
          as={`/posts/${post.slug}`}
          title={post.title}
          date={post.date}
          description={post.excerpt}
          isActive={post.active}
        />
      ))}
    </div>
  );
};
