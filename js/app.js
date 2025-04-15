function loadPage(page) {
    fetch(page)
    .then(response => response.text())
    .then(html => {
        document.getElementById('content').innerHTML = html;
        history.pushState(null, '', page); // URLを変える（オプション）
    });
} 