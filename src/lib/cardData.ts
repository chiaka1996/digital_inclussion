// lib/data.ts
export interface CardDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  // Add more fields for the horizontal scroll content
  features: { title: string; text: string }[];
}

export const cardData: CardDetail[] = [
  {
    id: "card-1",
    title: "Project Alpha",
    category: "Web Development",
    description: "A cutting-edge platform for modern web solutions.",
    features: [
      { title: "Feature A1", text: "Built with Next.js 14" },
      { title: "Feature A2", text: "Real-time data sync" },
      { title: "Feature A3", text: "Scalable architecture" },
      { title: "Feature A4", text: "Optimized for performance" },
    ],
  },
  {
    id: "card-2",
    title: "Project Beta",
    category: "Mobile App",
    description: "An innovative mobile application for productivity.",
    features: [
      { title: "Feature B1", text: "Cross-platform with React Native" },
      { title: "Feature B2", text: "Offline capabilities" },
      { title: "Feature B3", text: "Intuitive user interface" },
      { title: "Feature B4", text: "Secure local storage" },
    ],
  },
  {
    id: "card-3",
    title: "Project Gamma",
    category: "Data Science",
    description: "A powerful tool for data analysis and visualization.",
    features: [
      { title: "Feature C1", text: "Python and TensorFlow backend" },
      { title: "Feature C2", text: "Interactive dashboards" },
      { title: "Feature C3", text: "Predictive modeling" },
      { title: "Feature C4", text: "Large dataset processing" },
    ],
  },
  {
    id: "card-4",
    title: "Project Delta",
    category: "UI/UX Design",
    description: "A design system that ensures brand consistency.",
    features: [
      { title: "Feature D1", text: "Comprehensive component library" },
      { title: "Feature D2", text: "Figma integration" },
      { title: "Feature D3", text: "Accessibility guidelines" },
      { title: "Feature D4", text: "Rapid prototyping" },
    ],
  },
];