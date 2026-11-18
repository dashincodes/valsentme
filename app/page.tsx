import Image from "next/image";

const R2 = "https://pub-51a650956d4a4b3b8163ee0fdb58a367.r2.dev/images";

const images = {
  logo: `${R2}/logo.webp`,
  pattern: `${R2}/hero-pattern.webp`,
  smile: `${R2}/val-slime-smile.webp`,
  excited: `${R2}/val-slime-excited.webp`,
  noodles: `${R2}/val-noodles.webp`,
  dinosaur: `${R2}/val-dinosaur.webp`,
  pizza: `${R2}/val-pizza.webp`,
};

const nav = [
  { href: "#about", label: "About" },
  { href: "#stats", label: "Stats" },
  { href: "#audience", label: "Audience" },
  { href: "#brands", label: "Brands" },
  { href: "#content", label: "Content" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "20.6K", label: "TikTok followers" },
  { value: "54.2K", label: "TikTok post views" },
  { value: "36K", label: "TikTok viewers (28 days)" },
  { value: "17.9K", label: "Instagram views (30 days)" },
  { value: "1.4K", label: "TikTok likes" },
  { value: "120", label: "TikTok comments" },
  { value: "257", label: "TikTok shares" },
  { value: "20.6%", label: "of TikTok views from search" },
];

const reasons = [
  {
    title: "Real family reviews",
    body: "Honest, in-the-moment content from a traveling homeschool family, filmed on location.",
  },
  {
    title: "Discoverable content",
    body: "76.6% of my TikTok views come from the For You page and 20.6% from search, so my videos keep reaching new people.",
  },
  {
    title: "Fresh eyes every post",
    body: "33.6K of my 36K TikTok viewers in the last 28 days were new to my content, so each post can put your brand in front of new people.",
  },
];

const audience = [
  {
    title: "TikTok viewers",
    bars: [
      { label: "Women", value: "66%" },
      { label: "Men", value: "32%" },
      { label: "Other", value: "2%" },
    ],
  },
  {
    title: "Instagram audience",
    bars: [
      { label: "Women", value: "74.7%" },
      { label: "Men", value: "25.3%" },
    ],
  },
  {
    title: "Instagram age range",
    bars: [
      { label: "25 to 34", value: "60.9%" },
      { label: "35 to 44", value: "21.3%" },
      { label: "45 to 54", value: "10.5%" },
      { label: "18 to 24", value: "3.8%" },
    ],
  },
  {
    title: "Top locations",
    bars: [
      { label: "USA", value: "89.5%" },
      { label: "Mexico", value: "5.7%" },
    ],
  },
  {
    title: "Top languages",
    bars: [
      { label: "English", value: "87.2%" },
      { label: "Spanish", value: "11.9%" },
    ],
  },
];

const brands = [
  {
    name: "Slime Kitchen",
    note: "Recent collaboration",
  },
  {
    name: "Broadway at the Beach",
    note: "Holiday shopping campaign, coming soon",
  },
  {
    name: "Pirates Voyage",
    note: "Dinner show experience",
  },
];

const openTo = [
  "Restaurants + food",
  "Attractions + experiences",
  "Family travel + stays",
  "Spa + wellness days",
  "Holiday + family lifestyle",
];

const tiktoks = [
  "https://www.tiktok.com/t/ZTPPJQwj3/",
  "https://www.tiktok.com/t/ZPN1xGu6W/",
  "https://www.tiktok.com/t/ZTPPJTB97/",
  "https://www.tiktok.com/t/ZTPPJgFYt/",
];

const reels = [
  "https://www.instagram.com/reel/DfdWehcRqnp/",
  "https://www.instagram.com/reel/DfakdTLBNKt/",
  "https://www.instagram.com/reel/DfCjxo9xRXl/",
  "https://www.instagram.com/reel/DeqN-M7RQux/",
];

const marquee = [
  "Family travel",
  "Food reviews",
  "Attractions",
  "Homeschool adventures",
  "Experiences",
];

const heroPhotos = [
  {
    src: images.smile,
    alt: "Valeria smiling and holding two containers of slime",
    position: "object-[center_30%]",
  },
  {
    src: images.dinosaur,
    alt: "Valeria making a surprised face beside a dinosaur",
    position: "object-[center_35%]",
  },
  {
    src: images.noodles,
    alt: "Valeria holding a forkful of noodles at a restaurant",
    position: "object-center",
  },
  {
    src: images.excited,
    alt: "Valeria excited, holding two containers of slime",
    position: "object-[center_42%]",
  },
];

