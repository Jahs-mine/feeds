// //DOM nodes

// const pageLinks = document.querySelectorAll(".nav .list_link"),
//     pages = document.querySelectorAll(".page");
// // previous and next buttons
// const prev = document.querySelector(".prev"),
//     next = document.querySelector(".next"),
//     more = document.querySelector(".more");


// //add event listeners
// for (const link of pageLinks) {
//     link.addEventListener("click", changePage)
// }
// prev.addEventListener("click", changeFeed);
// next.addEventListener("click", changeFeed);
// more.addEventListener("click", moreFeed);



// const NEWS_OBJECTS = [];

// let current = "home";

// console.log(getAndSetNews(politics))

// // news objects
// class NewsSection {
//     constructor(ownQry, childQry, type = "home", url) {
//         this.node = document.querySelector(ownQry)
//         this.index = -1;
//         this.pageCount = 1;
//         this.articles = [];
//         this.url = url
//         this.type = type;
//         this.childQry = childQry;
//         let thisObj = this;
//         NEWS_OBJECTS.push(thisObj);
//         this.getArticles(this.url, this.type);
//     }
//     async getArticles(url, type) {
//         getAndSetNews(`${url}&page=${this.pageCount}`, this.type)
//     }

//     get children() {
//         return this.node.querySelectorAll(this.childQry)
//     }
//     setNewsNode(node) {
//         let headline, text, author, img, link;
//         console.log(this)
//         if (headline = node.querySelector(".headline")) {
//             headline.innerText = this.articles[this.index]["title"]
//         }
//         if (text = node.querySelector(".news_text")) {
//             text.innerText = this.articles[this.index]["description"]
//         }
//         if (img = node.querySelector(".news_photo")) {
//             // img.src = article[this.index][]
//         }
//         if (author = node.querySelector(".author")) {
//             author.innerText = this.articles[this.index]["author"]
//         }
//         if (link = node.querySelector("a")) {
//             link.href = this.articles[this.index]["url"]
//         }
//     }
// }

// class OtherNewsSection extends NewsSection {
//     constructor(ownQry, childQry, type, url) {
//         super(ownQry, childQry, type, url)
//     }
//     updateFeeds() {

//         console.log("updating feed of other news section");
//         let count, add;
//         if (this.index > -1 && this.children.length == 0) {
//             count = this.index;
//             this.index = -1;
//         } else {
//             count = 12;
//         }
//         let time;
//         add = 1;
//         console.log(count, add)
//         setTimeout(() => {
//             for (let i = 0; i < count; i++) {
//                 if (this.index <= 0) {
//                     time = 16000
//                 } else {
//                     time = 2000
//                 }
//                 //Create a news article
//                 let article = document.createElement("article"),
//                     row = document.createElement("div"),
//                     img = document.createElement("img"),
//                     news_text_col = document.createElement("div"),
//                     link = document.createElement("a"),
//                     h2 = document.createElement("h2"),
//                     p = document.createElement("p"),
//                     author = document.createElement("span");

//                 article.classList += "news_box col-lg-4";
//                 row.classList += "row";
//                 img.classList += "col-3 col-lg-7 news_photo";
//                 news_text_col.classList += "news_texts_col col-9 col-lg-11";
//                 h2.classList += "headline";
//                 p.classList += "news_text";
//                 author.classList += "author";

//                 link.appendChild(h2);
//                 news_text_col.appendChild(link);
//                 news_text_col.appendChild(p);
//                 news_text_col.appendChild(author);
//                 row.appendChild(img);
//                 row.appendChild(news_text_col);
//                 article.appendChild(row);

//                 this.index += add


//                 this.setNewsNode(article);
//                 this.node.appendChild(article)
//             }

//         }, time);
//     }
// }

// const home_feed_row = new NewsSection("#home_page .feed_row", ".feed_row .news_box", "home", any);
// home_feed_row.updateFeeds = function (dir = "next") {
//     //if  disable previous button 
//     let count = (dir == "next") ? 1 : -1;
//     //if to disable next button
//     let time
//     //make feeds fade out
//     this.node.classList.toggle("hide")
//     // set feeds
//     if (this.index <= 0) {
//         time = 16000
//     } else {
//         time = 2000
//     }

//     for (const node of this.children) {
//         this.index += count;

//         setTimeout(() => { this.setNewsNode(node); }, time)
//     }

