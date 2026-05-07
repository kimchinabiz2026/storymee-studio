import { getDictionary } from '@/lib/i18n';
import { projects, ips, pressLogos } from '@/lib/demo-data';
import HeroSection from '@/components/homepage/HeroSection';
import FeaturedWork from '@/components/homepage/FeaturedWork';
import ThreeDoors from '@/components/homepage/ThreeDoors';
import FeaturedIP from '@/components/homepage/FeaturedIP';
import PressStrip from '@/components/homepage/PressStrip';
import HomeCTA from '@/components/homepage/HomeCTA';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const featuredProjects = projects.slice(0, 6);
  const featuredIP = ips[0]; // SOLEM as featured

  return (
    <>
      <HeroSection lang={lang} dict={dict} />
      <FeaturedWork lang={lang} dict={dict} projects={featuredProjects} />
      <ThreeDoors lang={lang} dict={dict} />
      <FeaturedIP lang={lang} dict={dict} ip={featuredIP} />
      <PressStrip lang={lang} dict={dict} logos={pressLogos} />
      <HomeCTA lang={lang} dict={dict} />
    </>
  );
}
