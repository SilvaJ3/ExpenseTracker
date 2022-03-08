import React, { useEffect, useState } from "react";
import * as S from "./statschartsdetails.styles";
import _ from "lodash";
import Text from "../common/Text/Text";
import useColors from "../../hooks/useColors";

interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
}

interface iChartProps {
  datainfo: itemObject[] | undefined;
}

interface dataResume {
  name: string;
  value: number;
}

export default function StatsChartDetails(props: iChartProps) {
  const { COLORS } = useColors();

  const [CategorySum, setCategorySum] = useState<Array<dataResume>>([]);

  useEffect(() => {
    let result = _.chain(props.datainfo)
      .groupBy("category")
      .map((item: any | itemObject, category) => {
        return {
          name: category,
          value: _.sumBy(item, "value"),
        };
      })
      .value();

    setCategorySum(result);
  }, [props.datainfo]);

  return (
    <S.StatsDetailsWrapper>
      <S.StatsDetailsList>
        {CategorySum &&
          CategorySum.map((item: dataResume, index) => (
            <S.StatsDetailsListItem key={item.name} bgColor={COLORS[index]}>
              <Text text={`${item.name} : ${item.value} €`} />
            </S.StatsDetailsListItem>
          ))}
      </S.StatsDetailsList>
    </S.StatsDetailsWrapper>
  );
}
