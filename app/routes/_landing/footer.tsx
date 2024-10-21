import { Link } from "@remix-run/react";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-2 p-4 text-muted-foreground">
      <Link target="_blank" rel="noreferrer" to="https://remix.run">
        <img src="/fav.ico" alt="remix icon" className="size-6" />
      </Link>
      {new Date().getFullYear()}
    </footer>
  );
};
