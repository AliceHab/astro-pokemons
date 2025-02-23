import { css } from '@linaria/core'

export const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const header_btn = css`
  background: none;
  border: 1px solid #ffffff;
  padding: 7px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 112.7%;
  color: white;
  transition: background-color 0.3s ease;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
  }
`

export const header_wrapper = css`
  display: flex;
  align-items: center;
`

export const header_icon = css`
  width: 37px;
  height: 37px;
`

export const header_text = css`
  font-weight: 600;
  line-height: 100%;
  color: white;
  font-size: 12px;
`
