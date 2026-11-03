document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('button1');
    const searchBox = document.getElementById('search-box');
    const resultDiv = document.getElementById('results'); // Fixed: changed 'results' to 'result'

    searchButton.addEventListener('click', function() {
        const searchTerm = searchBox.value.trim();
        // Fixed: changed 'search' to 'query' to match PHP's $_GET['query']
        const url = searchTerm !== '' ? `superheroes.php?query=${encodeURIComponent(searchTerm)}` : 'superheroes.php';

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});