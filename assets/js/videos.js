//get thesis video area
const video = document.getElementById("videoWindow");
const videoTitle = document.getElementById("videoTitle");
const videoText = document.getElementById("videoText");

//get list of other videos
const videoList = document.getElementById("videoList");

//video object data (representing a separate JSON file)
const video1 = {
	video: `<source src="/assets/videos/thesis.mp4" type="video/mp4">`,
	img: `/assets/images/information-campus.jpg`,
	alt: `campus walk`,
	title: `Reimagine Urban`,
	text: `"Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."`,
	featured: true,
	key: "video_1",
};

const video2 = {
	video: `<source src="/assets/videos/thesis.mp4" type="video/mp4">`,
	img: `/assets/images/thesis-fisma.jpg`,
	alt: `Design Wireframe Tools`,
	title: `Fisma: Design and Prototype`,
	text: `Designer showcase of new prototype product`,
	featured: false,
	key: "video_2",
};

const video3 = {
	video: `<source src="/assets/videos/thesis.mp4" type="video/mp4">`,
	img: `/assets/images/thesis-now-and-then.jpg`,
	alt: "Empire State Building",
	title: `Now and Then`,
	text: `Research study about New York`,
	featured: false,
	key: "video_3",
};

let thesisVideos = [video1, video2, video3];
let list = [];

function setFeatured(featured) {
	video.innerHTML = featured.video;
	videoTitle.innerHTML = featured.title;
	videoText.innerHTML = featured.text;
}

function buildVideoList(item) {
	return `<div class="feature-item" id="${item.key}" onClick="putVideo(event, this.id)"><img class="feature-img" src=${item.img} alt=${item.alt}><div class="feature-info"><h3 class="feature-title">${item.title}</h3><p class="feature-text">${item.text}</p></div></div>`;
}

function putVideo(event, clicked_video) {
	//remove clicked from DOM & remove from list
	event.target.remove();
	const findClicked = list.findIndex((element) =>
		element.includes(clicked_video)
	);
	list.splice(findClicked, findClicked + 1);

	for (listing of thesisVideos) {
		//unset existing featured
		if (listing.featured === true) {
			listing.featured = false;
		}

		//set featured to clicked & add to DOM
		if (listing.key === clicked_video) {
			listing.featured = true;
			setFeatured(listing);
		}

		//build new list from unclicked, unfeatured
		else if (!listing.featured) {
			if (
				list.filter((element) => element.includes(listing.key)).length === 0
			) {
				list.push(buildVideoList(listing));
				videoList.innerHTML = list.join("");
			}
		}
	}
}

function setVideos(videos) {
	for (obj of videos) {
		//find featured video first
		if (obj.featured) {
			setFeatured(obj);
		} else {
			//build .feature-item with object & add to DOM
			list.push(buildVideoList(obj));
			videoList.innerHTML = list.join("");
		}
	}
}

//set initial state
setVideos(thesisVideos);
