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
    bullets: [
      "Max 16×9 cm FOV, perfect for capturing dentition, sinus, or TMJ",
      "2D panoramic feature with Autofocus for minimized distortion",
      "Extraoral bitewing images for better patient comfort",
      "Various cephalometric imaging modes",
      "Model CBCT Scan for STL extraction",
    ],
    images: ["/images/products/C-1-1.png"],
    categories: ["2D", "3D CBCT", "Ceph"],
    features: [
      { text: "Paired with AI technology", icon: "ai" },
      { text: "Superior Image Quality", icon: "diamond" },
      { text: "Minimized Metal Artifacts", icon: "toothSparkle" },
      { text: "Low Dose Radiation", icon: "heartPlus" },
      { text: "Wide FOV", icon: "fov" },
      { text: "Auto Cephalometric Landmark Tracing", icon: "headAi" },
    ],
    brochureUrl: "#",
    detailTabs: {
      features: {
        items: [
          {
            image: "/images/products/feature-ai_mar.png",
            title: "AI MAR",
            bullets: [
              "Substantially reduced metal artifact powered by AI technology",
              "Clear choice for prosthetic and orthodontic cases",
            ],
            link: "#",
          },
          {
            image: "/images/products/feature-aec.gif",
            title: "AEC",
            bullets: [
              "eco-x provides distortion-free CT image with lower radiation dosage than Panorama scanning",
            ],
            link: "#",
          },
          {
            image: "/images/products/feature-pano_auto_focus.png",
            title: "Panorama Auto Focus",
            bullets: [
              "Minimized distortion",
              "Maximized ability to obtain clear images",
            ],
            link: "#",
          },
          {
            image: "/images/products/feature-auto_landmark_detection.gif",
            title: "Auto Landmark Detection",
            bullets: [
              "AI automatically detects landmarks with 2D cephalometric scan",
            ],
            link: "#",
          },
        ],
      },
      specifications: {
        sections: [
          {
            title: "Generator",
            rows: [
              { label: "Voltage", value: "60 - 90 kV" },
              { label: "Current", value: "4 - 10 mA" },
            ],
          },
          {
            title: "Tube",
            rows: [
              { label: "Focal spot", value: "0.5 mm" },
              { label: "Filtration", value: "2.5 mm Al" },
            ],
          },
          {
            title: "Detector",
            rows: [
              { label: "Type", value: "TFT:a-Si (CSI)" },
              { label: "Pixel size", value: "119 µm" },
              { label: "A/D (bits)", value: "16 bits" },
            ],
          },
          {
            title: "Scan times",
            rows: [
              { label: "Scan times", value: "8 - 24 sec" },
            ],
          },
          {
            title: "Scalable Field of View",
            rows: [
              { label: "Free FOV", value: "50 x 50 - 120 x 90 mm" },
            ],
          },
          {
            title: "3D Volume",
            rows: [
              { label: "Children", value: "100 x 80 mm" },
              { label: "Adults", value: "120 x 90 mm / 160 x 90 mm" },
            ],
          },
          {
            title: "Dimensions",
            rows: [
              { label: "Width", value: "614 - 2314 mm" },
              { label: "Height x Depth", value: "980 x 995 mm / with Ceph: 1802 x 995 mm" },
              { label: "Weight", value: "178 kg / with Ceph: 211 kg" },
            ],
            images: [
              "/images/products/feature-ecox_dimension_1.png",
              "/images/products/feature-ecox_dimension_2.png",
              "/images/products/feature-ecox_dimension_3.png",
              "/images/products/feature-ecox_dimension_4.png",
            ],
          },
          {
            title: "Software",
            rows: [
              { label: "2D Viewer", value: "WillMaster" },
              { label: "3D Viewer", value: "OnDemand3D" },
              { label: "Ceph Analysis Program", value: "WillCephPro" },
            ],
          },
        ],
      },
    },
  },
  dentri: {
    title: "Dentri",
    tagline: "Professional Imaging Solution",
    bullets: [
      "Max 16×14.5 cm FOV, perfect for capturing dentition, sinus, or TMJ",
      "Suitable for radiology centers or more professional and stable image acquisition",
      "2D panoramic feature with Autofocus for minimized distortion",
      "Various cephalometric imaging modes",
    ],
    images: ["/images/products/DENTRI-CEPH-ONESHOT.png"],
    categories: ["2D", "3D CBCT", "Ceph"],
    features: [
      { text: "Expansive FOV (Max 16x14.5 cm)", icon: "headAiExpanded" },
      { text: "Superior Image Quality", icon: "diamond" },
      { text: "Minimized Metal Artifacts", icon: "toothSparkle" },
      { text: "Low Dose Radiation", icon: "heartPlus" },
      { text: "Cephalometric X-ray (optional)", icon: "skull" },
    ],
    brochureUrl: "#",
    detailTabs: {
      features: {
        items: [
          {
            image: "/images/products/feature-ai_mar.png",
            title: "AI MAR",
            bullets: [
              "Substantially reduced metal artifact powered by AI technology",
              "Clear choice for prosthetic and orthodontic cases",
            ],
            link: "#",
          },
          {
            image: "/images/products/feature-pano_auto_focus.png",
            title: "Panorama Auto Focus",
            bullets: [
              "Minimized distortion",
              "Maximized ability to obtain clear images",
            ],
            link: "#",
          },
          {
            image: "/images/products/feature-wide_fov.png",
            title: "Wide FOV",
            bullets: [
              "Dentri provides large FOV size with free FOV function for various diagnosis choice",
            ],
          },
        ],
      },
    },
  },
  dentio: {
    title: "Dentio",
    tagline: "Advanced 2D System",
    bullets: [
      "Two in One System",
      "A variety of capturing function",
      "Perfect lightweight and stable, no wall mount or floor mount required",
    ],
    images: ["/images/products/DENTIO-CEPH-DUAL-2.png"],
    categories: ["2D", "Ceph"],
    features: [
      { text: "High quality 2D image system", icon: "monitor2d" },
      { text: "Minimized x ray radiation", icon: "toothXray" },
      { text: "Cephalometric X-ray (optional)", icon: "skull" },
    ],
    brochureUrl: "#",
  },
  "real-arch": {
    title: "Real Arch",
    tagline: "Precision Intraoral Scanner",
    bullets: [
      "Fan-Type mirror anti fogging",
      "Powder-Free scan for acceptable prosthesis scanning",
      "The precision is ≤ 20 μm",
      "File export by STL, PLY and OBJ formats",
    ],
    images: ["/images/products/product-realarch.png"],
    categories: ["Intraoral"],
    features: [
      { text: "Accurate & Reliable", icon: "target" },
      { text: "Light-weight Handpiece", icon: "feather" },
      { text: "Easy & convenient Scan Program", icon: "scanFrame" },
      { text: "Can be merged with CBCT", icon: "boxMatch" },
    ],
    brochureUrl: "#",
  },
  dentra: {
    title: "Dentra",
    tagline: "Durable Intraoral Sensor",
    bullets: [
      "Technology you can count on",
      "Affordable quality",
      "Easy to install",
    ],
    images: ["/images/home/home-dentra.png"],
    categories: ["Intraoral"],
    features: [
      { text: "Maximum durability", icon: "brokenChain" },
      { text: "High image quality", icon: "hd" },
      { text: "Convenient quickstart", icon: "power" },
      { text: "Air-and watertight", icon: "shieldCheck" },
      { text: "Easy to install", icon: "wrenchHex" },
      { text: "Affordable Quality", icon: "diamond" },
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
