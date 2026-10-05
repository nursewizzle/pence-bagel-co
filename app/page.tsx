const basicBagels = [
  {
    name: "Plain",
    description: "Classic, chewy, golden-brown perfection.",
  },
  {
    name: "Everything",
    description: "Loaded with our savory everything seasoning.",
  },
  {
    name: "Sesame",
    description: "Generously topped with toasted sesame seeds.",
  },
  {
    name: "Cinnamon & Sugar",
    description: "Sweet cinnamon and sugar with a chewy crust.",
  },
  {
    name: "Chocolate Chip",
    description: "A little sweet, a lot of chocolate.",
  },
];

const specialtyBagels = [
  {
    name: "Asiago",
    description: "Topped with plenty of savory Asiago cheese.",
  },
  {
    name: "Asiago Everything",
    description: "Everything seasoning meets golden Asiago cheese.",
  },
  {
    name: "Mocha Espresso",
    description: "Rich chocolate and espresso flavors in every bite.",
  },
  {
    name: "B&G",
    description: "One of our specialty creations.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#29241f]">
      {/* Header */}
      <header className="border-b border-black/10 bg-[#faf7f2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-xl font-black tracking-tight">
              PENCE BAGEL CO.
            </div>
            <div className="text-xs uppercase tracking-[0.22em] text-black/50">
              Kalona, Iowa
            </div>
          </div>

          <a
            href="#order"
            className="rounded-full bg-[#29241f] px-5 py-3 text-sm font-bold text-white transition hover:opacity-80"
          >
            Order Bagels
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <div className="mb-5 inline-block rounded-full bg-[#ead9bf] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]">
            Handmade • Small Batch • Local
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Better mornings start with better bagels.
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-black/65">
            Fresh, small-batch bagels handmade in Kalona, Iowa. Choose your
            favorites, place your order, and we&apos;ll have them ready for
            pickup.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#order"
              className="rounded-full bg-[#29241f] px-7 py-4 font-bold text-white transition hover:opacity-80"
            >
              Order Bagels
            </a>

            <a
              href="#menu"
              className="rounded-full border border-black/20 px-7 py-4 font-bold transition hover:bg-black/5"
            >
              See the Menu
            </a>
          </div>
        </div>

        {/* Temporary photo placeholder */}
        <div className="flex aspect-square items-center justify-center rounded-[2.5rem] bg-[#dfc7a5] p-10 shadow-xl shadow-black/5">
          <div className="text-center">
            <div className="text-8xl">🥯</div>
            <div className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-black/50">
              Bagel photo goes here
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
          <div>
            <div className="text-sm font-black">01</div>
            <h2 className="mt-2 text-xl font-black">Choose your bagels</h2>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Pick a 6-pack or 12-pack and choose the flavors you want.
            </p>
          </div>

          <div>
            <div className="text-sm font-black">02</div>
            <h2 className="mt-2 text-xl font-black">Give us 24 hours</h2>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Every order is made fresh, so please order at least 24 hours
              before pickup.
            </p>
          </div>

          <div>
            <div className="text-sm font-black">03</div>
            <h2 className="mt-2 text-xl font-black">Pick up & enjoy</h2>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Pick up your fresh bagels in Kalona and pay conveniently via
              Venmo.
            </p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-black/45">
            The Menu
          </div>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Pick your favorites.
          </h2>
          <p className="mt-4 text-lg leading-8 text-black/60">
            Keep it classic or try one of our specialty bagels.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Basic */}
          <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5 sm:p-9">
            <div className="flex items-end justify-between gap-4 border-b border-black/10 pb-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                  The classics
                </div>
                <h3 className="mt-2 text-3xl font-black">Basic Bagels</h3>
              </div>

              <div className="text-right text-sm">
                <div>
                  <strong>6</strong> / $13.50
                </div>
                <div>
                  <strong>12</strong> / $24
                </div>
              </div>
            </div>

            <div className="divide-y divide-black/10">
              {basicBagels.map((bagel) => (
                <div key={bagel.name} className="py-5">
                  <div className="font-black">{bagel.name}</div>
                  <div className="mt-1 text-sm leading-6 text-black/55">
                    {bagel.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialty */}
          <div className="rounded-[2rem] bg-[#29241f] p-7 text-white shadow-sm sm:p-9">
            <div className="flex items-end justify-between gap-4 border-b border-white/15 pb-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                  Something extra
                </div>
                <h3 className="mt-2 text-3xl font-black">Specialty Bagels</h3>
              </div>

              <div className="text-right text-sm text-white/80">
                <div>
                  <strong className="text-white">6</strong> / $19.50
                </div>
                <div>
                  <strong className="text-white">12</strong> / $32
                </div>
              </div>
            </div>

            <div className="divide-y divide-white/15">
              {specialtyBagels.map((bagel) => (
                <div key={bagel.name} className="py-5">
                  <div className="font-black">{bagel.name}</div>
                  <div className="mt-1 text-sm leading-6 text-white/55">
                    {bagel.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section id="order" className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#dfc7a5] px-7 py-14 text-center sm:px-12 sm:py-20">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-black/50">
            Fresh bagels are calling
          </div>

          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            Build your bagel order.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-black/60">
            Our online ordering system is coming together. Soon you&apos;ll be
            able to build multiple packs, choose flavors, schedule pickup, and
            see your total right here.
          </p>

          <button
            type="button"
            className="mt-8 cursor-not-allowed rounded-full bg-[#29241f] px-8 py-4 font-bold text-white opacity-50"
          >
            Ordering Coming Soon
          </button>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-black/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 Pence Bagel Co.</div>
          <div>Handmade in Kalona, Iowa.</div>
        </div>
      </footer>
    </main>
  );
}