(function () {
    $(document).ready(function () {
        jQuery.get('mnu.html', function (html) {
            $('#mnu-place-holder').html(html)
        });
    })
}())
var PUBLIC_API = {

    loadData: function (url, body) {
        var data = JSON.stringify(body);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": url,
            error: function (err) {
                throw  err;
            },
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
            },
            success: function (data) {
                return data;
            },
            "processData": false,
            "data": data
        }
        return $.ajax(settings)
    },
    getData: function (url, body) {
        return this.loadData(url, body).then(function (data) {
            return data;
        }).catch(function (err) {
            console.log(err);
            return err;
        })
    }

}

var DomManager = {
    addElementToDom: function (index, name, data, where, event, func) {
        var finalName = '<' + name + '/>'
        var finalWhere = '#' + where;
        var elem = $(finalName, data).appendTo(finalWhere);
        if (typeof event !== "undefined" && typeof func !== "undefined")
            elem.on(event, func);

    }
}


