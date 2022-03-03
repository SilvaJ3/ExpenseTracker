import React from 'react'
import * as S from "./bodytitle.styles"

type TextProps = {
  text: string
}

export default function BodyTitle ({text}: TextProps) {
  return (
    <S.BodyTitle>
      { text }
    </S.BodyTitle>
  )
}