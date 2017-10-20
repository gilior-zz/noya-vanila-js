(function () {
    function processPrg(prg) {
        var domManager = Object.create(DomManager);

        var html = prg.Text;
        var divData = {
            class: 'row program-item white-panel padding-5 back-cornsilk-color',
            id: prg.ID,
            html:prg.Text
        }

        domManager.addElementToDom(1,'div',divData,'programs-place-holder')

    }

    $(document).ready(function () {
        var api = Object.create(PUBLIC_API);
        api.getData('programs', 'http://noyaschleien.com/api/Data/GetPrograms', {"request": {"Language": "1"}}).then(function (data) {
            console.log(data);
            for (var i = 0; i < data['Programs'].length; i++) {
                var obj = data['Programs'][i];
                processPrg(obj);
            }

        }).catch(function (err) {

        })
    })
}())