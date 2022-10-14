class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        const componenteRoot = document.createElement("div")
        componenteRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card-left")

        const author = document.createElement("span")
        author.textContent = "By " + (this.getAttribute("author") || "Aonymous")

        const linkTitle = document.createElement("a")
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("url-link")

        const paragraph = document.createElement("p")
        paragraph.textContent = this.getAttribute("content")

        cardLeft.appendChild(author)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(paragraph)


        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card-right")

        const nImage = document.createElement("img")
        nImage.src = this.getAttribute("photo") || './assets/default-avatar.png'
        nImage.title = "Imagem do Darth Vader"
        cardRight.appendChild(nImage)

        componenteRoot.appendChild(cardLeft)
        componenteRoot.appendChild(cardRight)

        return componenteRoot
    }

    styles() {
        const style = document.createElement("style")
        style.textContent = `        
        .card{
            width: 80%;
            border:1px solid gray;
            display: flex;
            flex-direction: row;
            margin-bottom: 15px;
            justify-content: space-between;    
            box-shadow: 2px 3px 13px 2px rgba(0,0,0,0.75);
            -webkit-box-shadow: 2px 3px 13px 2px rgba(0,0,0,0.75);
            -moz-box-shadow: 2px 3px 13px 2px rgba(0,0,0,0.75);
        }
        
        .card-left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        .card-left > span{
            font-weight: 400;
        }
        .card-left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        .card-left > p {
            color: rgb(70,70,70)
        }
        `;

        return style
    }
}

customElements.define('card-news', CardNews);