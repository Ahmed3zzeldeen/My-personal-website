const projects = [
	{
		imgUrl: './Images/work/web/YourCar.png',
		name: 'YourCar',
		description:
			'It\'s a responsive e-commerce website that allows users to browse and purchase products.<br/>The website includes a shopping cart and saves it to local storage.',
		technology: ['React.js', 'HTML', 'CSS', 'JavaScript', 'React slick',],
		category: ['All', 'Websites', 'Products'],
		github:
			'https://github.com/Ahmed3zzeldeen/your_car',
		isPrivate: false,
		liveUrl: 'https://yourcar-ahmed3zzeldeen.netlify.app/',
	},
	{
		imgUrl: './Images/work/web/Semicolon-Video-Requests.png',
		name: 'Semicolon-Video-Requests',
		description:
			'It\'s a web application that allows users to submit and vote on video requests for a video production company.<br/>The application includes A super user with unique capabilities can delete requests, add resolution videos and  change the status of requests.',
		technology: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'Express', 'MongoDB'],
		category: ['All', 'Websites', 'Products'],
		github:
			'https://github.com/Ahmed3zzeldeen/SPA-App-With-Pure-JS',
		isPrivate: false,
		liveUrl: 'https://drive.google.com/file/d/1lQXHA8ji6uYnJl0KMJrdlUtiHGEJJLdM',
	},
	{
		imgUrl: './Images/work/web/work-11.png',
		name: 'my-personal-portfolio',
		description:
			'a personal portfolio website using HTML, CSS, and JavaScript. The website showcases my skills and experiences, and includes a contact form for potential clients or employers to reach out to me.',
		technology: ['HTML', 'CSS', 'JavaScript', 'Github', 'figma'],
		category: ['All'],
		github:
			'https://github.com/Ahmed3zzeldeen/my-prsonal-portfolio',
		isPrivate: true,
		liveUrl: 'https://ahmed3zzeldeen.netlify.app/',
	},
	{
		imgUrl: './Images/work/web/omnifood.png',
		name: 'Omnifood',
		description:
			'A healthy meal delivered to your door, every Single day. It\'s amazing responsive landing page built with HTML, CSS and JavaScript',
		technology: ['HTML', 'CSS', 'JavaScript'],
		category: ['All'],
		github:
			'https://github.com/Ahmed3zzeldeen/omnifood',
		isPrivate: false,
		liveUrl: 'https://omnifood-ahmed3zzeldeen.netlify.app/',
	},
	{
		imgUrl: './Images/work/web/work-9.png',
		name: 'Saad-Eldeen-Portfolio',
		description:
			'Saad Eldeen is a portfolio website showcasing the skills and works of digital fine artist Saad, built using HTML, CSS, and JavaScript. The website features a clean and modern layout, with a homepage introducing Saad and his work, a portfolio section showcasing his art organized into different categories, a blog section, and a contact page. Overall, Saad Eldeen effectively connects Saad with potential clients and members of the art community.',
		technology: ['HTML', 'CSS', 'JavaScript', 'Github', 'figma'],
		category: ['All', 'Websites'],
		github:
			'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/qr-code-component-main',
		isPrivate: true,
		liveUrl: 'https://saad-eldeen-portfolio-ahmed3zzeldeen.netlify.app/'
	},
	{
		imgUrl: './Images/work/web/work-8.png',
		name: 'Diamond-speed-text-game',
		description:
			'It\'s a website that tests your typing speed using a game style UI. The user types the displayed text as quickly and accurately as possible, and the website calculates their words per minute (WPM) score. The website features a diamond theme and includes animations and sound effects to enhance the user experience.',
		technology: ['HTML', 'CSS', 'JavaScript', 'figma'],
		category: ['All', 'Websites', 'Games'],
		github:
			'https://github.com/Ahmed3zzeldeen/Diamond-Speed-Text-Game',
		isPrivate: false,
		liveUrl: 'https://ahmed3zzeldeen.github.io/Diamond-Speed-Text-Game/'
	},
	{
		imgUrl: './Images/work/web/work-7.png',
		name: 'front-end-challenges',
		description:
			'It\'s a website repository contains some of My submissions for the Front-End Mentor challenges website.',
		technology: ['HTML', 'CSS', 'JavaScript', 'Github', 'figma'],
		category: ['All', 'Websites', 'Challenges'],
		github:
			'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/',
		isPrivate: false,
		liveUrl: 'https://ahmed3zzeldeen.github.io/Frontend-Mentor-Challenges'
	},

	{
		imgUrl: './Images/work/web/work-6.png',
		name: 'clipboard-landing-page-master',
		description:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology: ['HTML', 'CSS', 'JavaScript', 'Github', 'figma'],
		category: ['Websites', 'Challenges', 'Products'],
		github:
			'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/clipboard-landing-page-master',
		isPrivate: false,
		liveUrl: 'https://ahmed3zzeldeen.github.io/Frontend-Mentor-Challenges/clipboard-landing-page-master'
	},
	{
		imgUrl: './Images/work/web/work-5.png',
		name: 'fylo-landing-page',
		description:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology: ['HTML', 'CSS', 'JavaScript', 'Github', 'figma'],
		category: ['Websites', 'Challenges'],
		github:
			'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/fylo-landing-page',
		isPrivate: false,
		liveUrl: 'https://ahmed3zzeldeen.github.io/Frontend-Mentor-Challenges/fylo-landing-page'
	},
	{
		imgUrl: './Images/work/web/work-4.png',
		name: 'huddle-landing-page',
		description:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology: ['HTML', 'CSS', 'Github', 'figma'],
		category: ['Websites', 'Challenges'],
		github:
			'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/huddle-landing-page',
		isPrivate: false,
		liveUrl: 'https://ahmed3zzeldeen.github.io/Frontend-Mentor-Challenges/huddle-landing-page'
	},
	{
		imgUrl: './Images/work/web/work-3.png',
		name: 'base-apparel-coming-soon-master',
		description:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology: ['HTML', 'CSS', 'JavaScript', 'Github', 'figma'],
		category: ['Challenges'],
		github:
			'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/base-apparel-coming-soon-master',
		isPrivate: false,
		liveUrl: 'https://ahmed3zzeldeen.github.io/Frontend-Mentor-Challenges/base-apparel-coming-soon-master/'
	},
	{
		imgUrl: './Images/work/web/work-2.png',
		name: 'nft-preview-card-component-main',
		description:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology: ['HTML', 'CSS', 'Github', 'figma'],
		category: ['Challenges'],
		github:
			'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/nft-preview-card-component-main',
		isPrivate: false,
		liveUrl: 'https://ahmed3zzeldeen.github.io/Frontend-Mentor-Challenges/nft-preview-card-component-main/'
	},
	{
		imgUrl: './Images/work/web/work-1.png',
		name: 'qr-code-component-main',
		description:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit libero sequi architecto quisquam esse placeat, quas quo sapiente voluptas?',
		technology: ['HTML', 'CSS', 'Github', 'figma'],
		category: ['Challenges'],
		github:
			'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/qr-code-component-main',
		isPrivate: false,
		liveUrl: 'https://ahmed3zzeldeen.github.io/Frontend-Mentor-Challenges/qr-code-component-main/'
	}

];

