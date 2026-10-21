import type { CompanyProfile, CompanySelection } from "../types"

const NULL_VALUES = new Set([
  "",
  "na",
  "n/a",
  "none",
  "-",
  "null",
  "undefined",
  "not applicable",
])

export function isUnavailable(value: unknown) {
  if (value === null || value === undefined) return true
  if (typeof value === "string")
    return NULL_VALUES.has(value.trim().toLowerCase())
  return false
}

export function createSelection(company: CompanyProfile): CompanySelection {
  return {
    companyId: company.id,
    companyName: company.name,
    logoUrl: company.logoUrl,
  }
}

export function restoreCompany(companies: CompanyProfile[]) {
  try {
    const saved = JSON.parse(
      localStorage.getItem("selected-company") || "null",
    ) as CompanySelection | null
    return saved
      ? (companies.find((company) => company.id === saved.companyId) ?? null)
      : null
  } catch {
    return null
  }
}

export function saveCompany(company: CompanyProfile) {
  localStorage.setItem(
    "selected-company",
    JSON.stringify(createSelection(company)),
  )
}

export function isUrl(value: string) {
  return /^https?:\/\//i.test(value)
}
