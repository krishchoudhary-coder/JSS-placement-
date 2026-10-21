import { ArrowLeft } from "lucide-react"
import { AppLink } from "../components/ui"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-transparent p-6 text-center">
      <div className="glass-strong max-w-xl rounded-3xl border p-10">
        <p className="text-sm font-semibold text-pink">404</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-ink">
          This page is off the map.
        </h1>
        <p className="mt-3 text-muted">
          The intelligence route you requested does not exist.
        </p>
        <AppLink
          to="/"
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to companies
        </AppLink>
      </div>
    </main>
  )
}
