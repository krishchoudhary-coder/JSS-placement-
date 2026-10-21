import { Target } from "lucide-react"
import AppSidebar from "../components/AppSidebar"
import CompanyLogo from "../components/CompanyLogo"
import SkillCard from "../components/SkillCard"
import { skills } from "../data/skillTopics"
import type { CompanyProfile } from "../types"

const bloomLegend = [
  ["CU", "Understand", "bg-bloom-cu"],
  ["AP", "Apply", "bg-bloom-ap"],
  ["AS", "Analyze", "bg-bloom-as"],
  ["EV", "Evaluate", "bg-bloom-ev"],
  ["CR", "Create", "bg-bloom-cr"],
]

export default function SkillIntelligence({
  company,
}: {
  company: CompanyProfile
}) {
  return (
    <div className="flex min-h-screen bg-transparent">
      <AppSidebar />
      <main className="min-w-0 flex-1 pt-16 lg:pt-0">
        <div className="glass-soft border-b px-5 py-4 md:px-8">
          <p className="text-xs text-muted">
            All companies <span className="mx-2">/</span> {company.name}{" "}
            <span className="mx-2">/</span>{" "}
            <span className="font-medium text-ink">Skills</span>
          </p>
        </div>
        <div className="mx-auto max-w-content px-5 py-8 md:px-8 md:py-12">
          <header className="glass-strong rounded-3xl border p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <CompanyLogo
                url={company.logoUrl}
                name={company.name}
                size="lg"
              />
              <div className="flex-1">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  Preparation intelligence
                </p>
                <h1 className="text-3xl font-medium tracking-tight text-ink md:text-4xl">
                  {company.name} Skill Intelligence
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  A structured preparation guide that maps required skills to
                  proficiency targets and progressive learning roadmaps. It is
                  not an official Accenture hiring examination.
                </p>
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-peach/40 text-ink">
                <Target className="h-9 w-9" />
              </div>
            </div>
          </header>

          <section className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <div className="glass-panel rounded-2xl border p-5">
              <h2 className="text-sm font-semibold text-ink">
                Bloom proficiency levels
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {bloomLegend.map(([code, label, color]) => (
                  <div
                    key={code}
                    className="flex items-center gap-2 text-xs text-body"
                  >
                    <span
                      className={`${color} rounded-md px-2 py-1 font-bold text-white`}
                    >
                      {code}
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-2xl border p-5">
              <h2 className="text-sm font-semibold text-ink">
                Skill criticality
              </h2>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-coral/15 p-3">
                  <strong className="block text-xs text-critical-text">
                    Critical
                  </strong>
                  <span className="text-xs text-muted">7–10</span>
                </div>
                <div className="rounded-xl bg-ochre/20 p-3">
                  <strong className="block text-xs text-important-text">
                    Important
                  </strong>
                  <span className="text-xs text-muted">5–6</span>
                </div>
                <div className="rounded-xl bg-mint/30 p-3">
                  <strong className="block text-xs text-teal">Baseline</strong>
                  <span className="text-xs text-muted">1–4</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                  12 competency areas
                </p>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink">
                  Preparation roadmap
                </h2>
              </div>
              <p className="hidden text-sm text-muted sm:block">
                Sorted by required proficiency
              </p>
            </div>
            <div className="space-y-3">
              {skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
