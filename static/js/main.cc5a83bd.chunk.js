(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),l=n.n(o),c=(n(14),n(1)),s=n(2),i=n(4),u=n(3),h=n(5),d=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={values:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")"],letterPick:"",passwordLength:0},n.createRandomPassword=function(){for(var e,t=[],a=0;a<n.state.passwordLength;a++)t.push((e=n.state.values)[Math.floor(Math.random()*e.length)]);return t.join("")},n.handleRandomAlphabet=function(){var e=n.createRandomPassword();n.setState({letterPick:e})},n.handleChange=function(e){var t=e.target.value,a=parseInt(t);n.setState({passwordLength:a})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onClick:this.handlePasswordLengthClick},r.a.createElement("label",null,"how long do you want your password to be enter a number:",r.a.createElement("input",{type:"number",value:this.state.value,onChange:this.handleChange})),r.a.createElement("p",null,"Here's your password:",this.state.letterPick)),r.a.createElement("button",{onClick:this.handleRandomAlphabet},"Button "))}}]),t}(a.Component),m=(n(16),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"El Rando the random password generator"),r.a.createElement(d,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.cc5a83bd.chunk.js.map