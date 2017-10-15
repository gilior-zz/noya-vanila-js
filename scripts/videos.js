(function () {
    var domManager = Object.create(DomManager);
    var api = Object.create(PUBLIC_API);

    function processVideo(video) {

    }

    $(document).ready(function () {

        params.set('part', 'snippet');
        params.set('playlistId', 'UUO2Xi-wHrqM27neDaVrfebQ');
        params.set('maxResults', '50');
        params.set('key', 'AIzaSyBH2ltO-MFMiW7dftsCCM3w8F86M-kwDHM');
        return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems', {search: params}).map(
            k = > k.json()['items']
    )
api.getData('videos','https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&')

    })
}())