import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="container">
        <Link className="headerlink" href="/">
          <h2>
            <a> Andy Cake blog</a>
          </h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
