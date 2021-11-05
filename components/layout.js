import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="flex w-full h-full min-h-screen">
        <Sidebar />
        <div className="flex flex-1 my-20 md:pl-20 lg:pl-80 pl-8">
          <main>{children}</main>
        </div>
      <Footer />
      </div>
    </>
  );
}
