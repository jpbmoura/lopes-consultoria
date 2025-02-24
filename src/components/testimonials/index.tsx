import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-2 border rounded-lg p-4"
            >
              <Image
                src={`/placeholder.svg?text=Client${i}`}
                alt={`Client ${i}`}
                width={64}
                height={64}
                className="rounded-full"
              />
              <p className="text-xl font-semibold">Client Name</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                &quot;FitCoach has completely transformed my approach to
                fitness. I&apos;ve never felt better!&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
