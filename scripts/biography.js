(function () {
    $(document).ready(function () {
       var public_api=Object.create(PUBLIC_API) ;
       public_api.getData('biography','http://noyaschleien.com/api/Data/GetCV',{"request":{"Language":"0"}}).then(function (data) {
console.log(data)
       })
           .catch(function (err) {
           })

    })
}())