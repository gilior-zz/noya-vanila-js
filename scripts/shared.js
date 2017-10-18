(function () {
    $(document).ready(function () {
        jQuery.get('mnu.html', function (html) {
            $('#mnu-place-holder').html(html)
        });
    })
}())


var PUBLIC_API = {
    updateCache: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    getFromCache: function (key) {
        var item = localStorage.getItem(key);
        if (typeof item !== "undefined" && item !== null && item !== '')
            return JSON.parse(item);
    },
    loadData: function (url, body,method) {
        if (typeof method !== 'undefined')
            method='POST';
        var data = JSON.stringify(body);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": url,
            error: function (err) {
                throw  err;
            },
            "method": method,
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
    getData: function (name, url, body,method) {
        var me = this;
        var fromCache = this.getFromCache(name);
        if (typeof fromCache !== "undefined" && typeof fromCache !== null) return Promise.resolve(fromCache);
        return me.loadData(url, body,method).then(function (data) {
            console.log(this);
            console.log(me);
            me.updateCache(name, data);
            return data;
        }).catch(function (err) {
            console.log(err);
            return err;
        })
    },


}

var DomManager = {
    addElementToDom: function (index, name, data, where, event, func) {
        var finalName = '<' + name + '/>'
        var finalWhere = '#' + where;
        var elem = $(finalName, data).appendTo(finalWhere);
        if (typeof event !== "undefined" && typeof func !== "undefined")
            elem.on(event, func);

    },

    addHtmlToElemet: function (html, where) {
        var finalWhere = '#' + where;
        $(finalWhere).html(html);
    }
}


