// Select the elements on the page - the canvas and the shake buttons

  // The canvas

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

  let x = Math.floor(Math.random() * width)
  let y = Math.floor(Math.random() * height)

  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.lineWidth = 10

  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x, y)
  ctx.stroke()
// write a draw function

function draw(options){
  console.log(options)
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

// listen for arrow keys

window.addEventListener('keydown', handleKey)
window.addEventListener('keyup', handleKey)
window.addEventListener('keyright', handleKey)
window.addEventListener('keyleft', handleKey)
