import { getDictionary } from '@/lib/i18n';
import { ips } from '@/lib/demo-data';
import { notFound } from 'next/navigation';
import IPMiniSite from '@/components/ip/IPMiniSite';

export async function generateStaticParams() {
  return ips.map((ip) => ({ slug: ip.slug }));
}

export default async function IPPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const ip = ips.find((i) => i.slug === slug);
  if (!ip) notFound();

  return <IPMiniSite lang={lang} dict={dict} ip={ip} />;
}
