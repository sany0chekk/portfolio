interface Props {
  title: string;
  items: {
    company: string;
    date: string;
    position: string;
  }[];
  className?: string;
}

export default function ExperienceList({
  title,
  items,
  className = "",
}: Props) {
  return (
    <>
      {items.length > 0 && (
        <div className={`${className}`}>
          <h3 className="font-bold text-lg opacity-50 mb-2">{title}</h3>
          <ul className="rounded-md overflow-hidden">
            {items.map(({ company, date, position }, index) => {
              const listItemClass =
                index % 2 === 0 ? "bg-modal" : "bg-modalHover";
              return (
                <li
                  key={index}
                  className={`p-3 grid md:grid-cols-3 max-md:justify-center gap-4 items-center transition-opacity hover:opacity-80 ${listItemClass}`}
                >
                  <p className="max-md:text-center font-bold text-start">
                    {company}
                  </p>
                  <p className="text-center opacity-80">{position}</p>
                  <p className="max-md:text-center opacity-50 font-semibold text-end">
                    {date}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
