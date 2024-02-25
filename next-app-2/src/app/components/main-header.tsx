import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A plate width food on it" />
        NextLevel Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
