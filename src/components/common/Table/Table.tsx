import React, { useEffect, useState } from 'react'
import { ItemObject } from '../../EditForm'
import TableRow from '../TableRow/TableRow';
import * as S from "./table.styles"


interface itemObject {
  id: string;
  description: string;
  value: number;
  category: string;
  date: string;
};

export default function Table (props: any) {

  const [currentCategory, setCurrentCategory] = useState<string>("Autres");
  const [currentData, setCurrentData] = useState<Array<itemObject>>([]);

  
  const displayData = () => {
    const data = props.data.filter((item: itemObject) => item.category == currentCategory);
    setCurrentData(data);
  }
    
    useEffect(() => {      
      displayData();
    }, [props, currentCategory])


  return (
    <S.TableWrapper>
      <S.Category_List>
        {
          props.category && props.category.map((item: string , index: number) => {
            return (
              <S.Category_List_item key={index} onClick={() => setCurrentCategory(item)}>
                {item}
              </S.Category_List_item>
            )
          })
        }
      </S.Category_List>
      <S.TableElement>
        <S.TableHead>
          <S.TableRow>
            <S.TableRow_Th>#</S.TableRow_Th>
            <S.TableRow_Th>Catégorie</S.TableRow_Th>
            <S.TableRow_Th>Date</S.TableRow_Th>
            <S.TableRow_Th>Description</S.TableRow_Th>
            <S.TableRow_Th>Montant</S.TableRow_Th>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {
            currentData[0] && currentData.map((item: itemObject) => {
              return(
                <TableRow data={item}/>
              )
            })
          }
        </S.TableBody>
      </S.TableElement>
    </S.TableWrapper>
  )
}