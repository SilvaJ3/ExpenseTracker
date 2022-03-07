import React, { useState } from 'react'
import * as S from "./modal.styes"

interface iModalProps extends React.PropsWithChildren<{}> {}

export default function Modal (props : iModalProps) {
  return (
    <S.ExpenseModalEdition>
      {props.children}
    </S.ExpenseModalEdition>
  )
}