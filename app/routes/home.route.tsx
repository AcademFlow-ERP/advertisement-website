import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Academflow - The Most Modern Education Management Solution for Schools, Colleges, Universities and Training Institutes" },
    { name: "description", content: "All-in-one School Management Software. Streamline Education Management processes with a modern intuitive platform that leaves nothing out of the cycle; from student admission, onboarding, result processing, fee reconciliations to graduation." },
  ];
}

export default function Home() {
  return <Welcome />;
}
