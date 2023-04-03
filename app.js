let movieData = {
  "The Darjeeling Limited":
  {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums":
  {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

//Selecting
let data = document.querySelector('.data');
let likedUl = document.querySelector('.likedUl');
const sortList = document.querySelector(".sortList");
const submit = document.querySelector("#submit");
let likedAr = [];
let titleSort = document.querySelector("#titleSort");
let yearSort = document.querySelector("#yearSort");
let ratingSort = document.querySelector("#ratingSort");
let runtimeSort = document.querySelector("#runtimeSort");
let sortBtn = document.querySelector(".sortBtn");
const like = document.querySelector(".like");
const sidebarClose = document.querySelector(".fa-times");

//Data render, as soon as page has loaded
document.addEventListener( "DOMContentLoaded", function() {
  getMovieTitles();
});

//Rendering default data
function getMovieTitles() {
  let movieTitles = Object.keys(movieData);
  displayData(movieTitles);
};

//Rendering data depends on the data titles.It's reuseable function
function displayData(movieTitles) {

  //Before updating the data, empty the previous data.innerHTML
  data.innerHTML = '';

  movieTitles.forEach(title => {

    let note = document.createElement('div');
    note.classList.add('note');
    data.appendChild(note);

    let heart = document.createElement('i');
    heart.classList.add('fa', 'fa-heart', 'fa-lg');
    heart.setAttribute('aria-hidden', true);
    note.appendChild(heart);
    heart.addEventListener("click", handleHeartClick);

    let deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fa', 'fa-minus-circle');
    deleteBtn.setAttribute('aria-hidden', true);
    note.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", handleDeleteClick);

    function handleHeartClick() {
      heart.style.color = "#ec660d";
      let likedItem = heart.nextSibling.nextSibling.innerHTML;

       //If there's no the same likeditem in the array, then push the item
      if (!likedAr.includes(likedItem)) {
        likedAr.push(likedItem);
        let likedLi = document.createElement('li');
        likedLi.classList.add('likedLi');
        likedLi.textContent = likedItem;
        likedUl.appendChild(likedLi);
        heart.style.pointerEvents = "none";
      }
    }

    function handleDeleteClick() {
      let deletedItem = deleteBtn.nextSibling.innerHTML;
      delete movieData[deletedItem];

       getMovieTitles( Object.keys(movieData) );
    }

    let titleElem = document.createElement('h1');
    titleElem.classList.add('title');
    titleElem.textContent = title;
    note.appendChild(titleElem);

    let plot = document.createElement('p');
    plot.classList.add('plot');
    plot.textContent = `Plot : ${movieData[title].plot}`;
    note.appendChild(plot);

    let cast = document.createElement('p');
    cast.classList.add('cast');
    cast.textContent = `Cast : ${movieData[title].cast.join(", ")}`;
    note.appendChild(cast);

    let rating = document.createElement('p');
    rating.classList.add('rating');
    rating.textContent = `Rating : ${movieData[title].rating}`;
    note.appendChild(rating);

    let year = document.createElement('p');
    year.classList.add('year');
    year.textContent = `Year : ${movieData[title].year}`;
    note.appendChild(year);

    let runtime = document.createElement('p');
    runtime.classList.add('runtime');
    runtime.textContent = `Runtime : ${movieData[title].runtime}`;
    note.appendChild(runtime);
  });
}


//get input values
submit.addEventListener("click", submitData);

function submitData(e) {
  e.preventDefault();
let titleValue = document.querySelector("#title").value;
let plotValue = document.querySelector("#plot").value;
let castValue = document.querySelector("#cast").value;
let runtimeValue = document.querySelector("#runtime").value;
let ratingValue = document.querySelector("#rating").value;
let yearValue = document.querySelector("#year").value;

//Make a new object
movieData[titleValue] = {
plot: plotValue,
cast: castValue.split(", "),
runtime: parseInt(runtimeValue),
rating: parseFloat(ratingValue),
year: parseInt(yearValue)
};

//Empty the input values
document.querySelector("#title").value ='';
document.querySelector("#plot").value = '';
document.querySelector("#cast").value='';
document.querySelector("#runtime").value='';
document.querySelector("#rating").value='';
document.querySelector("#year").value='';

getMovieTitles(titleValue);

}

//toggle sortlist, open/close sidebar
sortBtn.addEventListener("click", toggleSortList);
function toggleSortList() {
  if(sortList.style.display === "none") {
    sortList.style.display = "block";
  }else {
    sortList.style.display = "none";
  }
};


like.addEventListener("click", openSidebar);
function openSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.width = "250px";
};


sidebarClose.addEventListener("click", closeSidebar);
function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.width = "0";
};


//Sorting
titleSort.addEventListener("click", function () {
  sortingAZ();
  sortList.style.display = "none";
});

yearSort.addEventListener("click", function () {
  sortingYear();
  sortList.style.display = "none";
});

ratingSort.addEventListener("click", function() {
  sortingRating();
  sortList.style.display = "none";
});

runtimeSort.addEventListener("click", function() {
  sortingRuntime();
  sortList.style.display = "none";
});



//Sorting title
function sortingAZ() {
  let sortedTitle = Object.keys(movieData);
  //sort title alphabetically (compare two words)
  sortedTitle.sort( (a,b) => a.localeCompare(b));
  displayData(sortedTitle)
};


//Sorting years
function sortingYear() {
  let sortedYear = Object.keys(movieData);
  sortedYear.sort( (a,b) => movieData[b].year - movieData[a].year);
  displayData(sortedYear)
};

//sorting rating
function sortingRating() {
  let sortedRating = Object.keys(movieData);
  sortedRating.sort( (a,b) => movieData[b].rating - movieData[a].rating);
  displayData(sortedRating);
};

//sorting runtime
function sortingRuntime() {
  let sortedRuntime = Object.keys(movieData);
  sortedRuntime.sort( (a,b) => movieData[b].runtime - movieData[a].runtime);
 displayData(sortedRuntime);
}
