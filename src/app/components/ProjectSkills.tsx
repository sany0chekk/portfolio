interface Props {
  skills: string[];
  className?: string;
}

export default function ProjectSkills({ skills = [], className = "" }: Props) {
  return (
    <>
      {skills.length > 0 && (
        <ul className={`flex flex-wrap gap-x-4 gap-y-2 ${className}`}>
          {skills.map((skill, index) => (
            <li key={index} className="p-2 bg-modalHover rounded-md">
              <p className="text-sm font-bold opacity-80">{skill}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
