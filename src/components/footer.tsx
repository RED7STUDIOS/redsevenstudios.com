import Link from 'next/link';

export function Footer() {
	return (
		<footer className="bg-card text-gray-400 py-6">
			<div className="container mx-auto px-4 flex justify-center">
				<p className="text-sm">
					Psst, this website is open-source on our{' '}
					<Link
						className="text-gray-300 hover:text-gray-200 transition-colors"
						href="https://github.com/RED7STUDIOS/redsevenstudios.com"
					>
						GitHub organisation
					</Link>
					.
				</p>
			</div>
		</footer>
	);
}