const list = document.getElementById('work-gallery');
isPrivate: false,
	projects.forEach(({ imgUrl, name, description, technology, github, liveUrl, isPrivate, category }, i) => {
		const listItem = document.createElement('div');
		listItem.classList.add('cont-work');
		listItem.classList.add('aein-move-hidden');
		listItem.classList.add(`${(i % 2 === 0) ? 'from-left' : 'from-right'}`);
		listItem.setAttribute('data-category', `${createCategory(category)}`)
		listItem.innerHTML = `
			<div class="cont-work-img ${(i % 2 === 0) ? "aein-move-hidden from-left" : "aein-move-hidden from-right"}">
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
					<a class="btn" href="${liveUrl}" target="_blank">Preview  <i class="fas fa-eye"></i></a>
				${(isPrivate) ?
				`<a class="btn btn-private"> It's Private <i class="fa-solid fa-lock"></i></a>`
				: `<a class="btn" href="${github}" target="_blank">Source Code  <i class="fab fa-github"></i></a>`}
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


shuffleItems.forEach(shuffleItem => {
	shuffleItem.onclick = function () {

	}
});

shuffleItems.forEach(shuffleItem => {
	shuffleItem.onclick = function () {
		arrayWork.forEach(WorkItem => {
			let arrOfCata = WorkItem.getAttribute('data-category').split(" ");
			if (arrOfCata.includes(shuffleItem.getAttribute('data-category'))) {
				WorkItem.classList.remove('hide');
			} else {
				WorkItem.classList.add('hide');
			}
		});
	}
});




arrayWork.forEach((WorkItem, i) => {
	let moreBtn = document.querySelector('.more-btn');
	let lessBtn = document.querySelector('.less-btn');

	moreBtn.addEventListener('click', function showMore() {
		if (WorkItem.classList.contains('hide')) {
			WorkItem.classList.remove('hide');
			moreBtn.style.display = "none";
			lessBtn.style.display = "block";
		}
	}
	);
	if (i > 2) {
		lessBtn.addEventListener('click', function showLess() {
			let arrOfCategory = WorkItem.getAttribute('data-category').split(" ");
			if (arrOfCategory.includes('All')) {
				WorkItem.classList.remove('hide');
			} else {
				WorkItem.classList.add('hide');
			}
		}
		);
	}


});



function createTechItems(technology) {
	const ulItem = document.createElement('ul');
	for (let i = 0; i < technology.length; i++) {
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
		result += category[i] + " ";
	}
	return result;
}
function formatName(name) {
	return name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
