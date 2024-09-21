import React from "react";
import "./StyleList.css";

const StyleList = ({ services, deleteService, setEditingService }) => {
  return (
    <div>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <p><strong>NAME : </strong>{service.name}</p>
            <p><strong>DESCRIPTION :  </strong>{service.description}</p>
            <p><strong>PRICE : </strong>Rs.{service.price}</p>
            <button onClick={() => setEditingService(service)} className="nin">Edit</button>
            <button onClick={() => deleteService(service.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StyleList;
