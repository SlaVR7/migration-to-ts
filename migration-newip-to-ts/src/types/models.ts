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

export interface Request {
    endpoint: EndpointType;
    options?: Options;
}

export enum EndpointType {
    Sources = 'sources',
    Everything = 'everything',
}

export interface Options {
    sources?: string;
    apiKey?: string;
}

export enum RequestType {
    Get = 'GET',
}

export type OptionsKeys = keyof Options;
