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
    }else if (node.nodeName == "A") {
        node.href = data;
    }else {
        node.innerText = data;
    }
    console.log(node.nodeName)
}

// for each node under news update
async function updateNodes(nodeSel) {
    try {
        let { articles } = await getNews("q=tech"),
            newsNode = document.querySelectorAll(`${nodeSel}`),
            headline, news_text, category, news_photo, link , i = 0;

        console.log(articles,newsNode)

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

updateNodes('.feeds .news_box');
