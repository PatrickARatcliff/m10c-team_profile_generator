const Engineer = require('../lib/Engineer');

describe('Tests for a new Engineer', () => {
  describe('Test input fields from inquirer', () => {
    // Positive test
    test("should create a new Engineer with values equal to user's inquirer input", () => {     
      const engineer = new Engineer("Patrick", "1234", "pratcliff5@gmail.com", "PatrickARatcliff");
      expect(engineer.getGithub()).toBe("PatrickARatcliff");
    });
    test("should create a new instance of Engineer as an object", () => {     
        const engineer = new Engineer("Patrick", "1234", "pratcliff5@gmail.com", "PatrickARatcliff");
        expect(typeof engineer).toBe("object")
      });
  });
});
