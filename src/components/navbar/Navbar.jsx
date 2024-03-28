import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      <div>Logo</div>
      <div>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        {/* <Link href='/about'>About</Link>
        <Link href='/about'>About</Link> */}
      </div>
    </>
  );
}

export default Navbar;
