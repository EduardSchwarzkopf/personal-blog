import Footer from "../components/footer";
import Meta from "../components/meta";
import Sidebar from "./sidebar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Sidebar>
        <div className="min-h-screen">
          <main className="mt-40">{children}</main>
        </div>
      </Sidebar>
      <Footer />
    </>
  );
}
