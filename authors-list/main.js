let e = fetch('https://randomuser.me/api/?results=100');

let show = e.then(function (response){
  return response.json();
}).then(data => {
  //const firstAuthor = data.results[0];
  //const secondAuthor = data.results[1];
  //const firstFigureCaption = document.querySelector('figcaption');
  //firstFigureCaption.innerHTML = firstAuthor.name.first + ' ' + firstAuthor.name.last;
  // console.log(firstFigureCaption);

  const authors = data.results;

  var create = authors.forEach((author) => {
    const app = document.getElementById('wrap');
    const figCap = document.createElement('figcaption');
    const imgAuthor = document.createElement('img');
    imgAuthor.setAttribute('class', 'author__img');
    imgAuthor.src = author.picture.large;
    figCap.innerHTML = author.name.first + '' + author.name.last;

    const article = document.createElement('article');
    article.setAttribute('class', 'author');

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    app.appendChild(article);
    article.appendChild(card);
    card.appendChild(figCap);
    card.appendChild(imgAuthor);


    article.addEventListener("click", function addToFavorites(){
        var imgFav = document.createElement('img');
        imgFav.setAttribute('class', 'author__img');
        var nameFav = document.createElement('figcaption');
        imgFav.src = author.picture.large;
        nameFav.innerHTML = author.name.first + '' + author.name.last;
         this.classList.add("hide");
        
        const article = document.createElement('article');
        article.setAttribute('class', 'fav');

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const articleTwo = document.querySelector('.favorites');
        articleTwo.append(article);
        article.appendChild(imgFav);
        article.appendChild(nameFav);
        
        article.addEventListener("click",function removeFromFavorites() {
            this.remove();
        })
        
        
    });

  })
});