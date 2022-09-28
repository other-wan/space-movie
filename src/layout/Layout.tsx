
import { ReactNode } from "react";
import SearchManager from "../components/views/SearchManager";

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return ( 
        <main>
            <SearchManager />
            {children}
        </main>
    );
}
 
export default Layout;
