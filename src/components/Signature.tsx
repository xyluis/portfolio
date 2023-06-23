import Image from 'next/image'

import signatureLogoSrc from '@/assets/signature.svg'

type SignatureProps = {
  width?: number
  height?: number
}

export function Signature({ height = 48, width = 148 }: SignatureProps) {
  return (
    <Image
      src={signatureLogoSrc}
      width={width}
      height={height}
      alt="Luis Signature as a Logo"
    />
  )
}
