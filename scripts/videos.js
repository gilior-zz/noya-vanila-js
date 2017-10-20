(function () {
    var domManager = Object.create(DomManager);
    var api = Object.create(PUBLIC_API);

    function processVideo(video) {
        console.log(video);
        var src = 'https://www.youtube.com/embed/' + video['snippet']['resourceId']['videoId'] + '' +
            '?showinfo=1' +
            '&rel=0&modestbranding=1' +
            '&hl=he';

        var divID='div-'+video.id;
        var divData={
            class:'col-xs-12 col-md-6',
            id:divID
        }

        domManager.addElementToDom(1,'div',divData,'videos-place-holder')

        var frameData={
            width:"100%",
            height:"300",
            allowfullscreen:true,
            src:src
        }

        domManager.addElementToDom(1,'iframe',frameData,divID)
    }

    $(document).ready(function () {


        api.getData('videos', 'https://www.googleapis.com/youtube/v3/playlistItems?' +
            'part=snippet' +
            '&playlistId=UUO2Xi-wHrqM27neDaVrfebQ' +
            '&maxResults=50' +
            '&key=AIzaSyBH2ltO-MFMiW7dftsCCM3w8F86M-kwDHM&',{},'GET').then(function (data) {

            for (var i = 0; i < data['items'].length; i++) {
                var obj = data['items'][i];
                processVideo(obj)

            }
        })
            .catch(function (err) {

            })

    })
}())