import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
	return (
		<nav className="fixed top-0 w-full z-10 bg-card shadow p-2">
			<div className="flex items-center h-14 px-4 justify-center md:justify-left">
				<Link
					className="flex items-center gap-2 text-lg font-semibold"
					href="#"
				>
					<Image
						src="/img/banner.svg"
						alt="Logo"
						width={200}
						height={24}
					/>
				</Link>
				<nav className="ml-auto hidden items-center space-x-4 md:flex">
					<Link
						className="font-medium text-sm px-2 py-1.5 rounded-md text-primary-foreground hover:text-primary-foreground/80"
						href="#home"
					>
						Home
					</Link>
					<Link
						className="font-medium text-sm px-2 py-1.5 rounded-md text-primary-foreground hover:text-primary-foreground/80"
						href="#services"
					>
						Services
					</Link>
					<Link
						className="font-medium text-sm px-2 py-1.5 rounded-md text-primary-foreground hover:text-primary-foreground/80"
						href="#projects"
					>
						Projects
					</Link>
					<Link
						className="font-medium text-sm px-2 py-1.5 rounded-md text-primary-foreground hover:text-primary-foreground/80"
						href="#contact"
					>
						Contact
					</Link>
				</nav>
			</div>
		</nav>
	);
}
