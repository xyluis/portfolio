import React from "react";
import { Label, Raw } from "./styles";

type Props = React.ComponentProps<typeof Raw> & {
  icon?: string
}

export function Button({ children, icon, ...rest }: PropsWithChildren<Props>): JSX.Element {
  return (
    <Raw {...rest} css={{ backgroundImage: icon ? `url(/icons/${icon}.svg)` : 'none', backgroundPosition: '170px center', backgroundRepeat: 'no-repeat', backgroundSize: '60%', backgroundClip: 'border-box', backgroundOrigin: 'padding-box' }}>
      <Label>
        <span>{children}</span>
      </Label>
    </Raw>
  )
}