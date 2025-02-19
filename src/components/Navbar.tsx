import Link from "next/link";

import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={90} height={90} alt="Kenyas job" />
        </Link>{" "}
        <Button asChild>
          <Link href="/jobs/new">Post Job</Link>
        </Button>
      </nav>
    </header>
  );
}
