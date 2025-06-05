import Image from "next/image";
import Link from "next/link";


const Header = () => {
  return (
    <header className=" bg-transparent">
      <nav className="container relative mx-auto px-4 py-4 flex justify-between items-center text-white">
        <Link href="/">
          <Image
            src="/icons/logo.png"
            alt="SOS Game Logo"
            width={50}
            height={50}
          />
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="#main" className="hover:text-yellow-400">
              Main
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-yellow-400">
              About
            </Link>
          </li>
          <li>
            <Link href="#game-features" className="hover:text-yellow-400">
              Game Features
            </Link>
          </li>
          <li>
            <Link href="#system-requirements" className="hover:text-yellow-400">
              System Requirements
            </Link>
          </li>
          <li>
            <Link href="#quotes" className="hover:text-yellow-400">
              Quotes
            </Link>
          </li>
          <li>
            <Link href="#wiki" className="hover:text-yellow-400">
              Wiki
            </Link>
          </li>
          <li>
            <Link href="#blog" className="hover:text-yellow-400">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#discord" className="hover:text-yellow-400">
              Discord
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
