/*
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBarry: function () {
		return navigator.userAgent.match(/BlackBarry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBarry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		)
	},
}
if (isMobile.any()) {
	document.body.classList.add('_touch')
	let menuArrows = document.querySelectorAll('.menu__arrow')
	if (menuArrows.length > 0) {
		for (let i = 0; i < menuArrows.length; i++) {
			const menuArrow = menuArrows[i]
			menuArrow.addEventListener('click', function (e) {
				menuArrow.parentElement.classList.toggle('_active')
			})
		}																																						
	}
} else {
	document.body.classList.add('_pc')
}

const burger = document.querySelector('.menu__burger')
const list = document.querySelector('.menu__list')
const row = document.querySelector('.header__row')
const header = document.querySelector('.header')

burger.addEventListener('click', function () {
	document.body.classList.toggle('_lock')
	header.classList.toggle('_lock')
	row.classList.toggle('_active')
	list.classList.toggle('_active')
})
*/

const btn = document.querySelector('.dark-mode-button')

//! 1. проверка тёмной теми в системы
if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark').matches
) {
	const isDark = document.body.classList.add('dark')
	btn.classList.add('_active')
}

//! 2. проверка тёмной теми в localStorage
if (localStorage.getItem('darkMode') == 'dark') {
	const isDark = document.body.classList.add('dark')
	btn.classList.add('_active')
} else if (localStorage.getItem('darkMode') == 'light') {
	const isDark = document.body.classList.remove('dark')
	btn.classList.remove('_active')
}

// если меняется системные настройки
window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', e => {
		const newColorScheme = e.matches ? 'dark' : 'light'

		if (newColorScheme === 'dark') {
			const isDark = document.body.classList.add('dark')
			btn.classList.add('_active')
			localStorage.setItem('darkMode', 'dark')
		} else {
			const isDark = document.body.classList.remove('dark')
			btn.classList.remove('_active')
			localStorage.setItem('darkMode', 'light')
		}
	})

// включение ночного режима
btn.addEventListener('click', e => {
	btn.classList.toggle('_active')
	const isDark = document.body.classList.toggle('dark')

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem('darkMode', 'light')
	}
})

const mainBtn = document.querySelector('.main__btn')
if (mainBtn) {
	const main = document.querySelector('.main')
	mainBtn.addEventListener('click', () => main.classList.toggle('_active'))
}
