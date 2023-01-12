import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex justify-between items-center p-4 bg-balmy-green">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold pl-6 text-white">Tixer</h1>
      </div>
    </nav>
  );
}
