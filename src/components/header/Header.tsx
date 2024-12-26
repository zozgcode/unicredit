"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative border-b flex items-center justify-center bg-white">
      <Image src="https://i.imgur.com/H4Y4Q3I.png" width={230} height={28} className="w-[150px]" alt="logo" />
    </div>
  );
}
