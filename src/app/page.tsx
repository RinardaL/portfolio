import ProjectCard from "@/components/ProjectCard";
import { about, profile, projects, skills, timeline } from "@/data/profile";

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "5", label: "projects shipped" },
  { value: "6", label: "developers on my team project" },
  { value: "12", label: "data models in my largest app" },
  { value: "2", label: "backend stacks: Node & Spring" },
];

// soft pastel tint per skill card, cycled
const skillTints = [
  "bg-pink-50 dark:bg-pink-400/10",
  "bg-violet-50 dark:bg-violet-400/10",
  "bg-orange-50 dark:bg-orange-300/10",
  "bg-emerald-50 dark:bg-emerald-300/10",
  "bg-sky-50 dark:bg-sky-300/10",
  "bg-fuchsia-50 dark:bg-fuchsia-300/10",
];

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  );
}

function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
        <Sparkle className="h-3 w-3" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

function CodeCard() {
  const line = (n: number, children: React.ReactNode) => (
    <div className="flex">
      <span className="w-8 shrink-0 select-none pr-4 text-right text-[#b89cb6]">{n}</span>
      <span>{children}</span>
    </div>
  );
  const k = (s: string) => <span className="text-[#c86b98]">{s}</span>;
  const p = (s: string) => <span className="text-[#8a6fd6]">{s}</span>;
  const str = (s: string) => <span className="text-[#d9876a]">&quot;{s}&quot;</span>;

  return (
    <div className="relative animate-float">
      <div className="glow absolute -inset-10 -z-10" />
      <Sparkle className="absolute -right-3 -top-4 h-7 w-7 text-accent-2" />
      <Sparkle className="absolute -bottom-3 -left-4 h-5 w-5 text-accent-3" />
      <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-soft">
        <div className="flex items-center gap-1.5 border-b border-border bg-accent-soft/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#f7a8c4]" />
          <span className="h-3 w-3 rounded-full bg-[#fcd3a8]" />
          <span className="h-3 w-3 rounded-full bg-[#b9e4c9]" />
          <span className="ml-3 font-mono text-xs text-muted">rinarda.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-foreground">
          {line(1, <>{k("const")} {p("developer")} = {"{"}</>)}
          {line(2, <>&nbsp;&nbsp;name: {str("Rinarda Lahu")},</>)}
          {line(3, <>&nbsp;&nbsp;based: {str("Pristina, Kosovo")},</>)}
          {line(4, <>&nbsp;&nbsp;frontend: [{str("React")}, {str("Next.js")}],</>)}
          {line(5, <>&nbsp;&nbsp;backend: [{str("Node")}, {str("Spring Boot")}],</>)}
          {line(6, <>&nbsp;&nbsp;database: [{str("MySQL")}, {str("MongoDB")}],</>)}
          {line(7, <>&nbsp;&nbsp;aiTools: [{str("Claude")}, {str("Claude Code")}],</>)}
          {line(8, <>&nbsp;&nbsp;openToWork: {k("true")},</>)}
          {line(9, <>{"}"};</>)}
        </pre>
      </div>
    </div>
  );
}

const btnPrimary =
  "btn-soft inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95";
const btnGhost =
  "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-accent hover:text-accent";

