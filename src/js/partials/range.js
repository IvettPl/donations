window.addEventListener("DOMContentLoaded", function() {
    let range1 = new rSlider({
        element: "#border",
        tick: 1
    }),
    range2 = new rSlider({
        element: "#radius",
        tick: 1
    })
});

class rSlider {
    constructor(args) {
        this.el = document.querySelector(args.element);
        this.min = +this.el.min || 1;
        this.max = +this.el.max || 100;
        this.step = +this.el.step || 1;
        this.tick = args.tick || this.step;
        // this.addTicks();
        this.dataRange = document.createElement("div");
        this.dataRange.className = "range-data";
        this.el.parentElement.appendChild(this.dataRange,this.el);
        this.updatePos();
        this.el.addEventListener("input",() => {
            this.updatePos();
        });
    }

    getRangePercent() {
        let max = this.el.max,
        min = this.el.min,
        relativeValue = this.el.value - min,
        ticks = max - min,
        percent = relativeValue / ticks;
        return percent;
    }
    updatePos() {
        let percent = this.getRangePercent(),
        left = percent * 100,
        emAdjust = percent * 3;
        this.dataRange.style.left = `calc(${left}% - ${emAdjust}em)`;
        this.dataRange.innerHTML = this.el.value + "<span>px</span>";
    }
}

document.getElementById("border").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #00A651 0%, #00A651 ' + value + '%, #DBDCDE ' + value + '%, #DBDCDE 100%)'
  };

  document.getElementById("radius").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #00A651 0%, #00A651 ' + value + '%, #DBDCDE ' + value + '%, #DBDCDE 100%)'
  };

  