//     if (this.index < this.children.length) {
//         prev.disabled = true
//     } else {
//         prev.disabled = false
//     }
//     if (this.index >= 100) {
//         next.disabled = true
//     } else {
//         next.disabled = false
//     }
//     //fade-in
//     setTimeout(() => { this.node.classList.toggle("hide") }, time)
// }
// home_feed_row.updateFeeds()

// //define other news section objects
// let tech_feed_row = new OtherNewsSection("#other_page .feed_row", ".feed_row .news_box", "tech", tech);
// politics_feed_row = new OtherNewsSection("#other_page .feed_row", ".feed_row .news_box", "politics", politics),
//     fashion_feed_row = new OtherNewsSection("#other_page .feed_row", ".feed_row .news_box", "fashion", fashion),
//     health_feed_row = new OtherNewsSection("#other_page .feed_row", ".feed_row .news_box", "health", health),
//     sport_feed_row = new OtherNewsSection("#other_page .feed_row", ".feed_row .news_box", "sports", sports),
//     trade_feed_row = new OtherNewsSection("#other_page .feed_row", ".feed_row .news_box", "trade", trade);






// function getAndSetNews(url, type) {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             NEWS_OBJECTS.forEach((obj) => {
//                 console.log(type, data)
//                 if (obj.type == type) {
//                     obj.articles.push(...data.articles)
//                 }
//             })
//         })
//         .catch(err => {
//             console.error(err);
//         })
// }

// //EVENT LISTENERS
// //change pages

// function changePage(event) {
//     current = event.target.innerText.toLowerCase();
//     // change page
//     event.preventDefault();
//     event.stopPropagation();
//     let type = event.target.innerText.toLowerCase()

//     if (type == "home") {
//         pages.forEach(page => {
//             if (page.id == "home_page") {
//                 page.hidden = false
//             } else {
//                 page.hidden = true
//             }
//         })
//     } else if (type == "") { }
//     else {
//         pages.forEach(page => {
//             if (page.id == "other_page") {
//                 page.querySelector(".feed_row").innerHTML = ""
//                 NEWS_OBJECTS.forEach((obj) => {
//                     if (obj.type == type) {
//                         current = obj.type
//                         console.log(`paged changed to ${obj.type}`, obj.children.length)
//                         obj.updateFeeds()
//                     }
//                 })
//                 page.hidden = false;
//             } else {
//                 page.hidden = true
//             }
//         })
//     }
//     // generate feeds
// }

// // update home feeds
// function changeFeed(event) {
//     home_feed_row.updateFeeds(event.target.value.toLowerCase());
// }

// function moreFeed(event) {
//     NEWS_OBJECTS.forEach((obj) => {
//         if (obj.type == current) {
//             obj.updateFeeds()
//             console.log(`added feed to ${obj.type}`, obj.children.length)
//         }
//     })
// }



