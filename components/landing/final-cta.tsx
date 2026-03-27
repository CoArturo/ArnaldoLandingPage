"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="px-4 py-16 md:py-24 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border-primary/30 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary rounded-full blur-3xl" />
          </div>
          
          <CardContent className="relative z-10 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">
              No todos necesitan lo mismo
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Tú decides cómo quieres avanzar. Agenda una clase gratuita y descubre qué plan es ideal para ti.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            
            <p className="mt-8 text-sm text-muted-foreground">
              Cupos limitados • Respuesta en menos de 24 horas
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
