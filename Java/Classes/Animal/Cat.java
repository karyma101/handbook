package tutorial;

public class Cat extends Animal{
	private int food;
	
	public Cat(String name, int age, int food) {
		super(name, age);
		this.food = food;
	}
	
	// Multiple Constructors
	public Cat(String name, int age) {
		super(name, age);
		// Setting a default for food property
		this.food = 50;
	}
	
	public void speak(){
		System.out.println("Meow, I am " + this.name + " and I am " + this.age + " years old. I am fed " + this.food + " times."  );
	}
}
