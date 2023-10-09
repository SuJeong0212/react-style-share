import { useState } from 'react';
import * as Tab from './TabList.styled';

export default function TabList() {
  const [currentTab, clickTab] = useState(true);
  const menuArr = [
    { name: 'Tab1', content: '인기순' },
    { name: 'Tab2', content: '최신순' },
  ];
  const selectMenuHandler = (index) => {
    clickTab(index);
  };
  return (
    <div>
      <Tab.TabMenu>
        {menuArr.map((el, index) => (
          <li
            key={index}
            className={index === currentTab ? 'menu active' : 'menu'}
            onClick={() => selectMenuHandler(index)}
          >
            {el.content}
          </li>
        ))}
      </Tab.TabMenu>
    </div>
  );
}
