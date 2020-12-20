import { range } from './util.js'
import { ctx } from './canvas.js'

const HEX_POINTS = [
  [1, 0],
  [0.5, 0.866],
  [-0.5, 0.866],
  [-1, 0],
  [-0.5, -0.866],
  [0.5, -0.866],
]

export function drawFrame(gameState) {
  const { scale, pan } = gameState
  for (const x of range(0, 9)) {
    for (const y of range(0, 9)) {
      const yOffset = x % 2 === 0 ? 0.5 : 0
      drawPoly([pan.x + x * scale * 1.5, pan.y + (y + yOffset) * scale * 1.732], scale)
    }
  }
}

function drawPoly(center, size) {
  const [cx, cy] = center
  ctx.beginPath()
  ctx.moveTo(cx + size, cy)
  for (const point of HEX_POINTS) {
    const [x, y] = point
    ctx.lineTo(cx + size * x, cy + size * y)
  }
  ctx.strokeStyle = '#bbb'
  ctx.lineWidth = 2
  ctx.closePath()
  ctx.stroke()
}

function generateHexPoints() {
  return range(0, 5).map(i => [Math.cos((i * 2 * Math.PI) / 6), Math.sin((i * 2 * Math.PI) / 6)])
}
