import React, {useState} from 'react';
import './Tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './Menu';
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';

const allCatValues = [...new Set(Menu.map((curElem) => curElem.category)), 'all'];

const Tabs = () => {

    const [items, setItems] = useState(Menu);

    const [catItems, setCatItems] = useState(allCatValues);

    const filterItem = (catItem) => {
        if(catItem === 'all'){
            setItems(Menu);
            return;
        }
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category == catItem;
        });
        setItems(updatedItems);
    }
  return (
    <>
        <div className="pt-4 text-center main-heading main-div">
            <h1>Order Your Favourite Dish</h1>
            <hr />
            {/* menu list section */}
            <CatMenu filterItem={filterItem} catItems={catItems} />
            {/* main item section  */}
            <MenuItems items={items} />
        </div>
    </>
  );
};

export default Tabs;