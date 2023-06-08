import './sources.css';
import { NewsAPI } from '../../../types';

class Sources {
    draw(data: NewsAPI[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone: Node | undefined = sourceItemTemp?.content.cloneNode(true);
            if (sourceClone instanceof DocumentFragment) {
                const sourceName = sourceClone.querySelector('.source__item-name');
                if (sourceName !== null) sourceName.textContent = item.name;
                const sourceCloneSelector = sourceClone.querySelector('.source__item');
                if (sourceCloneSelector !== null) {
                    sourceCloneSelector.setAttribute('data-source-id', item.id);
                }
            }
            if (sourceClone) fragment.append(sourceClone);
        });
        const sourcesSelector = document.querySelector('.sources');
        if (sourcesSelector !== null) sourcesSelector.append(fragment);
    }
}

export default Sources;
