export const homeProducts = [
  {
    id: "eco-x",
    name: "eco-x",
    image: "/images/home/home-ecox.png",
    features: [
      { text: "Paired with AI technology", icon: "ai" },
      { text: "Superior Image Quality", icon: "diamond" },
      { text: "Minimized Metal Artifacts", icon: "toothSparkle" },
      { text: "Low Dose Radiation", icon: "heartPlus" },
      { text: "Wide FOV", icon: "fov" },
      { text: "Auto Cephalometric Landmark Tracing", icon: "headAi" },
    ],
  },
  {
    id: "dentri",
    name: "Dentri",
    image: "/images/home/home-dentri.png",
    features: [
      { text: "Expansive FOV (Max 16x14.5 cm)", icon: "headAiExpanded" },
      { text: "Superior Image Quality", icon: "diamond" },
      { text: "Minimized Metal Artifacts", icon: "toothSparkle" },
      { text: "Low Dose Radiation", icon: "heartPlus" },
      { text: "Cephalometry add-on option", icon: "skull" },
    ],
  },
  {
    id: "dentio",
    name: "Dentio",
    image: "/images/home/home-dentio.png",
    features: [
      { text: "High quality 2D image system", icon: "monitor2d" },
      { text: "Minimized x ray radiation", icon: "toothXray" },
      { text: "Cephalometry add-on option", icon: "skull" },
    ],
  },
  {
    id: "real-arch",
    name: "Real Arch",
    image: "/images/home/home-realarch.png",
    features: [
      { text: "Accurate & Reliable", icon: "target" },
      { text: "Light-weight Handpiece", icon: "feather" },
      { text: "Easy & convenient Scan Program", icon: "scanFrame" },
      { text: "Enables accurate matching with 3D", icon: "boxMatch" },
    ],
  },
  {
    id: "dentra",
    name: "Dentra",
    image: "/images/home/home-dentra.png",
    features: [
      { text: "Maximum durability", icon: "brokenChain" },
      { text: "High image quality", icon: "hd" },
      { text: "Convenient quickstart", icon: "power" },
      { text: "Air-and watertight", icon: "shieldCheck" },
      { text: "Easy to install", icon: "wrenchHex" },
    ],
  },
];

export const productDetails = {
  "eco-x": {
    title: "eco-x",
    tagline: "Unveiling the Future of Panoramic AI",
    desc: "Designed for capturing dentition, sinus, or TMJ with a max 16×9 cm FOV. Key features include 2D panoramic with Autofocus, extraoral bitewing images, various cephalometric modes, and Model CBCT Scan for STL extraction.",
    image: "/images/products/C-1-1.png",
    categories: ["2D", "3D CBCT", "Ceph"],
    features: [
      "Paired with AI Technology",
      "Superior Image Quality",
      "Minimized Metal Artifacts",
      "Low Dose Radiation",
      "Wide FOV",
    ],
    brochureUrl: "#",
  },
  dentri: {
    title: "Dentri",
    tagline: "Professional Imaging Solution",
    desc: "A professional imaging solution (max 16×14.5 cm FOV) suitable for radiology centers. It features stable image acquisition and various cephalometric imaging modes.",
    image: "/images/products/DENTRI-CEPH-ONESHOT.png",
    categories: ["2D", "3D CBCT", "Ceph"],
    features: [
      "Expansive FOV (Max 16x14.5 cm)",
      "Superior Image Quality",
      "Minimized Metal Artifacts",
      "Low Dose Radiation",
    ],
    brochureUrl: "#",
  },
  dentio: {
    title: "Dentio",
    tagline: "Advanced 2D System",
    desc: 'A lightweight, "Two-in-One" system that doesn\'t require wall or floor mounting. It focuses on high-quality 2D images with minimized X-ray radiation.',
    image: "/images/products/DENTIO-CEPH-DUAL-2.png",
    categories: ["2D", "Ceph"],
    features: [
      "High quality 2D image system",
      "Minimized x ray radiation",
      "Cephalometry add-on option",
    ],
    brochureUrl: "#",
  },
  "real-arch": {
    title: "Real Arch",
    tagline: "Precision Intraoral Scanner",
    desc: "A powder-free, handheld scanner with a precision of ≤ 20 μm. It includes an anti-fogging fan-type mirror and exported files in STL, PLY, and OBJ formats.",
    image: "/images/products/new-image.png",
    categories: ["Intraoral"],
    features: [
      "Accurate & Reliable",
      "Light-weight Handpiece",
      "Easy & convenient Scan Program",
      "Enables accurate matching with 3D",
    ],
    brochureUrl: "#",
  },
  dentra: {
    title: "Dentra",
    tagline: "Durable Intraoral Sensor",
    desc: "An affordable, durable dental sensor known for being air-and-watertight and easy to install.",
    image: "/images/products/Picture3.png",
    categories: ["Intraoral"],
    features: [
      "Maximum durability",
      "High image quality",
      "Convenient quickstart",
      "Air-and watertight",
      "Easy to install",
    ],
    brochureUrl: "#",
  },
};

export const productTabs = [
  { id: "eco-x", label: "eco-x" },
  { id: "dentri", label: "Dentri" },
  { id: "dentio", label: "Dentio" },
  { id: "real-arch", label: "Real Arch" },
  { id: "dentra", label: "Dentra" },
];
