"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, AlertCircle, X, Minus } from "lucide-react"

const plans = [
  {
    name: "Personalizado",
    subtitle: "1:1",
    badge: "Resultados más rápidos",
    badgeVariant: "default" as const,
    featured: true,
    benefits: [
      "100% enfocado en ti",
      "Avance a tu ritmo",
      "Atención directa",
      "Espacio para preguntas",
    ],
    pricing: [
      { label: "Por sesión", price: "$25" },
      { label: "Pack 10", price: "$180", perSession: "$18/h" },
      { label: "Pack 20", price: "$300", perSession: "$15/h" },
    ],
  },
  {
    name: "Dúo",
    subtitle: "2 personas",
    badge: "Ahorro inteligente",
    badgeVariant: "secondary" as const,
    featured: false,
    benefits: [
      "Aprenden juntos",
      "Más conversación",
      "Motivación compartida",
    ],
    pricing: [
      { label: "12 sesiones", price: "$90", perSession: "$7.5/sesión" },
    ],
    condition: "Ambos deben asistir",
  },
  {
    name: "Grupo",
    subtitle: "4 personas",
    badge: "Máximo ahorro",
    badgeVariant: "outline" as const,
    featured: false,
    benefits: [
      "Dinámico",
      "Interacción real",
      "Muy accesible",
    ],
    pricing: [
      { label: "12 sesiones", price: "$45", perSession: "$3.75/sesión" },
    ],
  },
]

const comparisonTable = [
  { feature: "Atención directa", personal: true, duo: true, group: "partial" },
  { feature: "Ritmo personalizado", personal: true, duo: "partial", group: false },
  { feature: "Práctica conversacional", personal: true, duo: true, group: true },
  { feature: "Corrección inmediata", personal: true, duo: true, group: "partial" },
  { feature: "Precio accesible", personal: false, duo: true, group: "double" },
  { feature: "Avance rápido", personal: true, duo: true, group: "partial" },
]

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) return <Check className="h-5 w-5 text-primary" />
  if (status === false) return <X className="h-5 w-5 text-muted-foreground/50" />
  if (status === "partial") return <Minus className="h-5 w-5 text-muted-foreground" />
  if (status === "double") return <div className="flex"><Check className="h-5 w-5 text-primary" /><Check className="h-5 w-5 text-primary -ml-2" /></div>
  return null
}

export function Pricing() {
  return (
    <section className="px-4 py-16 md:py-24 bg-card/30" id="planes">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Planes y Precios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Elige el formato que mejor se adapte a tu estilo de aprendizaje
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-card border-border transition-all duration-300 hover:shadow-xl ${
                plan.featured 
                  ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]" 
                  : "hover:border-primary/30"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Recomendado
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <Badge 
                  variant={plan.badgeVariant}
                  className={`w-fit mx-auto mb-3 ${
                    plan.badgeVariant === "default" ? "bg-primary text-primary-foreground" : ""
                  }`}
                >
                  {plan.badge}
                </Badge>
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.subtitle}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Benefits */}
                <ul className="space-y-3">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Pricing */}
                <div className="space-y-3 pt-4 border-t border-border">
                  {plan.pricing.map((price, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{price.label}</span>
                      <div className="text-right">
                        <span className="font-bold text-lg text-foreground">{price.price}</span>
                        {price.perSession && (
                          <span className="text-sm text-muted-foreground ml-2">({price.perSession})</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Condition */}
                {plan.condition && (
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg text-sm">
                    <AlertCircle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">{plan.condition}</span>
                  </div>
                )}
                
                {/* <Button 
                  className={`w-full ${
                    plan.featured 
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                      : "bg-card hover:bg-muted border border-border text-foreground"
                  }`}
                >
                  Elegir plan
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Comparison Table */}
        <Card className="bg-card border-border overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Comparación detallada</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-muted-foreground font-medium">Característica</th>
                    <th className="text-center p-4 text-foreground font-semibold">Personalizado</th>
                    <th className="text-center p-4 text-foreground font-semibold">Dúo</th>
                    <th className="text-center p-4 text-foreground font-semibold">Grupo</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr 
                      key={index}
                      className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4 text-foreground">{row.feature}</td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">
                          <StatusIcon status={row.personal} />
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">
                          <StatusIcon status={row.duo} />
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">
                          <StatusIcon status={row.group} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
