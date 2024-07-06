function fetchPost(){
      return new Promise((res, rej)=>{
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then((response)=>{
          
        if(!response.ok) {
         rej('error');
         }
        return response.json();
     })
        .then((data)=>{
         res(data);
     })
        .catch((err)=>{
        rej (err);
     })
    })
};

fetchPost().then((post)=>{
    console.log(post);
})
.catch((err)=>{
    console.error(err);
})