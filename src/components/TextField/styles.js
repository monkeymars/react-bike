import { css } from 'styled-components'

export const field = css`
  width: 100%;
  height: 34px;
  border-radius: 8px;
  border: solid 1.5px #545172;
  background-color: #fbfbfb;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
`
