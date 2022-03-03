import React from 'react'
import * as S from "./buttonaction.styles"

type Props = {
  text: string,
  onClick: Function,
}

export default function ButtonAction ({text, onClick}: Props) {
  return (
    <S.Button type="button" onClick={() => onClick}>
      { text }
    </S.Button>
  )
}