(function () {
    $(document).ready(function () {
        jQuery.get('mnu.html', function(html) {
          $('#mnu-place-holder').html(html)
        });
    })
}())
var PUBLIC_API =  {

    loadData :function (url, body) {
        var data=JSON.stringify(body);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url":url,
            error: function (err) {
                throw  err;
            },
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "cache-control": "no-cache",
                "postman-token": "ab7054de-e5c0-db38-4fb1-1de548a424a2"
            },
            success: function (data) {
                return data;
            },
            "processData": false,
            "data": data
        }
        return    $.ajax(settings)




    },
    getData :function (url, body) {
      return  this.loadData(url, body).then(function (data) {
          return data;
      }).catch(function (err) {
          console.log(err);
          return err;
      })
    }

}


