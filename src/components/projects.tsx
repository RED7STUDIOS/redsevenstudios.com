"use client";

import { useInView } from "react-intersection-observer";
import { Project } from "./custom/project";

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`w-full py-12 md:py-24 lg:py-32 ${
        inView && "animate-slideInRight"
      }`}
      id="projects"
    >
      <div className="container space-y-8 px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Our Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We've been working on a lot of projects and would love to share
            them!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Project
            name="Nexirift"
            description="Nexirift is an upcoming social media site. The main source code is unavailable but you can view our custom authentication plugin."
            link="https://github.com/Nexirift"
          />
          <Project
            name="FreePOS"
            description="FreePOS is a POS system made for businesses. We released the source code since we decided against continuing it."
            deprecated={true}
            link="https://github.com/RED7STUDIOS/FreePOS"
          />
          <Project
            name="RED7Community"
            description="RED7Community is an open-source community software. It features a catalog with customisable items."
            deprecated={true}
            link="https://github.com/RED7STUDIOS/RED7Community"
          />
        </div>
      </div>
    </section>
  );
}
