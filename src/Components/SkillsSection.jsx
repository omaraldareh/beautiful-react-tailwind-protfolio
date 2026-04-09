import { useState } from "react"
import cn from "../lib/utils"
import { 
  Code2, Database, Server, GitBranch, Figma, Laptop 
} from "lucide-react"

const skills = [
  // Frontend
  { name: "HTML/CSS", icon: Code2, category: "frontend" },
  { name: "JavaScript", icon: Code2, category: "frontend" },
  { name: "React", icon: Code2, category: "frontend" },
  { name: "Next.js", icon: Code2, category: "frontend" },
  { name: "Tailwind CSS", icon: Laptop, category: "frontend" }, 
  { name: "Bootstrap", icon: Laptop, category: "frontend" },   
  { name: "Sass", icon: Code2, category: "frontend" }, 

  // Backend
  { name: ".NET Core / Web API", icon: Server, category: "backend" },
  { name: "Clean Architecture", icon: Server, category: "backend" }, 
  { name: "LINQ & Entity Framework", icon: Database, category: "backend" },
  { name: "Unit Testing (xUnit)", icon: Code2, category: "backend" },

  // Database 
  { name: "SQL Server (T-SQL)", icon: Database, category: "backend" },
  { name: "Oracle SQL / PL-SQL", icon: Database, category: "backend" }, 
  { name: "Query Optimization", icon: Laptop, category: "backend" }, 
  { name: "DB Design & Normalization", icon: Database, category: "backend" },

  // Tools
  { name: "Git/GitHub", icon: GitBranch, category: "tools" },
  { name: "Figma", icon: Figma, category: "tools" },
]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  )

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground scale-105 shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon

            return (
              <div
                key={key}
                className="group bg-card p-6 rounded-xl border border-border/50 flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-primary/50"
              >
                {/* Icon Container */}
                <div className="mb-4 p-3 rounded-2xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg]">
                  <Icon size={28} />
                </div>

                {/* Name */}
                <h3 className="font-semibold text-sm tracking-wide">
                  {skill.name}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}