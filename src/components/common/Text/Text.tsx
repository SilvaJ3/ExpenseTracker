import React from 'react'
import * as S from "./text.styles"

type textProps = {
  text: string
}

export default function Text ({text}: textProps ) {
  return (
    <S.Text>
      { text }
    </S.Text>
  )
}