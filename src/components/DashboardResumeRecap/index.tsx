import React from 'react'
import Text from "../common/Text/Text"
import * as S from "./dashboard_resume_recap.styles"

interface iPropsDashboardValue {
  expenses: number,
  incomes: number
}

export default function DashboardResumeRecapColumn(props: iPropsDashboardValue) {
  return (
    <S.ResumeRecapWrapper>
      <S.ResumeRecapColumn>
        <Text text={"Dépenses"}/>
        <S.ResumeRecapTotal>{props.expenses} €</S.ResumeRecapTotal>
      </S.ResumeRecapColumn>
      <S.ResumeRecapColumn>
        <Text text={"Recettes"}/>
        <S.ResumeRecapTotal>{props.incomes} €</S.ResumeRecapTotal>
      </S.ResumeRecapColumn>
    </S.ResumeRecapWrapper>
  )
}
