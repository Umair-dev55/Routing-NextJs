"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import React from "react";

const page = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <div className="nested-link">
        <Link className="text-white " href="/product/men">
          Mens Collection
        </Link>
        <Link className="text-white" href="/product/women">
          Womens Collection
        </Link>
      </div>
      <h1 className="absolute-center text-9xl">{params.id}</h1>
    </div>
  );
};

export default page;
