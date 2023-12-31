import News from './news/news';
import Sources from './sources/sources';
import { NewsAPI, ResponseArticles } from '../../types/models';

export class AppView {
    private news: News = new News();
    private sources: Sources = new Sources();
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ResponseArticles): void {
        const values: NewsAPI[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ResponseArticles): void {
        const values: NewsAPI[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
