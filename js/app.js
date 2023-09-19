
/**************************** 
 * Remake
 * 
****************************/
/**************************** 
 * VARIABLE AND CONSTANT
****************************/
// practice api result
const TEMPLATE = {
    "status": "ok",
    "totalResults": 9841,
    "articles": [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Edward Ongweso Jr.",
            "title": "Super Apps Are Terrible for People—and Great for Companies",
            "description": "Apps that offer to \"do it all\" will subject users to even more exploitation and surveillance, while large tech companies profit.",
            "url": "https://www.wired.com/story/super-app-musk-x-wechat-regulation/",
            "urlToImage": "https://media.wired.com/photos/64fa42075bae312310e8a2d3/191:100/w_1280,c_limit/ideas_superapps_technology_race.jpg",
            "publishedAt": "2023-09-10T11:00:00Z",
            "content": "Recently, Elon Musktold X employees that he wants the platform to become a WeChat-style super app, a one-stop shop for social media, communication, travel, on-demand labor, payments, and more. But th… [+5187 chars]"
        },

        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "Apple will keep using Qualcomm's 5G tech in iPhones until at least 2026",
            "description": "On the eve of Apple's big fall iPhone event\r\n, Qualcomm announced it will continue to provide the company with 5G smartphone modems through 2026. It’s an indication that while Apple has successfully scaled up its chipset manufacturing efforts\r\n and ended its …",
            "url": "https://www.engadget.com/apple-will-keep-using-qualcomms-5g-tech-in-iphones-until-at-least-2026-143702711.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/kEKU8bTz6fgwihVwmHEecQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NTc-/https://s.yimg.com/os/creatr-uploaded-images/2022-09/7e16cd50-33ee-11ed-bd7f-45b4dd0372d0",
            "publishedAt": "2023-09-11T14:37:02Z",
            "content": "On the eve of Apple's big fall iPhone event\r\n, Qualcomm announced it will continue to provide the company with 5G smartphone modems through 2026. Its an indication that while Apple has successfully s… [+1153 chars]"
        },
    ]
}
// URLS
//search queries
const today = new Date(Date.now() - 604800000).toISOString(),
    newsapi = `https://newsapi.org/v2/everything?apiKey=5dd14bd3df04419096998429a02b86fc&from=${today}`,
    tech = `${newsapi}&q=tech`,
    politics = `${newsapi}&q=politics`,
    fashion = `${newsapi}&q=fashion`,
    health = `${newsapi}&q=health`,
    sports = `${newsapi}&q=sport`,
    food = `${newsapi}&q=food`,
    trade = `${newsapi}&q=business`,
    any = `https://newsapi.org/v2/top-headlines?apiKey=5dd14bd3df04419096998429a02b86fc&category=general&country=ng`;


/****************
*DOM OBJECTS
*****************/
const homePage = document.querySelector("#home_page");
const otherPage = document.querySelector("#other_page");

// select all page links in dom
let pageLinks = document.querySelectorAll(".page_link");
// add event
pageLinks.forEach(link => link.addEventListener("click", changePage));
/******************
 FUNCTIONS 
******************/
function changePage(event) {
    event.preventDefault();
    event.stopPropagation();

    let target = event.target;
    page = target.getAttribute("data-page");

    console.log(page)
    if (DOMPage.currentPage == page) { return }
    // place current page class on target

    DOMPage.currentPage = page
    pageLinks.forEach(link => {
        if (link == target) {
            link.classList.add("current_page");
        } else {
            link.classList.remove("current_page")
        }
    })
    // generate new page 
    if (page == 'home') {
        homePage.removeAttribute("hidden")
        otherPage.setAttribute("hidden", "true")
    } else {
        homePage.setAttribute("hidden", "true")
        otherPage.removeAttribute("hidden");


        let display = otherPage.querySelector('.news_page .row')
        
        DOMPage.DOMpages.forEach(_page => {
            if (_page.type == page) {
                display.innerHTML="";
                display.append(_page.page)
    console.log(_page)
            }
        })
    }


}

// wait function for delaying stack
function wait(condition, time) {
    // if condition is initially true wait break the moment condition is false or time is exceeded
    let start = Date.now()
    do {
    } while ((Date.now() - start < time) && condition)
}


/*************** 
CLASSES
***************/
// Class for News Pages
class NewsPage {
    constructor(type, url) {
        this._type = type;
        this._url = url;
        this._articles = [];
        this.newsIndex = 0;

        NewsPage.addToPages(this)
        this.fetchArticles()
    }

