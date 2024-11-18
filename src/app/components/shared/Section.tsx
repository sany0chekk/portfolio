interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Section({ className = "", children }: Props) {
  return (
    <section className={`${className ? className : "py-20 lg:py-32"}`}>
      {children}
    </section>
  );
}
