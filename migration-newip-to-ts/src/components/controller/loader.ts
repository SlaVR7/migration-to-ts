import { Options, EndpointType, Request, RequestType, OptionsKeys } from '../../types/models';

class Loader {
    constructor(private readonly baseLink: string, private readonly options: Options) {}

    getResp(
        { endpoint, options = {} }: Request,
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load(RequestType.Get, endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: EndpointType) {
        const urlOptions: Options = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as OptionsKeys]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: RequestType, endpoint: EndpointType, callback: (data: string) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
