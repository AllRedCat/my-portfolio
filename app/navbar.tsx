import { House, FolderOpenDot } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center p-4 border-2 border-gray-500 rounded-lg">
        <ul className="flex">
            <li className="mx-4">
                <a href="/" className="text-gray-300 hover:text-gray-100">
                    <House className="inline mr-2" />
                    Home
                </a>
            </li>
            <li className="mx-4">
                <a href="/projects" className="text-gray-300 hover:text-gray-100">
                    <FolderOpenDot className="inline mr-2" />
                    Projects
                </a>
            </li>
            <li className="mx-4">
                <a href="/blog" className="text-gray-300 hover:text-gray-100">
                    <FolderOpenDot className="inline mr-2" />
                    Blog
                </a>
            </li>
            <li className="mx-4">
                <a href="/about" className="text-gray-300 hover:text-gray-100">
                    <FolderOpenDot className="inline mr-2" />
                    About
                </a>
            </li>
            <li className="mx-4">
                <a href="/contact" className="text-gray-300 hover:text-gray-100">
                    <FolderOpenDot className="inline mr-2" />
                    Contact
                </a>
            </li>
        </ul>
    </nav>
  )
}