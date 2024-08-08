const BASE_URL = window.location.protocol + '//' + window.location.host;
const PATH_URL = window.location.pathname;
const FULL_URL = window.location.href;
const GET_PARAM = (key) => {
	return new URL(FULL_URL).searchParams.get(key);
};


// PARTIALS
 
console.log('%cMade by passion', 'background:#da4648;color:#fff;padding:10px;font-weight:bold;')

 
// UTILS
function fadeOut(element, soft = false, callback = null) {
	if(!element) {
		return false;
	}

	element.style.opacity = 1;

	(function fade() {
		if((element.style.opacity -= 0.1) < 0) {
			if(soft) {
				element.style.display = "none";
			} else {
				element.remove();
			}

			if(callback instanceof Function) {
				callback();
			} else if(window[callback] instanceof Function) {
				window[callback]();
			}
		} else {
			requestAnimationFrame(fade);
		}
	})();

}

function smoothScroll(element) {
	if(element) {
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

function smoothScrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

document.addEventListener('click', event => {
	if(event.target.tagName !== 'A') {
		return false;
	}
	const anchor = event.target;
	const anchor_href = anchor.getAttribute('href');

	if(anchor_href === '#') {
		event.preventDefault();
		smoothScrollToTop();
	}
	else if(anchor_href.charAt(0) === '#' || (anchor_href.charAt(0) === '/' && anchor_href.charAt(1) === '#')) {
		if(!anchor.hash) {
			return false;
		}

		const target = document.querySelector(anchor.hash);
		if(target) {
			event.preventDefault();
			smoothScroll(target);
		}
	}
});

window.onload = () => {
	document.querySelectorAll('img').forEach(image => {
		if(image.complete && typeof image.naturalWidth != 'undefined' && image.naturalWidth <= 0) {
			image.src = BASE_URL + '/img/no-image.jpg';
		}
	});
};


document.addEventListener('DOMContentLoaded', () => {
	// PARTIALS
	document.querySelectorAll('a').forEach(anchor => {
	if(anchor.hasAttribute('href') && anchor.href.startsWith('tel:')) {
		anchor.href = 'tel:' + anchor.href.replaceAll(/[^\d+]/g, '');
	}
});

	document.querySelectorAll('a').forEach(anchor => {
	if(anchor.hasAttribute('target') && anchor.getAttribute('target') === '_blank') {
		anchor.setAttribute('rel', 'noopener noreferrer nofollow');
	}
});

	document.addEventListener('contextmenu', event => {
	if(event.target.nodeName === 'IMG') {
		event.preventDefault();
	}
});

	/*document.querySelectorAll('table').forEach(table => {
	if(!table.parentElement.classList.contains('table-responsive')) {
		table.outerHTML = '<div class="table-responsive">' + table.outerHTML + '</div>';
	}
});
 */
});
 



const toggleBall = document.querySelector('.toggle-section');
const pricingCards = document.querySelectorAll('.pricing-card');
toggleBall.addEventListener('click', () => {
    toggleBall.classList.toggle('active');

    pricingCards.forEach(card => {
        card.classList.toggle('yearly');
      });
}) 


var mobileMenuOpened = document.querySelector('.mobile-toggle');
var mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOpen = document.querySelector('.open-toggle');
const mobileMenuClose = document.querySelector('.close-toggle');
const main = document.querySelector('.main');
const header = document.querySelector('#header');

mobileMenuOpened.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuClose.classList.toggle('active');
    mobileMenuOpen.classList.toggle('active');
    main.classList.toggle('active');
    header.classList.toggle('active');
});
 
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG5jb25zdCBQQVRIX1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuY29uc3QgRlVMTF9VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuY29uc3QgR0VUX1BBUkFNID0gKGtleSkgPT4ge1xyXG5cdHJldHVybiBuZXcgVVJMKEZVTExfVVJMKS5zZWFyY2hQYXJhbXMuZ2V0KGtleSk7XHJcbn07XHJcblxyXG5cclxuLy8gUEFSVElBTFNcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2hlYWRlci5qcycpIFxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvd2F0ZXJtYXJrLmpzJylcclxuIFxyXG4vLyBVVElMU1xyXG5AQGluY2x1ZGUoJ3V0aWwvZmFkZS1vdXQuanMnKVxyXG5AQGluY2x1ZGUoJ3V0aWwvc21vb3RoLXNjcm9sbC5qcycpXHJcbkBAaW5jbHVkZSgndXRpbC9yZXBsYWNlLWJyb2tlbi1pbWFnZS5qcycpXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cdC8vIFBBUlRJQUxTXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL2Zvcm1hdC10ZWwtbGluay5qcycpXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL2V4dGVybmFsLWxpbmstbm9yZWZlci5qcycpXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL3Byb3RlY3QtaW1hZ2UuanMnKVxyXG5cdC8qQEBpbmNsdWRlKCdwYXJ0aWFsL3Jlc3BvbnNpdmUtdGFibGUuanMnKSAqL1xyXG59KTtcclxuIFxyXG5cclxuQEBpbmNsdWRlKCdwYXJ0aWFsL2luaXQuanMnKSBcclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
