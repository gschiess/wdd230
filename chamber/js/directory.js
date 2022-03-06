const requestURL = "./data/data.json"
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject["businesses"];
    businesses.forEach(displayBusinesses);
  });

function displayBusinesses(business) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let portrait = document.createElement("img");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  if(!business.imgurl){
    portrait.setAttribute("src", "images/No-image-found.jpg");
  }else{
    portrait.setAttribute("src", business.imgurl);
  }
  portrait.setAttribute("alt", `${business.name} Logo and Brand Image`);
  portrait.setAttribute("loading", "lazy");

  // Change the textContent property of the h2 element to contain the business's full name
  h2.innerHTML = `${business.name}`;

  // Enter Descriptive elements
  p1.innerHTML = `${business.phone}`;
  p2.innerHTML = `${business.website}`;
  p3.innerHTML = `${business.address}`;

  // Add/append the section(card) with the h2 element
  card.appendChild(portrait);
  card.appendChild(h2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  
  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}