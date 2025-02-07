import Image from "next/image";
import { LogoWrapper } from "./styles";

import LogoImg from "../../assets/logo.png";

type LogoProps = {
  width: number;
  height: number;
};

export function Logo({ width, height }: LogoProps) {
  return (
    <LogoWrapper>
      <Image
        src={LogoImg}
        alt="Logo"
        width={width}
        height={height}
      />
    </LogoWrapper>
  )
}