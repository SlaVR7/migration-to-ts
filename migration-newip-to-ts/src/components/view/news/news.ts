import './news.css';
import { NewsAPI } from '../../../types/models';

class News {
    draw(data: NewsAPI[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const newsMetaAuthor = newsClone.querySelector('.news__meta-author');
            if (newsMetaAuthor) newsMetaAuthor.textContent = item.author || item.source.name;

            const newsCloneSelector = newsClone.querySelector('.news__meta-date');
            if (newsCloneSelector !== null) {
                newsCloneSelector.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const newsTitle = newsClone.querySelector('.news__description-title');
            if (newsTitle !== null) {
                newsTitle.textContent = item.title;
            }

            const newsName = newsClone.querySelector('.news__description-source');
            if (newsName !== null) {
                newsName.textContent = item.source.name;
            }

            const newsDescription = newsClone.querySelector('.news__description-content');
            if (newsDescription !== null) {
                newsDescription.textContent = item.description;
            }

            const newsUrl = newsClone.querySelector('.news__read-more a');
            if (newsUrl !== null) {
                newsUrl.setAttribute('href', item.url);
            }
            fragment.append(newsClone);
        });

        const newsSel = document.querySelector('.news');
        if (newsSel !== null) {
            newsSel.innerHTML = '';
            newsSel.appendChild(fragment);
        }
    }
}

export default News;
