document.querySelector('#search').addEventListener
('click', getData);


function getData(e){
  //console.log("Data returned");
  e.preventDefault();

  let btitle = document.getElementById('title').value;
  let bauthor = document.getElementById('author').value;
  let bpubl = document.getElementById('publisher').value;

  if (btitle!==''||bauthor!==''||bpubl!==''){



  fetch('https://www.googleapis.com/books/v1/volumes?q='+btitle+bauthor+bpubl)
  .then((res) =>res.json())
  .then((data) =>
  {
    console.log(data);
    let books = data.items;
    // let thumb = $post.volumeInfo.imageLinks;
    let results=''
     books.forEach(function(post){
       // console.log(`${post.volumeInfo.imageLinks}`);
      // console.log(`${post.volumeInfo.title}`);
      results += `
      <div class="col-4">


      <div class="card result-book-card" style="width: auto">
        <img class="card-img-top result-img"  src="${post.volumeInfo.imageLinks ? post.volumeInfo.imageLinks.smallThumbnail :"Image Unavailable"}"  alt="Image Unavailable">
        <div class="card-body">
          <p class="card-title"><strong>${post.volumeInfo.title}</strong></p>
          <p class="card-text">${post.volumeInfo.authors}<br>
          ${post.volumeInfo.publisher}<br>
          ${post.saleInfo.listPrice ? post.saleInfo.listPrice.amount : "Not for Sale"}<br>
          </p>
          <a href="${post.volumeInfo.infoLink}" target="_blank" class="btn btn-primary">Read More</a>
          <a href="${post.saleInfo.buyLink}" target="_blank" class="btn btn-primary">Buy The Book</a>
          </div>
          </div>
      </div>
      `;
    });
     document.getElementById('o2').innerHTML = results ;
  })


  // .catch(error => console.log('Error:',error));
  // .catch(error => document.getElementById('o2').innerHTML = "Sorry, INCORRECT DATA");
}

else{

  document.getElementById('o2').innerHTML = "Please Enter The Search Values";


  }

}
