let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Angular Tutorial",
    rating: 2.5,
  },
  {
    id: 3,
    title: "VueJS Tutorial",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Java Tutorial",
    rating: 4,
  },
  {
    id: 5,
    title: "JavaScript Tutorial",
    rating: 3.5,
  },
];

const arrayRatingLessThanFour = courses.filter((elm) => elm.rating >= 4);
document.getElementById("resultEx1").innerHTML = arrayRatingLessThanFour
  .map((elm) => {
    return `
    <div id="course" style="border: 1px solid #333">
        <p>ID: ${elm.id}</p>
        <p>Title: ${elm.title}</p>
        <p>Rating: ${elm.rating}</p>
    </div>
`;
  })
  .join("");

let addedCourses = [
  {
    id: 6,
    title: "PHP Tutorial",
    rating: 3,
  },
  {
    id: 7,
    title: "C# Tutorial",
    rating: 2,
  },
  {
    id: 8,
    title: "Docker Tutorial",
    rating: 3.8,
  },
];
const arrayRatingGreaterThanFour = addedCourses.filter((elm) => elm.rating < 4);
document.getElementById("resultEx2").innerText = arrayRatingGreaterThanFour.map(
  (elm) => {
    return `["${elm.id} - ${elm.title} - ${elm.rating}"]`;
  }
);

let newArray = [...courses, ...addedCourses];
document.getElementById("resultEx3").innerHTML = newArray
  .map((elm) => {
    return `
    <div id="course" style="border: 1px solid #333">
        <p>ID: ${elm.id}</p>
        <p>Title: ${elm.title}</p>
        <p>Rating: ${elm.rating}</p>
    </div>
`;
  })
  .join("");
