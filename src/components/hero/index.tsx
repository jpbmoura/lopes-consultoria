import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="w-full h-vh85 flex items-center justify-center bg-center">
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Transforme Seu Corpo, Transforme Sua Vida
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Treinos estratégicos, nutrição inteligente e acompanhamento
              completo para sua evolução.
            </p>
          </div>
          <div className="">
            <Button size={"lg"} className="text-lg">
              <Link href={"#pricing"}> Escolher Plano Agora!</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
