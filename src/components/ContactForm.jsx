'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { HoverButton } from './ui/hoverbutton'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Textarea } from './ui/textarea'
import CountryCode from './ui/country-code'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  countryCode: '+968',
  category: '',
  message: ''
}

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLScc8OjjDyskQtzlB-6gePmyF-68I2PZAopa2R7xRKIpb_Kuzw/formResponse'

    const formDataPayload = new FormData()
    formDataPayload.append('entry.698176508', formData.name)
    formDataPayload.append('entry.1954099121', formData.email)
    formDataPayload.append('entry.554263998', `${formData.countryCode}`)
    formDataPayload.append('entry.1603549671', `${formData.phone}`)
    formDataPayload.append('entry.1780075820', formData.message)
    formDataPayload.append('entry.1568563042', formData.category)

    try {
      await fetch(formUrl, {
        method: 'POST',
        body: formDataPayload,
        mode: 'no-cors'
      })

      alert('Form submitted successfully!')
      setFormData(initialFormData)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form. Please try again.')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCountryCodeChange = (countryCode) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: countryCode
    }))
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      onSubmit={handleSubmit}
      className="border border-primary rounded-2xl p-6 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20"
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20"
            required
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="category" className="text-sm font-medium text-gray-700">Category</Label>
          <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))} required>
            <SelectTrigger className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20 w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-white border-border">
              <SelectItem value="Home owner" className="text-foreground">Home owner</SelectItem>
              <SelectItem value="Architect" className="text-foreground">Architect</SelectItem>
              <SelectItem value="Interior Designer" className="text-foreground">Interior Designer</SelectItem>
              <SelectItem value="Distributor" className="text-foreground">Distributor</SelectItem>
              <SelectItem value="Builder" className="text-foreground">Builder</SelectItem>
              <SelectItem value="Others" className="text-foreground">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
          <div className="flex gap-2">
            <CountryCode
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              label=""
              placeholder="Code"
              contentClassName=""
            />
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20"
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          // rows={6}
          className="text-foreground focus-visible:border-muted focus-visible:ring-ring/20 h-54"
          required
          placeholder="Enter your message"
        />
      </div>

      <HoverButton
        text='Send Message'
        onClick={handleSubmit}
        width='w-full'
        variant='black'
      >
      </HoverButton>
    </motion.form>
  )
}

export default ContactForm