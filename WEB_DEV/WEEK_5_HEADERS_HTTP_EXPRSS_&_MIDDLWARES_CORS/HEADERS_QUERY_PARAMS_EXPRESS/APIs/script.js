

const fetchData=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users/2')
    const data=await  res.json()

    const post=document.querySelector('#posts')

    console.log(data)
    post.innerHTML=data.name
}

fetchData()