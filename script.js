var overlay = document.getElementById("overlay");
overlay.hidden = true;

function closeClick(e) {
    overlay.hidden =  true;
}
var modal_close = document.getElementById("modal_close");
modal_close.onclick = closeClick;
function backClick(e) {
    e.preventDefault();
    overlay.hidden =  false;
}
var back = document.getElementById("back");
back.onclick = backClick;

function readMore() {
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");
	
	if(dots.style.display === "none") 
	{
		dots.style.display = "inline";
		btn.innerHTML ="Подробнее";
		more.style.display = "none";
	} else 
	{
		dots.style.display = "none";
		btn.innerHTML ="Скрыть";
		more.style.display = "inline";
	}
}

var bookmarkBtn = document.querySelectorAll('.bookmark');
function bookmarkClick(e) {
 e.preventDefault();
 var bm = this;
 bm.classList.toggle('added');
 var parentId = bm.parentElement.id;
 var bookMarks = document.querySelector('.bookmark-list');
 if(bm.classList.contains('added')) {
 bm.textContent = 'Удалить из закладок';
 var headerArticle = document.querySelector('#' + parentId +' h2');
 var linkArticle = document.createElement('a');
 linkArticle.textContent = headerArticle.textContent;
 linkArticle.setAttribute('href', '#' + parentId);
 bookMarks.append(linkArticle);
 } else {
 bm.textContent = 'Добавить в закладки';
 var linkRemove = document.querySelector('a[href="#'+ parentId +'"]');
 linkRemove.remove();
 }
}

for(let i=0; i<bookmarkBtn.length; i++){
 bookmarkBtn[i].onclick = bookmarkClick;
}

