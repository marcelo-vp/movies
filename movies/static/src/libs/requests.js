const request = (function() {
    const __request = (method, path, payload) => {
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                }
            };
            xhr.open(method, path);
            xhr.setRequestHeader('Content-Type', 'application/json');
            payload ? xhr.send(JSON.stringify(payload)) : xhr.send();
        });
    };

    return {
        get: async path => await __request('GET', path, null),
        post: async (path, payload) => await __request('POST', path, payload),
        delete: async path => await __request('DELETE', path, null)
    };
})();

export default request;
