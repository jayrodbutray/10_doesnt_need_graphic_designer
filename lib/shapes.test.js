const {Triangle,Circle,Square} = require('./shapes.js');

describe('Shape Tests', () => {
    it('Triangle shape', () => {
      const triangle = new Triangle('blue');
      const expectedOutput = `<svg viewBox="0 0 300 200\"><polygon points=\"100,150 150,50 200,150\" fill=\"blue\"></polygon><text x=\"150\" y=\"150\" fill=\"undefined\" font-size=\"1.6rem\" text-anchor=\"middle\">undefined</text></svg>`;
      expect(triangle.render()).toEqual(expectedOutput);
    });
  
    it('Circle shape', () => {
      const circle = new Circle('green');
      const expectedOutput = `<svg viewBox="0 0 300 200"><circle cx=\"150\" cy=\"150\" r=\"100\" fill=\"green\"></circle><text x=\"150\" y=\"150\" fill=\"undefined\" font-size=\"1.6rem\" text-anchor=\"middle\">undefined</text></svg>`;
      expect(circle.render()).toEqual(expectedOutput);
    });
  
    it('Square shape', () => {
      const square = new Square('red');
      const expectedOutput = `<svg viewBox="0 0 300 200\"><rect x=\"50\" y=\"50\" width=\"200\" height=\"200\" fill=\"red\"></rect><text x=\"150\" y=\"150\" fill=\"undefined\" font-size=\"1.6rem\" text-anchor=\"middle\">undefined</text></svg>`;
      expect(square.render()).toEqual(expectedOutput);
    });
  });
  
