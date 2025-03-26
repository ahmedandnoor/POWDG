function switchPage(page) {
    document.getElementById('pcGames').style.display = (page === 'pc') ? 'grid' : 'none';
    document.getElementById('androidGames').style.display = (page === 'android') ? 'grid' : 'none';
}
