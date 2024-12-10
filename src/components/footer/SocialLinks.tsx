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
  {
    icon: Instagram,
    href: "https://www.instagram.com/NanaAppSA/",
    label: "Instagram",
  },
  { icon: Twitter, href: "https://x.com/NanaAppSA", label: "X (Twitter)" },
  { icon: Share2, href: "https://www.tiktok.com/@nanaapp.sa", label: "TikTok" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/nana-app/",
    label: "LinkedIn",
  },
  // { icon: Youtube, href: "#", label: "YouTube" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/NanaAppSA",
    label: "Facebook",
  },
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
