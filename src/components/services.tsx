'use client';

import { IconBrandPrisma, IconWorldWww } from '@tabler/icons-react';
import { useInView } from 'react-intersection-observer';
import { Service } from './custom/service';

export function Services() {
	const { ref, inView } = useInView({
		triggerOnce: true
	});

	return (
		<section
			ref={ref}
			className="w-full py-12 md:py-24 lg:py-32"
			id="services"
		>
			<div
				className={`container space-y-8 px-4 md:px-[320px] ${
					inView && 'animate-slideInLeft'
				}`}
			>
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
						Our Services
					</h2>
					<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						We offer a range of services to help your business or
						project succeed.
					</p>
				</div>
				<div className="grid gap-6 lg:grid-cols-2">
					<Service
						title="Website Development"
						description="We'll create a responsive website for you using Next.js. You'll have full source code access."
						icon={IconWorldWww}
						note="This does not include web hosting."
					/>
					<Service
						title="Database Schema Designs"
						description="Our team will create a database schema for Prisma or Drizzle based
              on your needs and required fields."
						icon={IconBrandPrisma}
					/>
				</div>
			</div>
		</section>
	);
}
