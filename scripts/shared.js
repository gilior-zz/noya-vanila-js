(function () {
    $(document).ready(function () {
        jQuery.get('mnu.html', function(html) {
          $('#mnu-place-holder').html(html)
        });
    })
}())
var PUBLIC_API = function () {
    var obj = {};
    loadData = function (url, body) {
        var data = JSON.parse(body);
        return $.ajax({
            url: 'http://api.joind.in/v2.1/talks/10889',
            data: data,
            error: function (err) {
                throw  err;
            },
            dataType: 'json',
            success: function (data) {
                return data;
            },
            type: 'POST'
        });
    }
    obj.getData = function (url, body) {
      return  this.load(url, body).then(function (data) {
          return data;
      }).catch(function (err) {
          console.log(err);
          return err;
      })
    }
    return obj;
}


