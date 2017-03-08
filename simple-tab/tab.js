var locale = 'en-EN';
var content = {
	msg: document.querySelector('.content .message').firstChild
};
var time = {
  hour: document.getElementById("time_hour"),
  minute: document.getElementById("time_minute")
};
var search_content = {
  naver_input: document.getElementById("naver_search_input"),
  naver_btn: document.getElementById("naver_search_btn"),
  google_input: document.getElementById("google_search_input"),
  google_btn: document.getElementById("google_search_btn")
};
var links = {
  oss_btn: document.getElementById("oss"),
  connect_btn: document.getElementById("connect")
};
var footer = {
  date: document.querySelector('.footer').firstChild
};
render();

function padZero(number) {
  var str = number.toString();
  return str.length < 2? '0' + str : str;
}

function render() {
	content.msg.data = "\"Time to study\"";

  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  time.hour.innerHTML = padZero(hours);
  time.minute.innerHTML = padZero(minutes);
  footer.date.data = now.toLocaleString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  setTimeout(render, (60 - seconds) * 1000);

  setEventListener();
}

function search(engine, query) {
  if (engine == "naver") {
    window.location.href = "https://search.naver.com/search.naver?where=nexearch%84&sm=top_hty&fbm=1&ie=utf8&query=" + encodeURIComponent(query);
  } else if (engine == "google") {
    window.location.href = "https://www.google.co.kr/?gfe_rd=cr&ei=gcmyWJzhAqz48AeInKroCg#q=" + encodeURIComponent(query);
  }
}

function setEventListener() {
  search_content.naver_input.addEventListener("keyup", function(event) {
    if (event.which==13) {
      search("naver", this.value)
    }
  });
  search_content.naver_btn.addEventListener("click", function() {
    search("naver", search_content.naver_input.value)
  });
  search_content.google_input.addEventListener("keyup", function() {
    if (event.which==13) {
      search("google", this.value)
    }
  });
  search_content.google_btn.addEventListener("click", function() {
    search("google", search_content.google_input.value)
  });

  links.oss_btn.addEventListener("click", function() {
    window.location.href = "https://oss.navercorp.com";
  });
  links.connect_btn.addEventListener("click", function() {
    window.location.href = "https://connect.navercorp.com/home";
  });
}
