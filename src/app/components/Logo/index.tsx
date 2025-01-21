import Image from "next/image";
import { LogoWrapper } from "./styles";

import LogoImg from "../../assets/logo.png";

export function Logo() {
  return (
    <LogoWrapper>
      <Image
        src={LogoImg}
        alt="Logo"
        width={50}
        height={50}
      />
    </LogoWrapper>
  )
}