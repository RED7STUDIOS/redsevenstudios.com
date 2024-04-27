'use client';

export function Hero() {
	return (
		<section
			className="h-full flex flex-col items-center justify-center px-4 space-y-4 text-center bg-[url('/img/hero.jpg')] bg-cover bg-center bg-no-repeat mb-4"
			id="home"
		>
			<div className="space-y-2  animate-slideInTop">
				<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl/none text-primary">
					RED7 STUDIOS
				</h1>
				<p className="md:text-xl text-white">
					The home of innovation and creativity.
				</p>
			</div>
		</section>
	);
}
