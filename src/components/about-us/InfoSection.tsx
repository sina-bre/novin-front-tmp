import { cn } from '@/lib';
import AppContainer from '../appContainer';
import { FlexBetween, FlexCenter } from '../ui';
import Image from 'next/image';
import Team2Image from '@public/team2.jpg';
import { headerFeatures } from '@/constants';
import { CheckCircle } from 'solar-icon-set';

interface InfoSectionProps {
  className?: string;
}

const InfoSection = ({ className }: InfoSectionProps) => {
  return (
    <section className={cn('w-full', className)}>
      <AppContainer className={cn('h-full')}>
        <FlexCenter className={cn('gap-10')}>
          <figure
            className={cn(
              'from-primary-main/100 to-success-main/0 bg-gradient-to-b',
              'shadow-main mt-20 flex h-[418px] w-[476px] items-center justify-center overflow-hidden rounded-[15px] p-[2px]',
            )}
          >
            <Image
              alt="team-image1"
              title="team-image1"
              className={cn('h-full w-full rounded-[14px] object-cover')}
              src={Team2Image}
            />
          </figure>
          <article className={cn('basis-[590px]')}>
            <h1 className={cn('text-lg font-bold')}>سایت استعلام گیری</h1>
            <p className="text-custom-gray-200 mt-[32px] text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد
              گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
              نرم افزارها شناخت بیشتری را برای{' '}
            </p>
            <p className={cn('text-custom-gray-200 mt-[24px] text-sm')}>
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
            </p>

            <FlexBetween className="mt-[40px] w-full max-w-[476px]">
              {headerFeatures.map((feature, index) => (
                <FlexBetween key={index} className="gap-2">
                  <CheckCircle
                    iconStyle="Bold"
                    className="text-secondary-main!"
                  />
                  <p>{feature}</p>
                </FlexBetween>
              ))}
            </FlexBetween>
          </article>
        </FlexCenter>
      </AppContainer>
    </section>
  );
};

export default InfoSection;
