// define custom seraches

const any = 'q=fashion';

async function getNews(search) {
    let data = await fetch(`https://newsapi.org/v2/everything?${search}&apiKey=5dd14bd3df04419096998429a02b86fc&sortBy=popularity`)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            throw err;
        })
    return data;
}

async function setNews(node, data) {
    // grab each article of the home page

    if (node.nodeName == "IMG") {
        node.src = "";
    } else if (node.nodeName == "A") {
        node.href = data;
    } else {
        node.innerText = data;
    }
    console.log(node.nodeName)
}

// for each node under news update
async function updateNodes(nodeSel) {
    try {
        let { articles } = await getNews("q=tech"),
            newsNode = document.querySelectorAll(`${nodeSel}`),
            headline, news_text, category, news_photo, link, i = 0;

        console.log(articles, newsNode)

        for (node of newsNode) {
            // set each childs content
            if (headline = node.querySelector(".headline")) {
                setNews(headline, articles[i].title)
            }
            if (news_text = node.querySelector(".news_text")) {
                setNews(news_text, articles[i].description.slice(0, 150).concat("..."))
            }
            if (category = node.querySelector(".category")) {
                setNews(category, articles[i].author)
            }
            if (news_photo = node.querySelector(".news_photo")) {
                setNews(news_photo, articles[i].urlToImage)
            }
            if (link = node.querySelector("a")) {
                setNews(link, articles[i].url)
            }
            i++;
        }
    } catch (err) { console.error(err) }

}

// updateNodes('.feeds .news_box');



// paginate feeds
let feed_row = {
    articles: document.querySelectorAll(".feed_row .news_box"),
    index: 0,
    updateFeeds(dir) {
        let children = this.node.querySelectorAll(".news_box");
        
        //if  disable previous button
        
        //if to disable next button
        
        //make feeds fade out
        this.node.classList.toggle("hide")
        
        // change feeds
        

        //fade-in
        setTimeout(() => { this.node.classList.toggle("hide") }, 2500)
    },
    node: document.querySelector(".feed_row"),
}

function changeFeed(event) {
    feed_row.updateFeeds(event.target.value.toLowerCase());
}
// previous and next buttons
const prev = document.querySelector(".prev"),
next = document.querySelector(".next");

prev.addEventListener("click", changeFeed);
next.addEventListener("click", changeFeed);