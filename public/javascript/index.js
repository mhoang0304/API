$(document).ready(function () {
    function loadDoc() {
        let request = new XMLHttpRequest();

        request.open("GET", USER_API, true);

        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let user = JSON.parse(this.responseText);

                for (let i = 0; i < user.length; i++) {
                    $("tbody").append(
                        `<tr>
                            <td>${user[i].name}</td>
                            <td>${user[i].birthday}</td>
                            <td>${user[i].email}</td>
                            <td>${user[i].phone}</td>  
                            <td>
                                <button>
                                    <a href="./edit.html?${user[i].id}"><i class="fas fa-edit"></i></a>
                                </button>
                                <button data-id="${user[i].id}" class="delete"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>`)
                }

                $(".delete").click(function () {
                    let id = $(this).attr("data-id");
                    let element = $(this);

                    $(".confirm").css("display", "block");

                    $("#no-confirm").click(function () {
                        $(".confirm").css("display", "none");
                    });

                    $("#confirm").click(function () {
                        $(".confirm").css("display", "none");
                        $.ajax({
                            type: "DELETE",
                            url: USER_API + "/" + id
                        }).done(function () {
                            element.parent().parent().remove();
                        })
                    });
                })

            }
        };
        request.send();
    }
    loadDoc();
})
