const API = "https://mhoang.herokuapp.com/"
const USER_API = API + "users"

$(document).ready(function () {

    function loadDoc() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // document.getElementById("name").innerHTML = this.responseText;
                let user = JSON.parse(this.responseText);

                $("#name").text(user[0].name)
                for (let i = 0; i < user.length; i++) {
                    $("table").append(`<tr>
                        <td> ${user[i].name}</td>
                        <td> ${user[i].birthday}</td>
                        <td> ${user[i].email}</td>
                        <td> ${user[i].phone}</td>  
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
        xhttp.open("GET", USER_API, true);
        xhttp.send();
    }

    loadDoc();

    

    $("#save").click(function () {
        let name = $("#name").val()
        let year = $("#year").val()
        let email = $("#email").val()
        let phone = $("#phone").val()

        let data = {
            "name": name,
            "birthday": year,
            "email": email,
            "phone": phone
        }

        $.ajax({
            type: "POST",
            url: USER_API,
            data: data
        }).done(function () {
            alert("Thêm thành công");
            location.href = "/";
        }).fail(function (err) {
            alert("Nhập lại thông tin");
        })
    })

})

function deleteValue(id) {
    console.log(id);

    $.ajax({
        type: "DELETE",
        url: USER_API + "/" + id
    }).done(function() {
        //SAu khi xoas xong 

    })

};