    fetchArticles() {
        // modify url 
        // count should b used to restrict the results per article 
        let url = `${this._url}&pageSize=10&page=${Math.floor(this.newsIndex/10 + 1)}`;
        // make fetch request
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (const article of data.articles) {
                    this._articles.push(this.newsArticle(article))
                    this.newsIndex++
                }
            }).catch(
                error => {
                    console.log(`error at NewsPage type ${this.type} at index ${this.newsIndex}`)
                    this._articles[this.newsIndex] = null;
                }
            )

       
    }
    get type() {
        return this._type
    }
    get articles() {
        return this._articles
    }
    get url() {
        return this._url
    }
    static addToPages(page) {
        NewsPage.newsPages.push(page)
    }
    static newsPages = []
}


NewsPage.prototype.newsArticle = function (art) {
    let article = {};
    // create relevant properties
    article.image = art["urlToImage"];
    article.title = art["title"];
    article.desc = art["description"];
    article.link = art["url"];
    article.author = art["author"];
    article.date = art["publishedAt"];

    return article;
}

// declare all news Page objects
const homeNews = new NewsPage("home", any),
    techNews = new NewsPage("tech", tech), 
    politicsNews = new NewsPage("politics", politics),
    sportNews = new NewsPage("sports", sports),
    healthhNews = new NewsPage("health", health), 
    foodNews = new NewsPage("food", food),
    fashionNews = new NewsPage("fashion", fashion);

// class for  news pages as DOM pages
class DOMPage {
    constructor(type) {
        this._type = type;
        this._page = new DocumentFragment()

        this.articleIndex = 0;
        this.addArticlesToPage()

        DOMPage.DOMpages.push(this)

    }
    get page(){
        if(!this._page.childNodes.length){
            this.addArticlesToPage();
        }
        wait(!this._page.childNodes.length,2000);

        return this._page;
    }
    get articles(){
        return this._articles
    }
    get type() {
        return this._type;
    }
    get articles() {
        let thisObj = this;
        let type = this.type;
        let thisNews = NewsPage.newsPages.find(news => news.type == type);
        if(!thisNews.articles[this.articleIndex+1]){
            thisNews.fetchArticles();
        }
        return thisNews.articles.map(article => this.createArticle(article),thisObj)
    }
    addArticlesToPage() {
        let endInd = this.articleIndex + 9;
        let articles = this.articles;


        for (; this.articleIndex <= endInd; this.articleIndex++) {
            if (!articles[this.articleIndex]) { break }
            this._page.append(articles[this.articleIndex]);
            console.log(`added page number ${this.articleIndex} to type ${this.type}`)
        }
    }
    static addToPages(page) {
        DOMPage.DOMpages.push(page)
    };

    static DOMpages = [];
    static currentPage = "home";
}

DOMPage.prototype.createArticle = function (article) {
    let fragment = new DocumentFragment();
    let div = document.createElement("div")
    div.className = "col_12";
    div.innerHTML = `<article class="news_article row flex_between g_2">
              <div class="news_img col_4 col_md_3">image</div>
              <div class="news_texts col_8 col_md_9">
                <div class="row g_2 align_between">
                  <a href="" class="news_link col_12 col_md_6"><h2 class="news_heading">heading</h2></a>
                  <p class="news_preview col_12 col_md_6">preview</p>
                  <span class="news_author col_12 col_md_6">author</span>
                </div>
              </div>
            </article>`
    let link = div.querySelector(".news_link"),
        image = div.querySelector(".news_img"),
        title = div.querySelector(".news_heading"),
        desc = div.querySelector(".news_preview"),
        author = div.querySelector(".news_author");
    if(article){
  
        link.href = article.link
    
        image.style.background = `url(${article.image})`+ image.style.background;
  
      title.innerText = article.title  
    
        desc.innerText = article.desc
    
        author.innerText = article.author

    }
    

    fragment.append(div)
    return fragment;
}
// declare all Dom Pages
const home_page = new DOMPage("home"),
    tech_page = new DOMPage("tech"), politics_page = new DOMPage("politics"),
    health_page = new DOMPage("health"), food_age = new DOMPage("food"),
    fashion_page = new DOMPage("fashion"), sport_page = new DOMPage("sports");

// fetch(tech)
//     .then(res => res.json())
//     .then(data => {

//         console.log(data)
//     })
//     .catch(err => {
//         console.error(err);
//     })

