//DOM nodes

const pageLinks = document.querySelectorAll(".nav .list_link"),
    pages = document.querySelectorAll(".page");
// previous and next buttons
const prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    more=document.querySelector(".more");


//add event listeners
for (const link of pageLinks) {
    link.addEventListener("click", changePage)
}
prev.addEventListener("click", changeFeed);
next.addEventListener("click", changeFeed);
more.addEventListener("click",  moreFeed);

//search queries
const today = new Date().toISOString(),
    newsapi = `https://newsapi.org/v2/everthing?apiKey=5dd14bd3df04419096998429a02b86fc&language=en&from=${date}`,
    tech = `${newsapi}&q=tech&category=technology`,
    politics = `${newsapi}&q=politics`,
    fashion = `${newsapi}&q=fashion`,
    health = `${newsapi}&q=health`,
    sports = `${newsapi}&q=sport`,
    trade = `${newsapi}&q=business`,
    any = `${newsapi}`;


const NEWS_OBJECTS = [];

// news objects
class NewsSection {
    constructor(ownQry, childQry, type = "home", url) {
        this.node = document.querySelector(ownQry)
        this.index = -1;
        this.pageCoUnt = 1;
        this.articles = [];
        this.type = type;
        this.url = url
        this.childQry = childQry;
        let thisObj = this;
        NEWS_OBJECTS.push(thisObj)
    }
    async getArticles() {
        this.articles.concat(getNews(`${url}&pageCount`).articles)
    }

    get children() {
        return this.node.querySelectorAll(this.childQry)
    }
    setNewsNode(node) {
        let headline, text, author, img, link;
        if (headline = node.querySelector(".headline")) {
            // headline.innerText = articles[this.index][]
        }
        if (text = node.querySelector(".news_text")) {
            // text.innerText = articles[this.index][]
        }
        if (img = node.querySelector(".news_photo")) {
            // img.src = article[this.index][]
        }
        if (author = node.querySelector(".author")) {
            // author.innerText = articles[this.index][]
        }
        if (link = node.querySelector("a")) {
            // link.href = articles[this.index][]
        }

    }
}

class OtherNewsSection extends NewsSection {
    constructor(ownQry, childQry, type, url) {
        super(ownQry, childQry, type, url)
    }
    updateFeeds() {

        console.log("updating feed of other news section");
        let count, add;
        if (this.index > -1 && this.children.length == 0) {
            count = this.index;
            add = 0;
        } else { count = 12;
        add=1 }

        console.log(count,add)
        for (let i = 0; i < count; i++) {
            //Create a news article
            let article = document.createElement("article"),
                row = document.createElement("div"),
                img = document.createElement("img"),
                news_text_col = document.createElement("div"),
                link = document.createElement("a"),
                h2 = document.createElement("h2"),
                p = document.createElement("p"),
                author = document.createElement("span");

            article.classList += "news_box col-lg-4";
            row.classList += "row";
            img.classList += "col-3 col-lg-7 news_photo";
            news_text_col.classList += "news_texts_col col-9 col-lg-11";
            h2.classList += "headline";
            p.classList += "news_text";
            author.classList += "author";

            link.appendChild(h2);
            news_text_col.appendChild(link);
            news_text_col.appendChild(p);
            news_text_col.appendChild(author);
            row.appendChild(img);
            row.appendChild(news_text_col);
            article.appendChild(row);

            this.setNewsNode(article);
            this.node.appendChild(article)

            this.index +=add
        }
    }
}

const home_feed_row = new NewsSection("#home_page .feed_row", ".feed_row .news_box", "home", any);
home_feed_row.updateFeeds = function (dir = next) {
    //if  disable previous button 
    let count = (dir == "next") ? 1 : -1;
    //if to disable next button

    //make feeds fade out
    this.node.classList.toggle("hide")
    // set feeds
    for (const node of this.children) {
        this.setNewsNode(node);
        this.index += count;
    }

    if (this.index < this.children.length) {
        prev.disabled = true
    } else {
        prev.disabled = false
    }
    if (this.index >= 100) {
        next.disabled = true
    } else {
        next.disabled = false
    }
    //fade-in
    setTimeout(() => { this.node.classList.toggle("hide") }, 2000)
}
home_feed_row.updateFeeds()

//define other news section objects
let tech_feed_row = new OtherNewsSection("#other_page .feed_row", ".feed_row .news_box", "tech", tech),
    politics_feed_row = new OtherNewsSection("#other_page .feed_row", ".feed_row .news_box", "politics", politics),
    fashion_feed_row = new OtherNewsSection("#other_page .feed_row", ".feed_row .news_box", "fashion", fashion),
    health_feed_row = new OtherNewsSection("#other_page .feed_row", ".feed_row .news_box", "health", health),
    sport_feed_row = new OtherNewsSection("#other_page .feed_row", ".feed_row .news_box", "sports", sports),
    trade_feed_row = new OtherNewsSection("#other_page .feed_row", ".feed_row .news_box", "trade", trade);






async function getNews(url) {
    let data = await fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            throw err;
        })
    return data;
}

//EVENT LISTENERS
//change pages
let current="home"
function changePage(event) {
    // change page
    event.preventDefault();
    event.stopPropagation();
    let type = event.target.innerText.toLowerCase()

    if (type == "home") {
        pages.forEach(page => {
            if (page.id == "home_page") {
                page.hidden = false
            } else {
                page.hidden = true
            }
        })
    } else if (type == "") { }
    else {
        pages.forEach(page => {
            if (page.id == "other_page") {
                page.querySelector(".feed_row").innerHTML = ""
                NEWS_OBJECTS.forEach((obj) => {
                    if (obj.type == type) {
                        current = obj.type
                        console.log(`paged changed to ${obj.type}`, obj.children.length)
                        obj.updateFeeds()
                    }
                })
                page.hidden = false;
            } else {
                page.hidden = true
            }
        })
    }
    // generate feeds
}

// update home feeds
function changeFeed(event) {
    home_feed_row.updateFeeds(event.target.value.toLowerCase());
}

function moreFeed(event){
    NEWS_OBJECTS.forEach((obj) => {
        if (obj.type == current) {
            obj.updateFeeds()
            
            console.log(`added feed to ${obj.type}`, obj.children.length)
        }
    })
}