/**************************** 
 * Remake
 * 
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
                "id": "wired",
                "name": "Wired"
            },
            "author": "Paresh Dave",
            "title": "Is Google’s Search Engine Smart or Sneaky? A Trial Court Judge Will Decide",
            "description": "Google’s search dominance is going on trial in the biggest US antitrust case since a crackdown on Big Tech that started in 2019.",
            "url": "https://www.wired.com/story/is-googles-search-engine-smart-or-sneaky-a-trial-court-judge-will-decide/",
            "urlToImage": "https://media.wired.com/photos/64fbb262ad5feafc253f613c/191:100/w_1280,c_limit/Google-Search-Engine-Antitrust-Lawsuit-Business-1638063681.jpg",
            "publishedAt": "2023-09-10T11:00:00Z",
            "content": "A family members hurried Google search for a last-second visa to visit New Zealand recently caused a headacheand provided a timely reminder of why Google faces a landmark US antitrust trial next week… [+3093 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jennifer Pattison Tuohy",
            "title": "The coolest smart home gadgets I saw in Berlin",
            "description": "Nanoleaf x Umbra lamps, Yeelight skylights, Aqara smart locks, and more: the best smart home tech I saw at IFA 2023.",
            "url": "https://www.theverge.com/23863589/favorite-smart-home-gadgets-ifa-2023-tech-show",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/wqTIa2Sla8-kh_c4AbWSwXnh968=/115x149:1983x1742/1200x628/filters:focal(955x663:956x664)/cdn.vox-cdn.com/uploads/chorus_asset/file/24906505/image__4_.png",
            "publishedAt": "2023-09-08T18:00:00Z",
            "content": "This Umbra x Nanoleaf collab includes a portable smart light and a color-changing desk caddy lamp. Both are Matter-compatible and use Thread. | Image: Umbra\r\n\n \n\n The dust has settled on IFA 2023, Eu… [+6492 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Andrew Tarantola",
            "title": "Hitting the Books: Meet Richard Akrwright, the world's first tech titan",
            "description": "You didn't actually believe all those founder's myths about tech billionaires like Bezos, Jobs and Musk pulling themselves up by their bootstraps from some suburban American garage, did you? In reality, our corporate kings have been running the same playbook …",
            "url": "https://www.engadget.com/hitting-the-books-meet-richard-akrwright-the-worlds-first-tech-titan-205045895.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/WwPL1taNSYGCZAraCSsJGQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MDk-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/3dcdd510-4c23-11ee-a75b-8899001c3252",
            "publishedAt": "2023-09-11T20:50:45Z",
            "content": "You didn't actually believe all those founder's myths about tech billionaires like Bezos, Jobs and Musk pulling themselves up by their bootstraps from some suburban American garage, did you? In reali… [+14055 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Andrew Tarantola",
            "title": "Hitting the Books: Meet Richard Akrwright, the world's first tech titan",
            "description": "You didn't actually believe all those founder's myths about tech billionaires like Bezos, Jobs and Musk pulling themselves up by their bootstraps from some suburban American garage, did you? In reality, our corporate kings have been running the same playbook …",
            "url": "https://www.engadget.com/hitting-the-books-blood-in-the-machine-brian-merchant-hachette-book-group-143056410.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/WwPL1taNSYGCZAraCSsJGQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MDk-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/3dcdd510-4c23-11ee-a75b-8899001c3252",
            "publishedAt": "2023-09-10T14:30:56Z",
            "content": "You didn't actually believe all those founder's myths about tech billionaires like Bezos, Jobs and Musk pulling themselves up by their bootstraps from some suburban American garage, did you? In reali… [+14031 chars]"
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
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Amy Skorheim",
            "title": "Disney+ Basic is just $6 for three months, plus the rest of this week's best tech deals",
            "description": "Labor Day sales have ended, Amazon's next Prime-related sale isn't until October and Apple won't announce new products (and likely discount older ones) until next week. In this in-between time, there are still a few worthy deals out there for those looking to…",
            "url": "https://www.engadget.com/disney-basic-is-just-6-for-three-months-plus-the-rest-of-this-weeks-best-tech-deals-172007461.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/6i8mZN753._xR7GHby1fAw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MjA-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/e50a5d40-4e61-11ee-a965-ed754bf36a67",
            "publishedAt": "2023-09-08T17:20:07Z",
            "content": "Labor Day sales have ended, Amazon's next Prime-related sale isn't until October and Apple won't announce new products (and likely discount older ones) until next week. In this in-between time, there… [+10715 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "'Overwhelming consensus' on AI regulation - Musk",
            "description": "Tech heavyweights gathered in Washington DC to discuss the regulation of artificial intelligence.",
            "url": "https://www.bbc.co.uk/news/technology-66804996",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/53BE/production/_131083412_gettyimages-1663020840.jpg",
            "publishedAt": "2023-09-13T23:57:03Z",
            "content": "Media caption, Watch: 'Overwhelming consensus' to regulate AI, says Elon Musk\r\nTesla CEO Elon Musk says there was \"overwhelming consensus\" for regulation on artificial intelligence after tech heavywe… [+2487 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Lawrence Bonk",
            "title": "Ring announces a wearable for your lost pets that's just a QR code",
            "description": "Amazon’s Ring is mostly known for doorbell cams and consumer-grade surveillance tech,\r\n but the company’s moving past humans and onto our beloved furry friends. It just announced the Ring Pet Tag to help find lost pets, as the tag attaches to a collar and all…",
            "url": "https://www.engadget.com/ring-announces-a-wearable-for-your-lost-pets-thats-just-a-qr-code-133036863.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/47oUcN7CIzchNpmj691jaA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NDk-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/ed124460-518d-11ee-9fbe-c5a6fb0a82e0",
            "publishedAt": "2023-09-13T13:30:36Z",
            "content": "Amazons Ring is mostly known for doorbell cams and consumer-grade surveillance tech,\r\n but the companys moving past humans and onto our beloved furry friends. It just announced the Ring Pet Tag to he… [+1398 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Lavender Au",
            "title": "The AI Hype Train Has Stalled in China",
            "description": "Chinese artificial intelligence startups say uncertain regulation, chip shortages, and a slowing economy will make it tough to compete.",
            "url": "https://www.wired.com/story/ai-hype-train-stalled-in-china/",
            "urlToImage": "https://media.wired.com/photos/6500fddd7e0b4ceb5c8f9e3e/191:100/w_1280,c_limit/AI-Hype-Train-Stalled-China-Business-Still-1477225246.jpg",
            "publishedAt": "2023-09-13T06:00:00Z",
            "content": "That, along with the cost of computing power, makes it difficult for startups like Xies to build the kind of huge, sweeping models that their equivalents in the US are trying to create, so most are f… [+3099 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Mack DeGeurin",
            "title": "Threads Isn't Showing Search Results for 'Covid,' 'Vaccines,' or Other Sensitive Topics",
            "description": "Meta is intentionally limiting search results on Threads for keywords related to the covid-19 virus and a variety of other potentially controversial topics. In a statement sent to Gizmodo, a spokesperson for the tech giant confirmed the “temporary” restrictio…",
            "url": "https://gizmodo.com/instagram-threads-no-covid-vaccines-search-results-1850829880",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/594a8c145ce425f5bc6277467c69ec50.jpg",
            "publishedAt": "2023-09-12T16:57:08Z",
            "content": "Meta is intentionally limiting search results on Threads for keywords related to the covid-19 virus and a variety of other potentially controversial topics. In a statement sent to Gizmodo, a spokespe… [+4784 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Karissa Bell",
            "title": "X is suing California over social media content moderation law",
            "description": "X, the social media company previously known as Twitter, is suing\r\n the state of California over a law that requires companies to disclose details about their content moderation practices. The law, known as AB 587, requires social media companies to publish i…",
            "url": "https://www.engadget.com/x-is-suing-california-over-social-media-content-moderation-law-233034890.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/MPnhWHJ5CNEcbCRlix368w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-08/bc414ee0-4e9e-11ee-abff-b62e48929705",
            "publishedAt": "2023-09-08T23:30:34Z",
            "content": "X, the social media company previously known as Twitter, is suing\r\n the state of California over a law that requires companies to disclose details about their content moderation practices. The law, k… [+1277 chars]"
        },

        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Sarah Fielding",
            "title": "Get Hulu + Live TV for $50 a month before the upcoming price hike kicks in",
            "description": "Fall is coming (even if recent heatwaves make it seem otherwise), and there are plenty of opportunities to get cozy on your couch and watch TV. Hulu is encouraging early hibernation with a major Hulu + Live TV package deal. The streamer is offering Live TV wi…",
            "url": "https://www.engadget.com/get-hulu--live-tv-for-50-a-month-before-the-upcoming-price-hike-kicks-in-131516358.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/zWXC45H27EANdGP22y2fUA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-11/fce682f0-5bef-11ed-bf7b-c0b58dc7884e",
            "publishedAt": "2023-09-11T13:15:16Z",
            "content": "Fall is coming (even if recent heatwaves make it seem otherwise), and there are plenty of opportunities to get cozy on your couch and watch TV. Hulu is encouraging early hibernation with a major Hulu… [+1262 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jon Porter",
            "title": "Drop’s own-brand keyboards are getting a customizability upgrade",
            "description": "Drop is overhauling its in-house mechanical keyboards with the new Alt V2, Ctrl V2, and Shift V2. They’re now VIA-compatible and work with a wider range of switches.",
            "url": "https://www.theverge.com/2023/9/12/23860998/drop-ctrl-shift-alt-v2-mechanical-keyboards-price-release-date-features",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/CntMfwKZ9G54Ri3jX06aBylpdlA=/0x0:3548x2365/1200x628/filters:focal(1774x1183:1775x1184)/cdn.vox-cdn.com/uploads/chorus_asset/file/24900024/CTRL_High_Profile_V2.jpg",
            "publishedAt": "2023-09-12T15:00:00Z",
            "content": "Drops own-brand keyboards are getting a customizability upgrade\r\nDrops own-brand keyboards are getting a customizability upgrade\r\n / New V2 versions of the Ctrl, Alt, and Shift arrive with better aft… [+3214 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "VentureBeat"
            },
            "author": "Sharon Goldman",
            "title": "Senate begins private AI meetings, says tech to ‘impact nearly every area of life’",
            "description": "After months of buildup, Senate Majority Leader Chuck Schumer (D-NY) opened the Senate’s inaugural bipartisan AI Insight Forum this morning.",
            "url": "https://venturebeat.com/ai/senate-begins-private-ai-meetings-says-tech-to-impact-nearly-every-area-of-life/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2023/09/Untitled-design-2023-09-13T094302.056.png?w=1200&strip=all",
            "publishedAt": "2023-09-13T14:10:00Z",
            "content": "Head over to our on-demand library to view sessions from VB Transform 2023. Register Here\r\nAfter months of buildup, Senate Majority Leader Chuck Schumer (D-NY) finally opened the U.S. Senates inaugur… [+1328 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Beatrice Nolan,Hasan Chowdhury",
            "title": "Saudi Arabia is spending billions on sports, tech and everything in between for a post-oil world",
            "description": "The Gulf kingdom is spending billions on sport, media, and technology as part of a drive to transform its economy for the 21st century and move beyond oil.",
            "url": "https://www.businessinsider.com/saudi-arabia-population-gdp-gulf-kingdom-taking-sports-tech-2023-9",
            "urlToImage": "https://i.insider.com/60142115a7c0c4001991dd08?width=1200&format=jpeg",
            "publishedAt": "2023-09-10T09:00:41Z",
            "content": "Saudi Crown Prince Mohammed Bin Salman at the 2021 launch of \"The Line.\"Bandar Algaloud/Courtesy of Saudi Royal Court/Handout via REUTERS\r\n<ul><li>Saudi Arabia is in the process of reinventing itself… [+6180 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hackaday"
            },
            "author": "Robin Kearey",
            "title": "Homebrew Probe Tip Etcher Makes Amazingly Sharp Needles",
            "description": "There’s a simple reason why high-tech gadgets like PCs, TVs and smartphones are so cheap: they’re mass-produced. By spreading out huge engineering costs over equally huge production volumes, the cost …read more",
            "url": "https://hackaday.com/2023/09/14/homebrew-probe-tip-etcher-makes-amazingly-sharp-needles/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2023/09/STM-Probe-Tip-Etcher.jpg",
            "publishedAt": "2023-09-14T11:00:40Z",
            "content": "There’s a simple reason why high-tech gadgets like PCs, TVs and smartphones are so cheap: they’re mass-produced. By spreading out huge engineering costs over equally huge production volumes, the cost… [+2325 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Sean Hollister",
            "title": "Donald Mustard, head of Fortnite’s story, is leaving Epic and retiring",
            "description": "Donald Mustard, chief creative officer at Epic Games, says he’s retiring later this month. He was behind Shadow Complex, Infinity Blade, Undertow, and of course, Fortnite’s story.",
            "url": "https://www.theverge.com/23864706/donald-mustard-leave-epic-games-retire-fortnite",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/IyI4S0I4Pmlr6wqQy7mQa77AXHU=/209x167:2171x1579/1200x628/filters:focal(1224x536:1225x537)/cdn.vox-cdn.com/uploads/chorus_asset/file/24906582/1078452156.jpg",
            "publishedAt": "2023-09-08T18:41:37Z",
            "content": "Donald Mustard at the 2018 Game Awards. | Photo by Alberto E. Rodriguez / Getty Images\r\n\n \n\n Donald Mustard ran a successful studio that showed what the Xbox and iPhone were capable of. Then, he beca… [+3020 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Supply Chain by Amazon sounds like Amazon Prime for manufacturers",
            "description": "Amazon is introducing a new program that lets sellers ship products directly from factories. Called Supply Chain by Amazon, the service is meant to consolidate the shipping and delivery process.",
            "url": "https://www.theverge.com/2023/9/12/23869795/supply-chain-by-amazon-prime-for-manufacturers",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/gGXG4F_gdAUOH7ys60vQz873lYs=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935559/acastro_STK103__02.jpg",
            "publishedAt": "2023-09-12T14:56:51Z",
            "content": "Supply Chain by Amazon sounds like Amazon Prime for manufacturers\r\nSupply Chain by Amazon sounds like Amazon Prime for manufacturers\r\n / Amazon will now pick up and deliver products directly from fac… [+2869 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Thomas Germain",
            "title": "AI Study Says Sometimes It’s Good When Executives Act Like Robots",
            "description": "If you’ve ever had the privilege (or curse) of listening in on a corporate earnings call, you probably noticed that the executives behave a little mechanically. According to a new study that compared ChatGPT and other AIs to the human robots working in the C-…",
            "url": "https://gizmodo.com/ai-study-says-sometimes-it-s-good-when-executives-act-l-1850819705",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/9aba33f22f66c2b7c5c26ae7fa8399a4.jpg",
            "publishedAt": "2023-09-08T20:20:00Z",
            "content": "If youve ever had the privilege (or curse) of listening in on a corporate earnings call, you probably noticed that the executives behave a little mechanically. According to a new study that compared … [+1971 chars]"
        },
        {
            "source": {
                "id": "the-next-web",
                "name": "The Next Web"
            },
            "author": "Thomas Macaulay",
            "title": "EU president: Europe is the ‘global pioneer’ of citizen’s digital rights",
            "description": "Europeans have become “pioneers in online rights” and now want to lead a “global framework for AI,” the EU’s top official said today. Ursula von der Leyen, the European Commission’s president, revealed the bloc’s digital plans during her State of the Union ad…",
            "url": "https://thenextweb.com/news/von-der-leyen-eu-digital-rights-ai-act",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F09%2FUntitled-design-1-2.jpg&signature=6fcef80d4f74a324c5d28c7838e2a87f",
            "publishedAt": "2023-09-13T14:12:33Z",
            "content": "Europeans have become pioneers in online rights and now want to lead a global framework for AI, the EUs top official said today.\r\nUrsula von der Leyen, the European Commissions president, revealed th… [+3621 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Aria Yang",
            "title": "I moved to Seattle for a high-paying tech job. It turned out to be the loneliest time of my life.",
            "description": "After accepting a job at Amazon, Alexander Nguyen moved to Seattle where he experienced a period of intense loneliness.",
            "url": "https://www.businessinsider.com/incredibly-lonely-high-paying-tech-job-seattle-2023-9",
            "urlToImage": "https://i.insider.com/6500c8de1afe8f0019e912b4?width=1200&format=jpeg",
            "publishedAt": "2023-09-13T09:10:01Z",
            "content": "Alexander Nguyen (not pictured) moved to Seattle after he got a job offer from Amazon during the COVID-19 pandemic. Despite the $150,000 salary, he wishes he had stayed in New York.Arantza Pena Popo/… [+8149 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Joseph Wilkins",
            "title": "There's no bubble in AI stocks – we are in the early stages of a tech cycle that should see further outperformance, Goldman Sachs says",
            "description": "\"We believe we are still in the relatively early stages of a new technology cycle that is likely to lead to further outperformance,\" according to a Goldman Sachs strategist.",
            "url": "https://markets.businessinsider.com/news/stocks/ai-stocks-arent-bubble-with-plenty-more-to-come-goldman-2023-9",
            "urlToImage": "https://i.insider.com/650097e8d8afeb00191db765?width=1200&format=jpeg",
            "publishedAt": "2023-09-13T10:03:28Z",
            "content": "<ul>\n<li>The breakneck rally in AI stocks has prompted unflattering comparisons with the dot-com bubble of the late 1990s.</li>\n<li>But Goldman Sachs argues there's no bubble in AI stocks, and sugges… [+2164 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Lakshmi Varanasi",
            "title": "Anduril founder Palmer Luckey says the ChatGPT buzz is making politicians more interested in AI-powered weapons",
            "description": "Palmer Luckey told Breaking Defense that the AI hype cycle has helped those on Capitol Hill and the Pentagon have a \"come-to-Jesus moment\" with AI.",
            "url": "https://www.businessinsider.com/anduril-founder-palmer-luckey-chatgpt-buzz-good-business-weapons-ai-2023-9",
            "urlToImage": "https://i.insider.com/64fb856f3d39230019774d64?width=1200&format=jpeg",
            "publishedAt": "2023-09-09T15:41:20Z",
            "content": "Anduril CEO Palmer Luckey.Horacio Villalobos/Getty Images\r\n<ul>\n<li>Palmer Luckey told Breaking Defense the ChatGPT hype is making politicians interested in AI weapons.</li>\n<li>Luckey said people on… [+3796 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Antonio Villas-Boas",
            "title": "Apple just revealed the iPhone 15 Pro models — here are the key upgrades and how to preorder",
            "description": "Apple launched the iPhone 15 Pro and iPhone 15 Pro Max with a lighter titanium frame, a new processor, and a new 5x periscope zoom lens.",
            "url": "https://www.businessinsider.com/guides/tech/iphone-15-pro-preorder-price-release-date-new-features-2023-9",
            "urlToImage": "https://i.insider.com/6500ad4d7cfadd001913d6ba?width=1200&format=jpeg",
            "publishedAt": "2023-09-12T18:38:31Z",
            "content": "Apple launched the iPhone 15 Pro and iPhone 15 Pro Max during its \"Wonderlust\" event on Tuesday, September 12. The iPhone 15 Pro starts at $999, and the iPhone 15 Pro Max starts at $1,199. \r\nThe iPho… [+2811 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Boing Boing"
            },
            "author": "Boing Boing's Shop",
            "title": "Find everyday goods, tech, more at a great value with a Sam's Club membership, now 50% off",
            "description": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\n\n\n\nTL;DR: This deal gets you half off the price of a Sam's Club membership, giving you access to great deals on everythi…",
            "url": "https://boingboing.net/2023/09/13/find-everyday-goods-tech-more-at-a-great-value-with-a-sams-club-membership-now-50-off.html",
            "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/09/Sams-Club-1.png?fit=1200%2C800&ssl=1",
            "publishedAt": "2023-09-14T00:00:00Z",
            "content": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\r\nTL;DR: This deal gets you half off the price of a Sam's Clu… [+2533 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Jennifer Streaks",
            "title": "5 tips to save money on holiday travel while there's still time",
            "description": "Holiday travel will still be more expensive than it was pre-pandemic. Start planning now to find travel deals and save money.",
            "url": "https://www.businessinsider.com/personal-finance/save-money-holiday-travel-tips-2023-9",
            "urlToImage": "https://i.insider.com/6500f5031afe8f0019e92fe5?width=1200&format=jpeg",
            "publishedAt": "2023-09-14T12:35:01Z",
            "content": "Our experts answer readers' investing questions and write unbiased product reviews (here's how we assess investing products). Paid non-client promotion: In some cases, we receive a commission from ou… [+4139 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Tim Levin",
            "title": "Mercedes-Benz's $100,000 electric SUV is an awesome Tesla rival — but its blob-like looks aren't for everyone",
            "description": "The Mercedes EQE SUV is an awesome alternative to Tesla's Model X with controversial style.",
            "url": "https://www.businessinsider.com/mercedes-benz-eqe-electric-suv-review-tesla-model-x-2023-9",
            "urlToImage": "https://i.insider.com/65013e32992da60019eb2f8a?width=1200&format=jpeg",
            "publishedAt": "2023-09-13T15:00:30Z",
            "content": "The 2023 Mercedes-Benz EQE SUV brings a luxurious interior and awe-inspiring driving tech. Tim Levin/Insider\r\n<ul><li>I drove Mercedes-Benz's new electric SUV: the EQE SUV. </li><li>It costs $77,900 … [+5110 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Dan DeFrancesco",
            "title": "Insider Today: Apple's new iPhone is here",
            "description": "Apple showed off the newest versions of its iPhone and Apple Watch while CEO Tim Cook showed off his acting chops.",
            "url": "https://www.businessinsider.com/news-today-september-13-apple-new-iphone-release-launch-2023-9",
            "urlToImage": "https://i.insider.com/6500f7a1992da60019eb1d3f?width=1200&format=jpeg",
            "publishedAt": "2023-09-13T12:54:11Z",
            "content": "Apple\r\n<ul>\n<li>This post originally appeared in the Insider Today newsletter.</li>\n<li>You can sign up for Insider's daily newsletter here.</li>\n</ul>Hey there! To the Milwaukee bar-goers banking on… [+7821 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Kai Xiang Teo",
            "title": "Elon Musk justified poaching a Google scientist to a 'betrayed' Larry Page by telling him he shouldn't have been 'so cavalier about AI safety'",
            "description": "\"Larry felt betrayed and was really mad at me for personally recruiting Ilya, and he refused to hang out with me anymore,\" Musk told his biographer.",
            "url": "https://www.businessinsider.com/elon-musk-justified-poaching-google-scientist-betrayed-larry-page-openai-2023-9",
            "urlToImage": "https://i.insider.com/64ffc6c5112d1600192d5f1d?width=1200&format=jpeg",
            "publishedAt": "2023-09-12T05:44:33Z",
            "content": "Elon Musk justified poaching a Google scientist to a 'betrayed' Larry Page by telling him he shouldn't have been 'so cavalier about AI safety'Chesnot and Kimberly White via Getty Images\r\n<ul>\n<li>A n… [+3144 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Grace Dean",
            "title": "After Elon Musk spoke to Neuralink director Shivon Zilis about his population decline fears, she decided to have children. He suggested being her sperm donor.",
            "description": "Zilis said that choosing to have Musk as a sperm donor was an \"easy decision\" because she admires him more than anyone else on earth.",
            "url": "https://www.businessinsider.com/elon-musk-shivon-zilis-children-twins-ivf-population-sperm-donor-2023-9",
            "urlToImage": "https://i.insider.com/650049684717fd0019fc951a?width=1200&format=jpeg",
            "publishedAt": "2023-09-12T13:44:26Z",
            "content": "nullChesnot/Getty Images\r\n<ul><li>Elon Musk and Shivon Zilis decided to have children together after he spoke to her about population decline.</li><li>The tech mogul and Zilis, currently a Neuralink … [+3391 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "patrick.farmer@futurenet.com (Patrick Farmer)",
            "title": "Discover Samsung 2023: Early access to all the best phone deals, discounted smartwatches, and more",
            "description": "We just got early access to the Discover Samsung sale event, and the deals are even better than expected.",
            "url": "https://www.androidcentral.com/phones/discover-samsung-sale-2023-the-best-deals",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/NXtDAFJCQbFCKepDpKjpDU-1200-80.jpg",
            "publishedAt": "2023-09-08T13:49:00Z",
            "content": "The massive Discover Samsung sale event doesn't officially kick off until Monday, but we just got early access to many of the best deals so you don't need to wait. The catch is that you'll need to us… [+1653 chars]"
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
pageLinks.forEach(link => link.addEventListener("click", pageMaker));
/******************
 FUNCTIONS 
******************/
function pageMaker(event) {
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
                display.innerHTML= _page.page}
        })
    }


}

