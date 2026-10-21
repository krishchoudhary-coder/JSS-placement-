import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react"
import { Link, type LinkProps } from "react-router-dom"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost"
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-ink text-white hover:bg-teal",
    secondary: "glass-strong border text-ink hover:bg-white/90",
    ghost: "text-muted hover:bg-white/45 hover:text-ink",
  }
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    />
  )
}

export function TextInput({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`glass-strong min-h-12 w-full rounded-xl border text-ink outline-none transition placeholder:text-muted/80 focus:border-ink/30 focus:ring-2 focus:ring-lavender/40 ${className}`}
      {...props}
    />
  )
}

export function AppLink({
  className = "",
  children,
  ...props
}: LinkProps & { children: ReactNode }) {
  return (
    <Link
      className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}
