export class Canvas{

    constructor( selector ) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
      
    }

    init() {
        this.render()
    }

    render() {
        alert('canvas')
      const canvasContainer = document.createElement('div')
      canvasContainer.classList.add('chartContainer')
        const canvas = document.createElement('canvas')
        canvas.setAttribute('id', 'myChartToday')
      
        
        this.container.appendChild(canvasContainer)
        canvasContainer.appendChild(canvas)
    }

}

export default Canvas