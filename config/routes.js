import { defaultSEO, extendSEO } from "./seo";

const routes = {
  home: {
    label: "Home",
    path: "/",
    seo: defaultSEO,
  },
  posts: {
    label: "Posts",
    path: "/posts",
    seo: extendSEO({
      title: "Posts",
      description: "Sharing my stories about my development journey",
      image: "og/posts.png",
      url: "posts",
    }),
  },
  bookmarks: {
    label: "Bookmarks",
    path: "/bookmarks",
    seo: extendSEO({
      title: "Bookmarks",
      description: "Findings on the internet i find usefull",
      image: "og/bookmarks.png",
      url: "bookmarks",
    }),
  },
};

export default routes;
