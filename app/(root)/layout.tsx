import {Sidebar} from "@/components/shared/sidebar";
import {MobileNav} from "@/components/shared/mobile-nav";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </main>
  )
}

export default RootLayout;
