import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import TabList from '../components/tabList/TabList';
import ItemList from '../components/itemList/ItemList';
import RecommendProduct from '../components/itemList/RecommendProduct';

export default function Layout() {
  return (
    <div>
      <Header />
      <TabList />
      <ItemList />
      <RecommendProduct />
      <Outlet />
    </div>
  );
}
