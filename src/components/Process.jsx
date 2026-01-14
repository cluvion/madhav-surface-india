"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"



export function Process({
  steps = [],
  className,
  autoPlayInterval = 4000,
}) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (steps.length === 0) return

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentStep((prev) => (prev + 1) % steps.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, steps.length, autoPlayInterval])

  if (steps.length === 0) {
    return <div>No steps available</div>
  }

  return (
    <div className={cn(className)}>
      <div className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="order-2 lg:order-1 space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 md:gap-8 cursor-pointer"
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: index === currentStep ? 1 : 0.6 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setCurrentStep(index)}
                >
                  <motion.div
                    className={cn(
                      "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 flex-shrink-0",
                      index === currentStep
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-muted border-muted-foreground",
                    )}
                    whileHover={{ scale: 1.02 }}
                    style={{ transformOrigin: "center" }}
                  >
                    {IconComponent ? (
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                    ) : (
                      <span className="text-lg font-semibold">{step.number}</span>
                    )}
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      {/* <span className="text-sm text-muted-foreground">
                        • {step.duration}
                      </span> */}
                    </div>
                    <p className="text-sm font-medium text-primary mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-sm md:text-base text-foreground/50 mb-3">
                      {step.description}
                    </p>
                    
                    {index === currentStep && (
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 origin-top overflow-hidden"
                      >
                        <ul className="space-y-1">
                          {step.details?.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        {/* <div className="flex items-center gap-4 pt-2">
                          <span className="text-sm font-medium">
                            Cost: <span className="text-primary">{step.cost}</span>
                          </span>
                        </div> */}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="order-1 lg:order-2 relative overflow-hidden " style={{ contain: "layout" }}>
            <AnimatePresence mode="wait">
              {steps.map(
                (step, index) =>
                  index === currentStep && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 overflow-hidden"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover object-right"
                        width={1000}
                        height={1000}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                      
                      {/* Progress bar */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-background/20 rounded-full h-1 overflow-hidden">
                          <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
