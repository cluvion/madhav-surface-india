"use client";
import React from "react";
import { motion } from "motion/react";



const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  isScrolled = false,
  hasDropdown = true,
  DropdownIcon = null
}) => {
  const handleClick = () => {
    if (hasDropdown) {
      setActive(active === item ? null : item);
    }
  };

  return (
    (<div
      onMouseEnter={() => setActive(item)}
      className="relative px-4 py-2 group hover:bg-white/20 rounded-lg transition-colors duration-300">
      <motion.div
        className="flex items-center space-x-1 cursor-pointer"
        onClick={handleClick}
        transition={{ duration: 0.3 }}>
        <motion.p
          transition={{ duration: 0.3 }}
          className={`hover:opacity-[0.9] transition-colors duration-300 font-medium select-none ${isScrolled ? "text-foreground" : "text-white"
            }`}>
          {item}
        </motion.p>
        {hasDropdown && DropdownIcon && (
          <motion.div
            animate={{ rotate: active === item ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
            <DropdownIcon className="w-4 h-4" />
          </motion.div>
        )}
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 10 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_2.3rem)] left-1/2 transform -translate-x-1/2 z-40"
              onMouseEnter={() => setActive(item)}
              onMouseLeave={() => setActive(null)} >
              {/* Extended invisible bridge to prevent gap issues */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full h-8 bg-transparent" />
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="dropdown-content bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>)
  );
};

export const MenuBar = ({
  setActive,
  children,
  isScrolled = false
}) => {
  return (
    (<nav
      // resets the state when leaving the entire menu area
      onMouseLeave={(e) => {
        // Add a small delay to prevent flickering when moving between menu items
        setTimeout(() => {
          if (e.currentTarget && !e.currentTarget.matches(':hover')) {
            setActive(null);
          }
        }, 100);
      }}
      className={`relative transition-all duration-300 flex justify-center space-x-2`} >
      {children}
    </nav>)
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    (<a href={href} className="flex space-x-2" >
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl" />
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-xl  mb-1 text-foreground">
          {title}
        </h4>
        {/* <p className="font-light text-gray-600 text-sm max-w-[10rem]">
          {description}
        </p> */}
      </div>
    </a>)
  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    (<a
      {...rest}
      className="text-gray-600 hover:text-foreground transition-colors duration-200">
      {children}
    </a>)
  );
};
