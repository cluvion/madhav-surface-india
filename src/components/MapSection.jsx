"use client"

import React from 'react'

const MapSection = () => {
    return (
        <div className="w-full h-[400px] md:h-[500px] pb-8 md:pb-12 lg:pb-14">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d301643.9141354529!2d73.6012799!3d24.6243421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5129eb9c5a9%3A0xf015fa47e2428360!2sMadhav%20Marbles%20And%20Granites%20Ltd!5e1!3m2!1sen!2sin!4v1767104373009!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    )
}

export default MapSection

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d301643.9141354529!2d73.6012799!3d24.6243421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5129eb9c5a9%3A0xf015fa47e2428360!2sMadhav%20Marbles%20And%20Granites%20Ltd!5e1!3m2!1sen!2sin!4v1767104373009!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}