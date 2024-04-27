"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`w-full py-12 md:py-24 lg:py-32 mb-4 ${
        inView && "animate-slideInLeft"
      }`}
      id="contact"
    >
      <div className="container space-y-8 px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Contact Us
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get in contact with us and sort out a service or upcoming project!
          </p>
        </div>
        <div className="text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-500 dark:text-gray-400">
          <h3>Sorry, but we are not accepting any inquires at this time.</h3>
          <p>You can contact Mitchell on GitHub in regards to questions.</p>
        </div>
        <div className="text-center">
          <Button asChild>
            <Link href="https://github.com/Creaous">
              <IconBrandGithub className="mr-2 h-4 w-4" />
              Visit @Creaous on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
