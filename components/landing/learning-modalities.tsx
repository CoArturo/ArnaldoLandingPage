"use client"

import { useState } from "react"
import { Users, PlayCircle, User, Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const modalities = [
  {
    id: "live-groups",
    icon: Users,
    title: "Clases en vivo",
    subtitle: "(grupos reducidos)",
    description: "Clases en tiempo real, en grupos pequeños, donde practicas, participas y recibes corrección directa.",
    benefits: [
      "Interacción en vivo",
      "Aprendizaje dinámico",
      "Práctica constante",
      "Corrección en el momento"
    ],
    idealFor: "Personas que quieren aprender con otros y mantenerse motivadas.",
    popular: false
  },
  {
    id: "hybrid",
    icon: PlayCircle,
    title: "Curso grabado + clase en vivo + asesoría",
    subtitle: "",
    description: "Accedes a contenido grabado a tu ritmo, combinado con una clase en vivo semanal y soporte directo por WhatsApp.",
    benefits: [
      "Flexibilidad total",
      "Clase en vivo semanal",
      "Acompañamiento por WhatsApp",
      "Refuerzo continuo"
    ],
    idealFor: "Personas con poco tiempo que necesitan flexibilidad pero también guía.",
    popular: true
  },
  {
    id: "private",
    icon: User,
    title: "Clases privadas",
    subtitle: "(1:1)",
    description: "Entrenamiento completamente personalizado, enfocado en tu nivel, ritmo y objetivos.",
    benefits: [
      "Atención 100% personalizada",
      "Avance más rápido",
      "Espacio total para preguntas",
      "Corrección constante"
    ],
    idealFor: "Personas que quieren resultados rápidos y enfoque total.",
    popular: false
  }
]

export function LearningModalities() {
  const [selected, setSelected] = useState<string | null>("hybrid")

  const handleSelect = (id: string) => {
    setSelected(id)
  }

  const scrollToPlans = () => {
    const plansSection = document.getElementById("planes")
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="modalidades" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Elige cómo quieres aprender
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tenemos 3 modalidades diseñadas según tu forma de aprender, tu tiempo y tu nivel de compromiso.
          </p>
        </div>

        {/* Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {modalities.map((modality) => {
            const Icon = modality.icon
            const isSelected = selected === modality.id

            return (
              <button
                key={modality.id}
                onClick={() => handleSelect(modality.id)}
                className={cn(
                  "relative flex flex-col p-6 md:p-8 rounded-2xl border-2 text-left transition-all duration-300",
                  "hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                  isSelected 
                    ? "border-primary bg-card shadow-xl shadow-primary/20" 
                    : "border-border bg-card/50"
                )}
              >
                {/* Popular Badge */}
                {modality.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                      Más popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors",
                  isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {modality.title}
                </h3>
                {modality.subtitle && (
                  <span className="text-sm text-muted-foreground mb-3">
                    {modality.subtitle}
                  </span>
                )}

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 mt-2">
                  {modality.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-5 flex-1">
                  {modality.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className={cn(
                        "w-4 h-4 shrink-0",
                        isSelected ? "text-primary" : "text-muted-foreground"
                      )} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Ideal For */}
                <div className={cn(
                  "p-3 rounded-lg text-sm",
                  isSelected ? "bg-primary/10 text-foreground" : "bg-muted/50 text-muted-foreground"
                )}>
                  <span className="font-semibold">Ideal para: </span>
                  {modality.idealFor}
                </div>

                {/* Selection Indicator */}
                <div className={cn(
                  "absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                  isSelected 
                    ? "border-primary bg-primary" 
                    : "border-muted-foreground/30"
                )}>
                  {isSelected && <Check className="w-4 h-4 text-primary-foreground" />}
                </div>
              </button>
            )
          })}
        </div>

        {/* Decision Question */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-6">
            ¿Cuál te interesa más?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={scrollToPlans}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl"
            >
              Quiero esta modalidad
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-border hover:bg-muted px-8 py-6 text-lg rounded-xl"
            >
              <a 
                href="https://wa.me/18296841192?text=Hola%2C%20quiero%20saber%20más%20sobre%20las%20modalidades%20de%20aprendizaje" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Tengo dudas
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
