let canvas = document.querySelector('canvas')
let box = document.querySelector('.box')
var cvs = canvas.getContext("2d");
let dots = []
let dot = []
let mx = 0
let my = 0
let mr = []
let key = false
var everyPer = 0
let cont = 0
let contc = 0
let rm = (x, y) => Math.floor(Math.random() * (y - x)) + x
let cor = ['#60bdaf', '#a1d8b1', '#edfcc2', '#f88aaf', '#dea26c', '#6f4837', '#3d272a', '#05080d', '#f85c05',
    '#5f1400', '#b0e2b1', '#f7e432', '#28737c', '#4aab5e', '#bb977d', '#e9de4c'
]
let bgc = ['#455655', '#22353c', '#5f0400', '#062f4f']
canvas.width = innerWidth
canvas.height = innerHeight
for (let i = 0; i < 800; i++) {
    let x = rm(-100, canvas.width + 100)
    let y = rm(-100, canvas.height + 100)
    let xa = (Math.random() * 2 - 1) / 1.5;
    let ya = (Math.random() * 2 - 1) / 1.5;
    dots.push({
        x,
        y,
        xa,
        ya
    })
}

class Boll {
    constructor(x, y, r, c, xa, ya) {
        this.x = x
        this.y = y
        this.r = r
        this.c = c
        this.xa = xa
        this.ya = ya
    }

    static draw(x, y, r, c, xa, ya) {
        var x1 = (xa * Math.cos(everyPer)) + x;
        var y1 = (ya * Math.sin(everyPer)) + y;
        cvs.beginPath();
        cvs.scale(1, 1)
        cvs.fillStyle = c;
        cvs.arc(x1, y1, r, 0, Math.PI * 2);
        cvs.fill();
        cvs.closePath();
    }
    static start() {
        cvs.clearRect(0, 0, canvas.width, canvas.height);
        dot.forEach(function (e, i) {
            if (key) {
                if (mx - e.x > -80 && mx - e.x < 80 && my - e.y > -80 && my - e.y < 80) {
                    if (e.r < mr[i] * 3) {
                        e.r++
                    }
                    Boll.draw(e.x, e.y, e.r, e.c, e.xa, e.ya)
                } else {
                    if (e.r > mr[i]) {
                        e.r--
                    }
                    Boll.draw(e.x, e.y, e.r, e.c, e.xa, e.ya)
                }
            } else {
                Boll.draw(e.x, e.y, e.r, e.c, e.xa, e.ya)
            }

        })
        window.requestAnimationFrame(Boll.start);
        everyPer += Math.PI / 120;
    }

}
dots.forEach(function (e, i) {
    let rmx = rm(-70, 100)
    let bo = new Boll(e.x, e.y, rm(1, 10), cor[rm(0, cor.length)], rmx, rmx)
    mr.push(bo.r)
    dot.push(bo)
})

box.addEventListener('mousemove', function (e) {
    key = true
    mx = Math.floor(e.offsetX)
    my = Math.floor(e.offsetY)
})
box.addEventListener('mouseout', function () {
    key = false
})

box.addEventListener('click', function () {
    if (cont + 4 >= cor.length || contc >= bgc.length) {
        contc = 0
        cont = 0
    } else {
        contc++
        cont += 4
    }

    dot.forEach((e, i) => {
        e.c = cor[rm(cont, cont + 4)]
    })
    box.style.background = bgc[contc]
})
setTimeout(()=>{
    Boll.start()

},1500)