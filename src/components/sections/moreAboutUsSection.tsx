import { cn } from '@/lib/utils';
import { CheckCircle } from 'solar-icon-set';
import Image from 'next/image';
import Team1Image from '@public/team1.jpg';
import Team2Image from '@public/team2.jpg';
import AppContainer from '../appContainer';
import { FlexCenter } from '../ui';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem = ({ title, description }: FeatureItemProps) => {
  return (
    <div className={cn('flex items-start gap-2')}>
      <div className={cn('flex h-[50%]')}>
        <CheckCircle
          iconStyle="Bold"
          size={30}
          className="text-primary-main!"
        />
      </div>
      <div className={cn('flex flex-col gap-1')}>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-custom-gray-200">{description}</p>
      </div>
    </div>
  );
};

const features: FeatureItemProps[] = [
  {
    title: 'لورم اپسیون لورم لورم',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از',
  },
  {
    title: 'لورم اپسیون لورم لورم',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از',
  },
];

export default function MoreAboutUsSection() {
  return (
    <section className={cn('mb-40 w-full')}>
      <AppContainer className={cn('h-full')}>
        <FlexCenter gap={20}>
          <article className={cn('flex w-full max-w-lg flex-col gap-5')}>
            <h1 className={cn('text-primary-main text-2xl font-bold')}>
              درباره ما بیشتر بدانید
            </h1>
            <p className={cn('')}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
              سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
            </p>
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </article>
          <div className={cn('flex justify-center gap-6')}>
            <figure
              className={cn(
                'from-primary-main/100 to-success-main/0 bg-gradient-to-b',
                'shadow-main mt-20 flex h-[376px] w-[230px] items-center justify-center overflow-hidden rounded-[15px] p-[2px]',
              )}
            >
              <Image
                alt="team-image1"
                title="team-image1"
                className={cn('h-full w-full rounded-[14px] object-cover')}
                src={Team1Image}
              />
            </figure>

            <figure
              className={cn(
                'from-primary-main/100 bg-gradient-to-b to-white',
                'shadow-main mb-20 flex h-[376px] w-[230px] items-center justify-center overflow-hidden rounded-[15px] p-[2px]',
              )}
            >
              <Image
                alt="team-image1"
                title="team-image1"
                className={cn('h-full w-full rounded-[14px] object-cover')}
                src={Team2Image}
              />
            </figure>
          </div>
        </FlexCenter>
      </AppContainer>
    </section>
  );
}
