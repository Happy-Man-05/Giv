const API = 'https://api.giphy.com/v1/gifs/search?'
const key = 'api_key=x2hhcKKWYg6EoeQTXm0co3NL8wW1Jf0O'
const limit = '&limit='
const params = '&q='
const form = document.querySelector('.gif_search')
const btn = document.querySelector('.search')
const input = document.querySelector('.inp')
const output = document.querySelector('.output')

const select = document.querySelector('#count')


const searchGiphy = async () => {
    let url = API + key + limit + select.value + params + input.value
    const request = await fetch(url)
    const response = await request.json()
    // console.log(response.data);
    renderGiphy(response.data)
    input.value = ''

}

const renderGiphy = (data) => {
    output.innerHTML = ''
    data.forEach(giff => {
        console.log(giff);

        const card = document.createElement('div')
        card.classList.add('card')

        const h2 = document.createElement('h2')
        h2.classList.add('card_h2')
        h2.textContent = giff.title

        const img = document.createElement('iframe')
        img.classList.add('card_img')
        img.src = giff.embed_url

        output.append(card)
        card.append(h2, img)
        // card.append(h2)
        console.log(giff);


    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    searchGiphy()
})
