mainObj.header =
{
	headerMenuList:document.querySelector('._headerMenuList'),
	headerMenuBtn:document.querySelector('._headerMenuBtn'),
	headerPhoneWrap:document.querySelector('._headerPhoneWrap'),
	showMenu()
	{
		console.log(this.headerMenuBtn)
		if(this.headerMenuList.classList.contains('active'))
		{
			this.headerMenuList.classList.remove('active')
			this.headerMenuBtn.classList.remove('active')
			// this.btnNameMenuTwo.classList.remove('active')
		}
		else
		{
			this.headerMenuList.classList.add('active')
			this.headerMenuBtn.classList.add('active')
			// this.btnNameMenuTwo.classList.remove('active')
		}
	},
	showTel()
	{
		console.log(this.headerPhoneWrap)
		if(this.headerPhoneWrap.classList.contains('active'))
		{
			this.headerPhoneWrap.classList.remove('active')
		}
		else
		{
			this.headerPhoneWrap.classList.add('active')
		}
	}
}