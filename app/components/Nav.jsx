"use client";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex-between text-3xl p-4 bg-pink-600">
      <h3>Umair here</h3>
      <nav className=" flex *:p-4 *:rounded-2xl *:hover:bg-black">
        <Link href="/">Home</Link>
        <Link href="/product">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Nav;
