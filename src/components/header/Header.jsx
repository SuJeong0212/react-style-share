import { BiSearch } from 'react-icons/bi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import styled from 'styled-components';
import * as S from './Header.styled';

const SearchIcon = styled(BiSearch)`
  font-size: 20px;
  color: #ccc;
`;

const Cart = styled(HiOutlineShoppingCart)`
  font-size: 25px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <S.Header>
      <div className="logo">
        <img
          width={35}
          height={35}
          src="https://theme.zdassets.com/theme_assets/987160/523bc13f7be955fa878c122990eb48f9c53e2017.png"
          alt=""
        />
      </div>
      <S.Search>
        <SearchIcon />
        <input type="text" placeholder="검색어를 입력 해 주세요." />
      </S.Search>
      <Cart />
    </S.Header>
  );
}
