import React from "react";
import {
  Instagram,
  Twitter,
  Share2,
  Linkedin,
  Youtube,
  Facebook,
} from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "X (Twitter)" },
  { icon: Share2, href: "#", label: "TikTok" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const SocialLinks = () => (
  <div className="flex justify-center gap-6 mb-8">
    {socialLinks.map((social) => (
      <a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-black hover:bg-accent rounded-full p-2 transition-all duration-300"
        aria-label={social.label}
      >
        <social.icon className="w-5 h-5" />
      </a>
    ))}
  </div>
);

export default SocialLinks;