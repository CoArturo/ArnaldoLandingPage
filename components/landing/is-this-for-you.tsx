"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const targetAudience = [
  "No sabes inglés y quieres empezar desde cero",
  "Entiendes algo, pero no logras comunicarte",
  "Has estudiado antes, pero lo estás olvidando",
  "Necesitas el inglés para avanzar profesionalmente",
]

export function IsThisForYou() {
  return (
    <section className="px-4 py-16 md:py-24" id="para-ti">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            ¿Esto es para ti?
          </h2>
          <p className="text-muted-foreground text-lg">
            Si te identificas con alguna de estas situaciones, puedo ayudarte
          </p>
        </div>
        
        <Card className="bg-card border-border">
          <CardContent className="p-6 md:p-8">
            <ul className="space-y-4">
              {targetAudience.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-background/50 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-center text-lg font-medium text-foreground">
                Trabajas directamente conmigo y tienes el espacio para{" "}
                <span className="text-primary">hacer todas tus preguntas</span>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
