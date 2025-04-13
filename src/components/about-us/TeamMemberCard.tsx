import { cn } from '@/lib';
import Image, { StaticImageData } from 'next/image';

interface TeamMemberProps {
  image: StaticImageData;
  name: string;
  role: string;
}

export const TeamMemberCard = ({ image, name, role }: TeamMemberProps) => {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-6')}>
      <figure
        className={cn(
          'from-primary-main/100 to-success-main/0 bg-gradient-to-b',
          'shadow-main flex h-[250px] w-[350px] items-center justify-center overflow-hidden rounded-[15px] p-[2px]',
        )}
      >
        <Image
          alt={`${name}-image`}
          title={`${name}-image`}
          className={cn('h-full w-full rounded-[14px] object-cover')}
          src={image}
          width={350}
          height={250}
        />
      </figure>
      <h1 className={cn('flex items-center justify-center text-lg font-bold')}>
        {name}
      </h1>
      <p
        className={cn(
          'text-custom-gray-200 flex w-[80%] items-center justify-center text-center text-sm',
        )}
      >
        {role}
      </p>
    </div>
  );
};
