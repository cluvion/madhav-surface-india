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
import { Button } from './ui/button'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  countryCode: '+91',
  projectScope: '',
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
    formDataPayload.append('entry.1568563042', formData.projectScope)

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
      className="space-y-6" // Removed border and padding for clean look
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">How Can We Help You ?</h3>
          <p className="text-sm md:text-base text-foreground/50 mt-2 md:mt-4">Your email address will not be published. Required fields are marked *</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          {/* <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name*</Label> */}
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-foreground border-neutral-200 focus:border-primary px-4 py-6 rounded-none"
            required
            placeholder="Name*"
          />
        </div>

        <div className="space-y-2">
          {/* <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email*</Label> */}
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-foreground border-neutral-200 focus:border-primary px-4 py-6 rounded-none"
            required
            placeholder="Email*"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          {/* <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label> */}
          <div className="flex gap-2">
            {/* CountryCode styling might need separate adjustment if it has fixed styles */}
            <CountryCode
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              label=""
              placeholder="Code"
              contentClassName=""
              // className="shrink-0"
              buttonClassName="rounded-none h-full"
            />
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="text-foreground border-neutral-200 focus:border-primary px-4 py-6 rounded-none w-full"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          {/* <Label htmlFor="projectScope" className="text-sm font-medium text-gray-700">Project Scope</Label> */}
          {/* Note: Select trigger styling needs to match Input */}
          <Select value={formData.projectScope} onValueChange={(value) => setFormData(prev => ({ ...prev, projectScope: value }))} required>
            <SelectTrigger className="text-foreground/50 border-neutral-200 focus:border-primary px-4 py-6 rounded-none w-full">
              <SelectValue placeholder="Project Scope" />
            </SelectTrigger>
            <SelectContent className="bg-white border-neutral-200">
              <SelectItem value="Home owner" className="text-foreground">Home owner</SelectItem>
              <SelectItem value="Architect" className="text-foreground">Architect</SelectItem>
              <SelectItem value="Interior Designer" className="text-foreground">Interior Designer</SelectItem>
              <SelectItem value="Distributor" className="text-foreground">Distributor</SelectItem>
              <SelectItem value="Builder" className="text-foreground">Builder</SelectItem>
              <SelectItem value="Others" className="text-foreground">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        {/* <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label> */}
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="text-foreground border-neutral-200 focus:border-primary px-4 py-4 rounded-none min-h-[150px] resize-none"
          required
          placeholder="Write Your Message.."
        />
      </div>
      <div className="flex justify-center lg:justify-start">
        <Button
          text='SEND MESSAGE'
          onClick={handleSubmit}
        // width='w-[200px]'
        // variant='black' // You might want to change this to primary/dark based on design
        // className="rounded-none font-bold text-sm tracking-wider"
        >
          Send Message
        </Button>
      </div>
    </motion.form>
  )
}

export default ContactForm