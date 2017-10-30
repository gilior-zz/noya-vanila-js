$(document).ready(function () {


    $("#form").submit(function (event) {
        event.preventDefault();
        var api = Object.create(PUBLIC_API);
        var body = {
            "request": {
                "Message":
                    {
                        "Content": $('#content').val(),
                        "Date": new Date().toDateString(),
                        "IP": "",
                        "Sender": {
                            "Email": $('#name').val(),
                            "Name": $('#email').val(),
                        }
                    }
                , "Language": '1'
            }
        };
        api.getData('', 'http://noyaschleien.com/api/Data/SendMessage', body)
        return false;
    });

})
