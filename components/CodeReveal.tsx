"use client";

import React from 'react';

interface CodeRevealProps {
    codeString: string;
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export const CodeReveal: React.FC<CodeRevealProps> = ({ children, className = "" }) => {
    return (
        <div className={`relative ${className}`}>
            {children}
        </div>
    );
};
