import { Click } from '../../shared/ui/Icons/assets/Click'
import * as s from './styles'

export const Header = () => {
  return (
    <div className={s.header}>
      <a className={s.header_btn} href="/" rel="nofollow">
        Покемоны API
      </a>
      <div className={s.header_wrapper}>
        <Click className={s.header_icon} />
        <span className={s.header_text}>
          Нажмите на
          <br /> нужного Покемона
        </span>
      </div>
    </div>
  )
}
