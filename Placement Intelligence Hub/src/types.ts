export interface CompanySummary {
  id: string
  name: string
  shortName: string
  logoUrl: string
  category: string
  companyType: "Super Dream" | "Dream" | "Standard" | "Regular"
  headquarters: string
  employeeSize: string
  growth: number
  industry: string
}

export interface CompanyProfile extends CompanySummary {
  websiteUrl: string
  linkedinUrl: string
  fields: Record<string, string | string[] | number | null>
}

export interface RoadmapItem {
  level: number
  topic: string
}

export interface DashboardSkill {
  id: string
  name: string
  score: number
  descriptor: string
  roadmap: RoadmapItem[]
}

export interface CompanySelection {
  companyId: string
  companyName: string
  logoUrl: string
}
