let e = fetch('https://randomuser.me/api/?results=100');

let show = e.then(function (response){
  return response.json();
})
.catch(error => {
  console.log('There was an error', error)
})
.then(data => {
  //const firstAuthor = data.results[0];
  //const secondAuthor = data.results[1];
  //const firstFigureCaption = document.querySelector('figcaption');
  //firstFigureCaption.innerHTML = firstAuthor.name.first + ' ' + firstAuthor.name.last;
  // console.log(firstFigureCaption);

  const contacts = data.results;

  console.log(contacts);

  var create = contacts.forEach((contact) => {
    const app = document.getElementById('root');
    const figCap = document.createElement('figcaption');
    const imgContact = document.createElement('img');

    
    const infoContact = document.createElement('div');
    infoContact.setAttribute('class', 'contact__phone');

    imgContact.setAttribute('class', 'contact__img');
    imgContact.src = contact.picture.large;
    figCap.innerHTML = '<p>' + contact.name.first + '</p>' + ' ' + contact.name.last;

    infoContact.innerHTML = '<p><strong>Phone: </strong></p>' + contact.cell;

    const article = document.createElement('article');
    article.setAttribute('class', 'contact');


    var contactId = contact.login.uuid;
    article.setAttribute('id', contactId);

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('class', 'contact__info');

    const contactAdd = document.createElement('div');
    contactAdd.setAttribute('class', 'contact__like');

    app.appendChild(article);
    article.appendChild(card);
    card.appendChild(imgContact);
    card.appendChild(contactInfo);
    contactInfo.appendChild(figCap);
    contactInfo.appendChild(infoContact);
    contactInfo.appendChild(contactAdd);


    article.addEventListener("click", function addToFavorites(){
        var imgFav = document.createElement('img');
        imgFav.setAttribute('class', 'contact__img');
        var nameFav = document.createElement('figcaption');
        imgFav.src = contact.picture.large;
        nameFav.innerHTML = contact.name.first + ' ' + contact.name.last;
        this.classList.add("hide");
        
        const article = document.createElement('article');
        article.setAttribute('class', 'contact__fav');

        const heart = document.createElement('div');
        heart.setAttribute('class', 'like');

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const articleTwo = document.querySelector('.favorites');
        articleTwo.append(article);
        article.appendChild(imgFav);
        article.appendChild(nameFav);
        article.appendChild(heart);
        
        article.addEventListener("click",function removeFromFavorites() {
            this.remove();
        })
        
        
    });

  })
});