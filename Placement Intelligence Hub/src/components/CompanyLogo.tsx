import { useState } from "react"

interface Props {
  url: string
  name: string
  size?: "sm" | "md" | "lg"
}

export default function CompanyLogo({ url, name, size = "md" }: Props) {
  const [failed, setFailed] = useState(false)
  const sizes = { sm: "h-10 w-10", md: "h-14 w-14", lg: "h-16 w-16" }

  return (
    <div
      className={`${sizes[size]} glass-nested flex shrink-0 items-center justify-center overflow-hidden rounded-xl border`}
    >
      {!failed ? (
        <img
          src={url}
          alt={`${name} logo`}
          className="h-full w-full object-contain p-2"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-lg font-semibold text-ink">{name.charAt(0)}</span>
      )}
    </div>
  )
}
