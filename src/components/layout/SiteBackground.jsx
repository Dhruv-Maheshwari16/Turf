import React from 'react';
import stadiumImg from '../../assets/Stadium.png';
import ParticlesBackground from './ParticlesBackground';

const SiteBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-[100lvh] z-[-1] overflow-hidden bg-black pointer-events-none">
            {/* 1. Base Stadium Image */}
            <div className="absolute inset-0">
                <img
                    src={stadiumImg}
                    alt="Stadium Background"
                    className="w-full h-full object-cover brightness-[0.5] contrast-[1.05]"
                />
            </div>

            {/* 2. Particles Layer */}
            <ParticlesBackground />

            {/* 3. Gradient Overlays for Depth and Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        </div>
    );
};

export default SiteBackground;
