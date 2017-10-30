(function () {
    var domManager = Object.create(DomManager)
    var api = Object.create(PUBLIC_API)

    function processLink(lnk) {
        var divID = 'div-'+lnk.ID;
        var divData = {
            class: 'links-wrapper white-panel',
            id: divID
        }

        domManager.addElementToDom(1, 'div', divData, 'links-place-holder')

        var ancData = {
            target: '_blank',
            class: "h4",
            href: lnk.Address_Eng,
            text:lnk.Text_Eng
        }

        domManager.addElementToDom(1, 'a', ancData, divID)
    }

    $(document).ready(function () {
        api.getData('links', 'http://noyaschleien.com/api/Data/GetLinks', {"request": {"Language": '1'}}).then(function (data) {

            for (var i = 0; i < data['Links'].length; i++) {
                var obj = data['Links'][i];
                processLink(obj);
            }
        })
            .catch(function (err) {

            })
    })
}())


