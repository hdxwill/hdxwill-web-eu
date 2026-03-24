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
            link: "/ai-mar",
          },
          {
            image: "/images/products/feature-aec.gif",
            title: "AEC",
            bullets: [
              "eco-x provides distortion-free CT image with lower radiation dosage than Panorama scanning",
            ],
            link: "/aec",
          },
          {
            image: "/images/products/feature-pano_auto_focus.png",
            title: "Panorama Auto Focus",
            bullets: [
              "Minimized distortion",
              "Maximized ability to obtain clear images",
            ],
            link: "/panorama-autofocus",
          },
          {
            image: "/images/products/feature-auto_landmark_detection.gif",
            title: "Auto Landmark Detection",
            bullets: [
              "AI automatically detects landmarks with 2D cephalometric scan",
            ],
            link: "/auto-landmark-detection",
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
            link: "/ai-mar",
          },
          {
            image: "/images/products/feature-pano_auto_focus.png",
            title: "Panorama Auto Focus",
            bullets: [
              "Minimized distortion",
              "Maximized ability to obtain clear images",
            ],
            link: "/panorama-autofocus",
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
      specifications: {
        sections: [
          {
            title: "Generator",
            rows: [
              { label: "Voltage", value: "60 - 110 kV" },
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
              { label: "Type", value: "CMOS" },
              { label: "Pixel size", value: "100.1 µm" },
              { label: "A/D (bits)", value: "14 bits" },
            ],
          },
          {
            title: "Scan times",
            rows: [
              { label: "Scan times", value: "8 - 36 sec" },
            ],
          },
          {
            title: "Scalable Field of View",
            rows: [
              { label: "Free FOV", value: "30 x 30 - 120 x 90 mm" },
            ],
          },
          {
            title: "3D Volume",
            rows: [
              { label: "Children", value: "100 x 80 mm" },
              { label: "Adults", value: "160 x 80 mm / 160 x 145 mm" },
            ],
          },
          {
            title: "Dimensions",
            rows: [
              { label: "Width", value: "1670 - 2455 mm" },
              { label: "Height x Depth", value: "1350 x 1510 mm / 2090 x 1510 mm" },
              { label: "Weight", value: "243 kg / with Ceph: 270 kg" },
            ],
            images: [
              "/images/products/feature-dentri_dimension_1.png",
              "/images/products/feature-dentri_dimension_2.png",
              "/images/products/feature-dentri_dimension_3.png",
              "/images/products/feature-dentri_dimension_4.png",
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
    detailTabs: {
      features: {
        items: [
          {
            image: "/images/products/feature-pano_auto_focus.png",
            title: "Panorama Auto Focus",
            bullets: [
              "Minimized distortion",
              "Maximized ability to obtain clear images",
            ],
            link: "/panorama-autofocus",
          },
          {
            image: "/images/products/feature-time_delay_integration.png",
            title: "Time Delay Integration",
            bullets: [
              "To achieve high responsivity, TDI uses multiple stages to capture multiple exposures. In these stages, photogenerated signal charges are transferred in sync with object motion",
            ],
            link: "/time-delay-integration-tdi",
          },
          {
            image: "/images/products/feature-minimized_radiation.png",
            title: "Minimized radiation",
            bullets: [
              "Dentio features fast scans and low radiation, providing clear images quickly with minimal exposure.",
              "Perfect for safe and efficient diagnostics.",
            ],
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
              { label: "Type", value: "CMOS" },
              { label: "Pixel size", value: "99 µm" },
              { label: "A/D (bits)", value: "14 bits" },
            ],
          },
          {
            title: "Scan times",
            rows: [
              { label: "Scan times", value: "8 - 14 sec" },
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
              "/images/products/feature-dentio_dimension_1.png",
              "/images/products/feature-dentio_dimension_2.png",
            ],
          },
          {
            title: "Software",
            rows: [
              { label: "2D Viewer", value: "WillMaster" },
              { label: "Ceph Analysis Program", value: "WillCeph Pro" },
            ],
          },
        ],
      },
    },
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
    detailTabs: {
      features: {
        items: [
          {
            title: "Real Arch Key Features",
            bullets: [
              "HDXWILL's User-Friendly and Easy-to-Learn program software",
              "Check for accuracy and reliability at chairside",
              "With a minimum tip size of 17.8 mm, the small scan tip enables scanning the distal area of the second molar",
              "Provides 3D full color and monochrome scanning options",
              "Preheating is not required for scanning",
              "The compact and lightweight 230g body ensures comfort for dentists and dental staffs",
              "File export by STL PLY and OBJ files",
              "Fan-Type mirror anti fogging",
              "Powder-Free scan for acceptable prosthesis scanning",
              "The precision is ≤ 20 μm",
            ],
          },
          {
            image: "/images/products/feature-realarch_1.jpg",
            title: "Scanning Features",
            bullets: [
              "Automatic Soft Tissue Filtering",
              "Versatile Usability For Dental Clinics",
              "Fast and Accurate Scan Recognition",
              "Easy & Quick Bite Registration",
            ],
          },
          {
            image: "/images/products/feature-realarch_2.jpg",
            title: "Software Features",
            bullets: [
              "Oral Camera Capture During Scanning",
              "User-Friendly Case Management",
              "Easy-to-learn scanning software",
            ],
          },
        ],
      },
      specifications: {
        sections: [
          {
            title: "Scanner",
            rows: [
              { label: "Tip Size (W x H)", value: "19.8 mm x 17.8 mm (relative tolerance ± 5%)" },
              { label: "Dimension (D x W x H)", value: "241 x 42.2 x 57.5 mm (with tip) / 149 x 42.2 x 57.5 mm (without tip)" },
              { label: "Weight (with tip)", value: "230 g (relative tolerance ±10%)" },
            ],
          },
          {
            title: "Optics",
            rows: [
              { label: "Field of view", value: "14.8 mm x 14.4 mm" },
              { label: "Depth of field", value: "30 mm" },
              { label: "Precision", value: "≤ 20 μm" },
              { label: "Scanning Technology", value: "Optical Triangulation" },
            ],
          },
          {
            title: "Features",
            rows: [
              { label: "Data output", value: "STL, PLY, OBJ" },
              { label: "Anti-fogging", value: "Fan type" },
              { label: "Coloring", value: "3D Full color, Mono" },
              { label: "Scan Tip Sterilization", value: "Autoclavable" },
            ],
          },
        ],
      },
    },
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
    detailTabs: {
      features: {
        items: [
          {
            image: "/images/products/feature-dentra.png",
            title: "Technology You Can Count on",
            bullets: [
              "All connection points are reinforced for durability, ensuring the sensor withstands pulls and torsions.",
            ],
            subSections: [
              {
                title: "Affordable Quality",
                bullets: [
                  "High-quality dental radiography images are created with low cost.",
                ],
              },
              {
                title: "Easy to Install",
                bullets: [
                  "The device operates effortlessly without requiring additional settings or calibration via the USB interface.",
                ],
              },
            ],
          },
        ],
      },
      specifications: {
        sections: [
          {
            title: "Sensor",
            rows: [
              { label: "Sensor Technology", value: "CMOS / Scintillator / Optical fiber*" },
            ],
          },
          {
            title: "Sensor matrix",
            rows: [
              { label: "Size 1", value: "1168 x 1562 pixels" },
              { label: "Size 2", value: "1402 x 1874 pixels" },
            ],
          },
          {
            title: "Sensor active surface dimensions",
            rows: [
              { label: "Size 1", value: "22.2 x 29.6 mm" },
              { label: "Size 2", value: "26.6 x 35.5 mm" },
            ],
          },
          {
            title: "Dimension (W x H x D)",
            rows: [
              { label: "Size 1", value: "27.6 x 37.7 x 7.3 mm" },
              { label: "Size 2", value: "32.2 x 44.2 x 7.3 mm" },
            ],
          },
          {
            title: "Weight",
            rows: [
              { label: "Size 1", value: "65 g" },
              { label: "Size 2", value: "75 g" },
            ],
          },
          {
            title: "Interface",
            rows: [
              { label: "Input voltage", value: "5V DC (USB interface)" },
              { label: "USB Interface", value: "USB 2.0 High Speed" },
              { label: "USB Connector", value: "Plug Type A" },
              { label: "Grayscale", value: "4096 gray levels (12 bits)" },
            ],
          },
        ],
      },
    },
  },
};

export const productTabs = [
  { id: "eco-x", label: "eco-x" },
  { id: "dentri", label: "Dentri" },
  { id: "dentio", label: "Dentio" },
  { id: "real-arch", label: "Real Arch" },
  { id: "dentra", label: "Dentra" },
];
