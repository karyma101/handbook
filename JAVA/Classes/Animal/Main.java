package tutorial;

public class Main {

	public static void main(String[] args) {
		Dog kary = new Dog("Kary", 2);
		Cat megan = new Cat("Megan", 4);
		
		kary.speak();
		megan.speak();
		System.out.println(Animal.count);
		Dog.display();
	}
}
