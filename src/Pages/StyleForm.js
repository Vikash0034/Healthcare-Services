import React, { useState, useEffect } from "react";
import "./StyleForm.css";

const StyleForm = ({ addService, updateService, editingService, setEditingService }) => {
    const [service, setService] = useState({ id: '', name: '', description: '', price: '' });

    useEffect(() => {
        if (editingService) {
            setService(editingService);
        } else {
            setService({ id: '', name: '', description: '', price: '' });
        }
    }, [editingService]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (service.id) {
            updateService(service);
        } else {
            addService({ ...service, id: Date.now() });
        }
        setService({ id: '', name: '', description: '', price: '' }); 
        setEditingService(null); 
    };
  return (
    <div className="Style_Form">
      <form className="servic" onSubmit={handleSubmit}>
        <h1>HEALTHCARE SERVICES</h1><hr/><br/>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Service Name :
          </label>
          <input
            type="text"
            placeholder="Service Name"
            value={service.name}
            onChange={(e) => setService({ ...service, name: e.target.value })}
            class="form-control"
            required
          />

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Description :
          </label>
          <input
            type="text"
            placeholder="descriptions"
            value={service.description}
            onChange={(e) => setService({ ...service, description: e.target.value })}
            class="form-control"
            required
          />  
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
             Price :
          </label>
          <input
            type="number"
            placeholder="Price"
            value={service.price}
            onChange={(e) => setService({ ...service, price: e.target.value })}
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">
          {service.id ? 'Update' : 'Add'} Service</button>
          {service.id && <button onClick={() => setEditingService(null)}>Cancel</button>}
      </form>
    </div>
  );
};

export default StyleForm;
