/*Grupo 2 -- Basantes, Orellana, Lopez */
/*Patron Prototype*/
/*Clase Abstracta con firma del metodo Clone*/
abstract class Shape {
  Shape clone();
}

class Rectangle implements Shape {
  int height = 0;
  int width = 0;
  int area = 0;
  bool isClone = false;
  
  /*Metodo para determinar si el Objeto es Original o un Clon*/
  String get cloneStatus => isClone ? "Clone" : "Original";
  /*Constructor para Objetos Originales*/
  Rectangle(this.height, this.width) : area = height * width;
  /*Constructor para Clones*/
  Rectangle.fromSource(Rectangle source) {
    height = source.height * 2;
    width = source.width * 2;
    area = height * width;
    isClone = true;
  }
  
  /*Sobreescribir el Metodo Clone con el Constructor para Clones*/
  @override
  Rectangle clone() {
    return Rectangle.fromSource(this);
  }
}

void main() {
  /*Declarar Objeto*/
  var rectangle = Rectangle(10, 5);
  /*Clonar Objeto*/
  var cloneRectangle = rectangle.clone();
  /*Imprimir Resultados*/
  print("Rectangle: ${rectangle.cloneStatus}");
  print("Heigth: ${rectangle.height}");
  print("Width: ${rectangle.width}");
  print("Area: ${rectangle.area}");
  print("--------------------------------");
  print("Rectangle: ${cloneRectangle.cloneStatus}.");
  print("Heigth: ${cloneRectangle.height}");
  print("Width:  ${cloneRectangle.width}");
  print("Area: ${cloneRectangle.area}");
}