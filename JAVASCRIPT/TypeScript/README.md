# TypeScript

- **Basic Types**
  - let x: boolean = true
  - let x: number = 6
  - let x: string = 'hello'
  - let x: number[] = [1, 2, 3]
  - let x: any = ''
  - let x: any[] = [1, 'one', true]
  - function warnUser(): void { console.log('This is a warning message')}
    - commonly used if function does not return a value
    - void can only assign undefined or null
  - let x: undefined = undefined
  - let x: null = null
    - by default null and undefined are subtypes of all the other types
  - declare function create(o: object | null): void
    - object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined.
  - let someValue: any = "this is a string"; let strLength: number = (someValue as string).length;
    - Type Assertions

- **Tuple** types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.
  - let x: [string, number]

- **enum** is a way of giving more friendly names to sets of numeric values. By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members.
  - enum Color { Red, Green, Blue = 5}

- 