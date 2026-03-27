"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, RefreshCw, XCircle } from "lucide-react"

const helpGroups = [
  {
    icon: Users,
    title: "Personas desde cero",
    description: "Sin experiencia previa en inglés",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BookOpen,
    title: "Nivel intermedio",
    description: "Con bases que necesitan refuerzo",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: RefreshCw,
    title: "Personas que retoman",
    description: "El inglés después de tiempo",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

const notForYou = [
  "No estás dispuesto a practicar",
  "Buscas resultados sin involucrarte",
  "Prefieres métodos pasivos",
]

export function WhoIHelp() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Who I help */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              ¿A quién ayudo?
            </h2>
            <p className="text-muted-foreground text-lg">
              Mi metodología está diseñada para estos perfiles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {helpGroups.map((group, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${group.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <group.icon className={`h-8 w-8 ${group.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{group.title}</h3>
                  <p className="text-muted-foreground">{group.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Not for everyone */}
        <Card className="bg-card border-secondary/30">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                <XCircle className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">No es para todos</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Mis clases no son para ti si:
            </p>
            
            <ul className="space-y-3">
              {notForYou.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg border border-secondary/20"
                >
                  <XCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
