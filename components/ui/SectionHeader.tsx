export default function SectionHeader({
  label,
  title,
  sub,
}: {
  label: string
  title: string
  sub?: string
}) {
  return (
    <>
      <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase">
        {`// ${label}`}
      </p>
      <h2 className="text-2xl font-bold text-slate-100 mt-2 mb-3">{title}</h2>
      {sub && <p className="text-slate-500 text-sm mb-8 max-w-2xl">{sub}</p>}
    </>
  )
}
