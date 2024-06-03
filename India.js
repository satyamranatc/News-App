let NewsContainer = document.getElementById("NewsContainer")
let Inpt = document.getElementById("Inpt");


function Display(AllNews){

    NewsContainer.innerHTML = "";
    for(let News of AllNews)
    {
        let Img = News.urlToImage;
        let Title = News.title;
        let Desc = News.description;
        let publishedAt = News.publishedAt;
        let Author = News.author;
        let LinkOfSourde = News.url;

       if(Img != null || Img == "")
        {
            NewsContainer.innerHTML += `
        
            <div class="NewsCard">
                <img src=${Img}>
    
                <div class="NewsContent">
                    <h2>${Title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.</p>
                    <p>${Author} . ${publishedAt}</p>
                    <a href = ${LinkOfSourde}>Read More</a>
                </div>
            </div>
    
            `
        }


    }

}


async function GetNewsData(NewsTitle = "India Today")
{
    let Data = await fetch(`https://newsapi.org/v2/everything?q=${NewsTitle}&apiKey=20fd56da8c1247de82856d2fd80b1211`);
    Data = await Data.json();

    Display(Data.articles)
    console.log(Data.articles)
}

GetNewsData();