"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "¿Necesito saber inglés antes de empezar?",
    answer: "No. Puedes comenzar desde cero absoluto si ya has culminado tu carrera universitaria, tu escuela básica o estás a la mitad. Las sesiones están diseñadas para que entiendas paso a paso, con explicaciones claras en español y práctica progresiva hasta que puedas entender y después desenvolverte en inglés."
  },
  {
    question: "¿Voy a aprender a comunicarme realmente?",
    answer: "Sí. Ese es el objetivo principal. Aquí no solo ves teoría: practicas constantemente, te comunicas y vas entendiendo desde el inicio, recibes corrección en tiempo real, y recibes todas las respuestas libremente a tus preguntas con respecto a la clase. El enfoque es que puedas usar el inglés en situaciones reales, no solo entenderlo."
  },
  {
    question: "¿Cuánto dura cada clase?",
    answer: "Cada sesión tiene una duración aproximada de 1 hora. Es tiempo suficiente para explicar, practicar, corregir y aplicar lo aprendido."
  },
  {
    question: "¿Con qué frecuencia debo tomar las clases?",
    answer: "Depende de qué tan rápido quieras avanzar: 3 veces por semana es el progreso ideal, 2 veces por semana es buen progreso, 1 vez por semana no es recomendado. Este programa está diseñado para personas que realmente quieren avanzar y valoran el idioma."
  },
  {
    question: "¿Cuánto tiempo tengo para usar mis sesiones?",
    answer: "Las 12 sesiones deben completarse en un máximo de 6.1 semanas (45 días). Esto asegura continuidad y resultados reales. Al pasar de allí comienza a desplomarse lo aprendido."
  },
  {
    question: "¿Cómo funcionan los pagos?",
    answer: "Los pagos se realizan por adelantado, según el paquete elegido. Esto garantiza tu espacio y organización de las sesiones. Una vez confirmado el pago, se agenda tu horario."
  },
  {
    question: "¿Qué métodos de pago aceptas?",
    answer: "Puedes pagar mediante transferencia bancaria, depósito o PayPal. Los detalles se te envían directamente al momento de confirmar."
  },
  {
    question: "¿Qué pasa si no puedo asistir a una clase?",
    answer: "Depende del tipo de modalidad: En clases 1:1 se puede reprogramar con previo aviso, tienes 45 días para consumir tus sesiones. En DÚO, la clase se imparte solo si asisten ambos (condición para mantener el precio). En GROUP, la clase se imparte solo si asisten los 4 juntos. Si alguien falta, pueden optar por cambiar a otra modalidad según disponibilidad."
  },
  {
    question: "¿Puedo extender mis sesiones si no me da tiempo?",
    answer: "Sí. Puedes extender el paquete que tengas con un recargo del 20% como penalidad, para mantener la continuidad del proceso."
  },
  {
    question: "¿Puedo elegir con quién estar en DÚO o GROUP?",
    answer: "Sí. Puedes formar tu propio grupo con gente comprometida: amigos, pareja, compañeros de trabajo o familia. Esto hace el proceso más cómodo y dinámico."
  },
  {
    question: "¿Cuándo voy a ver resultados?",
    answer: "Depende de tu constancia. Pero si cumples con la frecuencia recomendada, empiezas a notar avances desde las primeras semanas. El progreso es real porque trabajamos con práctica directa."
  },
  {
    question: "¿Cómo son tus clases?",
    answer: "Las sesiones combinan explicación clara, práctica guiada, corrección inmediata, aplicación en situaciones reales y aclaración de todas tus preguntas. No avanzamos hasta que realmente entiendas y pronuncies correctamente."
  },
  {
    question: "¿Este programa es para cualquier persona?",
    answer: "Este programa es ideal para personas que quieren aprender en serio, están dispuestas a practicar, buscan resultados reales y que hayan culminado su universidad o la mitad, escuela básica o la mitad. No es un curso cualquiera ni pasivo. Es un proceso activo. Es sesión psicopedagógica de inglés."
  },
  {
    question: "¿Cómo empiezo?",
    answer: "Muy simple: Escríbeme por WhatsApp, indica que quieres comenzar, y te explico disponibilidad y próximos pasos."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-[#0a3a52]/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f77f00]/20 text-[#f77f00] text-sm font-medium mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            ¿Tienes dudas? Aquí están las respuestas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de comenzar tu camino hacia la fluidez en inglés.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:ring-2 data-[state=open]:ring-[#f77f00]/30"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-[#f77f00] transition-colors py-5 text-base md:text-lg font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Ready to start CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-[#f77f00]/20 to-[#d62828]/20 rounded-2xl p-8 md:p-12 border border-[#f77f00]/30">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Listo para comenzar?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Si ya leíste todo y sientes que esto es para ti, escríbeme ahora mismo por WhatsApp con el mensaje: <span className="text-[#f77f00] font-semibold">{'"Quiero comenzar"'}</span>
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Te indicaré disponibilidad, opciones y cómo asegurar tu cupo.
          </p>
          <Button 
            size="lg" 
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-8 py-6 text-lg rounded-xl"
            asChild
          >
            <a href="https://wa.me/18296841192" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Escríbeme por WhatsApp
            </a>
          </Button>
          <p className="text-sm text-[#d62828] font-medium mt-4">
            Los cupos son limitados.
          </p>
        </div>
      </div>
    </section>
  )
}
