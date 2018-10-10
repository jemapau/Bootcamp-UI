let e = fetch('https://randomuser.me/api/?results=100');

let show = e.then(function (resultados){
  return resultados.json();
}).then(here => {
  //const firstAuthor = here.results[0];
  //const secondAuthor = here.results[1];
  //const firstFigureCaption = document.querySelector('figcaption');
  //firstFigureCaption.innerHTML = firstAuthor.name.first + ' ' + firstAuthor.name.last;
  // console.log(firstFigureCaption);

  const authors = here.results;

  authors.forEach((author) => {
    const figCap = document.createElement('figcaption');
    const imgAuthor = document.createElement('img');
    imgAuthor.src = author.picture.large;
    figCap.innerHTML = author.name.first + '' + author.name.last;

    const mySection = document.querySelector('section');
    const article = document.querySelector('article');
    article.append(figCap);
    article.append(imgAuthor);
    mySection.append(article);
  })


});
