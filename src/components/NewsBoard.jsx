import { useState, useEffect } from "react"
import NewsItem from "./Newstem";

function NewsBoard({category}){

    const [articles, setArticles] = useState([])

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3252758da30344b889a4df91a054b9aa`;

        fetch(url).then(response => response.json()).then(data => setArticles(data.articles)).catch((err)=> console.log(err))
    },[category])

    return(
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles.map((news, index)=>{
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
    )
}

export default NewsBoard
