import * as Item from './ItemList.styled';

export default function ItemList() {
  return (
    <Item.ItemList>
      <img
        style={{ borderRadius: '5px' }}
        src="http://via.placeholder.com/140x200"
        alt=""
      />
      <Item.Title>
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>brand</span>
        Title
      </Item.Title>
      <p>
        <span style={{ color: 'red', fontWeight: 'bold' }}>38%</span>19,900원
      </p>
      <Item.Badge>무료배송</Item.Badge>
      <p>좋아요 4.7K 리뷰 127</p>
    </Item.ItemList>
  );
}
