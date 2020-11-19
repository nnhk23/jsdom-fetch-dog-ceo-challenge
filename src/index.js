console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (event) => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const image = document.querySelector('#dog-image-container')
    const ul = document.querySelector('#dog-breeds')
    const menu = document.querySelector('#breed-dropdown')

    function fetchImg() {
        fetch(imgUrl)
        .then((resp) => resp.json())
        .then(json => {
            // console.log(json)
            for(const img of json["message"]) {
                let pic = document.createElement('img')
                pic.setAttribute('src', img)
                image.appendChild(pic)
            }
        })
    }


    function fetchBreed() {
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
    
            for(const breed in json["message"]) {
                const li = document.createElement('li')
                li.innerText = breed
                li.addEventListener('click', (event) => {
                    event.target.style.color = "red"
                })
                ul.appendChild(li)
            }
    
            
        })
    }


    fetchImg()
    fetchBreed()
    
    
    menu.addEventListener('change', (event) => {
            const dogBreeds = ul.querySelectorAll('li')
            ul.innerHTML = ''
            for(const c in dogBreeds) {
                if (event.target.value == dogBreeds[c].innerText.slice(0,1)) {
                    ul.appendChild(dogBreeds[c])
                } 
            }        
    })

})

