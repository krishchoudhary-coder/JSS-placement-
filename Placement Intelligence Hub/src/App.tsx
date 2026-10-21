import { useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { seedCompanies } from "./data/seedCompanies"
import { restoreCompany } from "./lib/companyData"
import CompanyIntelligence from "./pages/CompanyIntelligence"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import SkillIntelligence from "./pages/SkillIntelligence"
import type { CompanyProfile } from "./types"

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState<CompanyProfile | null>(
    () => restoreCompany(seedCompanies),
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index onSelect={setSelectedCompany} />} />
        <Route
          path="/company"
          element={
            <Navigate
              to={selectedCompany ? "/company/intelligence" : "/"}
              replace
            />
          }
        />
        <Route
          path="/company/intelligence"
          element={
            selectedCompany ? (
              <CompanyIntelligence company={selectedCompany} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/company/skills"
          element={
            selectedCompany ? (
              <SkillIntelligence company={selectedCompany} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
