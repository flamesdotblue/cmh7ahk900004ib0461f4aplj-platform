import { Utensils, Flame, Salad, Fish, Beer, Martini, Wine } from 'lucide-react';

const food = [
  {
    icon: <Flame className="h-5 w-5 text-rose-400" />,
    title: 'Kerala-Style Specials',
    desc: 'Beef/Chicken roast, Malabar parotta, meen pollichathu, and coconut-rich curries.',
    tags: ['Spiced', 'Homestyle', 'Gluten-friendly options'],
  },
  {
    icon: <Utensils className="h-5 w-5 text-amber-400" />,
    title: 'North Indian Classics',
    desc: 'Butter chicken, paneer tikka, dal makhani, biryani, naan fresh from the tandoor.',
    tags: ['Vegetarian', 'Family favorites'],
  },
  {
    icon: <Fish className="h-5 w-5 text-sky-400" />,
    title: 'Coastal & Global Bites',
    desc: 'Crispy fish fry, poutines with a twist, wings, burgers, and shareable snacks.',
    tags: ['Pub snacks', 'Seafood'],
  },
  {
    icon: <Salad className="h-5 w-5 text-emerald-400" />,
    title: 'Fresh & Friendly',
    desc: 'Salads, vegan and gluten-friendly picks, kids’ plates—something for everyone.',
    tags: ['Vegan options', 'Kids menu'],
  },
];

const drinks = [
  {
    icon: <Beer className="h-5 w-5 text-amber-300" />,
    title: 'Beer Program',
    desc: 'Craft brews, local Nova Scotian pints, and Indian lagers on rotation.',
  },
  {
    icon: <Martini className="h-5 w-5 text-rose-300" />,
    title: 'Cocktails',
    desc: 'Signature spice-forward cocktails—tamarind sours, mango mules, chai old fashioneds.',
  },
  {
    icon: <Wine className="h-5 w-5 text-fuchsia-300" />,
    title: 'Wine & Zero-Proof',
    desc: 'Balanced wine list and crafted mocktails for all tastes.',
  },
];

export default function MenuBar() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Menu Highlights</h2>
          <p className="mt-2 max-w-xl text-sm text-neutral-400">
            A menu crafted for community. Rich Indian flavors from Kerala and the North, plus global comfort plates that pair perfectly with our bar.
          </p>
        </div>
        <a
          href="#contact"
          className="rounded-md border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5"
        >
          Ask About Today’s Specials
        </a>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {food.map((item) => (
          <div key={item.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5">
                {item.icon}
              </div>
              <div>
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-300">{item.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-500 via-rose-500 to-sky-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>

      <div id="bar" className="mt-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Bar & Pours</h2>
            <p className="mt-2 max-w-xl text-sm text-neutral-400">
              Crafted cocktails, curated beer, and thoughtful zero-proof—something for every celebration.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {drinks.map((d) => (
            <div key={d.title} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5">
                  {d.icon}
                </div>
                <div>
                  <h3 className="font-medium text-white">{d.title}</h3>
                  <p className="mt-1 text-sm text-neutral-300">{d.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
