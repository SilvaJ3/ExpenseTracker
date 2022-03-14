import React from 'react'
import * as S from "./text.styles"

type textProps = {
  text: string,
  color?: string
}

export default function Text ({text, color}: textProps ) {
  return (
    <S.Text color={color}>
      { text }
    </S.Text>
  )
}