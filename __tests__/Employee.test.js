const Employee = require('../lib/Employee');

describe('Tests for a new Employee', () => {
  describe('Test input fields from inquirer', () => {
    // Positive test
    test("should create a new Employee with values equal to user's inquirer input", () => {     
      const employee = new Employee("Patrick", "1234", "pratcliff5@gmail.com");
      expect(employee.getName()).toBe("Patrick");
      expect(employee.getId()).toBe("1234");
      expect(employee.getEmail()).toBe("pratcliff5@gmail.com");
    });
    test("should create a new instance of Employee as an object", () => {     
        const employee = new Employee("Patrick", "1234", "pratcliff5@gmail.com");
        expect(typeof employee).toBe("object")
      });
  });
});
