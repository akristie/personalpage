import Link from "next/link";
import React from "react";


const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <h1> Anna Holmquist</h1>
        <Link href="/" className="icon">
          About Me
        </Link>
        <Link href="/ResumePage" className="icon">
          Resume
        </Link>
      </div>
      <div>
        <Link href="https://linkedin.com/in/anna-holmquist-907a1445" target="_blank">
          <img
            src="icons8-linkedin-96.png"
            alt="LinkedIn"
            className="objectCover"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
