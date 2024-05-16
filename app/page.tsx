'use client'
import { useEffect } from "react";
import Navbar from "./components/Navbar";

import { useRouter } from "next/navigation";

export default function Home() {
  const rounter = useRouter()

  useEffect(() => {
    rounter.push('/home')
  }, [])

  return (
    <main>
      <Navbar />
    </main>

  );
}
