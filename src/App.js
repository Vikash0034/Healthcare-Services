import React, {useState} from 'react';
import './App.css';
import StyleForm from './Pages/StyleForm';
import StyleList from './Pages/StyleList';

function App() {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (updatedService) => {
     setServices(services.map((service) =>
      service.id === updatedService.id ? updatedService : service
    ));
    setEditingService(null);
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };
  return (
    <div className="App">
      <StyleForm 
      addService={addService}
      updateService={updateService}
      editingService={editingService}
      setEditingService={setEditingService}
      />
      <StyleList
      services={services}
      deleteService={deleteService}
      setEditingService={setEditingService}
      />
    </div>
  );
};

export default App;
