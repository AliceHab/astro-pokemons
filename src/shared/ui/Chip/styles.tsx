import { css } from '@linaria/core'

export const chipStyles = css`
  background-color: #1986ec;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0%;
  padding: 20px;
  border: none;
  border-radius: 44px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0b68af;
  }

  &:focus {
    outline: none;
  }
`

export const chipActiveStyles = css`
  background-color: rgb(85, 178, 249);
`
