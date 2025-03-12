import Image from "next/image";
import NameSection from "./components/NameSection";
import AboutMeSection from "./components/AboutMeSection";
import SocialLinks from "./components/SocialLinks";
import ExperienceSection from "./components/ExperienceSection";
import GitHubSection from "./components/GitHubSection";
import StarsBackground from "./components/StarsBackground";
import HamburgerMenuSection from "./components/HamburgerMenuSection";

export default function Home() {
  return (
    <>
      <StarsBackground /> {/* Starry background */}
      <HamburgerMenuSection /> {/* Hamburger menu */}
      <div className="container mx-auto px-12 pt-24 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8 bg-transparent">
        <div>
          <div className="flex items-center mb-16">
            <div className="mr-6 flex-shrink-0">
              <div className="relative w-36 h-36">
                <Image
                  src="/images/me.JPG"
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
          <AboutMeSection />
          <ExperienceSection />
          <GitHubSection />
        </div>
      </div>
    </>
  );
}

