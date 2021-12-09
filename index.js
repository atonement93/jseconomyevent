$(".ko").click(function () {
  location.href = "https://www.mk.co.kr/";
});

$(".us").click(function () {
  location.href = "https://www.wsj.com/";
});

$(".uk").click(function () {
  location.href = "https://www.ft.com/";
});

$(".ko").mouseenter(function () {
  $(".ko").text("Go To Site");
});

$(".ko").mouseout(function () {
  $(".ko").text("");
});
$(".us").mouseenter(function () {
  $(".us").text("Go To Site");
});

$(".us").mouseout(function () {
  $(".us").text("");
});
$(".uk").mouseenter(function () {
  $(".uk").text("Go To Site");
});

$(".uk").mouseout(function () {
  $(".uk").text("");
});
