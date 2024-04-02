import Link from "next/link";
import Image from "next/image";

const Header = (props) => {
  return (
    <nav className="flex-1 justify-between relative z-10 py-10">
      <Link href="/">
        <Image src={"/hilink-logo.svg"} width={74} height={29} />
      </Link>
    </nav>
  );
};

export default Header;
