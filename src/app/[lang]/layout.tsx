import type { Metadata } from 'next';
import { getDictionary, locales } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/cinematic/CustomCursor';
import IntroAnimation from '@/components/cinematic/IntroAnimation';
import ScrollProgress from '@/components/cinematic/ScrollProgress';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isVi = lang === 'vi';
  return {
    title: isVi ? 'STORYMEE Animation Studio & IP Creator' : 'STORYMEE Animation Studio & IP Creator',
    description: isVi
      ? 'Những vũ trụ muôn hình vạn trạng. Animation Studio & IP Creator tại Việt Nam.'
      : 'Where stories become worlds. Animation Studio & IP Creator based in Vietnam.',
    alternates: {
      languages: {
        vi: '/vi',
        en: '/en',
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} style={{ colorScheme: 'dark' }}>
      <head>
        <link rel="alternate" hrefLang="vi" href="/vi" />
        <link rel="alternate" hrefLang="en" href="/en" />
        <meta name="theme-color" content="#0A0A0B" />
      </head>
      <body>
        <IntroAnimation />
        <CustomCursor />
        <ScrollProgress />
        <Header lang={lang} dict={dict} />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
