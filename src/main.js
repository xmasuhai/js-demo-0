const div1 = document.createElement('div')
div1.className = 'demo'
document.body.appendChild(div1)

let dragging = false
let lastX
let lastY

// 按下鼠标 记录 鼠标位置 clientX clientY
div1.onmousedown = (e) => {
  lastX = e.clientX
  lastY = e.clientY
  dragging = true
}

document.onmousemove = (e) => {
  if (dragging === true) {
    // 记录移动后鼠标位置坐标的差值
    const deltaX = e.clientX - lastX
    const deltaY = e.clientY - lastY
    // 设定 元素的移动量 element.style.top element.style.left
    const left = parseInt(div1.style.left, 10) || 0
    const top = parseInt(div1.style.top, 10) || 0

    // 阻止用户把div搞不见，即位置X Y的数值不低于零
    const resultX = left + deltaX
    const resultY = top + deltaY

    // 设定 元素的定位样式
    div1.style.left = `${resultX}px`
    div1.style.top = `${resultY}px`

    // 更新 lastX lastY 的位置
    lastX = e.clientX
    lastY = e.clientY

    /*
    console.log(['e.clientX:', e.clientX, 'e.clientY:', e.clientY])
    console.log([deltaX, deltaY, lastX, lastY])
    */
  }
}

div1.onmouseup = () => {
  dragging = false
}
// 不放在document.body上
