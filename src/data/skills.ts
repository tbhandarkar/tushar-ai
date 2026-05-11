export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "AI Tools",
    skills: [
      { name: "Claude", level: 88 },
      { name: "ChatGPT", level: 90 },
      { name: "Gemini", level: 82 },
      { name: "Copilot", level: 80 },
      { name: "Hugging Face", level: 70 },
      { name: "Perplexity", level: 78 },
    ],
  },
  {
    category: "Automation",
    skills: [
      { name: "Zapier", level: 85 },
      { name: "SuperJoin", level: 72 },
      { name: "Lyzr", level: 68 },
      { name: "n8n", level: 65 },
    ],
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "Google AI Studio", level: 75 },
      { name: "Azure AI", level: 60 },
      { name: "AWS Bedrock", level: 55 },
      { name: "GCP Vertex AI", level: 58 },
    ],
  },
  {
    category: "Core Skills",
    skills: [
      { name: "Prompt Engineering", level: 90 },
      { name: "AI Tool Development", level: 80 },
      { name: "Workflow Design", level: 82 },
      { name: "Data Handling & APIs", level: 72 },
    ],
  },
];
