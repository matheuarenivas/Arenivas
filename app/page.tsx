import Image from "next/image";
import NameSection from "./components/NameSection";
import AboutMeSection from "./components/AboutMeSection";
import SocialLinks from "./components/SocialLinks";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0e0e0e]">
      <div className="container mx-auto px-12 pt-24 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {/* Flex container to hold the image and NameSection */}
          <div className="flex items-center mb-16">
            <div className="mr-6 flex-shrink-0">
              <div className="relative w-36 h-36"> {/* Ensure the container is square */}
                <Image 
                  src="/images/me.jpg" 
                  alt="Your Image" 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-full"
                />
              </div>
            </div>
            <NameSection />
          </div>
          <SocialLinks />
        </div>
        <div className="md:col-span-1">
          {/* Make AboutMeSection and ExperienceSection each span full width on medium screens */}
          <AboutMeSection />
          <ExperienceSection />
        </div>
      </div>
    </main>
  );
}

