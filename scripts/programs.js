(function () {
    function processPrg(prg) {
        var domManager = Object.create(DomManager);

        var html = prg.Text;
        var divData = {
            class: 'row program-item white-panel padding-5 back-cornsilk-color',
            id: prg.ID

        }
    }

    $(document).ready(function () {
        var api = Object.create(PUBLIC_API);
        api.getData('programs', 'http://noyaschleien.com/api/Data/GetPrograms', {"request": {"Language": "0"}}).then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                processPrg(obj);
            }

        }).catch(function (err) {

        })
    })
}())