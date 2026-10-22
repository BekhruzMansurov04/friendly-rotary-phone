class Rectangle{
     constructor(a, b){
        this._a = a;
        this._b = b;
     }
     get yuzi(){
         return this._a * this._b;
     }
     set yuzi(value){
        if(value > 0){
            this._a = Math.sqrt(value);
            this._b = value / this._a;
        }else{
            console.log("Yuzi 0 dan katta bo'lishi kerak");
        }
     }
     get perimetr(){
        return 2 * (this._a + this._b);
     }
     set perimetr(value){
        if(value > 0){
            this._a = value / 2;
            this._b = value / 2;
        }else{
            console.log("Perimetr 0 dan katta bo'lishi kerak");
        }
     }
}

let rect = new Rectangle(prompt("Birinchi sonni kiriting"), prompt("ikkinchi sonni kiriting"));
alert(`Yuzi: ${rect.yuzi}`);
alert(`Perimetr: ${rect.perimetr}`);