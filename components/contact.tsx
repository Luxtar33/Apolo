"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Av. Industrial 1234, Lima, Perú",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+51 999 888 777",
  },
  {
    icon: Mail,
    title: "Email",
    content: "ventas@apololubes.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 8:00 AM - 6:00 PM",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contacto" className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
            ¿Necesitas <span className="text-primary">ayuda</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para asesorarte. Contáctanos y te ayudaremos a encontrar el producto ideal para tu vehículo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Información de contacto</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-1">{info.title}</h4>
                  <p className="text-sm text-muted-foreground">{info.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">¿Eres distribuidor?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Únete a nuestra red de distribuidores y accede a precios especiales, soporte técnico y más beneficios.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                Solicitar información
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+51 999 888 777"
                    className="bg-background border-border text-foreground"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="bg-background border-border text-foreground"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                  required
                  className="bg-background border-border text-foreground resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Send className="h-4 w-4" />
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
