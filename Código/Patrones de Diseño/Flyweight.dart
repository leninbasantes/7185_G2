/*Grupo 2 -- Basantes, Orellana, Lopez */
/*Patron Flyweight*/
/*Recurso que van a compartir los objetos*/
class EnemyType {
  String name = "";
  EnemyType(this.name);
}

class Enemy {
  /*Campo Intrinseco que es compartido*/
  static final Map<String, EnemyType> types = {};
  final EnemyType type;
  /*Campos Extrinseco*/
  int x;
  int y;
  
  /*Constructor de la clase*/
  Enemy(this.x, this.y, String typeName) : type = getType(typeName);
 
  /*Metodo para imprimir los datos del objeto*/
  void draw() {
    print("Drawing ${type.name} in position $x $y");
  }
  
  /*Metodo que verifica si ya existe el tipo de Enemigo, solo agrega Tipos
    de enemigos que no existan*/
  static EnemyType getType(String typeName) {
    return types.putIfAbsent(typeName, (){ 
      print("------------------------------------");
      print("* Load $typeName to memory");
      return EnemyType(typeName);
    });
  }
}

void main(){
  /*Declarar Objetos e Imprimir sus datos*/
  /*Notese que los diferente tipos de enemigos se inicializan solo una vez*/
  Enemy red1 = Enemy(1, 1, "Red Tank");
  red1.draw();
  Enemy red2 = Enemy(1, 2, "Red Tank");
  red2.draw();
  Enemy red3 = Enemy(2, 1, "Red Sentinel");
  red3.draw();
  Enemy blue1 = Enemy(1, 3, "Blue Sniper");
  blue1.draw();
  Enemy blue2 = Enemy(1, 4, "Blue Sniper");
  blue2.draw();
}