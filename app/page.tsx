import Image from "next/image";
import NameSection from "./components/NameSection";
import AboutMeSection from "./components/AboutMeSection";
import SocialLinks from "./components/SocialLinks";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
          <div className="container mx-auto px-12 pt-24 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                  {/* NameSection with margin bottom for gap */}
                  <div className="mb-16">  
                      <NameSection />
                  </div>
                  <SocialLinks />
              </div>
              <div className="md:col-span-1"> {/* Make AboutMeSection and ExperienceSection each span full width on medium screens */}
                    <AboutMeSection />
                    <ExperienceSection />
                </div>
          </div>
      </main>
  );
}

