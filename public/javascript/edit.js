$(document).ready(function () {
    let str = location.href.split("?")[1]

    $.get(USER_API + "/" + str).done(function (data) {
        $("#name").val(data.name);
        $("#year").val(data.birthday);
        $("#email").val(data.email);
        $("#phone").val(data.phone);
    })

    $("#save").click(function () {
        let data = {
            "name": $("#name").val(),
            "birthday": $("#year").val(),
            "email": $("#email").val(),
            "phone": $("#phone").val()
        }

        $.ajax({
            type: "PUT",
            url: USER_API + "/" + str,
            data: data
        }).done(function () {
            alert("Thêm thành công");
            location.href = "/";
        }).fail(function (err) {
            alert("Nhập lại thông tin");
        })
    })
})