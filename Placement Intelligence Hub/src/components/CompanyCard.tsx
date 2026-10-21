import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react"
import type { CompanyProfile } from "../types"
import CompanyLogo from "./CompanyLogo"

export default function CompanyCard({
  company,
  onSelect,
}: {
  company: CompanyProfile
  onSelect: () => void
}) {
  const Trend = company.growth >= 0 ? TrendingUp : TrendingDown
  return (
    <button
      type="button"
      onClick={onSelect}
      className="glass-panel group relative flex min-h-80 w-full flex-col overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-dream/40 hover:bg-white/45 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2"
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-dream opacity-70 transition-opacity group-hover:opacity-100" />
      <div className="mb-6 flex w-full items-start justify-between gap-4 pt-1">
        <CompanyLogo url={company.logoUrl} name={company.name} />
        <span className="rounded-lg border border-dream/15 bg-dream/10 px-2.5 py-1.5 text-xs font-bold text-dream">
          {company.companyType}
        </span>
      </div>
      <h2 className="text-xl font-semibold tracking-tight text-ink">
        {company.name}
      </h2>
      <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-muted">
        <BriefcaseBusiness className="h-3.5 w-3.5" />
        {company.shortName} · {company.industry}
      </p>
      <div className="mt-6 space-y-2.5 text-sm font-medium text-body">
        <div className="glass-nested flex items-center gap-2.5 rounded-lg border px-3 py-2.5">
          <MapPin className="h-4 w-4 shrink-0 text-teal" />
          {company.headquarters}
        </div>
        <div className="glass-nested flex items-center gap-2.5 rounded-lg border px-3 py-2.5">
          <Users className="h-4 w-4 shrink-0 text-teal" />
          {company.employeeSize}
        </div>
        <div className="flex items-center gap-2.5 rounded-lg border border-standard/15 bg-standard/10 px-3 py-2.5 text-standard backdrop-blur-md">
          <Trend className="h-4 w-4 shrink-0" />
          <span className="font-semibold">
            {company.growth}% year-over-year growth
          </span>
        </div>
      </div>
      <div className="mt-auto flex w-full items-center justify-between border-t border-ink/10 pt-5">
        <span className="text-sm font-semibold text-ink transition-colors group-hover:text-dream">
          Open company research
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-dream">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </button>
  )
}
