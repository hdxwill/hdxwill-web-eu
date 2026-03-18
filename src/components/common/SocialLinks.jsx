import React from "react";
import { Linkedin, Facebook, Youtube, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "../../constants/socialLinks";

const iconMap = { Linkedin, Facebook, Youtube, Instagram };

const SocialLinks = ({ size = 20, className = "" }) => {
  return (
    <>
      {SOCIAL_LINKS.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </>
  );
};

export default SocialLinks;
