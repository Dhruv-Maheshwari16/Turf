import React from "react";

const InstagramIcon = ({ size = 20, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <rect
            x="2" y="2" width="20" height="20" rx="5"
            stroke="currentColor" strokeWidth="2"
        />
        <circle
            cx="12" cy="12" r="5"
            stroke="currentColor" strokeWidth="2"
        />
        <circle
            cx="17.5" cy="6.5" r="1.5"
            fill="currentColor"
            fillOpacity="0.8"
        />
    </svg>
);

export default InstagramIcon;
