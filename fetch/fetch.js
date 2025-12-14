/* 
Lo scopo di questo task è di mostrare nella pagina una carta de "Il signore degli anelli" con:

Nome del personaggio
immagine del personaggio
Prova a fetchare una card dal db del gioco di carte di Lord of the Rings, 
la documentazione dell'API la puoi trovare a questo link: https://ringsdb.com/api/doc
Fai in modo che nella tua pagina html spuntino il nome del personaggio della carta, la sua immagine
*/

async function fetchData() {
  try {
    const response = await fetch(
      "https://ringsdb.com/api/public/card/01001.json"
    );
    const responseJson = await response.json();
    console.log(responseJson);

    const { name, imagesrc } = responseJson;
    //console.log(name);
    //console.log(imagesrc);

    const baseUrl = "https://ringsdb.com";
    const imageUrl = baseUrl + imagesrc;
    //console.log(imageUrl);

    const h1 = document.querySelector(".name");
    h1.innerText = name;
    const image = document.querySelector(".image");
    image.setAttribute("src", imageUrl);
    //console.log(image);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
