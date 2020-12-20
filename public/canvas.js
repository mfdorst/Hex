const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')

export function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
