fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((json) => {
    const data = json.products;
    const containerFluid = document.getElementById("aa");

    const content = document.createElement("div");

    content.style = "display: flex; justify-content: center";
    containerFluid.append(content);
    content.classList.add("row");
    content.classList.add("content");

    data.forEach((data) => {
      console.log(data);

      const individualContent = document.createElement("div");

      content.appendChild(individualContent);
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("imageDiv");

      const textDiv = document.createElement("div");
      textDiv.classList.add("textDiv");
      individualContent.append(imageDiv, textDiv);

      const titlePar = document.createElement("p");
      titlePar.innerText = "Title: " + data.title;

      const pricePar = document.createElement("p");
      pricePar.innerText = "Price: " + "₦" + data.price + "00";

      const ratingPar = document.createElement("p");
      ratingPar.innerText = "Rating: " + data.rating;

      const descriptionPar = document.createElement("p");
      descriptionPar.innerText = "Description: " + data.description;

      const cathegoryPar = document.createElement("p");
      cathegoryPar.innerText = "Cathegory: " + data.cathegory;

      const stockPar = document.createElement("p");
      stockPar.innerText = "Stock: " + data.stock;

      textDiv.append(
        titlePar,
        pricePar,
        ratingPar,
        descriptionPar,
        cathegoryPar,
        stockPar
      );

      individualContent.classList.add("col-lg-3");
      individualContent.classList.add("col-md-4");
      individualContent.classList.add("col-sm-1");
      individualContent.classList.add("m-1");

      const r = Math.random() * 255;
      const g = Math.random() * 255;
      const b = Math.random() * 255;

      individualContent.style = `background-color: rgb(${r}, ${g}, ${b})`;

      individualContent.classList.add("individualContent");

      const productImg = document.createElement("img");
      productImg.style = "width:100%; height:100%; object-fit:cover";
      productImg.src = data.images[0];
      imageDiv.appendChild(productImg);
    });
  });
