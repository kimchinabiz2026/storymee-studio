import { getDictionary } from '@/lib/i18n';
import ContactPageClient from '@/components/contact/ContactPageClient';

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ContactPageClient lang={lang} dict={dict} />;
}
