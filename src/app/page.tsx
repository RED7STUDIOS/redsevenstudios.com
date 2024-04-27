import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Services } from '@/components/services';

export default function Home() {
	return (
		<main className="w-full h-full">
			<Hero />
			<Services />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
}
