import CompanyStory from "@/components/about/sections/CompanyStory";
import LeadershipTeam from "@/components/about/sections/LeadershipTeam";
import AchievementsRecognition from "@/components/about/sections/AchievementsRecognition";
import AboutCTA from "@/components/about/sections/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <CompanyStory />
      <LeadershipTeam />
      <AchievementsRecognition />
      <AboutCTA />
    </main>
  );
}
