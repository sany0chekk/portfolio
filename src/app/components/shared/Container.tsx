interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className = "", children }: Props) {
  return (
    <div
      className={`max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 ${className}`}
    >
      {children}
    </div>
  );
}
