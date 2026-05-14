// =======================
// IMAGE SLIDER
// =======================

let sliderImage = document.getElementById("sliderImage")

const images = [

    "https://i.pinimg.com/736x/73/68/a2/7368a2c20519d0a6d9e045f0f03b5973.jpg",

    "https://i.pinimg.com/736x/79/a4/4a/79a44a359956ef7cd50735c096c12912.jpg",

    "https://i.pinimg.com/736x/d0/a0/c4/d0a0c48b12c0aac7f5583ad5b1868fd4.jpg"

]

let index = 0

function changeImage(){

    sliderImage.src = images[index]

    index = (index + 1) % images.length

}

changeImage()

setInterval(changeImage,500)


// =======================
// FETCH API
// =======================

let container = document.getElementById("container")

fetch("https://jsonplaceholder.typicode.com/todos")

.then((response)=>{

    return response.json()

})

.then((data)=>{

    data.slice(0,5).forEach((item)=>{

        container.innerHTML += `

            <div class="card">

                <h3>${item.title}</h3>

                <p>ID : ${item.id}</p>

            </div>

        `

    })

})

.catch(()=>{

    container.innerHTML = "<h2>Data not found</h2>"

})