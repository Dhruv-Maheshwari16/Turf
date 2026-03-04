import React from "react";

const GmailIcon = ({ size = 20, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        className={className}
    >
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        <path d="M4 18l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
        <path d="M20 18l-4.5-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
    </svg>
);

export default GmailIcon;
