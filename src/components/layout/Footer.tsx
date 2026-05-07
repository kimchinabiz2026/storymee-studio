import Link from 'next/link';
import type { Dictionary } from '@/lib/types';

interface Props {
  lang: string;
  dict: Dictionary;
}

export default function Footer({ lang, dict }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-surface)',
      padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 60px) 32px',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        marginBottom: '60px',
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <img
              src="/assets/logo.jpg"
              alt="StoryMee"
              style={{ height: '32px', width: 'auto', borderRadius: '4px' }}
            />
            <span className="text-label" style={{ letterSpacing: '2px', fontSize: '11px', fontWeight: 600 }}>STORYMEE</span>
          </div>
          <p className="text-caption" style={{ color: 'var(--text-secondary)', maxWidth: '260px' }}>
            Animation Studio & IP Creator.
            <br />{lang === 'vi' ? 'Những vũ trụ muôn hình vạn trạng.' : 'Where stories become worlds.'}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '16px' }}>
            NAVIGATION
          </span>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: dict.nav.work, href: `/${lang}/work` },
              { label: dict.nav.ips, href: `/${lang}/ips` },
              { label: dict.nav.about, href: `/${lang}/about` },
              { label: dict.nav.press, href: `/${lang}/press` },
              { label: dict.nav.careers, href: `/${lang}/careers` },
              { label: dict.nav.contact, href: `/${lang}/contact` },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-caption"
                style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '16px' }}>
            CONTACT
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="mailto:storymee@gmail.com" className="text-caption" style={{ color: 'var(--text-secondary)' }}>
              storymee@gmail.com
            </a>
            <a href="tel:0976915836" className="text-caption" style={{ color: 'var(--text-secondary)' }}>
              0976 915 836
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=180+Thanh+Binh,+Ha+Dong,+Hanoi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption" 
              style={{ color: 'var(--text-tertiary)', marginTop: '8px', whiteSpace: 'pre-line', transition: 'color 0.3s ease', display: 'block', textDecoration: 'none' }}
            >
              {dict.contact.info.address}
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <span className="text-micro" style={{ color: 'var(--text-tertiary)', display: 'block', marginBottom: '16px' }}>
            SOCIAL
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { name: 'YouTube', url: '#' },
              { name: 'Instagram', url: '#' },
              { name: 'TikTok', url: '#' },
              { name: 'LinkedIn', url: '#' },
              { name: 'Vimeo', url: 'https://vimeo.com/user102580330' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url !== '#' ? '_blank' : undefined}
                rel={social.url !== '#' ? 'noopener noreferrer' : undefined}
                className="text-caption"
                style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
              >
                {social.name} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <span className="text-micro" style={{ color: 'var(--text-tertiary)' }}>
          © {currentYear} STORYMEE. {dict.footer.rights}
        </span>
        <span className="text-micro" style={{ color: 'var(--text-tertiary)' }}>
          ANIMATION STUDIO · IP CREATOR · VIETNAM
        </span>
      </div>
    </footer>
  );
}
