import {AiOutlineDelete} from 'react-icons/ai'

import {
  ItemLitem,
  Itemcont,
  ItemDesCont,
  ItemImg,
  ItemPara,
  ItemBtn,
} from './styledComponents'

const Item = props => {
  const {eachobj, onDelete} = props
  const {id, imageUrl, name, genre, duration} = eachobj
  const onDeleted = () => {
    onDelete(id)
  }
  return (
    <ItemLitem>
      <Itemcont>
        <ItemImg src={imageUrl} alt="track" />
        <ItemDesCont>
          <ItemPara color="#ffffff">{name}</ItemPara>
          <ItemPara color="#3b82f6">{genre}</ItemPara>
        </ItemDesCont>
      </Itemcont>
      <Itemcont>
        <ItemPara color="#ffffff">{duration}</ItemPara>
        <ItemBtn type="button" onClick={onDeleted} data-testid="delete">
          <AiOutlineDelete size={30} />
        </ItemBtn>
      </Itemcont>
    </ItemLitem>
  )
}

export default Item
