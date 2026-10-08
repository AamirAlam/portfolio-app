import { categories } from '@/content/skills'
import SectionHeader from './ui/SectionHeader'

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
      <SectionHeader label="skills" title="Technical Stack" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div key={cat.label} className="card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-lg ${cat.color}`}>{cat.icon}</span>
              <h3 className={`text-sm font-semibold font-mono ${cat.color}`}>{cat.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
