import type { Metadata } from "next";
import WorkPageContent from "./WorkPageContent";

export const metadata: Metadata = {
  title: "Work | Harsh Solanki",
  description: "Selected client sites, storefronts and web apps, all live in production.",
};

export default function WorkPage() {
  return <WorkPageContent />;
}
