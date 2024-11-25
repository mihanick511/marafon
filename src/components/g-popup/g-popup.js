mainObj.gPopup =
{
	overlay: document.querySelector('._overlay'),
	body: document.querySelector('body'),
	html: document.querySelector('html'),
	val: document.querySelector('._value'),
	clientsCont:
	[
		{
			title: 'норникель'
		},
		{
			title: 'кольская гмк'
		},
		{
			title: 'русГидро'
		},
		{
			title: 'фосагро'
		},
		{
			title: 'гидроМонтаж'
		},
	],
	addActionInOpen()
	{
		this.overlay.classList.add('open')
		this.body.style.overflow = 'hidden'
		this.html.style.overflow = 'hidden'
	},
	open(contentClass, idx)
	{
		event.preventDefault()
		let popupHtml = document.querySelector(contentClass)
		if(idx)
			this.val.innerHTML = this.clientsCont[idx].title
		this.addActionInOpen()
		console.log(popupHtml)
		this.overlay.innerHTML = popupHtml.innerHTML
	},
	close()
	{
		this.overlay.classList.remove('open')
		this.body.style.overflow = 'auto'
		this.html.style.overflow = 'auto'
		this.val.innerHTML = 'Возможный контент'

	}
}