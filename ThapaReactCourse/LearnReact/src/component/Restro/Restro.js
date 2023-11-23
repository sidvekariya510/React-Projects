import React, { useState } from 'react'
import "./style.css"
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

//making a method to help make changes in our website by changing API only.
//uniqueList is an undefined Object with repeating categories.
//new Set will not let API tp repeat the categories.
//now lets convert object into an Array by using [] with spread operator

const uniqueList = [...new Set(
  Menu.map((data) => {
    return data.category;
  })
),
  "All",
]

// console.log(uniqueList);



const Restro = () => {

  const [menuData, setMenuData] = useState(Menu)
  //using useState state variable for uniqueList for reducing code of navbar buttons
  const [menuList, setMenuList] = useState(uniqueList)

  const filterItem = (category) => {
    //writing a condition for All button to display all items
    if (category==="All") {
      setMenuData(Menu)
      return; //this is must
    }

    const updatedList = Menu.filter((data) => {
      return data.category === category;
    })
    setMenuData(updatedList);
  }
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      {/* using PROPS */}
      < MenuCard menuData={menuData} />
    </>
  )
}

export default Restro