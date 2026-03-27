"use client"

import { Card, CardContent } from "@/components/ui/card"

const classSteps = [
  {
    number: "01",
    title: "Explicación clara",
    description: "Conceptos presentados de forma simple y directa",
  },
  {
    number: "02",
    title: "Práctica guiada",
    description: "Ejercicios paso a paso con mi acompañamiento",
  },
  {
    number: "03",
    title: "Respuestas a tus preguntas",
    description: "Resolvemos todas tus dudas en el momento",
  },
  {
    number: "04",
    title: "Corrección inmediata",
    description: "Feedback instantáneo para mejorar rápido",
  },
  {
    number: "05",
    title: "Aplicación real",
    description: "Practica en situaciones del día a día",
  },
]

export function HowClassesWork() {
  return (
    <section className="px-4 py-16 md:py-24" id="clases">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            ¿Cómo son las clases?
          </h2>
          <p className="text-muted-foreground text-lg">
            Un proceso estructurado para maximizar tu aprendizaje
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
          
          <div className="space-y-6">
            {classSteps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number circle */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 bg-primary rounded-full flex items-center justify-center z-10 shadow-lg shadow-primary/30">
                  <span className="text-primary-foreground font-bold text-sm">{step.number}</span>
                </div>
                
                {/* Content card */}
                <Card className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] bg-card border-border hover:border-primary/30 transition-colors ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
