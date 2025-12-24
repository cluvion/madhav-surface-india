// 'use client';
// import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
// import { useRef, forwardRef } from 'react';
// import Image from 'next/image';
// import { HoverButton } from './hoverbutton';

// const Card = ({
//     i,
//     title,
//     description,
//     url,
//     color,
//     progress,
//     range,
//     targetScale,
//     projects,
// }) => {
//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ['start end', 'start start'],
//     });

//     const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
//     const scale = useTransform(progress, range, [1, targetScale]);

//     return (
//         <div
//             ref={container}
//             className='h-screen flex items-center justify-center sticky top-25'
//             style={{
//                 backgroundImage: `url(${color})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat'
//             }}
//         >
//             {/* Background overlay for better text readability */}
//             {/* <div className='absolute inset-0 bg-white/20'></div> */}

//             <motion.div
//                 style={{
//                     // scale,
//                     top: `calc(-5vh + ${i}px)`,
//                 }}
//                 className='flex items-center justify-between w-full max-w-7xl mx-auto px-16 relative z-10 '
//             >
//                 {/* Left side - Text content */}
//                 <div className='w-1/3 pr-16'>
//                     <div className='mb-8 max-w-sm'>
//                         <h2 className='heading text-xl sm:text-2xl lg:text-3xl font-thin text-gray-900'>
//                             {i === 0 ? '550' : `${550 + i * 100}`}
//                         </h2>
//                         <h3 className='heading text-xl sm:text-2xl lg:text-3xl font-thin text-gray-900'>{title}</h3>
//                     </div>

//                     <HoverButton href={"#"} text='View Color' variant='transparentBlack' />
//                 </div>

//                 {/* Center - Portrait Image */}
//                 <div className='w-1/3 flex justify-center'>
//                     <div className='w-80 h-[32rem] relative'>
//                         <motion.div
//                             className='rounded-lg overflow-hidden shadow-2xl w-full h-full'
//                         // style={{ scale: imageScale }}
//                         >
//                             <Image
//                                 src={url}
//                                 alt={title}
//                                 fill
//                                 className='object-cover'
//                                 loading="lazy"
//                             />
//                         </motion.div>
//                     </div>
//                 </div>

//                 {/* Right side - Empty for balance */}
//                 <div className='w-1/3'></div>
//             </motion.div>

//             {/* Bottom counter */}
//             <div className='absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10'>
//                 <p className='text-sm text-gray-900'>
//                     {String(i + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
//                 </p>
//             </div>
//         </div>
//     );
// };

// const ScrollStack = forwardRef(({ projects }, ref) => {
//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ['start start', 'end end'],
//     });

//     return (
//         <main ref={container}>
//             <section className='w-full'>
//                 {projects.map((project, i) => {
//                     const targetScale = 1 - (projects.length - i) * 0.05;
//                     return (
//                         <Card
//                             key={`p_${i}`}
//                             i={i}
//                             url={project.link}
//                             title={project.title}
//                             color={project.color}
//                             description={project.description}
//                             progress={scrollYProgress}
//                             range={[i * 0.25, 1]}
//                             targetScale={targetScale}
//                             projects={projects}
//                         />
//                     );
//                 })}
//             </section>
//         </main>
//     );
// });

// ScrollStack.displayName = 'ScrollStack';

// export default ScrollStack;