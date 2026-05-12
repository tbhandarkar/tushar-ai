export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "canswim",
    title: "CanSwim Investment OS",
    category: "Desktop App · Investment Research",
    description:
      "Turns complex market research into clean, decision-ready insights. An AI-driven engine scores every stock across seven proven CAN SLIM factors and adapts instantly to real-time market conditions — built for disciplined, self-directed investors who want to identify true leadership setups and filter out weak ideas fast.",
    tools: ["CAN SLIM", "AI Scoring Engine", "Stock Analysis", "Desktop App"],
    image: "/images/canswim.png",
  },
  {
    id: "dj-booking",
    title: "DJ Rohan — Event Booking Platform",
    category: "Web App · Entertainment",
    description:
      "A full event booking website for DJ Rohan Bhandarkar, featuring a video showcase, event inquiry flow, and a portfolio of past performances. Built to convert visitors into bookings with a high-energy visual design.",
    tools: ["Next.js", "Netlify", "Video Integration", "Booking Flow"],
    image: "/images/rohan-dj.png",
    link: "https://djrohanbhandarkar.netlify.app/",
  },
  {
    id: "travel-planner",
    title: "AI Travel Planner",
    category: "Web App · AI Tool",
    description:
      "An AI-powered travel planning tool that generates personalised itineraries based on destination, duration, and travel style. Replaces hours of research with a single conversation-driven interface.",
    tools: ["AI Itinerary", "LLM Integration", "Vercel", "Travel UX"],
    image: "/images/travel-planner.png",
    link: "https://travel-planner-plan.vercel.app/",
  },
];