export default function Home() {
  const [featured, ...rest] = projects;

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span className="btn-soft grid h-9 w-9 place-items-center rounded-full font-serif text-sm italic text-white">
              rl
            </span>
            <span className="hidden font-serif text-lg sm:inline">Rinarda Lahu</span>
          </a>
          <ul className="hidden gap-8 text-sm text-muted md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition hover:text-accent">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={profile.cv} target="_blank" className="btn-soft rounded-full px-5 py-2 text-sm font-medium text-white hover:opacity-95">
            Resume
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="bg-dots absolute inset-0 -z-10" />
          <div className="blob -z-10 left-[-120px] top-[-80px] h-[380px] w-[380px] bg-pink-300 dark:bg-pink-500/40" />
          <div className="blob -z-10 right-[-100px] top-[60px] h-[340px] w-[340px] bg-violet-300 dark:bg-violet-500/40" />
          <div className="blob -z-10 bottom-[-160px] left-[35%] h-[320px] w-[320px] bg-orange-200 dark:bg-orange-400/30" />
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs text-muted backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
                </span>
                {profile.openTo}
              </p>
              <h1 className="mt-7 font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
                Hi, I&apos;m Rinarda
                <Sparkle className="mb-6 ml-2 hidden h-9 w-9 text-accent-3 sm:inline" />
                <br />
                <span className="text-gradient italic">I build full-stack web apps.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{profile.summary}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className={btnPrimary}>
                  See my work <span aria-hidden>→</span>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className={btnGhost}>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                  </svg>
                  GitHub
                </a>
                {profile.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className={btnGhost}>
                    LinkedIn
                  </a>
                )}
                <a href={profile.cv} target="_blank" className={btnGhost}>
                  Download CV
                </a>
              </div>
            </div>
            <CodeCard />
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`rounded-3xl p-6 text-center ${skillTints[i]}`}>
                <dt className="font-serif text-4xl font-medium text-gradient">{s.value}</dt>
                <dd className="mt-1 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* About */}
          <section id="about" className="scroll-mt-20 pt-28">
            <SectionTitle eyebrow="About me" title="A developer who likes building useful things" />
            <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
              <div className="space-y-5 text-lg leading-relaxed text-muted">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <dl className="h-fit overflow-hidden rounded-3xl border border-border bg-surface shadow-soft">
                <div className="btn-soft px-6 py-4 font-serif text-lg italic text-white">Quick facts</div>
                {about.facts.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-4 border-t border-border px-6 py-4 first-of-type:border-t-0">
                    <dt className="text-xs uppercase tracking-widest text-muted">{f.label}</dt>
                    <dd className="text-right text-sm font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="scroll-mt-20 py-28">
            <SectionTitle
              eyebrow="Selected work"
              title="Projects I've built"
              intro="From a clinic platform with payments and role-based access, to a team-built e-commerce app, to a hand-coded travel site — each one taught me something new about shipping real software."
            />
            <div className="grid gap-7 md:grid-cols-2">
              <ProjectCard project={featured} featured />
              {rest.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="scroll-mt-20 py-20">
            <SectionTitle eyebrow="Toolbox" title="Technologies I work with" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s, i) => (
                <div key={s.group} className={`rounded-3xl p-6 transition hover:-translate-y-1 ${skillTints[i % skillTints.length]}`}>
                  <h3 className="font-serif text-xl italic">{s.group}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <li key={item} className="rounded-full bg-surface/80 px-3.5 py-1.5 text-sm font-medium shadow-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education" className="scroll-mt-20 py-20">
            <SectionTitle eyebrow="Background" title="Education & certifications" />
            <ol className="grid gap-5 md:grid-cols-3">
              {timeline.map((t, i) => (
                <li key={t.title} className="relative rounded-3xl border border-border bg-surface p-6 shadow-soft">
                  <span className={`grid h-10 w-10 place-items-center rounded-full ${skillTints[i]}`}>
                    <Sparkle className="h-4 w-4 text-accent" />
                  </span>
                  <p className="mt-4 text-xs uppercase tracking-widest text-muted">{t.period}</p>
                  <h3 className="mt-1 font-serif text-xl">{t.title}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{t.org}</p>
                  <p className="mt-3 text-sm text-muted">{t.detail}</p>
                  {t.link && (
                    <a href={t.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-medium text-accent hover:underline">
                      View certificate ↗
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-20 pb-28 pt-12">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-200 via-violet-200 to-orange-100 p-10 text-center sm:p-16 dark:from-pink-500/30 dark:via-violet-500/30 dark:to-orange-400/20">
              <Sparkle className="absolute left-10 top-10 h-8 w-8 text-white/80" />
              <Sparkle className="absolute bottom-12 right-14 h-6 w-6 text-white/80" />
              <Sparkle className="absolute right-1/4 top-8 h-4 w-4 text-white/70" />
              <h2 className="relative font-serif text-4xl font-medium tracking-tight text-[#3d2b3d] sm:text-6xl dark:text-white">
                Let&apos;s build something <span className="italic">together</span>.
              </h2>
              <p className="relative mx-auto mt-5 max-w-lg text-[#6b5468] dark:text-white/80">
                I&apos;m looking for an internship or junior developer role — remote or in Pristina. I reply to every message.
              </p>
              <div className="relative mt-9 flex flex-wrap justify-center gap-3">
                <a href={`mailto:${profile.email}`} className={btnPrimary}>
                  {profile.email}
                </a>
                <a href={profile.cv} target="_blank" className="rounded-full border border-white/70 bg-white/60 px-6 py-3 text-sm font-medium text-[#3d2b3d] backdrop-blur transition hover:bg-white">
                  Download CV
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted sm:flex-row sm:px-6">
          <p className="font-serif italic">© {new Date().getFullYear()} {profile.name}</p>
          <p className="flex items-center gap-1.5">
            Made with <Sparkle className="h-3 w-3 text-accent" /> Next.js, TypeScript & Tailwind
          </p>
        </div>
      </footer>
    </>
  );
}
