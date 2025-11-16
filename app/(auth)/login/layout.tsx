import { Footer } from "../../(marketing)/_components/footer";
import BootstrapNavbar from "../../(marketing)/_components/bootstrap-navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MarketingLayout;