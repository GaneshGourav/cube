### React Client Management Application
This is a simple React application designed for managing client information. It consists of components for displaying a list of clients, selecting a client to view their details, and displaying client images fetched from the Unsplash API.

### Components
1. ClientList
This component displays a list of clients in the form of cards. Each card contains basic information about the client such as name and designation.

Props:
* clients: An array of client objects containing client details.
* onSelect: A function to handle client selection.
2. ClientCard
* This component represents an individual client card within the ClientList. It displays the client's name and designation.

Props:
* client: The client object containing details like name and designation.
* isSelected: A boolean indicating whether the client is selected.
* onClick: A function to handle click events on the client card.
3. ClientDetails
This component displays detailed information about a selected client along with randomly fetched images from the Unsplash API.

Props:
* client: The selected client object.
4. ClientImage
* This component renders a grid of images fetched from the Unsplash API.

Props:
* images: An array of image URLs fetched from the Unsplash API.
### App
* The main App component acts as the entry point for the application. It manages the state of the selected client and renders the ClientList and ClientDetails components accordingly.

### Styles
* The application includes CSS styles for layout, styling client cards, client details, and client images. It also provides a loading indicator for when images are being fetched.


#### Infinite Scroll:

* The ClientList component now supports infinite scroll. As you scroll down the list, more clients will be loaded automatically.
### Setup Instructions
## To run the application:

* Clone this repository to your local machine.
* Navigate to the project directory in your terminal.
* Install dependencies by running npm install.
* Start the development server by running npm run dev.

### Technologies Used
* React
* Axios for making HTTP requests
* CSS for styling

  ### ScreenShot :
  * Home Page:
 
    
  ![cube-home](https://github.com/GaneshGourav/cube/assets/119353884/e69c84fb-75b5-4c47-9f0a-c286c4740e7e)

  * Loading Indicator:
 
    ![cube-loading](https://github.com/GaneshGourav/cube/assets/119353884/f70fd22f-589e-4834-82ba-21806d579161)

   * Details With Images:

     ![cube-images](https://github.com/GaneshGourav/cube/assets/119353884/f5d58875-01f6-44a9-b415-65ada6ccc07c)

### Credits
This application uses the Unsplash API to fetch random images.
