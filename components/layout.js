import Footer from "../components/footer";
import Meta from "../components/meta";
import ListContainer from "./ListContainer";
import Sidebar from "./sidebar";

export default function Layout({ children, list }) {
  return (
    <>
      <Meta />
      <div className="flex w-full h-full min-h-screen">
        <Sidebar />
        <div className="flex flex-1">
          {list ? <ListContainer list={list} /> : null}
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