const dateNote = "TikTok and Instagram analytics, Oct 15 to Nov 15, 2026";

function LogoMark({ className }: { className: string }) {
  return (
    <span className={`relative block overflow-hidden ${className}`}>
      <Image
        src={images.logo}
        alt=""
        width={1000}
        height={1000}
        className="absolute top-1/2 left-1/2 h-[250%] w-[250%] max-w-none -translate-x-1/2 -translate-y-[48%]"
      />
    </span>
  );
}

function Bar({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm font-extrabold">
        <span>{label}</span>
        <span className="text-berry">{value}</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-blush">
        <div className="h-full rounded-full bg-hot" style={{ width: value }} />
      </div>
    </div>
  );
}

function WatchRow({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((href, index) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-berry px-5 py-2.5 font-display text-base font-bold text-white transition hover:bg-[#a1134c]"
          >
            Watch #{index + 1}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] bg-white/95 px-2 py-2 shadow-[0_10px_40px_rgba(238,45,110,0.16)] backdrop-blur md:rounded-full md:px-3">
          <nav className="flex items-center gap-2">
            <a href="#top" aria-label="VAL sent ME" className="shrink-0 rounded-full">
              <LogoMark className="h-11 w-12 sm:h-12 sm:w-14" />
            </a>
            <ul className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-extrabold text-berry hover:bg-blush/80"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="ml-auto shrink-0 rounded-full bg-berry px-3.5 py-2.5 text-sm font-extrabold text-white hover:bg-[#a1134c] sm:px-5 md:ml-0"
            >
              Work with me
            </a>
          </nav>
          <ul className="mt-1 flex flex-wrap gap-x-1 px-1 pb-1 md:hidden">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-extrabold text-berry hover:bg-blush/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main>
        <section
          id="top"
          className="relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${images.pattern})` }}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-12 md:py-20 lg:py-24">
            <div>
              <h1 className="font-display text-[clamp(3rem,11vw,6.2rem)] leading-[0.86] font-bold tracking-tight text-white uppercase [text-shadow:0_3px_0_#c4145a,0_10px_24px_rgba(120,10,45,0.28)]">
                <span className="flex items-center gap-2 sm:gap-3">
                  <LogoMark className="h-[0.78em] w-[0.92em] shrink-0" />
                  <span>Hey,</span>
                </span>
                <span className="block">I’m</span>
                <span className="block">Valeria!</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed font-extrabold text-white [text-shadow:0_2px_0_#9d1248,0_6px_16px_rgba(80,0,30,0.45)] sm:text-xl">
                My family travels, homeschools, and eats our way through every
                destination.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-2xl bg-sun px-7 py-4 font-display text-lg font-bold tracking-wide text-ink uppercase shadow-[0_6px_0_#e2b400] transition hover:translate-y-0.5 hover:shadow-[0_3px_0_#e2b400]"
              >
                DM @valsentme
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {heroPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] shadow-[0_12px_30px_rgba(120,10,45,0.22)] ring-4 ring-white/85"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 46vw, 240px"
                    className={`object-cover ${photo.position}`}
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-blush bg-white" aria-label="What I share">
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className={`flex shrink-0 items-center ${copy === 1 ? "marquee-copy" : ""}`}
                aria-hidden={copy === 1}
              >
                {marquee.map((item) => (
                  <li
                    key={`${copy}-${item}`}
                    className="flex items-center px-4 py-4 font-display text-lg font-bold tracking-wide text-berry uppercase sm:px-6 sm:text-xl"
                  >
                    {item}
                    <span className="ml-8 text-mid sm:ml-12" aria-hidden>
                      •
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <section id="about" className="bg-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="font-display text-sm font-bold tracking-[0.18em] text-berry uppercase">
                About
              </p>
              <h2 className="mt-2 font-display text-4xl leading-none font-bold text-ink uppercase sm:text-5xl">
                Hey, I am Valeria!
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">
                My family travels, homeschools, and eats our way through every
                destination. On @valsentme I share real, family-tested reviews
                of restaurants, attractions, and experiences, so other families
                know where to go and what to order.
              </p>
            </div>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2rem] shadow-[0_12px_30px_rgba(238,45,110,0.12)]">
              <Image
                src={images.pizza}
                alt="Valeria holding a large slice of pizza"
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover object-[62%_18%]"
              />
            </div>
          </div>
        </section>

        <section id="stats">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="font-display text-4xl leading-none font-bold text-ink uppercase sm:text-5xl">
              By the numbers
            </h2>
            <p className="mt-4 text-base font-bold text-ink/70">{dateNote}</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-[1.6rem] bg-white px-5 py-6 shadow-[0_8px_30px_rgba(238,45,110,0.08)]"
                >
                  <p className="font-display text-4xl leading-none font-bold text-hot sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-snug font-extrabold text-ink">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="max-w-2xl font-display text-4xl leading-none font-bold text-ink uppercase sm:text-5xl">
              Why brands work with me
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {reasons.map((reason, index) => (
                <article
                  key={reason.title}
                  className="rounded-[1.8rem] bg-foam px-6 py-7"
                >
                  <p className="font-display text-3xl font-bold text-hot">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink/80">{reason.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="audience">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="max-w-2xl font-display text-4xl leading-none font-bold text-ink uppercase sm:text-5xl">
              Who is watching
            </h2>
            <p className="mt-4 max-w-2xl text-base font-bold text-ink/70">
              Gender, age, location and language from native platform analytics
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {audience.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[1.8rem] bg-white px-6 py-6 shadow-[0_8px_30px_rgba(238,45,110,0.08)]"
                >
                  <h3 className="mb-5 font-display text-2xl font-bold text-ink">
                    {group.title}
                  </h3>
                  <div className="space-y-4">
                    {group.bars.map((bar) => (
                      <Bar key={bar.label} label={bar.label} value={bar.value} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="brands" className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="font-display text-4xl leading-none font-bold text-ink uppercase sm:text-5xl">
              Brands I create for
            </h2>
            <p className="mt-4 text-base font-bold text-ink/70">Recent + upcoming</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {brands.map((brand) => (
                <article
                  key={brand.name}
                  className="rounded-[1.8rem] bg-hot px-6 py-8 text-white"
                >
                  <h3 className="font-display text-3xl leading-none font-bold">
                    {brand.name}
                  </h3>
                  <p className="mt-3 font-bold text-white/95">{brand.note}</p>
                </article>
              ))}
            </div>
            <div className="mt-4 rounded-[1.8rem] bg-foam px-6 py-7">
              <h3 className="font-display text-2xl font-bold text-ink">
                Open to partnering with
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {openTo.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-berry"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="content">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="font-display text-4xl leading-none font-bold text-ink uppercase sm:text-5xl">
              Top performing content
            </h2>
            <p className="mt-4 text-base font-bold text-ink/70">Tap any button to watch</p>
            <div className="mt-8 grid gap-8 rounded-[1.8rem] bg-white px-6 py-8 shadow-[0_8px_30px_rgba(238,45,110,0.08)] sm:px-8">
              <WatchRow title="TikTok" links={tiktoks} />
              <WatchRow title="Instagram Reels" links={reels} />
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-hot text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="font-display text-sm font-bold tracking-[0.18em] text-white/90 uppercase">
            Contact
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[0.95] font-bold uppercase sm:text-6xl">
            Let’s create something together!
          </h2>
          <p className="mt-5 max-w-xl text-lg font-bold text-white/95">
            DM @valsentme on TikTok or Instagram
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://www.tiktok.com/@valsentme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-white px-6 py-3 font-display text-lg font-bold text-berry hover:bg-foam"
            >
              TikTok @valsentme
            </a>
            <a
              href="https://www.instagram.com/valsentme/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-white px-6 py-3 font-display text-lg font-bold text-berry hover:bg-foam"
            >
              Instagram @valsentme
            </a>
            <a
              href="mailto:hello@valsentme.com"
              className="inline-flex justify-center rounded-full bg-sun px-6 py-3 font-display text-lg font-bold text-ink hover:bg-[#ffd000]"
            >
              hello@valsentme.com
            </a>
          </div>
          <p className="mt-12 max-w-xl text-sm font-bold text-white/80">
            Stats from native TikTok and Instagram analytics, Oct 15 to Nov 15,
            2026
          </p>
        </div>
      </footer>
    </>
  );
}
