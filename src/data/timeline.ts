export interface TimelineNode {
  month: number;
  label: string;
  title: string;
  description: string;
  tools: string[];
  completed: boolean;
}

export const timelineNodes: TimelineNode[] = [
  {
    month: 1,
    label: "Month 1",
    title: "AI Foundations — Outskill Program",
    description:
      "Completed the intensive 14-day AI Foundations Program by Outskill. Gained hands-on experience with the core AI ecosystem — from conversational AI and prompt engineering to automation platforms and cloud-based model hubs.",
    tools: [
      "Copilot",
      "Zapier",
      "Notion AI",
      "Hugging Face",
      "Google AI Studio",
      "Gemini",
      "Perplexity",
      "Claude",
      "ChatGPT",
    ],
    completed: true,
  },
  {
    month: 2,
    label: "Month 2",
    title: "First Automations & Prompt Workflows",
    description:
      "Built first real-world automation pipelines combining multiple AI tools. Developed a structured prompt library for business use cases and launched small internal workflow prototypes.",
    tools: ["Zapier", "Lyzr", "SuperGo", "Happenance", "Humanic AI"],
    completed: false,
  },
  {
    month: 3,
    label: "Month 3",
    title: "Cloud AI Workflows",
    description:
      "Expanded into cloud-native AI services on Azure, GCP, and AWS. Deployed serverless functions, connected AI APIs, and built scalable automated pipelines that run without manual intervention.",
    tools: ["Azure AI", "GCP Vertex AI", "AWS Bedrock", "Keros"],
    completed: false,
  },
  {
    month: 4,
    label: "Month 4",
    title: "Multi-Tool Integrations & API Orchestration",
    description:
      "Designed complex multi-step agent workflows that orchestrate multiple AI services via APIs. Focused on reliability, error handling, and building tools that non-technical teams can use daily.",
    tools: ["n8n", "SuperJoin", "Plot AI", "Hugging Face", "REST APIs"],
    completed: false,
  },
  {
    month: 5,
    label: "Month 5",
    title: "Portfolio Website & Public Project Launches",
    description:
      "Published this portfolio website and open-sourced the three primary case study projects. Began sharing learnings publicly on LinkedIn and engaging with the AI practitioner community.",
    tools: ["Next.js", "Vercel", "GitHub", "Claude", "Notion AI"],
    completed: false,
  },
  {
    month: 6,
    label: "Month 6",
    title: "Job-Ready Specialisation & Industry Networking",
    description:
      "Defined a clear AI specialisation (Automation & Agentic Workflows), targeted specific roles, and built a network of AI professionals. Applied for AI Engineer / AI Solutions Specialist positions.",
    tools: ["LinkedIn", "AI Communities", "GitHub", "Perplexity"],
    completed: false,
  },
];
