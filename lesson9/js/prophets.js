const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let portrait = document.createElement("img");
  let order = "";
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");

  switch (prophet.order) {
    case 1:
      order = `${prophet.order}st`;
      break;
    case 2:
      order = `${prophet.order}nd`;
      break;
    case 3:
      order = `${prophet.order}rd`;
      break;
    default:
      order = `${prophet.order}th`;
  }

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.innerHTML = `${prophet.name} ${prophet.lastname}`;

  // Build the p attributes
  p1.innerHTML = `Date of Birth: ${prophet.birthdate}`;
  p2.innerHTML = `Place of Birth: ${prophet.birthplace}`;

  if (!prophet.death) {
    p3.innerHTML = `Length of Presidency: Undetermined`;
  } else {
    p3.innerHTML = `Length of Presidency: ${prophet.length}`;
  }

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute(
    "alt",
    `Portait of  ${prophet.name} ${prophet.lastname} - ${order} Latter-day Prophet`
  );
  portrait.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}
