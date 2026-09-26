function initSliders() {
	if (document.querySelector('.thumbs-slider') && document.querySelector('.product-slider')) {
		const thumbsSlider = new Swiper('.thumbs-slider', {
			spaceBetween: 10,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true,
		})

		const productSlider = new Swiper('.product-slider', {
			spaceBetween: 10,
			grabCursor: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			thumbs: {
				swiper: thumbsSlider,
			},
		})
	}
}

window.addEventListener('load', initSliders)

// переключение параметров при выборе фасовки
const tabs = document.querySelectorAll('.spec-tab')
const priceEl = document.getElementById('price')
const oldPriceEl = document.getElementById('old-price')
const artEl = document.getElementById('art')
const availabilityEl = document.getElementById('availability')

// форматирование числа: 1432 -> "1 432"
const formatPrice = (value) => {
	return Number(value).toLocaleString('ru-RU')
}

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		tabs.forEach((t) => t.classList.remove('active'))
		tab.classList.add('active')

		priceEl.textContent = formatPrice(tab.dataset.price)
		oldPriceEl.textContent = formatPrice(tab.dataset.oldPrice)
		artEl.textContent = tab.dataset.art
		availabilityEl.textContent = tab.dataset.availability
	})
})
