package tutorial;

public class Animal {
	// Only subclasses can use protected properties
	protected String name;
	protected int age;
	
	protected static int count = 0;
	
	public Animal(String name, int age) {
		this.name = name;
		this.age = age;
		Animal.count += 1;
	}
	
	public void speak(){
		System.out.println("I am " + this.name + " and I am " + this.age + " years old.");
	}
	
	public int getAge() {
		return this.age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
}