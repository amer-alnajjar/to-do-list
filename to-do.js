//varibals
let input = document.querySelector(".add-name input"), //الانبت
  plus = document.querySelector(".add-name .plus"), //زر البلس
  container_name = document.querySelector(".name-container"), //المكان الي هنحط فيه الاسماء
  num_name = document.querySelector(".num-name span"), //عدد الاسماء
  registered_name = document.querySelector(".registered-name span"); //الاسماء الي مسجلة

///////////////////////////
//هنعمل فوكس على الانبت اول ما يعمل ريلود لصفحة
window.onload = function () {
  input.focus();
};

///زر الاضافة
plus.onclick = function () {
  //هنعمل شرط اذا كان الانبت فاضي يطلعلي رسالة واذا لا يحدف النو نيم ويضيف الديف الي فيه الاسم
  if (input.value === "") {
    swal("You did not enter your name", "Please... enter your name");
  } else {
    no_name = document.querySelector(".no-name"); //ديف تبع نو نيم

    //هنعمل شرط انو لو الديف نو نيم موجود شيله
    if (container_name.contains(no_name)) {
      no_name.remove();
    }

    // انشاء الديف والبرقراف والبتن
    let creat_div = document.createElement("div"),
      creat_p = document.createElement("p"),
      creat_button = document.createElement("button");

    //اضفناه البتن والبرقراف للديف
    creat_div.appendChild(creat_p);
    creat_div.appendChild(creat_button);

    //هننشء نصوص للبتن والبرقراف
    let text_p = document.createTextNode(input.value),
      text_button = document.createTextNode("delete");

    //هنحط التكست في البتن والبرقراف
    creat_p.appendChild(text_p);
    creat_button.appendChild(text_button);

    let pinput = text_p.textContent;
    let pinner = creat_p.textContent;

    // for (let i = 0; i < pinner.length; i++) {
    //   if (pinput === pinner[i]) {
    //     console.log("yes");
    //   } else {  //   }
    // }

    //هنحط الكلاسات
    creat_p.classList.add("p");
    creat_button.classList.add("delete");
    creat_div.classList.add("name-box");

    //وضعه في الكونتينر
    container_name.appendChild(creat_div);

    //خليلي الانبت فاضي
    input.value = "";
    input.focus();

    // عدد الاسماء والمسجلة
    name_number();
  }
};

//لما نضغط على الحدف
document.addEventListener("click", function (el) {
  if (el.target.classList == "delete") {
    el.target.parentNode.remove();

    /////نعمل شرط لو حدفنا كل العناصر ومفش اسماء تاخل الكونتينر حطلي الفانكشن تبعت النو نيم
    if (container_name.childElementCount === 0) {
      creat_div_no_name();
    }
  }

  // عدد الاسماء والمسجلة
  name_number();
});

//لما نضغط على الديف يحطلي عل نص خط
document.addEventListener("click", function (el) {
  if (el.target.classList.contains("p")) {
    el.target.classList.toggle("finech");
  }

  //عدد الاسماء والمسجلة//
  name_number();
});

////هنعمل فانكشن انو لو حدفنا ووصلناا الى انه ما فيش ولا اسم يحطلي دبف تبع لا يوجد اسماء
function creat_div_no_name() {
  //انشانا ديف
  let creat_div_noname = document.createElement("div");

  ///انشانا النص
  let creat_text_div_noname = document.createTextNode("There are no names");

  //اضفن النص على الديف
  creat_div_noname.appendChild(creat_text_div_noname);

  //اضفنا الكلاس على الديف
  creat_div_noname.classList.add("no-name");

  //اضفنا الديف داخل الكونتينر
  container_name.appendChild(creat_div_noname);
}
name_number();
///////// عدد الاسماء والمسجلة
function name_number() {
  num_name.innerHTML = document.querySelectorAll(".name-box").length;

  registered_name.innerHTML = document.querySelectorAll(
    ".name-box .p.finech"
  ).length;
}
