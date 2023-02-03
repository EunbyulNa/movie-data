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

document.addEventListener( "DOMContentLoaded", function() {
  renderData();
});

//rendering data
function renderData() {
  let data = document.querySelector('.data');
  let likedUl = document.querySelector('.likedUl');

  Object.keys(movieData).forEach((titles) => {

    let note = document.createElement('div');
     note.classList.add('note')
     data.appendChild(note);

    let heart = document.createElement('i');
     heart.classList.add('fa', 'fa-heart', 'fa-lg');
     heart.setAttribute('aria-hidden',true);
     note.appendChild(heart);
     heart.addEventListener("click",handleHeartClick)

    let title = document.createElement('h1');
     title.classList.add('title');
     title.textContent = titles;
     note.appendChild(title);

    let plot = document.createElement('p');
     plot.classList.add('plot');
     plot.textContent = `Plot : ${movieData[titles].plot}`;
     note.appendChild(plot);

    let cast = document.createElement('p');
     cast.classList.add('cast');
     cast.textContent = `Cast : ${movieData[titles].cast.join(", ")}`;
     note.appendChild(cast);

     let rating = document.createElement('p');
      rating.classList.add('rating');
      rating.textContent = `Rating : ${movieData[titles].rating}`;
      note.appendChild(rating);

     let year = document.createElement('p');
      year.classList.add('year');
      year.textContent = `Year : ${movieData[titles].year}`;
      note.appendChild(year);

     let runtime = document.createElement('p');
      runtime.classList.add('runtime');
      runtime.textContent = `Runtime : ${movieData[titles].runtime}`;
      note.appendChild(runtime);

     function handleHeartClick() {
       heart.style.color = "#ec660d"
        let likedItem = heart.nextSibling.innerHTML;
        let likedLi = document.createElement('li');
            likedLi.classList.add('likedLi');
            likedLi.textContent = likedItem;
            likedUl.appendChild(likedLi);
         heart.style.pointerEvents = "none";
     };
  });
};


//get input values
const submit = document.querySelector("#submit");

submit.addEventListener("click", function (e) {
    e.preventDefault();
  let titleValue = document.querySelector("#title").value;
  let plotValue = document.querySelector("#plot").value;
  let castValue = document.querySelector("#cast").value;
  let runtimeValue = document.querySelector("#runtime").value;
  let ratingValue = document.querySelector("#rating").value;
  let yearValue = document.querySelector("#year").value;


movieData[titleValue] = {
  plot: plotValue,
  cast: castValue.split(", "),
  runtime: parseInt(runtimeValue),
  rating: parseFloat(ratingValue),
  year: parseInt(yearValue)
};

//Before rerender it, empty the current page to avoid redering again
 data.innerHTML = '';

 //Empty the input values
 document.querySelector("#title").value ='';
 document.querySelector("#plot").value = '';
 document.querySelector("#cast").value='';
 document.querySelector("#runtime").value='';
 document.querySelector("#rating").value='';
 document.querySelector("#year").value='';


 renderData();


});

//toggle sortBtn
let sortBtn = document.querySelector(".sortBtn");
sortBtn.addEventListener("click", toggleSortList);

const like = document.querySelector(".like");
like.addEventListener("click", openSidebar);

const sidebarClose = document.querySelector(".fa-times");
sidebarClose.addEventListener("click", closeSidebar);


function toggleSortList() {
  const sortList = document.querySelector(".sortList");
   sortList.style.display === "none" ? sortList.style.display = "block" : sortList.style.display = "none";
}

function openSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.width = "250px";
}

function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.width = "0";
}



//sorting
let titleSort = document.querySelector(".titleSort");
let yearSort = document.querySelector(".yearSort");


titleSort.addEventListener("click", function () {
  sortingAZ();
  sortList.style.display = "none";
});

yearSort.addEventListener("click", function () {
  sortingYear();
  sortList.style.display = "none";
  rederSortYearData();
})

//Sorting title
function sortingAZ() {

  let sortedTitle = Object.keys(movieData);
  //sort title alphabetically (compare two words)

  sortedTitle.sort( (a,b) => a.localeCompare(b));
  data.innerHTML = '';


  sortedTitle.forEach( (titles) => {
    let note = document.createElement('div');
    note.classList.add('note')
    data.appendChild(note);

    let title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = titles;
    note.appendChild(title);

    let plot = document.createElement('p');
    plot.classList.add('plot');

    plot.textContent = `Plot : ${movieData[titles].plot}`;
    note.appendChild(plot);


    let cast = document.createElement('p');
     cast.classList.add('cast');

     cast.textContent = `Cast : ${movieData[titles].cast.join(", ")}`;
     note.appendChild(cast);

     let rating = document.createElement('p');
      rating.classList.add('rating');
      rating.textContent = `Rating : ${movieData[titles].rating}`;
      note.appendChild(rating);

      let year = document.createElement('p');
       year.classList.add('year');
       year.textContent = `Year : ${movieData[titles].year}`;
       note.appendChild(year);

       let runtime = document.createElement('p');
        runtime.classList.add('runtime');
        runtime.textContent = `Runtime : ${movieData[titles].runtime}`;
        note.appendChild(runtime);
  });

};



//Sorting years
function sortingYear() {

  let sortedYear = Object.keys(movieData).sort( (a,b) => movieData[b].year - movieData[a].year);
  console.log(sortedYear);
  return sortedYear;

};

function rederSortYearData() {
  let sortedYear = sortingYear();
  data.innerHTML = '';
  sortedYear.forEach( (titles) => {
    let note = document.createElement('div');
    note.classList.add('note')
    data.appendChild(note);

    let title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = titles;
    note.appendChild(title);

    let plot = document.createElement('p');
    plot.classList.add('plot');

    plot.textContent = `Plot : ${movieData[titles].plot}`;
    note.appendChild(plot);


    let cast = document.createElement('p');
     cast.classList.add('cast');

     cast.textContent = `Cast : ${movieData[titles].cast.join(", ")}`;
     note.appendChild(cast);

     let rating = document.createElement('p');
      rating.classList.add('rating');
      rating.textContent = `Rating : ${movieData[titles].rating}`;
      note.appendChild(rating);

      let year = document.createElement('p');
       year.classList.add('year');
       year.textContent = `Year : ${movieData[titles].year}`;
       note.appendChild(year);

       let runtime = document.createElement('p');
        runtime.classList.add('runtime');
        runtime.textContent = `Runtime : ${movieData[titles].runtime}`;
        note.appendChild(runtime);
  })
}
