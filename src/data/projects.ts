export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ai-email-automation",
    title: "AI Email Automation Pipeline",
    description:
      "Built an end-to-end email triage and response automation using Zapier and Claude AI. The pipeline categorises incoming emails, drafts context-aware replies, and routes high-priority messages to a Notion dashboard — cutting manual email time by ~70%.",
    tools: ["Zapier", "Claude", "Notion AI", "Gmail API"],
    link: "#",
    featured: true,
  },
  {
    id: "prompt-library",
    title: "Enterprise Prompt Engineering Library",
    description:
      "Designed and documented a reusable library of 50+ production-grade prompts for common business workflows — including summarisation, data extraction, meeting notes, and content generation — tested across ChatGPT, Gemini, and Claude.",
    tools: ["ChatGPT", "Gemini", "Claude", "Notion AI", "Perplexity"],
    link: "#",
  },
  {
    id: "data-insights-bot",
    title: "Natural Language Data Insights Bot",
    description:
      "Connected Google Sheets to an LLM via SuperJoin and Plot AI to create a plain-English querying interface. Business users can ask questions like 'What were sales last quarter?' and receive charts and summaries without writing a single formula.",
    tools: ["SuperJoin", "Plot AI", "Google AI Studio", "Hugging Face"],
    link: "#",
  },
  {
    id: "canswim-investment-strategy-tool",
    title: "CANSWIM Investment Strategy Tool",
    description:
      "CANSWIM Investment turns complex market research into clean, decision-ready insights. Its AI-driven engine scores every stock across seven proven CAN SLIM factors and adapts instantly to real-time market conditions. Built for disciplined, self-directed investors, it highlights true leadership setups and filters out weak ideas fast. A smarter, faster way to manage your research pipeline.",
    tools: ["AI Scoring", "CAN SLIM", "Market Research", "Stock Analysis"],
    link: "#",
    featured: true,
  },
];
