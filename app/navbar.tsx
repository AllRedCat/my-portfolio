import Link from "next/link";
import { House, FolderOpenDot } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-center p-4 border-2 border-gray-500 rounded-lg">
            <ul className="flex">
                <li className="mx-4">
                    <Link href="/" className="text-gray-300 hover:text-gray-100">
                        <House className="inline mr-2" />
                        Home
                    </Link>
                </li>
                <li className="mx-4">
                    <Link href="/projects" className="text-gray-300 hover:text-gray-100">
                        <FolderOpenDot className="inline mr-2" />
                        Projetos
                    </Link>
                </li>
                <li className="mx-4">
                    <Link href="/blog" className="text-gray-300 hover:text-gray-100">
                        <FolderOpenDot className="inline mr-2" />
                        Blog
                    </Link>
                </li>
                <li className="mx-4">
                    <Link href="/about" className="text-gray-300 hover:text-gray-100">
                        <FolderOpenDot className="inline mr-2" />
                        Sobre
                    </Link>
                </li>
                <li className="mx-4">
                    <Link href="/contact" className="text-gray-300 hover:text-gray-100">
                        <FolderOpenDot className="inline mr-2" />
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    )
}