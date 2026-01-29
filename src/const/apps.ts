import type { App } from '../data/types/portfolio.types';

// Import NexaMine Assets
import nexa1 from '../assets/Projects/NexaMine/1.webp';
import nexa2 from '../assets/Projects/NexaMine/2.webp';
import nexa3 from '../assets/Projects/NexaMine/3.webp';
import nexa4 from '../assets/Projects/NexaMine/4.webp';
import nexa5 from '../assets/Projects/NexaMine/5.webp';
import nexa6 from '../assets/Projects/NexaMine/6.webp';
import nexa7 from '../assets/Projects/NexaMine/7.webp';

// Import Tiffin Wala Assets
import tiffin1 from '../assets/Projects/Tiffin Wala/1.webp';
import tiffin2 from '../assets/Projects/Tiffin Wala/2.webp';
import tiffin3 from '../assets/Projects/Tiffin Wala/3.webp';
import tiffin4 from '../assets/Projects/Tiffin Wala/4.webp';
import tiffin5 from '../assets/Projects/Tiffin Wala/5.webp';

// Import Tiffin Wala Admin Assets
import admin1 from '../assets/Projects/Tiffin wala admin/1.webp';
import admin2 from '../assets/Projects/Tiffin wala admin/2.webp';
import admin3 from '../assets/Projects/Tiffin wala admin/3.webp';
import admin4 from '../assets/Projects/Tiffin wala admin/4.webp';
import admin5 from '../assets/Projects/Tiffin wala admin/5.webp';
import admin6 from '../assets/Projects/Tiffin wala admin/6.webp';
import admin7 from '../assets/Projects/Tiffin wala admin/7.webp';
import admin8 from '../assets/Projects/Tiffin wala admin/8.webp';
import admin9 from '../assets/Projects/Tiffin wala admin/9.webp';

export const APPS: App[] = [
  {
    id: "nexamine",
    name: "NexaMine",
    tagline: "Secure & Blazing Fast Cloud Storage",
    description: "NexaMine is a high-performance cloud storage solution built for the modern era. It leverages React Native and Tailwind CSS for a stunning UI, Socket.io for real-time synchronization, and Crypto JS for client-side encryption, ensuring your data remains private and secure. With integrated video and audio playback directly in the app, it's more than just storage; it's a media hub.",
    screenshots: [
      { url: nexa1, alt: "NexaMine Dashboard" },
      { url: nexa2, alt: "NexaMine Mining View" },
      { url: nexa3, alt: "NexaMine Wallet" },
      { url: nexa4, alt: "NexaMine Settings" },
      { url: nexa5, alt: "NexaMine Transaction History" },
      { url: nexa6, alt: "NexaMine Profile" },
      { url: nexa7, alt: "NexaMine Support" }
    ],
    features: [
      "Client-side data encryption",
      "Real-time file synchronization",
      "In-app media player (Video & Audio)",
      "Native Permission Management",
      "Beautiful Lottie Animations",
      "Offline access to synced files"
    ],
    techStack: [
      { name: "React Native", icon: "SiReact", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "Crypto JS", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "Socket.io", icon: "SiSocketdotio", color: "#010101" },
      { name: "Native Modules", icon: "SiReact", color: "#000000" },
      { name: "Lottie Animations", icon: "SiLottie", color: "#00D1FF" },
      { name: "Android API", icon: "SiAndroid", color: "#3DDC84" },
      { name: "Stack & Tab Navigation", icon: "SiReact", color: "#4727D1" },
      { name: "Paper UI", icon: "SiMaterialdesign", color: "#6200EE" },
      { name: "RN Video & Audio", icon: "SiReact", color: "#FF0000" }
    ],
    downloads: {
      playStore: "https://play.google.com/store",
      apk: "https://example.com/nexamine.apk"
    },
    category: "Premium",
    isPremium: true
  },
  {
    id: "tiffin-wala",
    name: "Tiffin Wala",
    tagline: "Your Daily Mess Finder & Delivery",
    description: "Tiffin Wala is a full-stack client application designed to simplify daily meal management. Users can easily discover local mess services and tiffin owners who list their daily menus on the platform. It features a seamless ordering experience, real-time sync for menu updates, and a dedicated interface for users to find the perfect home-cooked meal nearby.",
    screenshots: [
      { url: tiffin1, alt: "Tiffin Wala Menu" },
      { url: tiffin2, alt: "Tiffin Wala Order" },
      { url: tiffin3, alt: "Tiffin Wala Delivery" },
      { url: tiffin4, alt: "Tiffin Wala Payment" },
      { url: tiffin5, alt: "Tiffin Wala Profile" }
    ],
    features: [
      "Extensive mess & tiffin discovery",
      "Daily menu listing by owners",
      "Subscription-based meal plans",
      "Real-time delivery tracking",
      "Secure payment & order history",
      "In-app messaging with owners"
    ],
    techStack: [
      { name: "React Native", icon: "SiReact", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "Socket.io", icon: "SiSocketdotio", color: "#010101" },
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
      { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
      { name: "Lottie Animations", icon: "SiLottie", color: "#00D1FF" },
      { name: "Stack & Tab Navigation", icon: "SiReact", color: "#4727D1" }
    ],
    downloads: {
      playStore: "https://play.google.com/store",
      apk: "https://example.com/tiffinwala.apk"
    },
    category: "Free",
    isPremium: false
  },
  {
    id: "tiffin-wala-admin",
    name: "Tiffin Wala Admin",
    tagline: "Empowering Mess Owners",
    description: "The administrative cornerstone of the Tiffin Wala ecosystem. This full-stack application allows mess and tiffin owners to register their businesses independently. It provides a robust suite of tools to list daily menus, manage customer orders, track payments, and scale their kitchen operations with ease. It's built to give owners full control over their digital storefront.",
    screenshots: [
        { url: admin1, alt: "Admin Dashboard" },
        { url: admin2, alt: "Order Management" },
        { url: admin3, alt: "Menu Planning" },
        { url: admin4, alt: "Earnings Report" },
        { url: admin5, alt: "Kitchen Status" },
        { url: admin6, alt: "Customer Management" },
        { url: admin7, alt: "Delivery Coordination" },
        { url: admin8, alt: "Settings" },
        { url: admin9, alt: "Support" }
    ],
    features: [
      "Self-registration for mess owners",
      "Dynamic menu & price management",
      "Comprehensive order dashboard",
      "Real-time financial analytics",
      "Customer interaction & support",
      "Push notifications for new orders"
    ],
    techStack: [
      { name: "React Native", icon: "SiReact", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "Redux Toolkit", icon: "SiRedux", color: "#764ABC" },
      { name: "Socket.io", icon: "SiSocketdotio", color: "#010101" },
      { name: "Express", icon: "SiExpress", color: "#000000" },
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
      { name: "Lottie Animations", icon: "SiLottie", color: "#00D1FF" }
    ],
    downloads: {
      apk: "https://example.com/tiffinwala-admin.apk"
    },
    category: "Premium",
    isPremium: true
  }
];
