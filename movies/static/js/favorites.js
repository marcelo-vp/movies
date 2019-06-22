(function() {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('add-to-favorites').onclick = e => {
            const path = '/favorites';
            const payload = {
                "title": document.querySelector('.movie-title').textContent,
                "image": document.querySelector('.movie-image').getAttribute('src'),
                "plot": document.querySelector('.movie-plot').textContent
            };
            makePostRequest(path, payload, successCallback);
        }
    });
    
    const successCallback = response => {
        const jsonResponse = JSON.parse(response);
        if (jsonResponse["added"]) {
            document.querySelector('.added-to-favorites').style.display = 'block';
        }
    }
})();
