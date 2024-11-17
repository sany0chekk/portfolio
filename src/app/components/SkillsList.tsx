interface Props {
  title: string;
  items: {
    title: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}

export default function SkillsList({ title, items, className = "" }: Props) {
  return (
    <>
      {items.length > 0 && (
        <div className={className}>
          <h3 className="font-bold text-lg opacity-50 mb-2">{title}</h3>
          <ul className="grid gap-3 grid-cols-2 lg:grid-cols-3">
            {items.map(({ title, icon }, index) => (
              <li
                key={index}
                className="bg-modal p-4 rounded-md flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
              >
                {icon}
                <p className="font-bold text-xl">{title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
