// import Heading from '@/components/heading'
// import { InfiniteSlider } from '@/components/ui/infinite-slider';
// import { reviews } from '@/constants';


// const Testimonials = () => {

//     return (
//         <section className="py-10 pb-20">
//             <div className="w-full">
//                 <Heading title="What Our Partners Say" />
//                 {/* <Heading title="What Our Partners Say" text="What our customers say about us" /> */}

//                 {/* Testimonial Carousel */}
//                 <InfiniteSlider
//                     durationOnHover={500}
//                     duration={100}
//                     gap={24}
//                     className="px-4 sm:px-6 lg:px-8 p-2"
//                 >
//                     {reviews.map((testimonial) => (
//                         <div
//                             key={testimonial.id}
//                             className="w-[24rem] sm:w-[25rem] md:w-[26rem] lg:w-full max-w-4xl mx-auto h-full"
//                         >
//                             <div className="bg-muted-foreground rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] border-2 border-black/10">
//                                 <div className="flex flex-col lg:flex-row h-full">
//                                     {/* Consistent Image Section */}
//                                     <div className="w-full lg:w-2/5 aspect-[4/3] lg:aspect-auto lg:min-h-[280px] relative overflow-hidden">
//                                         <img
//                                             src={testimonial.image}
//                                             alt={`${testimonial.name} - ${testimonial.designation}`}
//                                             className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                                             loading="lazy"
//                                         />
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                                     </div>

//                                     {/* Enhanced Content Section */}
//                                     <div className="lg:w-3/5 p-6 lg:py-8 lg:px-10 flex flex-col justify-center">
//                                         {/* Quote Icon */}
//                                         <div className="mb-4">
//                                             <svg className="w-8 h-8 text-foreground/30" fill="currentColor" viewBox="0 0 24 24">
//                                                 <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
//                                             </svg>
//                                         </div>

//                                         <p className="text-sm lg:text-lg text-gray-700 italic mb-6 lg:mb-8 leading-relaxed font-medium">
//                                             {testimonial.review}
//                                         </p>

//                                         <div className="border-t border-black/10 pt-4">
//                                             <h3 className="heading font-semibold text-lg lg:text-xl text-gray-900 mb-1">{testimonial.name}</h3>
//                                             <p className="text-sm lg:text-base text-gray-600 font-semibold">{testimonial.designation}</p>
//                                             <p className="text-sm lg:text-base text-gray-500 font-medium">{testimonial.company}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </InfiniteSlider>

//             </div>
//         </section>
//     )
// }

// export default Testimonials