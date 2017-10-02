(function () {
$(document).ready(function () {
    var obj=Object.create(PUBLIC_API);
    obj.getData('http://noyaschleien.com/api/Data/GetTraverseItem',{"request":{"Language":"1"}}).then(function (data) {
        console.log(data)
    }).catch(function (err) {

    })
})

}())