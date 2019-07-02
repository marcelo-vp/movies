const makeRequest = (function() {
    const __request = (method, path, payload, successCallback) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                successCallback(xhr.responseText);
            }
        }
        xhr.open(method, path);
        xhr.setRequestHeader('Content-Type', 'application/json');
        payload ? xhr.send(JSON.stringify(payload)) : xhr.send()
    }

    return {
        get: (path, successCallback) => {
            return __request('GET', path, null, successCallback);
        },
        post: (path, payload, successCallback) => {
            return __request('POST', path, payload, successCallback);
        },
        delete: (path, payload, successCallback) => {
            return __request('DELETE', path, payload, successCallback);
        }
    };
})();

export default makeRequest;
