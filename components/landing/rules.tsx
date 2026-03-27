"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, UsersRound, AlertTriangle } from "lucide-react"

const rulesSections = [
  {
    icon: AlertTriangle,
    title: "Reglas generales",
    rules: [
      "Cupos limitados",
      "Horarios según disponibilidad",
    ],
  },
  {
    icon: Users,
    title: "Clases Dúo",
    rules: [
      "Ambos deben asistir",
      "Si uno falta, no hay sesión",
    ],
  },
  {
    icon: UsersRound,
    title: "Clases Grupo",
    rules: [
      "Requiere compromiso",
      "Depende de asistencia",
    ],
  },
]

const frequencyOptions = [
  {
    frequency: "3 veces/semana",
    label: "Ideal",
    duration: "4 semanas",
    recommended: true,
  },
  {
    frequency: "2 veces/semana",
    label: "Aceptable",
    duration: "6 semanas",
    recommended: false,
  },
  {
    frequency: "1 vez/semana",
    label: "No recomendado",
    duration: "—",
    recommended: false,
    warning: true,
  },
]

export function Rules() {
  return (
    <section className="px-4 py-16 md:py-24" id="reglas">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Reglas y Frecuencia
          </h2>
          <p className="text-muted-foreground text-lg">
            Para garantizar los mejores resultados
          </p>
        </div>
        
        {/* Rules Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {rulesSections.map((section, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.rules.map((rule, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Frequency Section */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">Frecuencia recomendada</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {frequencyOptions.map((option, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-xl border transition-colors ${
                    option.recommended 
                      ? "bg-primary/10 border-primary" 
                      : option.warning 
                        ? "bg-secondary/10 border-secondary/50"
                        : "bg-muted/30 border-border"
                  }`}
                >
                  <div className="text-lg font-semibold mb-1 text-foreground">{option.frequency}</div>
                  <div className={`text-sm font-medium mb-2 ${
                    option.recommended 
                      ? "text-primary" 
                      : option.warning 
                        ? "text-secondary"
                        : "text-muted-foreground"
                  }`}>
                    {option.label}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Completar en: {option.duration}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-primary/10 rounded-xl border border-primary/30">
              <p className="text-center font-medium text-foreground">
                Las 12 sesiones deben completarse en{" "}
                <span className="text-primary">máximo 6 semanas</span>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
