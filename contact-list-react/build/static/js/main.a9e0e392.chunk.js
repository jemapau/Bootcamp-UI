(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},20:function(e,t,a){},24:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(13),l=a.n(o),i=(a(20),a(4)),s=a(7),r=a(8),u=a(10),m=a(9),d=a(11),h=a(1),v=a.n(h),p=(a(24),a(30)),f=a(31),E=a(29),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p.a,null,c.a.createElement("div",null,c.a.createElement(b,null),c.a.createElement(f.a,{exact:!0,path:"/",component:C}),c.a.createElement(f.a,{exact:!0,path:"/contactlist",component:j}))))}}]),t}(n.Component),b=function(e){return c.a.createElement("nav",{className:"navigation"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(E.a,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/contactlist"}," Contacts"))))},C=function(e){return c.a.createElement("div",{className:"home"},c.a.createElement("section",{className:"home__cta"},c.a.createElement("p",null,"Manage all your contacts in on place ",c.a.createElement("span",null,"\ud83d\udc99")," "),c.a.createElement(E.a,{to:"/contactlist",className:"home__cta__btn"},"Start here")))},j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={all:[],favorites:[]},a.addToFavorites=a.addToFavorites.bind(Object(i.a)(Object(i.a)(a))),a.onClickDelete=a.onClickDelete.bind(Object(i.a)(Object(i.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"addToFavorites",value:function(e){console.log("A\xf1adir a favoritos",e);var t=this.state.favorites.concat(e),a=this.state.all.filter(function(t){return t.email!==e.email});console.log("index","This is the new:  "+a),this.setState({all:a,favorites:t})}},{key:"onClickDelete",value:function(e){this.state.favorites.splice(e,1),this.state.all.splice(e,1);var t=this.state.favorites;console.log("Estos son los items la lista de favoritos"+t),this.setState({items:t})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=60").then(function(e){return e.json()}).then(function(t){e.setState({all:t.results})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement(O,{className:"column",contacts:this.state.all,title:"All contacts",key:"1",addToFavorites:this.addToFavorites,onClickDelete:this.onClickDelete}),c.a.createElement(O,{className:"column",contacts:this.state.favorites,title:"Your Favorites",key:"2",addToFavorites:this.addToFavorites,onClickDelete:this.onClickDelete}))}}]),t}(n.Component),O=function(e){return c.a.createElement("div",{className:e.className},c.a.createElement("h2",{className:"title"},e.title),e.contacts.map(function(t){return c.a.createElement(g,{key:t.login.uuid,contact:t,addToFavorites:e.addToFavorites,onClickDelete:e.onClickDelete})}))};O.proptypes={addToFavorites:v.a.func.isRequired,contacts:v.a.array.isRequired,title:v.a.string.isRequired},O.defaultProps={title:"Titulo"};var g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onClickFavorites=a.onClickFavorites.bind(Object(i.a)(Object(i.a)(a))),a.onClickDelete=a.onClickDelete.bind(Object(i.a)(Object(i.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onClickFavorites",value:function(){this.props.addToFavorites(this.props.contact)}},{key:"onClickDelete",value:function(){this.props.onClickDelete(this.props.contact)}},{key:"render",value:function(){return c.a.createElement("div",{className:"contact"},c.a.createElement("div",{className:"contact__img"},c.a.createElement("figure",{className:"contact__data"},c.a.createElement("img",{src:this.props.contact.picture.large,alt:"Author"}))),c.a.createElement("div",{className:"contact__info"},c.a.createElement("figcaption",null,this.props.contact.name.first),c.a.createElement("p",null,c.a.createElement("strong",null,"Phone:")," ",this.props.contact.cell),c.a.createElement("p",null,c.a.createElement("strong",null,"City:")," ",this.props.contact.location.city),c.a.createElement("button",{onClick:this.onClickFavorites},"Favorite"),c.a.createElement("button",{onClick:this.onClickDelete,className:"contact__delete"},"Delete")))}}]),t}(n.Component),y=k;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.a9e0e392.chunk.js.map