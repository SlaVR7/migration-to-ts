export interface NewsAPI {
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
