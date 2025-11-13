import BootstrapNavbar from "../(marketing)/_components/bootstrap-navbar";

export default function AuthLayout({ children }) {
    return (
        <div className="h-full">
            <BootstrapNavbar />
            <main>{children}</main>
        </div>
    );
}

