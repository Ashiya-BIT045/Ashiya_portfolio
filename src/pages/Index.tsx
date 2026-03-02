import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import InternshipSection from "@/components/InternshipSection";
import LeadershipSection from "@/components/LeadershipSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <InternshipSection />
        <AchievementsSection />
        <CertificationsSection />
        <LeadershipSection />
        <CodingProfilesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
