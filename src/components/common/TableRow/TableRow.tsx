import React from 'react'
import * as S from "./tablerow.styles"

export default function TableRow (props: any) {
  return (
    <S.TableRow key={props.data.id}>
      <S.TableRow_Td>{props.data.category}</S.TableRow_Td>
      <S.TableRow_Td>{props.data.date}</S.TableRow_Td>
      <S.TableRow_Td>{props.data.description}</S.TableRow_Td>
      <S.TableRow_Td>{props.data.value}, - €</S.TableRow_Td>
    </S.TableRow>
  )
}