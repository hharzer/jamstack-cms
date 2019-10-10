import React from 'react'
import { css } from '@emotion/core'
import { fontFamily } from '../theme'
import Loader from './loadingIndicator'
import { BlogContext } from '../context/mainContext'

function Button(props) {
  const {
    context: { theme }, isLoading = false, onClick, title,
    customCss = [], customLoadingCss = [], customButtonContainerCss = [] } = props
  return (
    <div css={[buttonContainer, ...customButtonContainerCss]}>
      { isLoading && <Loader customLoadingCss={[...customLoadingCss]} />}
      <button css={[buttonStyle(theme), ...customCss]} onClick={onClick}>
        {title}
      </button>
    </div>
  )
}

export default function ButtonWithContext(props) {
  return (
    <BlogContext.Consumer>
      {
        context => <Button {...props} context={context} />
      }
    </BlogContext.Consumer>
  )
}

const buttonContainer = css`
  display: flex;
`

function buttonStyle ({ primaryFontColor, highlight }) {
  return css`
    background-color: transparent;
    font-family: ${fontFamily};
    color: ${primaryFontColor};
    font-size: 16px;
    border: none;
    outline: none;
    margin: 0;
    cursor: pointer;
    border-radius: 3px;
    opacity: 1;
  `
}