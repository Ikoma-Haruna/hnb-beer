const cursorConcept = document.querySelector('#cursorConcept');
const cursorHistory = document.querySelector('#cursorHistory');


const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
	mouse.x = e.clientX;
	mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
	return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
	const distance = Math.sqrt(
		Math.pow(diffX, 2) + Math.pow(diffY, 2)
	);
	const maxSqueeze = 0.15;
	const accelerator = 1500;
	return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
	const diffX = Math.round(mouse.x - pos.x);
	const diffY = Math.round(mouse.y - pos.y);

	pos.x += diffX * speed;
	pos.y += diffY * speed;

	// const angle = getAngle(diffX, diffY);
	// const squeeze = getSqueeze(diffX, diffY);

	// const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
	// const rotate = 'rotate(' + angle +'deg)';
	const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
	// const translate02 = 'translate(-50%, -50%)';

	cursorConcept.style.transform = translate;
	cursorHistory.style.transform = translate;

};

function loop() {
	updateCursor();
	requestAnimationFrame(loop);
}

requestAnimationFrame(loop);













//-_-_-_-_-  mouseover

var ConceptLink = $('#aboutPage section#AboutSec #Concept a'),
		ConceptCursor = $('.cursorConcept');
ConceptLink.mouseover(function() {
	ConceptCursor.addClass('active');
});
ConceptLink.mouseout(function() {
	ConceptCursor.removeClass('active');
});

var HistoryLink = $('#aboutPage section#AboutSec #History a'),
		HistoryCursor = $('.cursorHistory');
HistoryLink.mouseover(function() {
	HistoryCursor.addClass('active');
});
HistoryLink.mouseout(function() {
	HistoryCursor.removeClass('active');
});

