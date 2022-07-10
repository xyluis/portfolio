import React from "react";
import { Image } from "./styles";

type Props = React.ComponentProps<typeof Image>

export function Avatar({ alt, ...rest }: Props): JSX.Element {
  return <Image alt={alt} {...rest} />
}