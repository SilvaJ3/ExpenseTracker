import React, { useEffect, useState } from "react";
import * as S from "./statschartsdetails.styles";
import _ from "lodash";
import Text from "../common/Text/Text";
import getJsonData, { JsonDataType } from "../../hooks/getJsonData"

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
  const [colors, setColors] = useState<Array<string>>([]);

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

    let color = getJsonData(JsonDataType.colors);
    setColors(color as string[]);

  }, [props.datainfo]);

  return (
    <S.StatsDetailsWrapper>
      <S.StatsDetailsList>
        {CategorySum &&
          CategorySum.map((item: dataResume, index) => (
            <S.StatsDetailsListItem key={item.name} bgColor={colors[index]}>
              <Text text={`${item.name} : ${item.value} €`} />
            </S.StatsDetailsListItem>
          ))}
      </S.StatsDetailsList>
    </S.StatsDetailsWrapper>
  );
}
