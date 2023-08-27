import React, { useState } from 'react';
import axios from 'axios';

function MenuDetails() {
  const [menuInfo, setMenuInfo] = useState({
    res_id: '',
    item_name: '',
    cost: '',
    food_type: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMenuInfo({
      ...menuInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/restaurant/createdetails', menuInfo);
      alert('Menu item created successfully');
      // Clear form
      setMenuInfo({
        res_id: '',
        item_name: '',
        cost: '',
        food_type: '',
      });
    } catch (error) {
      console.error(error);
      alert('Error creating menu item');
    }
  };

  return (
    <div class="contact-form">
    <h2 className="text-muted mb-0">Create Menu Item</h2>
    <form className='comment-form' id='comment-form' onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          style={{color:"white",background:"green",width:"40%",}}
          name="res_id"
          placeholder="Restaurant Name"
          value={menuInfo.res_id}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="item_name"
          style={{color:"white",background:"green",width:"40%",}}
          placeholder="Item Name"
          value={menuInfo.item_name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="number"
          name="cost"
          style={{color:"white",background:"green",width:"40%",}}
          placeholder="Cost"
          value={menuInfo.cost}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <select
          name="food_type"
          style={{color:"white",background:"green",width:"40%",}}
          value={menuInfo.food_type}
          onChange={handleInputChange}
        >
          <option value="">Select Food Type</option>
          <option value="starter">Starter</option>
          <option value="main">Main</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>
      <div>
      
        <button style={{color:"white",background:"blue",width:"40%",}} type="submit">Create Menu Item</button>
      </div>
    </form>
  </div>
  
  );
}

export default MenuDetails;
