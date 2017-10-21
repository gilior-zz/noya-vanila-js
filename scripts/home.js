(function () {
    var obj = Object.create(PUBLIC_API);

    function processData(index, card) {
        var domManager = Object.create(DomManager);
        var description = card.Description;
        var id = card.ID;
        var image_Url = card.Image_Url;
        var text = card.Text;
        var title = card.Title;

        var a = 'item-wrp-' + index;
        var data = {
            id: a,
            class: 'col-xs-12 col-md-4'
        }

        domManager.addElementToDom(index, 'div', data, 'cards-outer-wrp');

        var b = 'item-row-wrp-' + index;
        var data = {
            id: b,
            class: 'row item-wrp text-center'

        }
        domManager.addElementToDom(index, 'div', data, a);

        var c = 'item-inner-wrp-' + index;
        var data = {
            id: c,
            class: 'col-xs-12 text-center'

        }
        domManager.addElementToDom(index, 'div', data, b);

        var d = 'item-content-wrp-' + index;
        var data = {
            id: d,
            class: 'item-content',

        }
        domManager.addElementToDom(index, 'div', data, c);


        var closeImgHandler = {
            func: function fb() {
                $(this).css('visibility', 'hidden')

                $('#' + f).fadeIn();
            },
            event: 'click'
        }


        var e = 'close-btn-' + index;
        var data = {
            id: e,
            class: 'item-content--toggle-state',
            src: 'assets/close.ico',
            css: {
                visibility: 'hidden'
            }

        }
        domManager.addElementToDom(index, 'img', data, d, closeImgHandler.event, closeImgHandler.func);


        var imgHandler = {
            func: function fa() {

                $(this).fadeOut();
                $('#' + h).fadeIn();
                $('#' + e).css('visibility', 'visible')

            },
            event: 'click'
        }


        var f = 'item-img-' + index;
        var data = {
            id: f,
            class: 'item-content--img',
            src: image_Url
        }
        domManager.addElementToDom(index, 'img', data, d, imgHandler.event, imgHandler.func);


        var g = 'item-content-state-' + index;
        var data = {
            id: g,
            class: 'item-content--card-text',
            html: text
        }
        domManager.addElementToDom(index, 'div', data, d);


        var h = 'item-caption-' + index;
        var data = {
            id: h,
            class: 'item-caption pointer',
            html: title
        }
        domManager.addElementToDom(index, 'div', data, c);


    }

    $(document).ready(function () {

        obj.getData('cards', 'http://noyaschleien.com/api/Data/GetTraverseItems', {"request": {"Language": "1"}}).then(function (data) {
            console.log(data);
            for (var i = 0; i < data.TraverseItems.length; i++) {
                var card = data.TraverseItems[i];
                processData(i, card)
            }

        }).catch(function (err) {

        });

        obj.getData('homeText', 'http://noyaschleien.com/api/Data/GetHomePageText', {"request": {"Language": "1"}}).then(function (data) {
            console.log(data.HomePageTexts[0]);
            $('.spinner').hide();
            var domManager = Object.create(DomManager);
            domManager.addHtmlToElemet(data.HomePageTexts[0].Text,'home-text-place-holder')

        }).catch(function (err) {

        })


    })

}())