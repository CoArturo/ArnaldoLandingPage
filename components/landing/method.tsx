"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, MessageSquare, Lightbulb, Target, Mic } from "lucide-react"

const methodItems = [
  {
    icon: BookOpen,
    title: "Explicaciones claras",
    description: "Del español al inglés, paso a paso",
  },
  {
    icon: MessageSquare,
    title: "Práctica constante",
    description: "Ejercicios en cada sesión",
  },
  {
    icon: Lightbulb,
    title: "Respuestas en el momento",
    description: "Sin dudas pendientes",
  },
  {
    icon: Target,
    title: "Corrección inmediata",
    description: "Aprende de tus errores al instante",
  },
  {
    icon: Mic,
    title: "Enfoque en pronunciación real",
    description: "Habla con confianza",
  },
]

export function Method() {
  return (
    <section className="px-4 py-16 md:py-24 bg-card/30" id="metodo">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Método Diferenciador
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un enfoque práctico diseñado para que realmente aprendas
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodItems.map((item, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="inline-block bg-card border-primary">
            <CardContent className="p-6">
              <p className="text-lg font-medium text-foreground">
                No avanzamos hasta que{" "}
                <span className="text-primary">realmente comprendas</span> y puedas aplicar lo aprendido.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
