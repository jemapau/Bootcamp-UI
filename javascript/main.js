let e = fetch('https://randomuser.me/api/?results=2');

let show = e.then(function (response){
  return response.json();
}).then(data => {
  //const firstAuthor = data.results[0];
  //const secondAuthor = data.results[1];
  //const firstFigureCaption = document.querySelector('figcaption');
  //firstFigureCaption.innerHTML = firstAuthor.name.first + ' ' + firstAuthor.name.last;
  // console.log(firstFigureCaption);

  const authors = data.results;

  authors.forEach((author) => {
    const app = document.getElementById('wrap');
    const figCap = document.createElement('figcaption');
    const imgAuthor = document.createElement('img');
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


    imgAuthor.addEventListener("click", function(){
      var imgSrc = document.createElement('img');
      imgSrc.src = author.picture.large;
      imgSrc.classList.add("fav");
      this.classList.add("hide");
      

      console.log(imgAuthor);

      const articleTwo = document.querySelector('.article-two');
      articleTwo.append(imgSrc);
    });

  })
});
