(function () {
    var domManager = Object.create(DomManager);
    processImage = function (img) {

        var wrpID = 'img-wrp-' + img.ID;
        var divData = {
            id: wrpID,
            class: 'col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center'
        }
        domManager.addElementToDom(1, 'div', divData, 'pictures-place-holder')



        var imgData = {
            id: img.ID,
            class: 'img-responsive img-rounded img-hover-animation pointer',
            'data-toggle':'modal' ,
            'data-target': '#myModal',
            src: img.ImageURL
        }
        domManager.addElementToDom(1, 'img', imgData, wrpID)
    }
    $(document).ready(function () {
        var api = Object.create(PUBLIC_API);
        api.getData('pictures',
            'http://noyaschleien.com/api/Data/GetImages',
            {"request": {"CurrentImageID": "2", "Language": "0", "NextData": "2", "DataAmount": "0"}})
            .then(function (data) {
                var imgs = data.Images;
                for (var i = 0; i < imgs.length; i++) {
                    var obj = imgs[i];
                    processImage(obj);
                }
            })
            .catch(function (err) {

            })
    })
}())