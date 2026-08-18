export function TeamDots({ colors }: { colors: [string, string] }) {
  return (
    <span className="inline-flex flex-none items-center gap-1">
      {colors.map((c, i) => (
        <span
          key={i}
          className="h-2.5 w-2.5 rounded-full border border-black/10"
          style={{ backgroundColor: c }}
        />
      ))}
    </span>
  )
}
