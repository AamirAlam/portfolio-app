export default function SectionHeader({
  title,
  sub,
}: {
  title: string
  sub?: string
}) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold">{title}</h2>
      {sub && <p className="mt-1 text-sm text-muted">{sub}</p>}
    </div>
  )
}
