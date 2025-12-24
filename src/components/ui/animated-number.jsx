import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const AnimatedNumber = ({ 
  value, 
  className = '',
  springOptions = { damping: 30, stiffness: 300 },
  as: Component = 'span'
}) => {
  const MotionComponent = motion.create(Component);
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, value => 
    Math.round(value).toLocaleString()
  );

  React.useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <MotionComponent className={`${className} tabular-nums`}>
      {display}
    </MotionComponent>
  );
};

export default AnimatedNumber;