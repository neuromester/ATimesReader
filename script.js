let url = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=zKc7Xx0LSHEAqkTyaun7o49uygubgjYY";

let headlines = document.getElementById("headlines");

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        data.results.map(article => {

            console.log(article.title);

            let a = document.createElement("a");
            a.setAttribute("href", article.url);
            a.innerHTML = article.title;

            let p = document.createElement("p");
            p.innerHTML = article.abstract;

            headlines.appendChild(a);
            headlines.appendChild(p);
        })

    })
