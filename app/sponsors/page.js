import Image from 'next/image';
import { Hero, HeroContent } from '@/components/Hero';
import { SubTitle } from '@/components/SubTitle';

export default function Projects() {
  return (
    <main className="text-center min-h-[100vh]">
      <Hero url="/sponsors-bg.jpeg" height={100}>
        <HeroContent>
          <div className="flex flex-wrap flex-col gap-10 sm:gap-0 sm:flex-row w-[90vw] sm:w-[70vw] justify-between">
            <div className="sm:w-[50%] text-left">
              <SubTitle>Sponsors</SubTitle>
              <p className="text-lg">
                Tech Syndicate is a new team whose goal is to expand its
                horizons and make an advanced robotics program which is
                accessible to all people. We have had great assistance making
                our name known and teaching students with our sponsors.
              </p>
            </div>
            <div className="sm:w-[50%] relative text-center">
              <Image
                src="/SA_Current.png"
                fill
                className="!h-[auto] !w-[100%] !relative inline"
                alt="SA Current"
              />
              <Image
                src="/solidworks.png"
                fill
                className="!h-[auto] !w-[100%] !relative inline"
                alt="Solidworks"
              />
              <Image
                src="/fabworks-logo.svg"
                fill
                className="!h-[auto] !w-[100%] !relative inline"
                alt="Fabworks"
              />
            </div>
          </div>
        </HeroContent>
      </Hero>
    </main>
  );
}