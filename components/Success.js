"use client";
import React from "react";
import Card from "./Card";
import Link from "next/link";

const Success = () => {
  return (
    <div>
      <Card>
        <h1 className="text-center font-bold text-green-400">
          Registration sucessful
        </h1>

        <div className="text-center mt-10">
          <Link href={"/questions"} className=" border-2 border-green-500 py-1 px-2 rounded-md shadow-md">Proceed to examination</Link>
        </div>
      </Card>
    </div>
  );
};

export default Success;
