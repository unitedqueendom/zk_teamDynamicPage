(() => {

	const zkbio = document.querySelector('.zkbio');
	otherbio = document.querySelector('.otherbio');
	zkimg = document.querySelector('.zkimg');
	otherimg = document.querySelector('.otherimg');
	zkhead = document.querySelector('.zkHeadline');
	otherhead = document.querySelector('.otherHeadline');

	function displayzkbio() {
		hidebios();
		zkbio.classList.add('showbio');
		zkhead.classList.add('showbio');
	}

	function displayotherbio() {
		hidebios();
		otherbio.classList.add('showbio');
		otherhead.classList.add('showbio');
	}

	function hidebios() {
		zkbio.classList.remove('showbio');
		otherbio.classList.remove('showbio');
		zkhead.classList.remove('showbio');
		otherhead.classList.remove('showbio');
	}

	zkimg.addEventListener('click', displayzkbio);
	otherimg.addEventListener('click', displayotherbio);

	displayzkbio();

})();