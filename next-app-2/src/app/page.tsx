import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log("Executing...");
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href="/about">About Us</Link>
    </main>
  );
}
