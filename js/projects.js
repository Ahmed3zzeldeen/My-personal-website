const projects = [
	{
		imgUrl: './Images/work/web/work-11.png',
		name: 'my-personal-portfolio',
		description:
		'This is my																									',
		technology:['HTML','CSS','JavaScript','Github','figma'],
		category:['All'],
		github:
		'https://github.com/Ahmed3zzeldeen/my-prsonal-portfolio',
		url:'#'	},
	{
		imgUrl: './Images/work/web/work-9.png',
		name: 'Saad-Eldeen-Portfolio',
		description:
		' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology:['HTML','CSS','JavaScript','Github','figma'],
		category:['All' , 'Websites'],
		github:
		'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/qr-code-component-main',
		url:'#'	},
	{
		imgUrl: './Images/work/web/work-8.png',
		name: 'diamond-speed-text-game',
		description:
		' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology:['HTML','CSS','JavaScript','Github','figma'],
		category:['All' , 'Games' , 'Websites'],
		github:
		'https://github.com/Ahmed3zzeldeen/Diamond-Speed-Text-Game',
		url:'#'	},
	{
		imgUrl: './Images/work/web/work-7.png',
		name: 'front-end-challenges',
		description:
		' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology:['HTML','CSS','JavaScript','Github','figma'],
		category:['All' , 'Websites' , 'Challenges'],
		github:
		'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/',
		url:'#'	},
	
	{
		imgUrl: './Images/work/web/work-6.png',
		name: 'clipboard-landing-page-master',
		description:
		' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology:['HTML','CSS','JavaScript','Github','figma'],
		category:['All' , 'Websites' , 'Challenges' , 'Products'],
		github:
		'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/clipboard-landing-page-master',
		url:'#'	},
		{
		imgUrl: './Images/work/web/work-5.png',
		name: 'fylo-landing-page',
		description:
		' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology:['HTML','CSS','JavaScript','Github','figma'],
		category:['All' , 'Websites' , 'Challenges'],
		github:
		'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/fylo-landing-page',
		url:'#'	},
	{
		imgUrl: './Images/work/web/work-4.png',
		name: 'huddle-landing-page',
		description:
		' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology:['HTML','CSS','Github','figma'],
		category:['All' , 'Websites' , 'Challenges'],
		github:
		'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/qr-code-component-main',
		url:'#'	},
	{
		imgUrl: './Images/work/web/work-3.png',
		name: 'base-apparel-coming-soon-master',
		description:
		' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology:['HTML','CSS','JavaScript','Github','figma'],
		category:['All' , 'Websites' , 'Challenges'],
		github:
		'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/base-apparel-coming-soon-master',
		url:'#'	},
	{
		imgUrl: './Images/work/web/work-2.png',
		name: 'nft-preview-card-component-main',
		description:
		' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology:['HTML','CSS','Github','figma'],
		category:['All' , 'Websites' , 'Challenges'],
		github:
		'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/nft-preview-card-component-main',
		url:'#'	},
	{
		imgUrl: './Images/work/web/work-1.png',
		name: 'qr-code-component-main',
		description:
		' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology:['HTML','CSS','Github','figma'],
		category:['All' , 'Websites' , 'Challenges'],
		github:
		'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/qr-code-component-main',
		url:'#'	}

];

const list = document.getElementById('work-gallery');
projects.forEach(({ imgUrl, name, description ,technology , github , url,category }, i) => {
	const listItem = document.createElement('div');
	listItem.classList.add('cont-work');
	listItem.classList.add('aein-move-hidden');
	listItem.classList.add(`${(i%2 === 0)? 'from-left' : 'from-right'}`);
	listItem.setAttribute('data-category' ,`${createCategory(category)}` )
	listItem.innerHTML = `
			<div class="cont-work-img ${(i%2 === 0)? "aein-move-hidden from-left" : "aein-move-hidden from-right" }">
				<img src="${imgUrl}" alt="${name}">
			</div>
			<div class="info-work">
				<h3 class="proj-title aein-move-hidden from-top no-blur">${formatName(name)}</h3>
				<p class="proj-description aein-move-hidden from-top no-blur">${description}</p>
				<div class="proj-technology">
					<h4 class="aein-move-hidden from-top no-blur">Technologies I Used</h4>
					<ul>
						${createTechItems(technology)}
					</ul>
				</div>
				<div class="proj-buttons aein-move-hidden from-bottom no-blur">
					<a class="btn" href="${url}" target="_blank">Preview  <i class="fas fa-eye"></i></a>
					<a class="btn" href="${github}" target="_blank">Source Code  <i class="fab fa-github"></i></a>
				</div>
			</div>
	`;
	if (i > 2) {
		listItem.classList.add('hide');
	}
	list.appendChild(listItem);
});

let shuffleItems = Array.from(document.querySelectorAll('#Work ul.shuffle-buttons li'));
let arrayWork = Array.from(document.querySelectorAll('.gallery div.cont-work'));


// 1- Select cate or defulat selection
// 2- Show 3 Items from this selection
// 3- When click on ShowMore btn will show all Items in arr
// 4- When click on ShowLess btn will back to numberThree;


shuffleItems.forEach( shuffleItem => {
	shuffleItem.onclick = function (){

	}
});

shuffleItems.forEach( shuffleItem => {
	shuffleItem.onclick = function () {
		let count = 0;
		arrayWork.forEach( WorkItem => {
			let arrOfCata = WorkItem.getAttribute('data-category').split(" ");
			if (arrOfCata.includes(shuffleItem.getAttribute('data-category'))) {
				WorkItem.classList.remove('hide');
				// count++;
			} else {
				WorkItem.classList.add('hide');
			}
			// if (count > 3) {
			// 	WorkItem.classList.add('hide');
			// }
			let arrayWorkSelection = [];
			console.log(arrayWorkSelection);
		});
	}
});




	arrayWork.forEach((WorkItem , i ) => {
		let moreBtn = document.querySelector('.more-btn');
		let lessBtn = document.querySelector('.less-btn');
		
		moreBtn.addEventListener('click' , function showMore(){
			if (WorkItem.classList.contains('hide')) {
				WorkItem.classList.remove('hide');
				moreBtn.style.display = "none";
				lessBtn.style.display = "block";
			}
			} 
		);
		if (i > 2 ) {
			lessBtn.addEventListener('click' , function showLess(){
				if (!WorkItem.classList.contains('hide')) {
					WorkItem.classList.add('hide');
					lessBtn.style.display = "none";
					moreBtn.style.display = "block";
				}
			} 
			);
		}
		
		
	});



function createTechItems(technology){
	const ulItem = document.createElement('ul');
	for(let i = 0 ; i < technology.length ; i++){
		const techItems = document.createElement('li');
		techItems.classList.add('aein-move-hidden');
		techItems.classList.add('from-left');
		techItems.classList.add('no-blur');
		let text = document.createTextNode(technology[i]);
		techItems.appendChild(text);
		ulItem.appendChild(techItems);
		
	}
	return ulItem.innerHTML;
}
function createCategory(category) {
	let result = "";
	for (let i = 0; i < category.length; i++) {
		result += category[i] +" " ;
	}
	return result;
}
function formatName(name) {
	return name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
