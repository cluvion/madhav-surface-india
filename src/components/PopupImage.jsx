// 'use client';

// import { useState, useEffect } from 'react';
// import { X } from 'lucide-react';
// import Image from 'next/image';

// const PopupImage = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         // Check if popup has been shown in this session
//         const hasShownPopup = sessionStorage.getItem('popupShown');

//         if (!hasShownPopup) {
//             // Show popup after a short delay
//             const timer = setTimeout(() => {
//                 setIsVisible(true);
//             }, 1000);

//             return () => clearTimeout(timer);
//         }
//     }, []);

//     const closePopup = () => {
//         setIsVisible(false);
//         // Mark popup as shown for this session
//         sessionStorage.setItem('popupShown', 'true');
//     };

//     if (!isVisible) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//             {/* Overlay */}
//             <div
//                 className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//                 onClick={closePopup}
//             />

//             {/* Popup Content */}
//             <div className="relative animate-in fade-in zoom-in duration-300 mx-4">
//                 {/* Close Button */}
//                 <button
//                     onClick={closePopup}
//                     className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
//                     aria-label="Close popup"
//                 >
//                     <X className="w-5 h-5 text-gray-700" />
//                 </button>

//                 {/* Popup Image */}
//                 <Image
//                     src="https://res.cloudinary.com/dljiyumfx/image/upload/v1757660523/popup_image_ndbsmo.png"
//                     alt="Madhav Surfaces"
//                     width={700}
//                     height={600}
//                     className="w-full h-auto object-cover rounded-2xl shadow-2xl "
//                     priority
//                 />
//             </div>
//         </div>
//     );
// };

// export default PopupImage;
