import Loader from './loader';
import { Options } from '../../types/models';

class AppLoader extends Loader {
    constructor() {
        const keys: Options = {
            apiKey: '378143bd20b844c1afbbc1260be37591', // получите свой ключ https://newsapi.org/
        };
        super('https://newsapi.org/v2/', keys);
    }
}

export default AppLoader;
