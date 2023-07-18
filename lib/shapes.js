class Shape{
    constructor(color){
        this.color = color;
    }

    setColor(color){
        this.color = color;
    }

    render(){
        throw new Error("Method 'render' must be implemented.");
    }
}

class Triangle extends Shape {
    constructor(color, text, textColor){
        super(color);
        this.textColor = textColor;
        this.text = text;
    }
   render(){
        return`<svg viewBox="0 0 300 300"><polygon points="100,150 150,50 200,150" fill="${this.color}"></polygon><text x="150" y="150" fill="${this.textColor}" font-size="1.6rem" text-anchor="middle">${this.text}</text></svg>`;
   }
  }
  
  class Circle extends Shape {
    constructor(color, text, textColor){
        super(color);
        this.textColor = textColor;
        this.text = text;
    }
        render(){
            return `<svg viewBox="0 0 300 300"><circle cx="150" cy="150" r="100" fill="${this.color}"></circle><text x="150" y="150" fill="${this.textColor}" font-size="1.6rem" text-anchor="middle">${this.text}</text></svg>`;
   }
  }
  
  class Square extends Shape {
    constructor(color, text, textColor){
        super(color);
        this.textColor = textColor;
        this.text = text;
    }
    render(){
        return `<svg viewBox="0 0 300 300"><rect x="50" y="50" width="200" height="200" fill="${this.color}"></rect><text x="150" y="150" fill="${this.textColor}" font-size="1.6rem" text-anchor="middle">${this.text}</text></svg>`;
    }
  }


  
  module.exports = {
    Triangle,
    Circle,
    Square,
  };
  