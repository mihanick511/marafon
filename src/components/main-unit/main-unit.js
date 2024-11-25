mainObj.pag =
{
  itms: document.querySelectorAll('._pagItem'),
  mainItms: document.querySelectorAll('._mainItem'),
  nextBtn: document.querySelector('._nextBtn'),
  showBtn: document.querySelector('._showBtn'),
  pagDots: document.querySelector('._pagDots'),
  mul: document.querySelector('._mul'),
  idxFirst: 0,
  step: 4,
  count: 1,
  start: 1,
  init()
  {
    let arr = []
    this.show(3)
    this.itms.forEach((el)=>
    {
      arr.push(el)
    })
    let filt = arr.filter(el => +el.innerHTML > 4)
    this.hideEl(filt)
    this.nextBtn.addEventListener('click', ()=>
    {
      this.itms[this.idxFirst].style.display = 'none'
      this.itms[this.idxFirst + this.step].style.display = 'block'
      if(this.idxFirst > this.step)
      {
        this.pagDots.style.display = 'none'
        this.mul.style.display = 'none'
        return;
      }
      this.idxFirst++
    })
  },
  hideEl(arrTag)
  {
    arrTag.forEach((tag)=>
    {
      tag.style.display = 'none'
    })
  },
  show(co)
  {
    event.preventDefault()
    if(!this.showBtn) return;
    let arr = []
    this.mainItms.forEach((el)=>
    {
      arr.push(el)
    })
    let filt = arr.filter((el,idx) => idx > 2)
    this.hideEl(filt)
    this.showBtn.addEventListener('click',()=>
    {
      this.count += co
      for(let i = this.start; i < this.count; i++)
      {
        this.mainItms[i].style.display = 'block'
      }
    })
  }

}