// wait function for delaying stack
function wait(time) {
    let start = Date.now()
    do {
    } while (Date.now() - start < time)
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
        this.dom;


        NewsPage.addToPages(this)
    }

    async fetchArticles(count = 10) {
        // modify url 
        url = this.url


        // make fetch request
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (const article of data.articles) {
                    this.articles.push(this.newsArticle(article))
                }
            })
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
const homeNews = new NewsPage("home",),
techNews = new NewsPage("tech",), politicsNews = new NewsPage("politics",),
healthhNews = new NewsPage("health",),foodNews = new NewsPage("food",),
fashionNews = new NewsPage("fashion");

// class for  news pages as DOM pages
class DOMPage {
    constructor({ articles, type }) {
        this._type = type;
        this._articles = articles.map(article => DOMPage.createArticle(article));
        this._page=[];
        this.articleIndex = 0;
        this.addArticles()

    }
    get page(){
        // return DOM fragment
        return
    }
    get type(){
        return this._type;
    }
    get articles(){
        return this._articles
    }
    addArticles(){
        let endIndex = this.articleIndex + 9
        for(let i = this.articleIndex;i< endIndex;i++){
            if(!this.articles[i]){console.log("error: this article does not exist")
        break}
            this._page.push(this.articles[i])
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

    if (link) {
        link.href = article.link
    }
    if (image) {
        image.src = article.image
    }
    if (title) {
        title.innerText = article.title
    }
    if (desc) {
        desc.innerText = article.desc
    }
    if (author) {
        author.innerText = article.author
    }

   fragment.append(div)
    return fragment;
}
// declare all Dom Pages
const home_page = new DOMPage(homeNews),
tech_page = new DOMPage(techNews), politics_page = new DOMPage(politicsNews),
health_page = new DOMPage(healthhNews),food_age = new DOMPage(foodNews),
fashion_page = new DOMPage(fashionNews);

// fetch(tech)
//     .then(res => res.json())
//     .then(data => {

//         console.log(data)
//     })
//     .catch(err => {
//         console.error(err);
//     })

