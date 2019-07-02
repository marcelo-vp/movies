const makePostRequest = (path, payload, successCallback) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            successCallback(xhr.responseText);
        }
    }
    xhr.open('POST', path);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(payload));
};

export default makePostRequest;
