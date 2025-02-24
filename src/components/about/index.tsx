export default function About() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 border-t border-neutral-800 "
    >
      <div className="container px-4 md:px-6 m-auto ">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
          Como funciona?
        </h2>
        <p className=" text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4 mb-8 sm:mb-12 text-center">
          Oferecemos um plano completo e personalizado de treino e dieta, feito
          sob medida para suas necessidades, objetivos e rotina, com
          acompanhamento e revisões para garantir a sua evolução contínua.
        </p>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold">O que você recebe?</h3>
            <ul className="list-disc list-inside text-gray-500 md:text-lg lg:text-base xl:text-lg dark:text-gray-400">
              <li>
                <span className="text-white underline decoration-wavy decoration-yellow-400 font-semibold">
                  Treino personalizado
                </span>{" "}
                – Adaptado ao seu nível, tempo disponível e equipamentos que
                você tem acesso.
              </li>
              <li>
                <span className="text-white underline decoration-wavy decoration-yellow-400 font-semibold">
                  Dieta individualizada
                </span>{" "}
                – Elaborada para suas preferências alimentares e objetivos,
                garantindo resultados sem sofrimento.
              </li>
              <li>
                <span className="text-white underline decoration-wavy decoration-yellow-400 font-semibold">
                  Acompanhamento profissional
                </span>{" "}
                – Suporte contínuo para ajustes e dúvidas, garantindo sua
                evolução.
              </li>
              <li>
                <span className="text-white underline decoration-wavy decoration-yellow-400 font-semibold">
                  Praticidade e flexibilidade
                </span>{" "}
                – Tudo online, no seu ritmo, sem precisar de deslocamentos.
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold">
              Para quem é essa consultoria?
            </h3>
            <ul className="list-disc list-inside text-gray-500 md:text-lg lg:text-base xl:text-lg dark:text-gray-400">
              <span className="font-semibold text-white"></span>
              <li>
                Quer <span className="font-semibold text-white">emagrecer</span>{" "}
                ou{" "}
                <span className="font-semibold text-white">
                  ganhar massa muscular
                </span>
              </li>
              <li>
                Precisa de um{" "}
                <span className="font-semibold text-white">
                  plano ajustado à sua rotina corrida
                </span>
              </li>
              <li>
                Deseja melhorar sua alimentação de forma{" "}
                <span className="font-semibold text-white">
                  {" "}
                  saudável e sustentável
                </span>
              </li>
              <li>
                Quer um acompanhamento{" "}
                <span className="font-semibold text-white">profissional</span>{" "}
                para alcançar seus objetivos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
