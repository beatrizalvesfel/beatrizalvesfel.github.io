import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  // Tente usar a logo personalizada, se não existir, usa o texto
  const useLogo = true; // Mude para true quando adicionar a logo

  if (useLogo) {
    return (
      <Link href="#home" className={`relative ${className}`}>
        <Image
          src="/images/logo.svg"
          alt="Beatriz Alves"
          width={120}
          height={50}
          priority
        />
      </Link>
    );
  }

  // Fallback para logo em texto
  return (
    <Link
      href="#home"
      className={`text-2xl font-bold text-white hover:text-brand-teal transition-colors ${className}`}
    >
      Beatriz<span className="text-brand-teal">.</span>
    </Link>
  );
}