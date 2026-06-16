import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse duration-400 rounded-md", className)}
      style={{ background: 'linear-gradient(34deg, #34d399, #60a5fa, #c084fc)' }}
      {...props}
    />
  )
}

export { Skeleton }
