// Select the elements on the page - the canvas and the shake buttons

  // The canvas

  const MOVE_AMOUT = 10
  const canvas = document.querySelector('#etch-a-sketch')
  const shakeBtn = document.querySelector('.shake')
  const ctx = canvas.getContext('2d')
  console.log(ctx)


// Set our canvas for drawing - see mdn

  const width = canvas.width
  const height = canvas.height

  // Destructuring the above. Make a variable called height and width from
  // the same properties on our canvas:
  // const { width, height } = canvas;

  let huelk
  let x = Math.floor(Math.random() * width)
  let y = Math.floor(Math.random() * height)

  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.lineWidth = MOVE_AMOUT

  let hue = 0
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x, y)
  ctx.stroke()
// write a draw function

function draw({key}){
  console.log(key)
  hue += 1
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath()
  ctx.moveTo(x, y)

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUT
      break
      // default:
      // break
    case 'ArrowDown':
      y += MOVE_AMOUT
      break
    case 'ArrowLeft':
      x -= MOVE_AMOUT
      break
    case 'ArrowRight':
      x += MOVE_AMOUT
      break
  }

  ctx.lineTo(x, y)
  ctx.stroke()
}

  // Destructuring the above:
      // function draw({ key }) {
      //   console.log(options)
      // }

// write a handler for the keys

function handleKey(e) {
  if(e.key.includes('Arrow')){
      e.preventDefault() // so page doesn't scroll
      console.log(e.key)
      draw({key: e.key})
  }
}

// clear/ shake function

function shake() {
  console.log('shake button clicked')
  canvas.classList.add('shake')
  ctx.clearRect(0, 0, width, height)
  canvas.addEventListener('animationend', function(){
    canvas.classlist.remove('shake')
  },
  {
    once: true
  })
}

shakeBtn.addEventListener('click', shake)

// listen for arrow keys

window.addEventListener('keydown', handleKey)
window.addEventListener('keyup', handleKey)
window.addEventListener('keyright', handleKey)
window.addEventListener('keyleft', handleKey)
