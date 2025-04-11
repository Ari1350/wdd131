document.addEventListener("DOMContentLoaded", () => {
  const d = new Date();
  document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
  document.querySelector("#last-modified").textContent = `Last Modification: ${document.lastModified}`;

  const hambutton = document.querySelector("#hambutton");
  hambutton.addEventListener("click", () => {
      document.querySelector("h1").classList.toggle("show");
      document.querySelector("#navmenu").classList.toggle("show");
      hambutton.classList.toggle("show");
  });

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Mendoza Argentina",
        location: "Ciudad de Mendoza, Mendoza Argentina",
        dedicated: "2024, September, 22",
        area: 21999,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51739-main.jpg"
      },
      {
        templeName: "Cochabamba Bolivia",
        location: "Alto Queru Queru,Cochabamba Bolivia",
        dedicated: "2000, April, 30",
        area: 35500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13721-main.jpg"
      },
      {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Distrito Capital, Bogota Colombia",
        dedicated: "1999, April, 24-26",
        area: 35500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
      },
  ];

createTempleCard(temples);

const nonboliviaLink = document.querySelector("#nonbolivia");
    if (nonboliviaLink) {
        nonboliviaLink.addEventListener("click", (event) => {
            event.preventDefault(); 
            const filteredTemples = temples.filter(temple =>
                !temple.location.toLowerCase().includes("bolivia")
            );
            createTempleCard(filteredTemples);
        });
    } else {
        console.error("Element with ID #nonbolivia not found.");
    }

function createTempleCard(filteredTemple) {
      const gallery = document.querySelector(".gallery");
      gallery.innerHTML = "";

    filteredTemple.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location =  document.createElement("p");
      let dedication =  document.createElement("p");
      let area =  document.createElement("p");
      let img =  document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class = "label">Size:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} temple`);
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector(".gallery").appendChild(card);
    });
 }
});