'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { HoverButton } from './ui/hoverbutton'
import { countryCodes, getPopularCountryCodes } from '@/utils/countryCodes'

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
  const [showAllCountries, setShowAllCountries] = useState(false)

  // Get popular countries first, then all countries if needed
  const displayCountries = showAllCountries ? countryCodes : getPopularCountryCodes()

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

    // Handle "show all countries" option
    if (name === 'countryCode' && value === 'show-all') {
      setShowAllCountries(true)
      return
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      onSubmit={handleSubmit}
      className="bg-n-8 border border-gray-900 rounded-2xl p-6 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-n-1 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-n-7 border border-gray-900 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
            required
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-n-1 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-n-7 border border-gray-900 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
            required
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="category" className="block text-n-1 mb-2">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-[9px] bg-n-7 border border-gray-900 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
            required
          >
            <option value="">Select Category</option>
            <option value="Home owner">Home owner</option>
            <option value="Architect">Architect</option>
            <option value="Interior Designer">Interior Designer</option>
            <option value="Distributor">Distributor</option>
            <option value="Builder">Builder</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label htmlFor="phone" className="block text-n-1 mb-2">Phone Number</label>
          <div className="relative">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-transparent text-n-1 focus:outline-none z-10 w-16 border-r border-gray-900"
              style={{
                backgroundImage: 'none',
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none'
              }}
            >
              {displayCountries.map((country) => (
                <option key={`${country.code}-${country.flag}`} value={country.code}>
                  {country.code} {country.flag}
                </option>
              ))}
              {!showAllCountries && (
                <option value="" disabled className="bg-gray-100 text-gray-500">
                  ──────────────────
                </option>
              )}
              {!showAllCountries && (
                <option
                  value="show-all"
                  className="bg-blue-50 text-blue-600 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllCountries(true);
                  }}
                >
                  📍 Show All Countries
                </option>
              )}
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-20 pr-4 py-3 bg-n-7 border border-gray-900 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-n-1 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          className="w-full px-4 py-3 bg-n-7 border border-gray-900 rounded-xl text-n-1 focus:outline-none focus:border-color-1"
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