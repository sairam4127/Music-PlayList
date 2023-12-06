import styled from 'styled-components'

export const ItemLitem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`
export const Itemcont = styled.div`
  display: flex;
  align-items: center;
`
export const ItemDesCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const ItemImg = styled.img`
  height: 150px;
  width: 200px;
  margin-right: 17px;
`

export const ItemPara = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 25px;
`
export const ItemBtn = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 10px;
  color: #ffffff;
`
