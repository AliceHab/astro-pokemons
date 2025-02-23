import type { SVGProps } from 'react'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'type' | 'viewBox'> {}

export const Svg = ({ className, children, ...props }: IconProps) => {
  return (
    <svg aria-hidden className={className} focusable="false" viewBox="0 0 20 20" {...props}>
      {children}
    </svg>
  )
}
