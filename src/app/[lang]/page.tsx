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
  // Lọc riêng IP và Commercial projects
  const ipProjects = projects.filter(p => p.category === 'ip');
  const comProjects = projects.filter(p => p.category === 'commercial' || p.category === 'production');
  
  // Đan xen 3 IP và 3 Commercial
  const featuredProjects = [];
  for (let i = 0; i < 3; i++) {
    if (ipProjects[i]) featuredProjects.push(ipProjects[i]);
    if (comProjects[i]) featuredProjects.push(comProjects[i]);
  }

  return (
    <>
      <style>{`
        body { background: transparent !important; }
      `}</style>
      <HeroSection lang={lang} dict={dict} />
      <FeaturedWork lang={lang} dict={dict} projects={featuredProjects} />
      <ThreeDoors lang={lang} dict={dict} />
      <FeaturedIP lang={lang} dict={dict} ips={ips} />
      <PressStrip lang={lang} dict={dict} logos={pressLogos} />
      <HomeCTA lang={lang} dict={dict} />
    </>
  );
}
