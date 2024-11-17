interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function SectionTitle({ className, children }: Props) {
  return (
    <h2 className={`text-2xl font-black opacity-50 ${className}`}>
      {children}
    </h2>
  );
}
