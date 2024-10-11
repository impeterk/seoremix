import { cn } from "src/app/lib/utils";

import { Footer } from "./footer";
import { Sidebar } from "./sidebar";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <main
        className={cn("min-h-[calc(100vh_-_56px)] bg-secondary", "lg:ml-72")}
      >
        {children}
      </main>
      <footer className={cn("lg:ml-72")}>
        <Footer />
      </footer>
    </>
  );
}
