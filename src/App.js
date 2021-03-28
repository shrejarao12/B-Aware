import React, { useState} from 'react';
import { Menu } from 'antd'
import ViewDetails from './components/ViewDetails'
import ReportDetails from './components/ReportSubmit'
import Heading from './components/Heading'
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [menu, setMenu] = useState(null);
  const handleClick = e => {
    setMenu(e.key)
  };

  return (
    <div className="App">
      <Heading/>
      <>
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
      </>
      { menu === "1" &&
      <>
        <ViewDetails/>
      </>
      }
      {
        menu === "2" &&
            <>
              <ReportDetails/>
            </>
      }
    </div>
  );
}

export default App;
