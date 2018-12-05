import React from 'react'

export default function listGroup(props) {
  const { items, onItemSelect, selectedItem } = props
  return (
    <div>
      <ul className="list-group">
          {items.map(item => <li onClick={() => onItemSelect(item)} className={item === selectedItem ? "list-group-item active" : "list-group-item"} key={item._id}>{item.name}</li>)}
      </ul>
    </div>
  )
}
