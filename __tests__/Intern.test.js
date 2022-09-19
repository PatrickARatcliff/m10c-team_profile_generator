const Intern = require('../lib/Intern');

describe('Tests for a new Intern', () => {
  describe('Test input fields from inquirer', () => {
    // Positive test
    test("should create a new Intern with values equal to user's inquirer input", () => {     
      const intern = new Intern("Patrick", "1234", "pratcliff5@gmail.com", "Syracuse");
      expect(intern.getSchool()).toBe("Syracuse");
    });
    test("should create a new instance of Intern as an object", () => {     
        const intern = new Intern("Patrick", "1234", "pratcliff5@gmail.com", "Syracuse");
        expect(typeof intern).toBe("object")
      });
  });
});
