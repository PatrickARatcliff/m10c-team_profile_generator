const Manager = require('../lib/Manager');

describe('Tests for a new Manager', () => {
  describe('Test input fields from inquirer', () => {
    // Positive test
    test("should create a new Manager with values equal to user's inquirer input", () => {     
      const manager = new Manager("Patrick", "1234", "pratcliff5@gmail.com", "221B");
      expect(manager.getOfficeNumber()).toBe("221B");
    });
    test("should create a new instance of Manager as an object", () => {     
        const manager = new Manager("Patrick", "1234", "pratcliff5@gmail.com", "221B");
        expect(typeof manager).toBe("object")
      });
  });
});
