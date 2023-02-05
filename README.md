# FAC-Application-Project [Movie Data]

## 💡 Idea


<img src = "https://user-images.githubusercontent.com/51739602/216806217-adc57e49-b690-4e71-94be-56266be814d4.jpeg" width="350px" height="250px"><br>
I wanted to design a dashboard style, so I drew a design idea on paper to bring it to life. <br>
The goal is to make the movie data app as interactive as possible for users. <br>
They can add new data and sort the data using the sort button. I also included delete and like icons on each card. <br>
When a user clicks the delete icon, the clicked data will be deleted from the object and re-rendered. <br>
When the user clicks the heart icon, the data will be saved in the favorites sidebar.


## 🚀 Feature 

##### ✅ Render the data
As soon as the page is loaded, the default data will be displayed. <br>
The forEach function will loop through each movie title in the array and create new elements. <br>
It was challenging to access the values in the nested objects, so I used the object[title].key method to get the nested object's value. <br>
After sorting the data, it needs to be re-rendered, so I created a renderMovieData(title) function for reuse. <br>
An array of movie titles is used as a parameter for the renderMovieData function. <br>
Every time the array of movie titles is updated, the array will loop through it and create new elements, displaying the updated data.


##### ✅ Add a new data
I added an input in the HTML file so that users can create new data. When they click the submit button, the submitData function will execute. <br>
The first step is to grab the values from the input fields and create a new object. <br>
I used the split() method to convert the string to an array and the parseInt and parseFloat methods to convert numbers to integers and <br>
floating-point numbers. Once the new object is created, the renderMovieData() function is executed with the new title array as a parameter. <br>
The new title array will loop through each title, creating new elements, and display the new data.


##### ✅ 4 different sorting options
There are four sorting options. I created a sort button and hid the sort list in the button. <br>
When the user clicks the button, the sort list appears.

 - Sort Title A-Z: Select the title array and sort the titles alphabetically. <br>
 However, using the sort() method alone didn't give the desired result. It orders all uppercase words before lowercase ones. <br>
 To fix this, I added two parameters (a, b) and used the localeCompare() method. <br>
 The localeCompare() method compares two words instead of sorting based on Unicode code points. <br>
 After sorting the titles, I called renderMovieData() and used the new sorted title array as a parameter.

- Sort year/rating/runtime: I wanted to sort the films by year, with the newest appearing first. <br>
To sort the numbers from the nested objects, I used the sort( (a,b) => movieData[b].year - movieData[a].year) function. <br>
movieData[a].rating means to get the rating value from each title. The function compares two elements a and b. <br>
If the difference returns a negative value, b is sorted before a, and if the difference returns a positive value, a is sorted before b. <br>
Once the year is sorted in descending order, the renderMovieData() function is executed with the new sorted title array as a parameter.

##### ✅ Delete the data  
When a user clicks the delete icon on the movie card, the handleDeleteClick() function will execute. <br>
The function's logic is to delete the selected item from the movieData object using the delete operator, and then re-render the data.


##### ✅ Like the data
When a user clicks the like icon, it pushes the clicked item into the array and creates a new list element to place the liked item in the list. <br>
It checks whether there's the same liked item or not. If there's no same item, the function will execute.


