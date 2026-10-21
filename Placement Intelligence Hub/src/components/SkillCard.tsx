import { Check, ChevronDown, Lock } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { bloomForScore, criticalityForScore } from "../data/skillTopics"
import type { DashboardSkill } from "../types"
import { Button } from "./ui"

const bloomClasses: Record<string, string> = {
  CU: "bg-bloom-cu",
  AP: "bg-bloom-ap",
  AS: "bg-bloom-as",
  EV: "bg-bloom-ev",
  CR: "bg-bloom-cr",
}

export default function SkillCard({ skill }: { skill: DashboardSkill }) {
  const [open, setOpen] = useState(false)
  const bloom = bloomForScore(skill.score)
  const criticality = criticalityForScore(skill.score)

  return (
    <article className="glass-strong overflow-hidden rounded-2xl border transition-all duration-300 hover:border-teal/25 hover:shadow-card">
      <Button
        variant="ghost"
        className="h-auto w-full justify-start rounded-none p-5 text-left hover:bg-surface md:p-6"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`roadmap-${skill.id}`}
      >
        <div className="w-full">
          <div className="flex items-start gap-3">
            <span
              className={`${bloomClasses[bloom]} rounded-md px-2.5 py-1 text-xs font-bold text-white`}
            >
              {bloom}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <h2 className="text-base font-semibold text-ink md:text-lg">
                  {skill.name}
                </h2>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      criticality === "Critical"
                        ? "bg-coral/15 text-critical-text"
                        : criticality === "Important"
                          ? "bg-ochre/20 text-important-text"
                          : "bg-mint/30 text-teal"
                    }`}
                  >
                    {criticality}
                  </span>
                  <span className="text-sm font-bold text-ink">
                    {skill.score}
                    <span className="font-normal text-muted">/10</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted transition ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <p className="mt-1 text-xs font-normal text-muted">
                {skill.descriptor} target proficiency
              </p>
              <div
                className="mt-4 h-2 overflow-hidden rounded-full bg-strong"
                aria-label={`${skill.score} out of 10 required`}
              >
                <motion.div
                  className={`${bloomClasses[bloom]} h-full rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.score * 10}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </Button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`roadmap-${skill.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/70 bg-white/24 p-4 backdrop-blur-xl md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-ink">
                  10-level preparation roadmap
                </h3>
                <span className="text-xs text-muted">
                  Guidance, not an official hiring exam
                </span>
              </div>
              <ol className="space-y-2">
                {skill.roadmap.map((item) => {
                  const locked = item.level > skill.score
                  return (
                    <li
                      key={item.level}
                      className={`flex items-center gap-3 rounded-xl border p-3 ${
                        locked
                          ? "border-white/55 bg-white/35 text-faint backdrop-blur-md"
                          : "border-mint/70 bg-white/30 text-body backdrop-blur-md"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          locked
                            ? "bg-strong text-muted"
                            : `${bloomClasses[bloom]} text-white`
                        }`}
                      >
                        {item.level}
                      </span>
                      <span className="flex-1 text-sm">{item.topic}</span>
                      {locked ? (
                        <span className="flex items-center gap-1.5 text-xs font-medium">
                          <Lock className="h-3.5 w-3.5" />
                          Beyond scope
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-xs font-medium text-teal">
                          <Check className="h-3.5 w-3.5" />
                          In scope
                        </span>
                      )}
                    </li>
                  )
                })}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
