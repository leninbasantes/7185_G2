/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/

/*
@author Daniela Orellana 
*/

public class Main
{
	public static void main(String[] args) {
		CuentaAHImpl cuentaAhorro = new CuentaAHImpl();
		cuentaAhorro.setMonto(50);
		
		CuentaAHImpl cuentaAhorro2 = new CuentaAHImpl();
		
		CuentaAHImpl cuentaClonada = (CuentaAHImpl) cuentaAhorro.clonar();

		System.out.println(cuentaAhorro);
		System.out.println(cuentaAhorro2);
		System.out.println(cuentaClonada);
		
		/*if (cuentaClonada != null) {
			System.out.println(cuentaClonada);
		}*/
		System.out.println(cuentaClonada == cuentaAhorro);
	}
}
