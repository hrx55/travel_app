"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "@/src/constants";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:hidden">
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer  padding-conatiner"
        onClick={handleClick}
      />
      {isOpen && (
        <ul
          className={`absolute top-full bg-white p-4 right-0 whitespace-nowrap ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="mb-2">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Hamburger;
