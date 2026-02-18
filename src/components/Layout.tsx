import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingBookCTA from "./FloatingBookCTA";
import JsonLdSchema from "./JsonLdSchema";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <JsonLdSchema />
    <Header />
    <main>{children}</main>
    <Footer />
    <FloatingBookCTA />
  </>
);

export default Layout;
