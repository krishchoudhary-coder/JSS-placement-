import type { LucideIcon } from "lucide-react"
import { ExternalLink } from "lucide-react"
import { fieldLabel } from "../data/intelligenceData"
import { isUnavailable, isUrl } from "../lib/companyData"

interface Props {
  id: string
  title: string
  icon: LucideIcon
  fields: string[]
  values: Record<string, string | string[] | number | null>
}

function FieldValue({ value }: { value: string | string[] | number | null }) {
  if (isUnavailable(value))
    return (
      <span className="inline-flex rounded-md bg-strong px-2 py-1 text-xs font-medium text-muted">
        Not Available
      </span>
    )
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-1.5">
        {value.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pink" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }
  if (typeof value === "string" && isUrl(value)) {
    return (
      <a
        href={value}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 font-medium text-teal underline decoration-mint underline-offset-4 hover:text-ink"
      >
        {value.replace(/^https?:\/\/(www\.)?/, "")}
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    )
  }
  return <span>{String(value)}</span>
}

export default function IntelligenceSectionCard({
  id,
  title,
  icon: Icon,
  fields,
  values,
}: Props) {
  return (
    <section
      id={id}
      className="glass-strong scroll-mt-52 rounded-2xl border p-5 transition-all duration-300 hover:border-teal/25 hover:shadow-card md:p-7"
    >
      <div className="mb-6 flex items-center gap-3 border-b border-line pb-5">
        <span className="glass-nested flex h-10 w-10 items-center justify-center rounded-xl border text-ink">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-xl font-semibold tracking-tight text-ink">
          {title}
        </h2>
        <span className="ml-auto rounded-md bg-strong px-2 py-1 text-xs font-medium text-muted">
          {fields.length} fields
        </span>
      </div>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field}
            className={
              [
                "overview_text",
                "vision_statement",
                "mission_statement",
              ].includes(field)
                ? "md:col-span-2"
                : ""
            }
          >
            <dt className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
              {fieldLabel(field)}
            </dt>
            <dd className="text-sm leading-relaxed text-body">
              <FieldValue value={values[field]} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
