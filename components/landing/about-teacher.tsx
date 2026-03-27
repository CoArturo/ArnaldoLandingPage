"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Zap, UserCheck, Target, TrendingUp } from "lucide-react"

const characteristics = [
  { icon: Heart, label: "Paciencia" },
  { icon: Zap, label: "Energía positiva" },
  { icon: UserCheck, label: "Atención directa" },
  { icon: Target, label: "Corrección precisa" },
  { icon: TrendingUp, label: "Compromiso con tu progreso" },
]

export function AboutTeacher() {
  return (
    <section className="px-4 py-16 md:py-24 bg-card/30" id="profesor">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual/Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div style={{overflow: "hidden"}} className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-card border-2 border-primary/30 flex items-center justify-center shadow-2xl shadow-primary/10">
                  <img style={{scale: "1.4"}} src="./arnaldo2.jpeg" />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary px-6 py-3 rounded-xl shadow-lg">
                <p className="text-primary-foreground font-bold text-lg">+34 años</p>
                <p className="text-primary-foreground/80 text-sm">de experiencia</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Tu instructor
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Arnaldo Farias
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Instructor y coach de inglés con más de 34 años de experiencia ayudando a personas como tú a dominar el idioma.
              </p>
            </div>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-foreground">Lo que me define:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {characteristics.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/50"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
