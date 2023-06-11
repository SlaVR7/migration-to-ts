import AppLoader from './appLoader';
import { EndpointType, ResponseArticles } from '../../types/models';

class AppController extends AppLoader {
    getSources(callback: (data: ResponseArticles) => void): void {
        super.getResp(
            {
                endpoint: EndpointType.Sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: ResponseArticles) => void) {
        let target: HTMLElement | null = e.target as HTMLElement;
        const newsContainer = e.currentTarget;

        if (!(target instanceof HTMLElement) || !(newsContainer instanceof HTMLElement)) {
            return;
        }

        while (target !== newsContainer) {
            if (target === null) return;
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (sourceId === null) return;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: EndpointType.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
