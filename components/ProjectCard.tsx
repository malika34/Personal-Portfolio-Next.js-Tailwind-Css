import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { FaGithub } from "react-icons/fa";
import { Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }: any) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative h-[300px] w-full flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          {/* image */}
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
          {/* btns link */}
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary h-[54px] w-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              className="bg-secondary h-[54px] w-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <FaGithub className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-2 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
