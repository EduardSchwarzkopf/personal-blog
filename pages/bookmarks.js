import Layout from "../components/layout";
import { bookmarkList } from "../lib/bookmarkList";

export default function Bookmarks() {
  return (
    <>
      <Layout list={bookmarkList}></Layout>
    </>
  );
}
