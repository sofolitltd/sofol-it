"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

interface ShareButtonsProps {
    title: string;
    sidebar?: boolean;
}

export const ShareButtons = ({ title, sidebar = false }: ShareButtonsProps) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    const shareLinks = [
        {
            name: "Facebook",
            icon: <FaFacebookF />,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            color: "bg-blue-600",
        },
        {
            name: "Twitter",
            icon: <FaTwitter />,
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            color: "bg-sky-500",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedinIn />,
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
            color: "bg-blue-700",
        },
        {
            name: "WhatsApp",
            icon: <FaWhatsapp />,
            href: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`,
            color: "bg-green-500",
        },
    ];

    return (
        <div className={`flex flex-wrap items-center gap-4 ${!sidebar ? 'mt-10 pt-8 border-t border-gray-200' : ''}`}>
            {!sidebar && <span className="text-gray-900 font-bold uppercase tracking-wider text-sm">Share this post:</span>}
            <div className="flex gap-3">
                {shareLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${sidebar ? 'w-9 h-9' : 'w-10 h-10'} flex items-center justify-center rounded-full text-white ${link.color} hover:opacity-90 transition-opacity shadow-sm`}
                        title={`Share on ${link.name}`}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};
