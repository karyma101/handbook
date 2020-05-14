package tutorial;

public class Dog extends Animal {
	public Dog(String name, int age) {
		super(name, age);
	}
	
	public void speak(){
		System.out.println("Woof, I am " + this.name + " and I am " + this.age + " years old.");
	}
	
	// Static methods does not care about the attributes of the class
	public static void display() {
		System.out.println("I am a dog!");
	}
}
