import { cn } from '@/lib';
import { CustomButton } from '../ui';
import Link from 'next/link';

function HighlightSection() {
  return (
    <section
      className={cn(
        'flex justify-center gap-6 rounded-xl bg-white px-[40px] py-[16px] shadow',
      )}
    >
      <div className={cn('flex justify-center gap-4')}>
        <h1
          className={cn(
            'flex basis-[178px] items-center justify-center font-bold',
          )}
        >
          سایت استعلام گیری آنلاین و پرداخت سریع
        </h1>
        <div
          className={cn('bg-primary-main h-[140px] w-[3px] rounded-lg')}
        ></div>

        <p
          className={cn(
            'text-custom-gray-200 flex basis-[503px] items-center justify-center text-sm',
          )}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
        </p>
      </div>
      <div className={cn('flex items-center justify-center')}>
        <CustomButton className="shadow-main h-[40px] w-[190px]">
          <Link title="about-us" href="#">
            ارتباط با ما
          </Link>
        </CustomButton>
      </div>
    </section>
  );
}

export default HighlightSection;
