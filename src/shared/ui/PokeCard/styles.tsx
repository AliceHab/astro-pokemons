import { css } from '@linaria/core'

export const pokeCard = css`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 44px 44px 16px 44px;
  flex-direction: column;
  align-items: flex-start;
  background-color: #000000;
  box-sizing: border-box;
`

export const pokeCard_h1 = css`
  color: var(--lightGray-for-text, #a0a0a0);
  font-family: Raleway;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin: 0;

  &::first-letter {
    text-transform: uppercase;
  }
`

export const pokeCard_p = css`
  color: var(--lightGray-for-text, #a0a0a0);
  font-family: Raleway;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin: 0;
`

export const pokeCard_image = css`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  image-rendering: pixelated;
`

export const pokeCard_text = css`
  display: flex;
  flex-direction: column;
`
