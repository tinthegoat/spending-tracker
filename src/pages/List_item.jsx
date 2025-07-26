import React from 'react';

// This component receives an array of 'items' as a prop.
// It's a "presentational" component; it doesn't have its own state.
function ListItem({ items }) {
  
  // If there are no items, don't render anything.
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="item-list-container">
      <h4>Items in this Category</h4>
      <ul className="item-list">
        {/* Map over the items array to create a list entry for each one */}
        {items.map((item) => (
          <li key={item.id || item.date} className="item-list-entry">
            
            {/* Left side: Date and Description */}
            <span className="item-description">
              {item.date}: {item.description || 'No description'}
            </span>
            
            {/* Right side: Amount */}
            <span className="item-amount">
              -${Number(item.amount).toFixed(2)}
            </span>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem;
