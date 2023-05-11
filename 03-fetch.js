
// const resp = fetch('https://reqres.in/api/users?page=1')
// resp.then((response)=>{
//     return response.json();
// }).then((json)=>{
//     console.log(json);
// })

const resp = fetch('https://reqres.in/api/users?page=1')
resp.then(response => response.json())
.then((json)=>{
    let content = document.getElementById('container');
    let htmlX='';
    json.data.forEach(element => {
        console.log(element);
        let htmlCard = 
        `<div class="col-4">
          <div class="card">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h3 class="card-title">${element.email}</h5>

              <button type="button" onclick="moreinfo(${element.id})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >More...</button>
            </div>
          </div>
        </div>`
      htmlX=htmlX+htmlCard;
    });
    content.innerHTML=htmlX;
})

const moreinfo = id => {
  const modal = new bootstrap.Modal('#modal', {});
  fetch(`https://reqres.in/api/users/${id}`).then(res => res.json()).then(({data}) => {
      document.getElementById('modal-body').innerHTML = `<img src='${data.avatar}' alt='...'>
          <div class='mt-3'>
          <h5>${data.first_name} ${data.last_name}</h5>
          <p>${data.email}</p>
          </div>`;
  });

  modal.show();
}
