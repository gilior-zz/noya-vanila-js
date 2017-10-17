(function () {
    var domManager = Object.create(DomManager);
    var api = Object.create(PUBLIC_API);

    function processVideo(video) {
        console.log(video);
    }

    $(document).ready(function () {



        api.getData('videos', 'https://www.googleapis.com/youtube/v3/playlistItems?' +
            'part=snippet' +
            '&playlistId=UUO2Xi-wHrqM27neDaVrfebQ' +
            '&maxResults=50' +
            '&key=AIzaSyBH2ltO-MFMiW7dftsCCM3w8F86M-kwDHM&').then(function (data) {
            
            for (var i = 0; i < data['items'].length; i++) {
                var obj = data['items'][i];
                processVideo(obj)

            }
        })
            .catch(function (err) {

            })

    })
}())