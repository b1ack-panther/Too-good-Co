// const scroll = new LocomotiveScroll({
// 	el: document.querySelector("#page2"),
// 	smooth: true,
// });

// function locomotiveAnimation() {
// 	gsap.registerPlugin(ScrollTrigger);

// 	const locoScroll = new LocomotiveScroll({
// 		el: document.querySelector("#main"),
// 		smooth: true,
// 	});
// 	locoScroll.on("scroll", ScrollTrigger.update);

// 	ScrollTrigger.scrollerProxy("#main", {
// 		scrollTop(value) {
// 			return arguments.length
// 				? locoScroll.scrollTo(value, 0, 0)
// 				: locoScroll.scroll.instance.scroll.y;
// 		},
// 		getBoundingClientRect() {
// 			return {
// 				top: 0,
// 				left: 0,
// 				width: window.innerWidth,
// 				height: window.innerHeight,
// 			};
// 		},
// 		pinType: document.querySelector("#main").style.transform
// 			? "transform"
// 			: "fixed",
// 	});

// 	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// 	ScrollTrigger.refresh();
// }

// locomotiveAnimation();

const cursorCircle = (container, pointer, opaque, bgColor) => {
	const videocon = document.querySelector(`${container}`);
	const playbtn = document.querySelector(`${pointer}`);

	videocon.addEventListener("mouseenter", function () {
		gsap.to(playbtn, 0.5, {
			scale: 1,
			opacity: opaque,
			backgroundColor: bgColor,
		});
	});
	videocon.addEventListener("mousemove", function (event) {
		gsap.to(playbtn, 0.5, {
			left: event.clientX - playbtn.offsetWidth / 2,
			top: event.clientY - playbtn.offsetHeight / 2,
		});
		// playbtn.style.transform = "translateX("
	});
	videocon.addEventListener("mouseleave", function () {
		gsap.to(playbtn, 0.5, {
			scale: 0,
			opacity: 0,
		});
	});
};

cursorCircle("#video-container", "#play", 1, "black");
cursorCircle("#page3", "#cursor", 0.4, "lightblue");

// const scroll = new LocomotiveScroll({
// 	el: document.querySelector("#main"),
// 	smooth: true,
// });

gsap.from(".hero h1", {
	y: "100%",
	delay: 0.5,
	duration: 0.5,
	stagger: 0.2,
});

const underline_motion = (underline, underline_move) => {
	const elementToAnimate = document.querySelector(`${underline}`);
	elementToAnimate.addEventListener("mouseover", function () {
		gsap.fromTo(
			`${underline_move}`,
			{
				x: -200,
			},
			{
				x: 200,
				duration: 1,
			}
		);
	});
};

underline_motion(".underline", "#underline-move");
underline_motion("#underline2", "#underline-move2");

const animatedElement = document.querySelector("#nav-part1");

function handleScroll() {
	const scrollPosition = window.scrollY;

	gsap.to("#links", {
		y: -scrollPosition,
	});
	if (scrollPosition > 100) {
		gsap.to("#second-svg", {
			duration: 0.3,
			scale: 1,
			// transform: "translateY(100px)",
		});

		gsap.to("#links", {
			// duration: 0.3,
			y: -150,
		});
	} else {
		gsap.to("#second-svg", {
			duration: 0.3,
			scale: 0,
		});

		gsap.to("#links", {
			// duration: 0,
			y: 0,
		});
	}
}

// Add event listener for scroll
window.addEventListener("scroll", handleScroll);

function motion(element) {
	function handleIntersection(entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				gsap.to(element, {
					y: 0,
					opacity: 1,
				});
			}
		});
	}

	const observer = new IntersectionObserver(handleIntersection);

	observer.observe(element);
}

const page4img = document.querySelector(".images");
motion(page4img);

const page2img1 = document.querySelector("#child1");
motion(page2img1);

const page2img2 = document.querySelector("#child2");
motion(page2img2);

const page2img3 = document.querySelector("#child3");
motion(page2img3);

const page2img4 = document.querySelector("#child4");
motion(page2img4);

motion(document.querySelector("#elem1 img"));
motion(document.querySelector("#elem2 img"));
motion(document.querySelector("#elem3 img"));

const menubtn = document.querySelector(".ri-menu-line");
const menubar = document.querySelector(".menu");
const cartbtn = document.querySelector(".ri-shopping-cart-line");
const cartbar = document.querySelector(".cart");

let togglemenu = 0,
	togglecart = 0;

const menufunction = () => {
	togglemenu = !togglemenu;
	if (togglemenu) {
		gsap.to(menubar, {
			duration: 0.7,
			y: 0,
			ease: "power2.inOut",
		});
		document.querySelector("svg").style.color = "white";
		gsap.fromTo(
			".big div, .connect div, .gritties div",
			{
				"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
				// opacity: 0,
				y: "100%",
			},
			{
				"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				duration: 1,
				stagger: 0.05,
				y: 0,
				opacity: 1,
				ease: "power2.inOut",
			}
		);
	} else {
		gsap.to(menubar, {
			duration: 0.7,
			y: "-100%",
			ease: "power.outIn",
		});
		document.querySelector("svg").style.color = "black";
	}
};

const cartfunction = () => {
	togglecart = !togglecart;
	if (togglecart) {
		gsap.to(cartbar, {
			duration: 0.7,
			y: 0,
			ease: "power2.inOut",
		});
		document.querySelector("svg").style.color = "white";
		gsap.fromTo(
			".space *",
			{
				"clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
				// opacity: 0,
				y: "-100%",
			},
			{
				"clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				duration: 1,
				stagger: 0.05,
				delay: 0.3,
				y: 0,
				opacity: 1,
				ease: "power2.inOut",
			}
		);
	} else {
		gsap.to(cartbar, {
			duration: 0.7,
			y: "-100%",
			ease: "power.outIn",
		});
		document.querySelector("svg").style.color = "black";
	}
};

menubtn.addEventListener("click", () => {
	if (togglecart) cartfunction();
	menufunction();
});
cartbtn.addEventListener("click", () => {
	if (togglemenu) menufunction();
	cartfunction();
});

gsap.to(".line-move1", {
	duration: 9,
	x: -1050,
	ease: "linear",
	repeat: -1,
});
gsap.to(".line-move2", {
	duration: 9,
	x: 1050,
	ease: "linear",
	repeat: -1,
});


const element = document.getElementById("svg5");
function handleIntersection(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			console.log("hii");
			gsap.to("#svg5 path", {
				rotation: 360,
				duration: 0.5,
				ease: "power2.in",
				stagger: 0.05
			});
		}
	});
}
const observer = new IntersectionObserver(handleIntersection);

observer.observe(element);

