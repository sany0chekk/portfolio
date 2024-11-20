import { projects } from "@/content/projects";
import Link from "next/link";
import ProjectSkills from "./ProjectSkills";

export default function ProjectsList() {
  return (
    <>
      {projects.length > 0 && (
        <ul className="grid gap-10">
          {projects.map(({ id, name, date, images, skills }, index) => (
            <li
              key={id}
              className={`bg-modal rounded-md overflow-hidden flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <img src={images[0]} alt={name} className="md:w-[45%]" />
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="font-bold text-2xl">{name}</h3>
                <p className="opacity-60 mb-4">
                  Implementation time: <span className="font-bold">{date}</span>
                </p>
                <ProjectSkills skills={skills} className="mb-10" />
                <Link
                  href={`/projects/${id}`}
                  className={`mt-auto ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  } font-bold p-3 text-center rounded-md bg-green text-modal transition-opacity hover:opacity-80`}
                >
                  Read more
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
