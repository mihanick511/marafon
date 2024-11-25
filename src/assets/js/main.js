"use strict"
window.onload = function()
{
	mainObj.inition()
}
let mainObj =
{
	inition()
	{
	
	},
	actionClass(tags, className, action)
	{
		tags.forEach((el)=>
		{
			action === 'add' ?
			el.classList.add(className):
			el.classList.remove(className)
		})
	}
	
}