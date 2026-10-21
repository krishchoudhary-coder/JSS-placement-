import {
  BarChart3,
  Building2,
  ChevronLeft,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  X,
} from "lucide-react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { AppLink, Button } from "./ui"

const links = [
  {
    to: "/company/intelligence",
    label: "Company Intelligence",
    icon: Building2,
  },
  { to: "/company/skills", label: "Skill Intelligence", icon: BarChart3 },
]

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const nav = (
    <>
      <div className="flex h-20 items-center justify-between border-b border-line px-4">
        {!collapsed && (
          <AppLink to="/" className="text-sm font-bold tracking-tight text-ink">
            JSSUN <span className="text-pink">·</span>
          </AppLink>
        )}
        <Button
          variant="ghost"
          className="hidden w-11 px-0 lg:inline-flex"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <PanelLeftOpen className="h-5 w-5" />
          ) : (
            <PanelLeftClose className="h-5 w-5" />
          )}
        </Button>
        <Button
          variant="ghost"
          className="w-11 px-0 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      <nav
        className="flex flex-1 flex-col gap-2 p-3"
        aria-label="Company navigation"
      >
        {links.map((link) => {
          const active = location.pathname === link.to
          const Icon = link.icon
          return (
            <AppLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`flex min-h-12 items-center gap-3 rounded-xl px-3 text-sm font-semibold transition-all duration-200 ${
                active
                  ? "bg-teal text-white shadow-subtle"
                  : "text-body hover:translate-x-0.5 hover:bg-white hover:text-ink hover:shadow-subtle"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{link.label}</span>}
            </AppLink>
          )
        })}
      </nav>
      <div className="border-t border-line p-3">
        <AppLink
          to="/"
          className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-semibold text-body transition-all hover:translate-x-0.5 hover:bg-white hover:text-ink hover:shadow-subtle ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
          {!collapsed && "All Companies"}
        </AppLink>
      </div>
    </>
  )

  return (
    <>
      <div className="glass-strong fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b px-4 lg:hidden">
        <span className="text-sm font-bold">
          JSSUN <span className="text-pink">·</span>
        </span>
        <Button
          variant="ghost"
          className="w-11 px-0"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink/30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={`glass-strong fixed inset-y-0 left-0 z-[60] flex w-72 flex-col border-r transition-transform lg:z-40 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "lg:w-20" : "lg:w-64"}`}
      >
        {nav}
      </aside>
      <div
        className={`hidden lg:block ${
          collapsed ? "w-20" : "w-64"
        } shrink-0 transition-all`}
      />
    </>
  )
}
