import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(201,168,76,0.10)] bg-[#0D1A0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#9A9080]">
          © {new Date().getFullYear()} Tushar Bhandarkar. Built with{" "}
          <span className="text-[#F0EBE0]">Next.js</span>.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/tushar-bhandarkar-20a7b31b/"
            target="_blank" rel="noopener noreferrer"
            className="text-[#9A9080] hover:text-[#C9A84C] transition-colors"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank" rel="noopener noreferrer"
            className="text-[#9A9080] hover:text-[#F0EBE0] transition-colors"
            aria-label="GitHub profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="mailto:tsbhandarkar@gmail.com"
            className="text-[#9A9080] hover:text-[#F0EBE0] transition-colors"
            aria-label="Send email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
