import {
  ArrowDown,
  Building2,
  Globe2,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import CompanyCard from "../components/CompanyCard"
import { Button, TextInput } from "../components/ui"
import { seedCompanies } from "../data/seedCompanies"
import { saveCompany } from "../lib/companyData"
import type { CompanyProfile } from "../types"

const categories = [
  "All",
  "Super Dream",
  "Dream",
  "Standard",
  "Regular",
] as const
const categoryStyles: Record<string, string> = {
  All: "bg-ink text-white border-ink",
  "Super Dream": "bg-super-dream text-white border-super-dream",
  Dream: "bg-dream text-white border-dream",
  Standard: "bg-standard text-white border-standard",
  Regular: "bg-regular text-white border-regular",
}

export default function Index({
  onSelect,
}: {
  onSelect: (company: CompanyProfile) => void
}) {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [category, setCategory] = useState<typeof categories[number]>("All")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query), 200)
    return () => window.clearTimeout(timer)
  }, [query])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 350)
    return () => window.clearTimeout(timer)
  }, [])

  const filtered = useMemo(
    () =>
      seedCompanies.filter((company) => {
        const matchesCategory =
          category === "All" || company.companyType === category
        const text =
          `${company.name} ${company.shortName} ${company.industry} ${company.headquarters}`.toLowerCase()
        return (
          matchesCategory && text.includes(debouncedQuery.toLowerCase().trim())
        )
      }),
    [category, debouncedQuery],
  )

  const selectCompany = (company: CompanyProfile) => {
    saveCompany(company)
    onSelect(company)
    navigate("/company/intelligence")
  }

  const reset = () => {
    setQuery("")
    setDebouncedQuery("")
    setCategory("All")
  }

  return (
    <main className="min-h-screen bg-transparent">
      <header className="glass-strong sticky top-0 z-40 border-b">
        <div className="mx-auto flex h-18 max-w-page items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm font-bold text-white">
              JS
            </span>
            <div>
              <div className="text-sm font-bold tracking-tight text-ink">
                JSSUN Intelligence
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                Placement research platform
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-standard/20 bg-standard/10 px-3 py-1.5 text-xs font-semibold text-standard sm:flex">
            <span className="h-2 w-2 rounded-full bg-standard" />
            Live company intelligence
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-page px-5 pb-8 pt-7 md:px-8 md:pb-10 md:pt-10">
        <div className="glass-dark overflow-hidden rounded-[28px] border p-6 text-white md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
                <Sparkles className="h-3.5 w-3.5 text-peach" />
                Research smarter. Prepare with clarity.
              </span>
              <h1 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] text-white md:text-6xl">
                JSS University Noida Companies Research & Placement Analytics
                Portal
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Your strategic edge for campus placements. Explore recruiters,
                evaluate opportunities, and build the right skills from one
                trusted workspace.
              </p>
              <div className="relative mt-8 max-w-2xl">
                <Search className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-ink" />
                <TextInput
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search companies, industries, or locations..."
                  className="h-14 border-white/90 bg-white/46 pl-12 pr-12 text-base shadow-card"
                  aria-label="Search companies"
                />
                {query && (
                  <Button
                    variant="ghost"
                    className="absolute right-1.5 top-1/2 h-11 min-h-11 w-11 -translate-y-1/2 px-0 text-ink hover:bg-strong"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
              {[
                [Building2, "Structured", "Company research"],
                [ShieldCheck, "Verified", "Seed intelligence"],
                [Globe2, "Global", "Business context"],
              ].map(([Icon, label, detail]) => {
                const FeatureIcon = Icon as typeof Building2
                return (
                  <div
                    key={label as string}
                    className="rounded-2xl border border-white/25 bg-white/12 p-3 shadow-subtle backdrop-blur-xl md:p-4"
                  >
                    <FeatureIcon className="mb-3 h-5 w-5 text-mint" />
                    <strong className="block text-sm text-white">
                      {label as string}
                    </strong>
                    <span className="mt-0.5 block text-xs leading-snug text-white/60">
                      {detail as string}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-page px-5 pb-20 md:px-8">
        <div className="glass-strong rounded-[28px] border p-5 md:p-7">
          <div className="flex flex-col justify-between gap-5 border-b border-ink/10 pb-6 md:flex-row md:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-teal">
                <ArrowDown className="h-3.5 w-3.5" />
                Recruiter directory
              </div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-ink">
                Explore companies
              </h2>
              <p className="mt-2 text-sm text-muted">
                Select a company to open its complete intelligence workspace.
              </p>
            </div>
            <div className="glass-nested rounded-xl border px-4 py-3 text-sm font-medium text-ink">
              <span className="mr-2 inline-flex h-6 min-w-6 items-center justify-center rounded-md bg-ink px-1.5 text-xs font-bold text-white">
                {filtered.length}
              </span>
              {filtered.length === 1 ? "company" : "companies"} found
            </div>
          </div>
          <div
            className="my-6 flex gap-2 overflow-x-auto pb-1"
            aria-label="Filter companies by category"
          >
            {categories.map((item) => {
              const count =
                item === "All"
                  ? seedCompanies.length
                  : seedCompanies.filter(
                      (company) => company.companyType === item,
                    ).length
              const selected = category === item
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`flex min-h-11 shrink-0 items-center gap-2 rounded-xl border px-4 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 ${
                    selected
                      ? `${categoryStyles[item]} shadow-subtle`
                      : "glass-nested border-white/70 text-ink hover:-translate-y-0.5 hover:border-ink/30 hover:bg-white/40 hover:shadow-subtle"
                  }`}
                >
                  {item}
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-xs ${
                      selected ? "bg-white/20" : "bg-white text-body"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
          {loading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="glass-panel h-80 animate-pulse rounded-2xl border p-5"
                >
                  <div className="h-14 w-14 rounded-xl bg-strong" />
                  <div className="mt-7 h-5 w-2/3 rounded bg-strong" />
                  <div className="mt-3 h-3 w-1/2 rounded bg-strong" />
                  <div className="mt-8 space-y-3">
                    <div className="h-3 rounded bg-strong" />
                    <div className="h-3 rounded bg-strong" />
                    <div className="h-3 w-2/3 rounded bg-strong" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {filtered.map((company) => (
                <CompanyCard
                  key={company.id}
                  company={company}
                  onSelect={() => selectCompany(company)}
                />
              ))}
            </div>
          ) : (
            <div className="glass-panel flex flex-col items-center rounded-2xl border border-dashed px-6 py-14 text-center">
              <div className="relative mb-5 h-20 w-24">
                <span className="absolute left-2 top-4 h-12 w-12 rounded-2xl bg-peach" />
                <span className="absolute right-2 top-1 h-14 w-14 rounded-full bg-lavender mix-blend-multiply" />
                <Search className="absolute bottom-0 left-1/2 h-8 w-8 -translate-x-1/2 text-ink" />
              </div>
              <h3 className="text-lg font-semibold text-ink">
                No companies match your search
              </h3>
              <p className="mt-2 max-w-md text-sm text-muted">
                Try a broader term or reset the category filter to see the full
                recruiter directory.
              </p>
              <Button className="mt-5" onClick={reset}>
                Reset filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
