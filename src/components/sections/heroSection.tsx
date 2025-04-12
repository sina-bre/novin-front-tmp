import { cn } from '@/lib';
import AppHeader from '../appHeader';
import AppContainer from '../appContainer';
import { FlexBetween, FlexCenterCol } from '../ui/flexBox';
import { CheckCircle } from 'solar-icon-set';
import { headerFeatures } from '@/constants';
import QuickAccessServices from './quickAccessServicesSection';
import HighlightSection from '../about-us/HighlightSection';

const HeroSection = () => {
  return (
    <section className="mb-20">
      <div
        className={cn(
          'from-primary-main to-hero-section-main relative h-[677] bg-radial',
        )}
      >
        <AppContainer className={cn('relative z-20 flex h-full flex-col')}>
          <AppHeader />
          <FlexCenterCol className={'h-full text-white'}>
            <p className="mb-8 text-4xl font-bold">
              نوین؛ سامانه استعلام&nbsp;
              <span className="text-secondary-main">آنلاین</span>&nbsp;و&nbsp;
              <span className="text-secondary-main">سریع</span>
            </p>
            <FlexBetween className="gap-8">
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
          </FlexCenterCol>
        </AppContainer>
        <div
          className={cn('absolute inset-0 bg-[url(/wavy-pattern.png)]')}
        ></div>
      </div>
      <AppContainer className={cn('mb-20 h-full')}>
        <div className="relative z-10 mx-auto mt-[-60px] w-[80%]">
          <HighlightSection />
        </div>
      </AppContainer>
    </section>
  );
};

export default HeroSection;
