import { getDictionary } from '@/lib/i18n';
import { projects } from '@/lib/demo-data';
import WorkPageClient from '@/components/work/WorkPageClient';

export default async function WorkPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <WorkPageClient lang={lang} dict={dict} projects={projects} />;
}
