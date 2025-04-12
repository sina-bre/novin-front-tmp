import Image from 'next/image';
import logo from '@public/svg/logo.svg';

interface LogoProps {
  width: number;
  height: number;
}

const Logo = ({ width, height, ...props }: LogoProps) => {
  return (
    <Image
      src={logo}
      width={width}
      height={height}
      alt="Novin logo"
      title="Novin logo"
      {...props}
    />
  );
};

export default Logo;
