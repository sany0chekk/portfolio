import { Undo2 } from "lucide-react";
import Link from "next/link";
import Container from "./components/shared/Container";

export default function NotFound() {
  return (
    <Container className="pt-[10%] w-full h-full flex flex-col items-center">
      <h1 className="font-bold text-7xl md:text-9xl">404</h1>
      <p className="font-bold text-center text-lg md:text-2xl text-green mb-10">{`Oops! The page you're looking for doesn't exist.`}</p>
      <Link
        href="/"
        className="flex items-center gap-3 font-bold text-lg opacity-50 transition-opacity hover:opacity-100"
      >
        Go back to the homepage
        <Undo2 />
      </Link>
    </Container>
  );
}
