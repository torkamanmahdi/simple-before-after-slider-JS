let comparisionItem = document.getElementById('comparisionItem')
window.onmousemove = function(e) {
	let x = e.clientX
	comparisionItem.style.left = x + 'px'
}