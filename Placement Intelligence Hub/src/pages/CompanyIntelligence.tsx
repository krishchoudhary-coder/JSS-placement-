import { ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import AppSidebar from "../components/AppSidebar"
import CompanyLogo from "../components/CompanyLogo"
import IntelligenceSectionCard from "../components/IntelligenceSectionCard"
import { Button } from "../components/ui"
import { intelligenceSections, sectionId } from "../data/intelligenceData"
import type { CompanyProfile } from "../types"

export default function CompanyIntelligence({
  company,
}: {
  company: CompanyProfile
}) {
  const [active, setActive] = useState(sectionId(intelligenceSections[0].title))
  const programmingScroll = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (programmingScroll.current) return
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-210px 0px -55% 0px", threshold: [0.1, 0.35] },
    )
    intelligenceSections.forEach((section) => {
      const element = document.getElementById(sectionId(section.title))
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  const goTo = (id: string) => {
    programmingScroll.current = true
    setActive(id)
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
    window.setTimeout(() => {
      programmingScroll.current = false
    }, 800)
  }

  useEffect(() => {
    document.querySelector(`[data-tab="${active}"]`)?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    })
  }, [active])

  return (
    <div className="flex min-h-screen bg-transparent">
      <AppSidebar />
      <main className="min-w-0 flex-1 pt-16 lg:pt-0">
        <div className="glass-soft border-b px-5 py-4 md:px-8">
          <p className="text-xs text-muted">
            All companies <span className="mx-2">/</span>{" "}
            <span className="font-medium text-ink">{company.name}</span>
          </p>
        </div>
        <div className="glass-strong sticky top-16 z-30 border-b px-5 py-3 lg:top-0 md:px-8">
          <div className="mx-auto flex max-w-content flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <CompanyLogo
                url={company.logoUrl}
                name={company.name}
                size="sm"
              />
              <div>
                <h1 className="font-semibold text-ink">{company.name}</h1>
                <span className="text-xs text-muted">
                  {company.category} · {company.companyType}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-nested inline-flex min-h-10 items-center gap-2 rounded-xl border px-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-teal/30 hover:bg-white/40 hover:shadow-subtle"
              >
                Website
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={company.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-ink px-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-teal hover:shadow-subtle"
              >
                LinkedIn
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
        <div className="glass-soft sticky top-[145px] z-20 border-b px-5 sm:top-[129px] lg:top-[65px] md:px-8">
          <div className="mx-auto flex max-w-content gap-1 overflow-x-auto py-2 scrollbar-none">
            {intelligenceSections.map((section, index) => {
              const id = sectionId(section.title)
              return (
                <Button
                  key={id}
                  data-tab={id}
                  variant="ghost"
                  onClick={() => goTo(id)}
                  className={`min-h-9 shrink-0 rounded-lg px-3 py-2 text-xs ${
                    active === id
                      ? "bg-ink text-white hover:bg-ink hover:text-white"
                      : ""
                  }`}
                >
                  {index + 1}. {section.title}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="mx-auto max-w-content space-y-5 px-5 py-8 md:px-8 md:py-10">
          <div className="glass-dark rounded-3xl border p-6 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-mint">
              Research workspace
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight">
              Company intelligence, all in one place.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
              Explore business fundamentals, culture, technology, career growth,
              and reputation. Use the section index to move quickly through the
              profile.
            </p>
          </div>
          {intelligenceSections.map((section) => (
            <IntelligenceSectionCard
              key={section.title}
              id={sectionId(section.title)}
              title={section.title}
              icon={section.icon}
              fields={section.fields}
              values={company.fields}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
