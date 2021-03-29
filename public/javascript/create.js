$(document).ready(function () {
    $("#save").click(function () {
        let data = {
            "name": $("#name").val(),
            "birthday": $("#year").val(),
            "email": $("#email").val(),
            "phone": $("#phone").val()
        }

        $.ajax({
            type: "POST",
            url: USER_API,
            data: data
        }).done(function () {
            alert("Thêm thành công");
            location.href = "./index.html";
        }).fail(function (err) {
            alert("Nhập lại thông tin");
        })
    })
});