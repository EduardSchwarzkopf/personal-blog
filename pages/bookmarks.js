import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import routes from "../config/routes";
import { bookmarkList } from "../lib/bookmarkList";
import { LABEL_BOOKMARK } from "../lib/constants";

export default function Bookmarks() {
  return (
    <>
      <NextSeo
        title={routes.bookmarks.label}
        description={routes.bookmarks.seo.description}
        openGraph={{
          title: routes.bookmarks.label,
          description: routes.bookmarks.seo.description,
          images: [
            {
              url: routes.bookmarks.seo.image,
              alt: routes.bookmarks.seo.description,
            },
          ],
        }}
      />

      <Layout list={bookmarkList} label={LABEL_BOOKMARK}></Layout>
    </>
  );
}
