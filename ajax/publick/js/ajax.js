$(document).ready(function() {
    $("#view").click(function () {
        $.get('/get-data/', function (data) {
            $('#new >tr').remove();
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i]);
                var a = " <tr> <td>{data}</td> </tr>".replace("{data}", data[i])
                $('#new').append(a);
            }
        });
    });
    $("#add").click(function () {
        $.post('/add-data/', {'rezult': $('#data').val()},
            function (data) {
            console.log(data);
                // $('#view').click();
            });
    });
});