import React, {useState} from 'react'
import { Menu } from 'antd';

import './MenuHeader.css'
const MenuHeader = () => {
    const [menu, setMenu] = useState(null);
    const handleClick = e => {
        setMenu(e.key)
    };

    return (
        <div>
            <Menu
                theme="dark"
                mode="horizontal"
                onClick={handleClick}
            >
            <Menu.Item key="1" >
                View
            </Menu.Item>
            <Menu.Item key="2" >
                Report
            </Menu.Item>
            </Menu>
        </div>
    )
};

export default MenuHeader;