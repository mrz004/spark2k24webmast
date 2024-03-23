const data = [
  {
    id: 1,
    name: "Hall A",
    location: "Location A",
    capacity: 100,
    facilities: ["Projector", "Sound System", "Stage"],
    booked: false,
  },
  {
    id: 2,
    name: "Hall B",
    location: "Location B",
    capacity: 150,
    facilities: ["Projector", "Sound System", "Stage", "Green Room"],
    booked: false,
  },
  {
    id: 3,
    name: "Hall C",
    location: "Location C",
    capacity: 200,
    facilities: [
      "Projector",
      "Sound System",
      "Stage",
      "Green Room",
      "Dressing Rooms",
    ],
    booked: true,
  },
  {
    id: 4,
    name: "Hall D",
    location: "Location D",
    capacity: 100,
    facilities: ["Projector", "Sound System", "Stage"],
    booked: false,
  },
  {
    id: 5,
    name: "Hall E",
    location: "Location E",
    capacity: 150,
    facilities: ["Projector", "Sound System", "Stage", "Green Room"],
    booked: false,
  },
  {
    id: 6,
    name: "Hall F",
    location: "Location F",
    capacity: 200,
    facilities: [
      "Projector",
      "Sound System",
      "Stage",
      "Green Room",
      "Dressing Rooms",
    ],
    booked: true,
  },
  {
    id: 7,
    name: "Hall G",
    location: "Sangli",
    capacity: 100,
    facilities: ["Projector", "Sound System", "Stage"],
    booked: false,
  },
  {
    id: 8,
    name: "Hall H",
    location: "Location H",
    capacity: 150,
    facilities: ["Projector", "Sound System", "Stage", "Green Room"],
    booked: false,
  },
  {
    id: 9,
    name: "Hall I",
    location: "Location I",
    capacity: 200,
    facilities: [
      "Projector",
      "Sound System",
      "Stage",
      "Green Room",
      "Dressing Rooms",
    ],
    booked: true,
  },
  {
    id: 10,
    name: "New Hall",
    img_url: "./imgs/cr_bg2.jpeg",
    location: "Location New destination",
    capacity: 800,
    facilities: [
      "Projector",
      "Sound System",
      "Stage",
      "Green Room",
      "Dressing Rooms",
    ],
    booked: true,
  },
];

const avl = document.getElementById("avl");
const q = document.getElementById("q");
const cardContainer = document.getElementsByClassName("cards-container")[0];

let filtered = data;

avl.addEventListener("change", (e) => {
  if (e.target.checked) filtered = data.filter((ele) => !ele.booked);
  else filtered = data;
  render();
});

q.addEventListener("change", (e) => {
  const query = e.target.value.toLowerCase();
  console.log(query);
  if (query === "") {
    filtered = data;
    render();
  } else {
    filtered = data.filter((ele) => {
      return (
        ele.name.toLowerCase().includes(query) ||
        ele.location.toLowerCase().includes(query) ||
        ele.capacity == query ||
        ele.facilities.includes(query)
      );
    });
    render();
  }
});

function render() {
  cardContainer.innerHTML = "";
  filtered.map((ele) => {
    cardContainer.innerHTML += `<div class="card my-2" style="width: 18rem;">
  <img src=${
    ele.img_url ? ele.img_url : "./imgs/cr_bg1.jpeg"
  } class="card-img-top" alt="Auditorium Hall">
  <div class="card-body">
    <h5 class="card-title">${ele.name}</h5>
    <p class="card-text">
    <p className="small">📌${ele.location}</p>
    <p>Capacity : ${ele.capacity}</p>
    <p>Booked : ${ele.booked ? "Yes" : "No"}</p>
    <p>Facilities :</p>
    <p>
    <ul>
    ${ele.facilities.reduce((old, curr) => {
      old += "<li>" + curr + "</li>";
      return old;
    }, "")}
    </ul>
    </p>

    </p>
    <a href="/booking.html" class="btn btn-primary">Book Now</a>
  </div>
</div>`;
  });
}

render();

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/
