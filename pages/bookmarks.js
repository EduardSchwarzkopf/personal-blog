import Layout from "../components/layout";
import { bookmarkList } from "../lib/bookmarkList";
import { LABEL_BOOKMARK } from "../lib/constants";

export default function Bookmarks() {
  return (
    <>
      <Layout list={bookmarkList} label={LABEL_BOOKMARK}></Layout>
    </>
  );
}
