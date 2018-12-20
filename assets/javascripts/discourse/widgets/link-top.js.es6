import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

export default createWidget('link-top', {
  buildKey: (attrs) => 'link-top',

  html(attrs, state) {
  let contents = []
  var username;
  var avatar_template;
  var ava;
 
  $.ajax({
  url: "/top.json",
  dataType: 'json',
  async: false,
  success: function(data) {
    
 var users = data.users;
 
 for (var t = 0; t < users.length; t++) {
 if(t >8) break;  
 username = users[t].username;
 ava = users[t].avatar_template;
 const avatar_template = ava.replace('{size}', '45');

 contents.push( new RawHtml({ html: ` <div class="user-ava"><a href="u/${username}"><img src="${avatar_template}" alt="${username}" width="45" class="logo-ava"><br> ${username}</a></div>`})); 
   
 }
 }
 });
 return contents;
}});
