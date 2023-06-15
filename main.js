// الزر الخاص ب الالوان
let btnColor = document.getElementById("btn-color");
// الزر الخاص ب النسخ
let btnCopy = document.getElementById("btn-copy");
// الوظيفه الخاصه لعمل الالوان العشوائيه
btnColor.addEventListener("click", function () {
  // المكان الخاص بوضع داخلها اللون العشوائي
  let colorName = document.getElementById("color");
  // عمل ارقام عشوائية
  let random = Math.random() * 20;
  // تحويل الرقم العشوائي الي النظام السادس عشري (16)
  // تم قطع 6 ارقم من اصل 20
  let hex = random.toString(16).slice(3, 9);
  // المكان المخصص بوضع اللون ووضع اللون العشوائي
  colorName.innerHTML = `#${hex}`;
  // الخلفية الخاصة ب المتصفح
  document.body.style.backgroundColor = `#${hex}`;
});
// الوظيفه الخاصة لنسخ الالوان
btnCopy.addEventListener("click", function () {
  // المكان الذي يحتاج للنسخ
  let colorName = document.getElementById("color");
  // كود خاص بالنسخ
  navigator.clipboard.writeText(colorName.innerHTML);
  // التنبيه لمعرفة ان كان تم نسخ ام لا
  alert(`تم نسخ ${colorName.innerHTML}
    copied ${colorName.innerHTML}
    `);
});
