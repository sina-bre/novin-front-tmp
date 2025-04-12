import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Phone } from 'solar-icon-set';
import enamad from '@public/enamad.jpg';
import Link from 'next/link';
import { quickLinks, categories, footerLinks } from '@/constants';
import AppContainer from '../appContainer';
import Logo from '../logo';
import { IBaseLink } from '@/interfaces';

const FooterLinkItem = ({ href, label }: IBaseLink) => {
  return (
    <li className="flex items-center gap-2">
      <span className="bg-secondary-main h-2 w-2 rounded-full" />
      <Link
        href={href}
        className="hover:text-secondary-main text-xl text-white transition-colors"
      >
        {label}
      </Link>
    </li>
  );
};

interface FooterProps {
  className?: string;
}

export default function FooterSection({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'bg-primary-main h-[437px] w-full bg-[url(/wavy-pattern.png)]',
        className,
      )}
    >
      <AppContainer className={cn('relative h-full')}>
        <main className={cn('flex gap-[7rem] pt-[4rem]')}>
          <figure
            className={cn(
              'absolute top-[-69px] left-0 flex items-center justify-center rounded-full bg-white p-1',
            )}
          >
            <div
              className={cn(
                'bg-primary-main flex h-full w-full items-center justify-center rounded-full',
              )}
            >
              <Logo width={130} height={130} />
            </div>
          </figure>
          {footerLinks.map(({ items, title }, idx) => {
            return (
              <section
                key={idx}
                className={cn('flex flex-col gap-10 text-white')}
              >
                <h3 className={cn('text-xl font-bold')}>{title}</h3>
                <ul className={cn('flex flex-col justify-between gap-4')}>
                  {items.map(({ label, icon, href }, idx) => {
                    return (
                      <li className={cn('flex items-center gap-2')} key={idx}>
                        {!icon ? (
                          <span className="bg-secondary-main h-2 w-2 rounded-full" />
                        ) : (
                          icon
                        )}
                        <p className={cn('dir-ltr flex items-center text-lg')}>
                          {!href ? (
                            label
                          ) : (
                            <Link
                              href={href}
                              className={cn(
                                'hover:text-secondary-main transition-colors',
                              )}
                            >
                              {label}
                            </Link>
                          )}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
          <section className={cn('flex flex-col gap-10')}>
            <div className={cn('text-xl font-bold text-white')}>مجوز ها</div>
            <div
              className={cn(
                'flex flex-col justify-between gap-4 overflow-hidden rounded-md bg-white shadow',
              )}
            >
              <Image
                title="enamad"
                alt="enamad"
                src={enamad}
                width={80}
                height={80}
              />
            </div>
          </section>
        </main>
      </AppContainer>
      <section
        className={cn(
          'bg-hero-section-main flex w-full items-center justify-center py-4',
        )}
      >
        <p className={cn('text-white')}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
        </p>
      </section>
    </footer>
  );
}
