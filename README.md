STYLEFORM 
      - Handles the input form and adding or editing services.
      - Holds the details of the service being added or edited.
      - When editingService changes, it updates service with the current editing details.
      - handleSubmit form for submission, checks if it's an update or a new service. Calls the respective function.
      - Renders input fields and buttons for submitting the forms.

STYLELIST
      - Display the list of services and provides option to edit or delete each service.
      - Iterates through the services array and display each service's name, description and price.
      - Provides "EDITS" and "DELETE" buttons for each services.

APP JS
      - Main componenet managing services, including adding, updating and deleting services.
      - Services : an array to hold service object.
      - editingService : A state to keep track of the service currently being edited.
      - Takes a service object and appends it to the services array.
      - Replaces the existing service with the updated service if the IDs match.
      - Removes the service with the specified ID from the services array.
      

