"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Home, Bath, ChefHat, TreePine, Building, Eye, ArrowRight } from "lucide-react";
import Heading from "@/components/heading";
import Section from '@/components/section'

const ApplicationShowcase = () => {
  const [activeTab, setActiveTab] = useState("kitchens");

  const applications = {
    kitchens: {
      icon: ChefHat,
      title: "Kitchens",
      description: "Transform your culinary space with stunning countertops and backsplashes",
      projects: [
        {
          id: 1,
          title: "Modern Minimalist Kitchen",
          image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1757604522/Masseto_Render_wj376t.png",
          stone: "Masseto",
          description: "Clean lines meet luxury with this stunning marble island",
          features: ["Waterfall edge", "Integrated sink", "Heat resistant"]
        },
        {
          id: 2,
          title: "Rustic Farmhouse Kitchen",
          image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1757604521/Midnight_Mist_Render_zbmfrd.jpg",
          stone: "Midnight Mist",
          description: "Warm brown marble creates a cozy, inviting atmosphere",
          features: ["Honed finish", "Thick edge profile", "Natural veining"]
        },
        {
          id: 3,
          title: "Contemporary Chef's Kitchen",
          image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1757604518/Calacatta_aurica_gold_5202_insta._swwoqn.png",
          stone: "Calacatta Aurica",
          description: "Professional-grade surfaces for serious cooking",
          features: ["Polished finish", "Large format slabs", "Stain resistant"]
        },
        {
          id: 4,
          title: "Transitional Kitchen Design",
          image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1757604517/Dolce_Vita_s81l38.jpg",
          stone: "Dolce Vita",
          description: "Versatile granite that complements any style",
          features: ["Speckled pattern", "Durable surface", "Easy maintenance"]
        }
      ]
    },
    bathrooms: {
      icon: Bath,
      title: "Bathrooms",
      description: "Create spa-like retreats with luxurious stone surfaces",
      projects: [
        // {
        //   id: 5,
        //   title: "Master Bathroom Oasis",
        //   image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1755957557/MadhavSurface_BathRoom_3_ixam8k.png",
        //   stone: "Verde Breccia",
        //   description: "Elegant marble creates a serene, hotel-like atmosphere",
        //   features: ["Book-matched slabs", "Shower walls", "Vanity tops"]
        // },
        {
          id: 6,
          title: "Modern Powder Room",
          image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1757604522/Zermatt_Render_tpiz8u.jpg",
          stone: "Zermatt",
          description: "Bold blue granite makes a stunning statement",
          features: ["Dramatic veining", "Accent wall", "Custom vanity"]
        },
        {
          id: 11,
          title: "Luxury Spa Bathroom",
          image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1757604520/AVALANCE_sink_render_gxrkmb.jpg",
          stone: "Avalance",
          description: "Soft veining and creamy undertones bring warmth and tranquility to this spa-inspired master bath.",
          features: ["Full-height marble walls", "Floating vanity design", "Integrated lighting accents"]
        },

        // {
        //   id: 12,
        //   title: "Modern Marble Retreat",
        //   image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1757604519/K2_Render_tesduz.jpg",
        //   stone: "K2",
        //   description: "Crisp white marble with subtle grey patterns creates a minimalist yet inviting sanctuary.",
        //   features: ["Book-matched shower panels", "Stone-wrapped vanity", "Freestanding tub backdrop"]
        // },
      ]
    },
    living: {
      icon: Home,
      title: "Living Rooms",
      description: "Elegant stone features that become the heart of your home",
      projects: [
        {
          id: 7,
          title: "Grand Fireplace Surround",
          image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1755957700/MadhavSurface_LivingRoom_4_xp0ztq.jpg",
          stone: "Savannah Silk",
          description: "Dramatic stone creates a stunning focal point",
          features: ["Backlit installation", "Floor-to-ceiling", "Natural patterns"]
        },
        // {
        //   id: 8,
        //   title: "Feature Wall Installation",
        //   image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1757604517/Dolce_Vita_s81l38.jpg",
        //   stone: "Dolce Vita",
        //   description: "Warm golden tones add luxury to living spaces",
        //   features: ["Large format", "Seamless installation", "Ambient lighting"]
        // },
        // {
        //   id: 9,
        //   title: "Golden Accent Wall",
        //   image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1755957648/MadhavSurface_LivingRoom_2_ngp7ns.png",
        //   stone: "Kilimanjaro",
        //   description: "Rich golden hues transform this wall into a dramatic centerpiece that radiates warmth.",
        //   features: ["Seamless large slabs", "Warm LED wall wash", "Luxury focal installation"]
        // },

        {
          id: 10,
          title: "Statement Living Wall",
          image: "https://res.cloudinary.com/dljiyumfx/image/upload/v1755961210/MadhavSurface_LivingRoom_6_u2mf4x.png",
          stone: "Sahara Eclipse",
          description: "Dark, moody textures contrasted with golden streaks add depth and sophistication to the space.",
          features: ["Oversized book-matched slabs", "Hidden lighting integration", "High-impact design feature"]
        }
      ]
    },
    // outdoor: {
    //   icon: TreePine,
    //   title: "Outdoor Spaces",
    //   description: "Weather-resistant beauty for patios, pools, and gardens",
    //   projects: [
    //     {
    //       id: 9,
    //       title: "Pool Deck Paradise",
    //       image: "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg",
    //       stone: "Travertine Classic",
    //       description: "Non-slip surfaces perfect for poolside luxury",
    //       features: ["Slip-resistant", "Cool to touch", "Weather resistant"]
    //     },
    //     {
    //       id: 10,
    //       title: "Outdoor Kitchen",
    //       image: "https://plus.unsplash.com/premium_photo-1673014202284-88599914cd5b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //       stone: "Granite Charcoal",
    //       description: "Durable surfaces built for outdoor entertaining",
    //       features: ["Heat resistant", "Stain proof", "UV stable"]
    //     }
    //   ]
    // },
    // commercial: {
    //   icon: Building,
    //   title: "Commercial",
    //   description: "Professional installations for hotels, restaurants, and offices",
    //   projects: [
    //     {
    //       id: 11,
    //       title: "Luxury Hotel Lobby",
    //       image: "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg",
    //       stone: "Royal White",
    //       description: "Impressive entrance with grand marble installation",
    //       features: ["High traffic rated", "Easy maintenance", "Timeless appeal"]
    //     },
    //     {
    //       id: 12,
    //       title: "Restaurant Interior",
    //       image: "/api/placeholder/600/400",
    //       stone: "Midnight Granite",
    //       description: "Sophisticated dining atmosphere with dark stone",
    //       features: ["Food safe", "Scratch resistant", "Professional grade"]
    //     }
    //   ]
    // }
  };

  const currentApp = applications[activeTab];

  return (
    <Section>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Heading title="Application Showcase" />
          {/* <Heading title="Application Showcase" text="Discover how our premium stones transform spaces across different applications. From intimate residential projects to grand commercial installations." /> */}
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 md:mb-12 pb-2">
          {Object.entries(applications).map(([key, app]) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap text-sm sm:text-base min-w-fit ${activeTab === key
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted-foreground text-foreground hover:bg-muted-foreground/90 hover:text-foreground"
                }`}
            >
              <app.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">{app.title}</span>
              <span className="sm:hidden">{app.title.split(' ')[0]}</span>
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentApp.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-muted-foreground backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 mb-3">
                        {project.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-primary/80 text-primary-foreground px-2 py-1 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </div> */}

                  {/* Stone Badge */}
                  <div className="absolute top-4 left-4 bg-foreground/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {project.stone}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-medium text-foreground/90 mb-2">
                    {project.title}
                  </h4>
                  {/* <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p> */}

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-foreground/90 text-white px-3 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/20 to-primary/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our design experts help you choose the perfect stone for your project.
              Schedule a consultation to explore endless possibilities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-colors duration-300"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </Section>
  );
};

export default ApplicationShowcase;
