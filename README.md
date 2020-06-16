## Google Book Search
A full stack React app to search the Google Books Api, and save links to ones you are interested in. 

### Table of Contents

* Application Use
* Tech Used
* Details of App and Challenges
* Screenshots
* Link to the Live Project

### Application Use

The app is a single page React Application. The user lands on a simple search page, with base level instructions, and a search bar with a submit button. The user enters in book info they wish to search for and utilizing the Google Books API, we query the Google Books app for info, and render the results on the screen for the user to peruse. 

The results also have a save button in them, allowing the user to save books they are interested in, which are saved to the MongoDB for retrieval. By using the navigation bar, the user can move to the Saved page, which displays all saved books from the database. They have an option to delete books from the database from this page. 

### Tech Used

* React.js
* Bootstrap
* Google Fonts
* Fontawsome
* Imgur
* Javascript
* Heroku
* CSS
* Mongoose
* MongoDB
* Concurrently
* React-Router-Dom
* React-Alert

### Details of App and Challenges

The application had several interations over the course of creating it. I ended up reverting back a large portion of code when I had a number of dependency issues and errors in react itself. After that, I took the rest of the development VERY slowly, in tiny steps. I struggled pretty heavily trying to make sense of the React framework and it's requirements, especially figuring out how to pass data around between the various components. 

I had help from numerous folks from class including, Jacob Stanger, Miranda D'Asto, Graham Thomas, as well as the staff, Chris Stead, Kurt Lehnardt, and Mike Rivera. Without their troubleshooting, and help, I would not have gotten through piecing this together. It took many more hours of careful, tiny steps and digging into errors than any other project thus far, and I appreciate having good people to help me along the way. 

### Screenshots

Main Page:
![Main Page](/client/src/Screenshots/mainPage.jpg)

Search: 
![Search](/client/src/Screenshots/search.jpg)

Search Results:
![Search Results](/client/src/Screenshots/searchResults.jpg)

Saved Book Toast:
![Saved Book Toast](/client/src/Screenshots/savedToast.jpg)

Saved Books Page:
![Saved Books Page](/client/src/Screenshots/savedBooksPage.jpg)

### Link to the Live Project on Heroku: https://googly-book-search.herokuapp.com/