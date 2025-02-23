import { cx } from '@linaria/core'
import * as s from './styles'

export const Chip = ({ chipTitle, isActive }: { chipTitle?: string; isActive?: boolean }) => {
  return (
    <a
      href={`/pokemons/${chipTitle}`}
      style={{
        textDecoration: 'none',
        height: 'fit-content',
        pointerEvents: isActive ? 'none' : 'auto',
      }}
    >
      <button className={cx(s.chipStyles, isActive && s.chipActiveStyles)}>{chipTitle}</button>{' '}
    </a>
  )
}
