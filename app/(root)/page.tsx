import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="z-20 flex w-full flex-1 flex-col items-center justify-center px-4 py-10">
      <div className="flex flex-col justify-center items-center my-5">
        <Image src={"/hero.svg"} alt="Hero-Section" height={500} width={500} />

        <h1 className="z-20 mt-5 text-center text-4xl font-extrabold leading-[1.3] tracking-tight text-transparent bg-clip-text bg-linear-to-r from-rose-500 via-red-500 to-pink-500 dark:from-rose-400 dark:via-red-400 dark:to-pink-400 sm:text-6xl">
          Vibe Code With Intelligence
        </h1>
      </div>

      <p className="mt-2 max-w-2xl px-5 py-10 text-center text-lg text-zinc-700 dark:text-zinc-400">
        VibeCode Editor is a powerful and intelligent code editor that enhances
        your coding experience with advanced features and seamless integration.
        It is designed to help you write, debug, and optimize your code
        efficiently.
      </p>
      <Link href={"/dashboard"}>
        <Button variant={"brand"} className="mb-4" size={"lg"}>
          Get Started
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
    </div>
  );
}
