import React from 'react';
import './sidebar.scss';

export const Sidebar = ({ setSelected, list, selectedId }) => {
  return (
    <div className="sidebar">
      {list.map((item) => (
        <button
          key={item.id}
          onClick={() => setSelected(item.id)}
          className={`sidebar-btn ${selectedId === item.id ? "active" : ""}`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}
