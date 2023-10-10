import * as Item from './ItemList.styled';

export default function ItemList() {
  return (
    <Item.ItemList>
      <li>
        <div style={{ position: 'relative', width: '160px' }}>
          <svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
          >
            <path
              fill="rgb(245, 97, 109)"
              d="M10.904 21.527c.666.44 1.526.44 2.19 0 2.115-1.396 6.72-4.733 8.704-8.467 2.615-4.926-.456-9.838-4.515-9.838-2.315 0-3.707 1.209-4.477 2.248a.997.997 0 01-1.613 0c-.77-1.04-2.162-2.248-4.476-2.248-4.06 0-7.131 4.912-4.515 9.838 1.982 3.734 6.588 7.071 8.702 8.467"
            ></path>
          </svg>
          <img
            style={{ borderRadius: '5px' }}
            src="http://via.placeholder.com/160x160"
            alt=""
          />
        </div>
        <Item.Title>
          <span style={{ fontWeight: 'bold', marginRight: '5px' }}>brand</span>
          Title
        </Item.Title>
        <p>
          <span style={{ color: 'red', fontWeight: 'bold' }}>38%</span>19,900원
        </p>
        <Item.Badge>무료배송</Item.Badge>
        <p>좋아요 4.7K 리뷰 127</p>
      </li>
    </Item.ItemList>
  );
}
