import Link from "next/link";
import { Button } from "../ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import { Badge } from "../ui/badge";

interface ProjectProps {
  name: string;
  description: string;
  deprecated?: boolean;
  link: string;
}

export const Project: React.FC<ProjectProps> = (props) => {
  return (
    <div className="rounded-lg bg-card p-6 shadow-md space-y-2">
      <h3 className="text-xl font-bold text-primary flex items-center gap-2">
        {props.name}{" "}
        {props.deprecated && (
          <Badge
            variant="outline"
            className="text-yellow-400 bg-yellow-700/50 border-yellow-400"
          >
            Deprecated
          </Badge>
        )}
      </h3>
      <p className="text-gray-500 dark:text-gray-400">{props.description}</p>
      <div className="flex items-center justify-between">
        <Button asChild>
          <Link href={props.link}>
            <IconBrandGithub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
      </div>
    </div>
  );
};
