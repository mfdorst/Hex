import { drawFrame } from './draw.js'
import { resizeCanvas } from './canvas.js'

const gameState = {
  scale: 50,
  pan: {
    x: 100,
    y: 100,
  },
}

resizeCanvas()

drawFrame(gameState)

window.onresize = _ => {
  resizeCanvas()
  drawFrame(gameState)
}
