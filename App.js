const url="https://newsapi.org/v2/everything?q=tesla&from=2023-12-07&sortBy=publishedAt&apiKey=e9a3eb40f54c4aa69ff3989f63efa842";

const card=document.getElementById('card');
const author=document.getElementById('author');
const title=document.getElementById('title');
const content=document.getElementById('content');
const publishedAt=document.getElementById('publishedAt');
const img=document.getElementById('bookimg');




async function fetchData(){
   let data=await fetch(url);
   let datajson=await data.json();
   console.log(datajson.articles);  
   
   
   author.innerHTML="Author:"+datajson.articles[2].author;
   title.innerHTML="Title:"+datajson.articles[2].title;
   content.innerHTML="Content:"+datajson.articles[2].content;
   publishedAt.innerHTML="publishedAt:"+datajson.articles[2].publishedAt;
   img.src=datajson.articles[2].urlToImage;

  
}

fetchData();