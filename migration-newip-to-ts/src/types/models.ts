export interface NewsAPI {
    name: string;
    id: string;
    source: {
        id: string;
        name: string;
    };
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
    urlToImage: string;
    author: string;
    publishedAt: string;
    title: string;
}

export interface ResponseArticles {
    sources: NewsAPI[];
    articles: NewsAPI[];
}
