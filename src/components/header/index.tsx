import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/lopes-logo.png";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="z-50 w-full border-b border-neutral-800 bg-black px-4 md:p-0">
      <div className="container flex h-20 items-center w-full m-auto">
        <Link
          href="/"
          className="flex items-center justify-center md:justify-between w-full"
        >
          <Image src={Logo} alt="Logo" height={64} />
        </Link>
        <nav className="ml-auto flex gap-4 items-center">
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4 md:block hidden w-full text-nowrap"
          >
            Como funciona?
          </Link>
          {/* <Link
            href="#testimonials"
            className="text-sm font-medium hover:underline underline-offset-4 md:block hidden"
          >
            Testimonials
          </Link> */}
          <Link
            href="#pricing"
            className="text-sm font-medium hover:underline underline-offset-4 md:block hidden"
          >
            Planos
          </Link>
          <Button className="md:block hidden">
            <Link href="#pricing">Comece Agora!</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
