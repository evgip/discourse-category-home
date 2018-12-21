import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';
import { iconHTML } from "discourse-common/lib/icon-library";

let dot_circle = iconHTML('far-dot-circle');


export default createWidget('link-top', {
  buildKey: (attrs) => 'link-top',

  html(attrs, state) {
  let contents = []
  var username;
  var avatar_template;
  var ava;
 
  $.ajax({
  url: "/top/weekly.json",
  dataType: 'json',
  async: false,
  success: function(data) {
    
 var users = data.users;
 
 contents.push( new RawHtml({ html: ` <div class="h-home">TOP писатели</div>`})); 
  
 
 for (var t = 0; t < users.length; t++) {
 if(t >8) break;  
 username = users[t].username;
 ava = users[t].avatar_template;
 const avatar_template = ava.replace('{size}', '45');

 contents.push( new RawHtml({ html: ` <div class="user-ava"><a href="u/${username}"><img src="${avatar_template}" alt="${username}" width="45" class="logo-ava"><br> ${username}</a></div>`})); 
   
 }
 
  contents.push( new RawHtml({ html: `<div class="h-home"><br />Лучшие</div>`})); 
 
 
 var topics = data.topic_list.topics;
 var title;
 var slug;
 
 for (var t = 0; t < topics.length; t++) {
 if(t >4) break;  
 title = topics[t].title;
 slug = topics[t].slug;
 
  contents.push( new RawHtml({ html: ` <div class="h-qa">${dot_circle}  <a href="/t/${slug}">${title}</a></div>`})); 
   
 
  }
 
 
 }
 });
 return contents;
}});
