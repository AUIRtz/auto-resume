var content = `
  /* 大家好，我是李凤年
   * 看到大家都在写简历，我决定也给自己写一份简历好了
   */
  /* 为了不显得那么突兀，我先加个过渡效果好了 */
  *{ transition: all 0.3s; }
  /* 看着统一黑色的代码果然还是有点不习惯，那我加个代码高亮好了 */
  .token.selector{ color: rgb(133,153,0); }
  .token.property{ color: rgb(187,137,0); }
  .token.function{ color: rgb(42,161,152); }
`

writeCode('', content, () =>{
  createPaper()
})

function writeCode(prefix, content, fn){
  domCode = document.querySelector('#code')
  let n = 0
  let timerId = setInterval(() =>{
    n +=1    
    domCode.innerHTML = Prism.highlight(content.substring(0, n), Prism.languages.css)
    styleTag.innerHTML = content.substring(0, n)
    if(n >= content.length){
      window.clearInterval(timerId)
      fn && fn.call()
    }
  },30)  
}


function createPaper(){
  let paper = document.createElement('div')
  let content = document.createElement('pre')
  paper.id = 'paper'
  content.className = 'content'
  document.appendChild(paper)
  paper.appendChild(content)
}