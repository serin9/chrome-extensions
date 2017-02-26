var locale = 'de-DE';
var content = {
	msg: document.querySelector('.content .message').firstChild,
  //search: document.querySelector('.content .search').firstChild,
  links: document.querySelector('.content .links').firstChild,
};
var search_content = {
  naver_input: document.getElementById("naver_search_input"),
  naver_btn: document.getElementById("naver_search_btn"),
  google_input: document.getElementById("google_search_input"),
  google_btn: document.getElementById("google_search_btn")
}
var footer = {
  date: document.querySelector('.footer').firstChild
}
render();

function render() {
	content.msg.data = "new tab";

  var now = new Date();
  var seconds = now.getSeconds();
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
}
