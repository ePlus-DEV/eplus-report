"use client";

import { Flowbite, Navbar, DarkThemeToggle } from "flowbite-react";
import Link from 'next/link'

    
export default function NavbarWithDropdown() {

  return (
    <Flowbite>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://report.eplus.dev">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            ePlus Report
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
            <DarkThemeToggle />
        </div>
            <Navbar.Collapse>
            <Link href="/">Home</Link>
            <Link target="_blank" href="https://eplus.dev/about">About</Link>
            <Link target="_blank" href="https://radio.eplus.dev">ePlus Radio</Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}
