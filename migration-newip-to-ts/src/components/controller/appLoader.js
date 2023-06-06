import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '378143bd20b844c1afbbc1260be37591', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
