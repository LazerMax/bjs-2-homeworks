function parseCount(value){

   if(Number.isNaN(Number(value))){
      throw new Error("Невалидное значение");
   } else {
      return Number.parseInt(value);
   }
}

function validateCount(value){
   try {
      return parseCount(value);
   } catch (error){
      return error;
   }
}

class Triangle{
   constructor(a,b,c) {
      if(a+b < c || b+c < a || c+a < b){
         throw new Error("Треугольник с такими сторонами не существует");
      }
      this.a = a;
      this.b = b;
      this.c = c;
   }

   getPerimeter(){
      if(this.a+this.b < this.c || this.b+this.c < this.a || this.c+this.a < this.b){
         return("Ошибка! Треугольник не существует");
      }
      return Number((this.a+this.b+this.c).toFixed(3));
   }

   getArea(){
      if(this.a+this.b < this.c || this.b+this.c < this.a || this.c+this.a < this.b){
         return("Ошибка! Треугольник не существует");
      }
      let p = this.getPerimeter()/2;
      return Number((Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3));
   }
}

function getTriangle(a,b,c){
   try{
      let triangle = new Triangle(a,b,c);
      return triangle;
   }catch (error){
      let triangle = new Triangle(a,b,c);
      triangle.getPerimeter();
      triangle.getArea();
   }

}