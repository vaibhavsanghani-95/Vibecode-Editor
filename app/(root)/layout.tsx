import { cn } from "@/lib/utils";
import { Header } from "@/modules/home/header";
import { Footer } from "@/modules/home/footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    template: "Vibecode - Editor",
    default: "Code Editor For Vibecoders - VIBECODE",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-svh flex-col overflow-x-hidden bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 hidden dark:block",
          "bg-size-[40px_40px]",
          "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      <div className="pointer-events-none absolute inset-0 hidden bg-black dark:block mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <main className="z-20 relative flex w-full flex-1 pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
