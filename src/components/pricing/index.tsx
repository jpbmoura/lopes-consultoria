import Link from "next/link";
import { Button } from "../ui/button";

const plans = [
  {
    name: "Impulso 90",
    price: 299.9,
    description:
      "Dê o primeiro passo rumo ao seu melhor shape! No plano Impulso 90, você recebe um acompanhamento personalizado para iniciar sua jornada fitness com força total.",
    features: [
      "Treinos otimizados para seu objetivo",
      "Orientação nutricional personalizada",
      "Suporte via chat para ajustes e dúvidas",
    ],
    checkoutLink: "https://chk.eduzz.com/7WXQPK449A",
  },
  {
    name: "Evolução 180",
    price: 549.9,
    description:
      "Aqui é onde a mágica acontece! O plano Evolução 180 foi criado para quem quer evoluir de verdade, ganhando força, resistência e um físico mais equilibrado.",
    features: [
      "Plano de treino e ajustes periódicos",
      "Estratégias avançadas de alimentação",
      "Suporte contínuo para ajustes e motivação",
    ],
    cutValue: 599.9,
    checkoutLink: "https://chk.eduzz.com/39ZQK2XB9E",
  },
  {
    name: "Transformação 365",
    price: 1079.9,
    description:
      "O plano Transformação 365 é para aqueles que querem levar o treino a sério e transformar o fitness em um estilo de vida. ",
    features: [
      "Planejamento estratégico para o ano inteiro",
      "Ajustes frequentes para otimizar resultados",
      "Suporte VIP para máximo desempenho",
    ],
    cutValue: 1199.9,
    checkoutLink: "https://chk.eduzz.com/6W485A2Y0Z",
  },
];

export default function Pricing() {
  function formatMoney(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-24 lg:py-32 border-t border-neutral-800"
    >
      <div className="container px-4 md:px-6 m-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Dê Inicio a Sua Nova Jornada
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col p-6 bg-white rounded-lg shadow-lg text-black"
            >
              <h3 className="w-fit text-2xl font-bold mb-4 px-3 py-1 rounded-lg text-black underline decoration-wavy decoration-yellow-500">
                {plan.name}
              </h3>

              <div className="flex flex-row gap-2 items-baseline">
                <p className="text-3xl font-black font mb-4">
                  {formatMoney(plan.price)}
                </p>
                {plan.cutValue && (
                  <p className="text-sm text-gray-500 line-through mb-2">
                    {formatMoney(plan.cutValue)}
                  </p>
                )}
              </div>

              <p className="pb-4 text-sm">{plan.description}</p>

              <ul className="mb-6 space-y-2 border-t-2 pt-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center font-semibold">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="mt-auto">
                <Link target="_blank" href={plan.checkoutLink}>
                  Escolher Plano
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
