// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))
document.getElementById('navigateTOCart').addEventListener('click',(e)=>{
    const showname = JSON.parse(sessionStorage.getItem('loginUser'));

    if(showname != null){
       window.location.href = "./cart";
    }else{
      alert("Please Login");
      window.location.href = "./login";
    }

})


document.getElementById('navigateToProfile').addEventListener('click',(e)=>{
    const showname = JSON.parse(sessionStorage.getItem('loginUser'));

    if(showname != null){
       window.location.href = "./profile";
    }else{
      alert("Please Login");
      window.location.href = "./login";
    }
})