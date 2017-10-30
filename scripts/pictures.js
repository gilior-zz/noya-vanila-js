(function () {
    var domManager = Object.create(DomManager);
    processImage = function (img) {


        //set gallery
        var wrpID = 'img-wrp-' + img.ID;
        var divData = {
            id: wrpID,
            class: 'col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center'
        }
        domManager.addElementToDom(1, 'div', divData, 'pictures-place-holder')


        function imgClick() {
            $('.item.active').removeClass('active');
            $('#crl-wrp-id-'+this.id).addClass('active')
        }

        var imgData = {
            id: img.ID,
            class: 'img-responsive img-rounded img-hover-animation pointer',
            'data-toggle':'modal' ,
            'data-target': '#myModal',
            src: img.ImageURL
        }
        domManager.addElementToDom(1, 'img', imgData, wrpID,'click',imgClick);








    }
    processCrlImage=function (img) {
        //set carousel
        var crlWrpID='crl-wrp-id-'+img.ID;
        var crlWrpData={
            class:'item',
            id:crlWrpID
        }
        domManager.addElementToDom(1,'div',crlWrpData,'carousel-place-holder')


        var crlImgData = {
            id:img.ID,
            class: 'img-carousel img-responsive img-rounded',

            src: img.ImageURL
        }
        domManager.addElementToDom(1, 'img', crlImgData, crlWrpID);

        var crlTitleID='crl-title-id- '+img.ID;
        var crlTitlwData={
            class:'carousel-caption',
            id:crlTitleID
        }
        domManager.addElementToDom(1,'div',crlTitlwData,crlWrpID)

    }

    $(document).ready(function () {
        jQuery.get('pictures-modal.html', function (html) {
            $('#myModal').html(html);
            api.getData('pictures',
                'http://noyaschleien.com/api/Data/GetImages',
                {"request": {"CurrentImageID": "2", "Language": "0", "NextData": "2", "DataAmount": "0"}})
                .then(function (data) {
                    var imgs = data.Images;
                    for (var i = 0; i < imgs.length; i++) {
                        var obj = imgs[i];
                        processCrlImage(obj);
                    }
                })
                .catch(function (err) {

                })
        });
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