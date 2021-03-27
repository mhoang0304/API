const API = "https://mhoang.herokuapp.com/"
const USER_API = API + "users"

$(document).ready(function () {

    function loadDoc() {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // document.getElementById("name").innerHTML = this.responseText;
                let user = JSON.parse(this.responseText);

                $("#name").text(user[0].name)
                for (let i = 0; i < user.length; i++) {
                    $("tbody").append(
                        `<tr>
                            <td>${user[i].name}</td>
                            <td>${user[i].birthday}</td>
                            <td>${user[i].email}</td>
                            <td>${user[i].phone}</td>  
                            <td>
                                <button class="detail">
                                    <a href="./detail.html?${user[i].id}">Chỉnh sửa</a>
                                </button>
                                <button onclick='deleteValue(${user[i].id})'>Xoá</button>
                            </td>
                        </tr>`)
                }
            }
        };
        request.open("GET", USER_API, true);
        request.send();
    }

    loadDoc();

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
})

function deleteValue(id) {
    $.ajax({
        type: "DELETE",
        url: USER_API + "/" + id
    }).done(function () {
        document.body.onload;
    })
};
