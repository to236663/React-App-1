import { useState, useCallback } from "react"

export default function Sidebar({initialMenuItems}) {
  let [newMenuItem, setNewMenuItem] = useState("")
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim () !== "") {
      setMenuItems((prevMenuItems) => [...prevMenuItems, newMenuItem]);
      setNewMenuItem(""); 
      console.log("Added menu item")
    }
  }, [newMenuItem])

  let filteredMenuItems = menuItems.filter((item) => item.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}  
      </ul>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button onClick={addMenuItem}>Add Item</button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}
