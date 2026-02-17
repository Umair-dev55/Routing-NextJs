import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="nested-link">
        <Link href="/product/men/shirts">Shirts</Link>
        <Link href="/product/men/pents">Pents</Link>
        <Link href="/product/men/coats">Coats</Link>
      </div>
      <h1 className="absolute-center text-9xl ">Mens Collection</h1>
    </div>
  );
};

export default page;
