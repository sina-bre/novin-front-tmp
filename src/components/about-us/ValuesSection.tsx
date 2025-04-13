import { cn } from '@/lib';
import AppContainer from '../appContainer';
import Team2Image from '@public/team2.jpg';
import Image from 'next/image';
import { values } from '@/constants';
import ValueCard from './ValueItem';

interface ValuesSectionProps {
  className?: string;
}

const ValuesSection = ({ className }: ValuesSectionProps) => {
  return (
    <section
      className={cn(
        'bg-primary-main h-[566] w-full bg-[url(/wavy-pattern.png)] bg-cover py-10 text-white',
        className,
      )}
    >
      <AppContainer className="h-full">
        <header
          className={cn('mt-5 flex w-full flex-col justify-center gap-5')}
        >
          <h1
            className={
              'flex items-center justify-center text-center text-xl font-bold'
            }
          >
            ارزش های ما لورم اپسیونلورم ایپسوم متن ساختگی با{' '}
          </h1>
          <h3 className={cn('flex items-center justify-center font-normal')}>
            برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در
          </h3>
        </header>
      </AppContainer>
      <AppContainer className={cn('mb-20 h-full')}>
        <div className="relative z-10 mx-auto mt-[-310px] w-[80%] shadow">
          <div className="flex overflow-hidden rounded-xl bg-white shadow">
            <div className={cn('flex flex-col justify-around px-10 py-12')}>
              {values.map((value) => (
                <ValueCard
                  key={value.title}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                />
              ))}
            </div>
            <figure className={cn('basis-[50%]')}>
              <Image
                className={cn('h-[473px] w-full object-cover')}
                alt="Team2Image"
                title="Team2Image"
                src={Team2Image}
              />
            </figure>
          </div>
        </div>
      </AppContainer>
    </section>
  );
};

export default ValuesSection;
