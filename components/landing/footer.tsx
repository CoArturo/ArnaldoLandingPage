"use client"

import { MessageCircle, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AF</span>
              </div>
              <span className="font-semibold text-foreground">Arnaldo Farias</span>
            </div>
            <p className="text-muted-foreground">
              English Coach con +34 años de experiencia ayudándote a comunicar en inglés.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#metodo" className="text-muted-foreground hover:text-primary transition-colors">
                  Método
                </a>
              </li>
              <li>
                <a href="#clases" className="text-muted-foreground hover:text-primary transition-colors">
                  Clases
                </a>
              </li>
              <li>
                <a href="#planes" className="text-muted-foreground hover:text-primary transition-colors">
                  Planes
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://wa.me/18296841192" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Arnaldo Farias. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
