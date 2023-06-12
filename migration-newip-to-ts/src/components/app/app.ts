import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ResponseArticles } from '../../types/models';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesElement = document.querySelector('.sources');
        if (sourcesElement !== null) {
            sourcesElement.addEventListener('click', (e) =>
                this.controller.getNews(e, (data) => this.view.drawNews(data as ResponseArticles))
            );
            this.controller.getSources((data) => this.view.drawSources(data as ResponseArticles));
        }
    }
}

export default App;
