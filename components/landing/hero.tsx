"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              +34 años de experiencia
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Aprende a comunicarte en inglés en{" "}
              <span className="text-primary">situaciones reales</span>, desde cero y sin miedo
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Sesiones personalizadas según tu ritmo, con práctica real, corrección inmediata y progreso verdadero.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              {/* <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Calendar className="mr-2 h-5 w-5" />
                Agenda tu clase gratuita
              </Button> */}
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-lg px-8 py-6 border-border hover:bg-card text-foreground"
              >
                <Link href="https://wa.me/18296841192" target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Escríbeme por WhatsApp
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse" />
              <div className="absolute inset-4 border-2 border-primary/30 rounded-full" />
              <div className="absolute inset-8 border-2 border-primary/40 rounded-full" />
              
              {/* Center avatar placeholder */}
              <div className="absolute inset-12 bg-card rounded-full flex items-center justify-center border-4 border-primary shadow-2xl shadow-primary/20">
                <span className="text-6xl font-bold text-primary">AF</span>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 right-4 bg-card px-4 py-2 rounded-xl border border-border shadow-lg">
                <span className="text-sm font-medium text-foreground">+500 estudiantes</span>
              </div>
              <div className="absolute -bottom-4 left-4 bg-primary px-4 py-2 rounded-xl shadow-lg">
                <span className="text-sm font-semibold text-primary-foreground">Resultados reales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
