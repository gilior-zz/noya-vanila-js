(function () {
    $(document).ready(function () {
        var public_api = Object.create(PUBLIC_API);
        var domManager = Object.create(DomManager);
        public_api.getData('biography', 'http://noyaschleien.com/api/Data/GetCV', {"request": {"Language": "1"}}).then(function (data) {
            $('.spinner').hide();
            var text=data.CVs[0].Text;
            domManager.addHtmlToElemet(text, 'biography-place-holder');
        })
            .catch(function (err) {
            })

    })
}())