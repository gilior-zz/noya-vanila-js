(function () {
 $(document).ready(function () {
    var api=Object.create(PUBLIC_API) ;
    api.getData('pictures',
        'http://noyaschleien.com/api/Data/GetImages',
        {"request":{"CurrentImageID":"1","Language":0,"NextData":"2","DataAmount":"1"}})
        .then(function (data) {
        
    })
        .catch(function (err) {
            
        })
 })
}())