const quizData = {
    javascript: {
      id: "javascript",
      title: "JavaScript",
      questions: {
        basic: [
          {
            id: 1,
            question: "What is the output of typeof null?",
            options: ["null", "undefined", "object", "number"],
            correctAnswer: 2,
            explanation: "In JavaScript, typeof null returns 'object'. This is a known language quirk."
          },
          {
            id: 2,
            question: "Which method removes the last element from an array?",
            options: ["pop()", "push()", "shift()", "unshift()"],
            correctAnswer: 0,
            explanation: "The pop() method removes the last element from an array and returns that element."
          },
          {
            id: 3,
            question: "What is the correct way to declare a variable in JavaScript?",
            options: ["variable x;", "var x;", "v x;", "x = var;"],
            correctAnswer: 1,
            explanation: "In JavaScript, variables are declared using var, let, or const keywords."
          },
          {
            id: 4,
            question: "What is NaN in JavaScript?",
            options: ["Not a Number", "Number a Number", "New Array Number", "Not available Number"],
            correctAnswer: 0,
            explanation: "NaN stands for 'Not a Number'. It is a special value that represents undefined or erroneous numerical results."
          },
          {
            id: 5,
            question: "Which of the following is not a JavaScript data type?",
            options: ["Object", "Array", "Null", "Character"],
            correctAnswer: 3,
            explanation: "JavaScript has Object, Array, and Null types, but not a 'Character' data type."
          }
        ],
        intermediate: [
          {
            id: 1,
            question: "What is closure in JavaScript?",
            options: [
              "A way to secure code",
              "A function with access to variables in its outer scope",
              "A method to close browser window",
              "A way to end loops"
            ],
            correctAnswer: 1,
            explanation: "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned."
          },
          {
            id: 2,
            question: "What is event bubbling?",
            options: [
              "A way to create multiple events",
              "When an event triggers on a child element and propagates up through its ancestors",
              "A method to prevent events",
              "A type of event listener"
            ],
            correctAnswer: 1,
            explanation: "Event bubbling is when an event starts at the most specific element and flows upward to less specific elements."
          },
          {
            id: 3,
            question: "What is the use of the 'this' keyword in JavaScript?",
            options: [
              "Refers to the function itself",
              "Refers to the global object",
              "Refers to the current function's context or the object it belongs to",
              "Refers to a variable"
            ],
            correctAnswer: 2,
            explanation: "In JavaScript, 'this' refers to the current function's context or the object it belongs to."
          }
        ],
        advanced: [
          {
            id: 1,
            question: "What is the output of Promise.resolve(1).then(() => 2).then(console.log)?",
            options: ["1", "2", "undefined", "Error"],
            correctAnswer: 1,
            explanation: "The first .then transforms the value to 2, which is then logged by console.log in the second .then."
          },
          {
            id: 2,
            question: "What is the purpose of the 'bind' method in JavaScript?",
            options: [
              "It binds a function to a specific event",
              "It creates a new function with a specific context (this value)",
              "It binds two different functions",
              "It attaches an event listener"
            ],
            correctAnswer: 1,
            explanation: "'bind' creates a new function with a specific 'this' context, useful for handling events or callback functions."
          }
        ]
      }
    },
    python: {
      id: "python",
      title: "Python",
      questions: {
        basic: [
          {
            id: 1,
            question: "What is the correct way to create a list in Python?",
            options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
            correctAnswer: 0,
            explanation: "Lists in Python are created using square brackets []."
          },
          {
            id: 2,
            question: "Which of these is not a Python data type?",
            options: ["int", "float", "char", "str"],
            correctAnswer: 2,
            explanation: "Python does not have a 'char' data type. Single characters are represented as strings of length 1."
          },
          {
            id: 3,
            question: "How do you insert a new item into a list at a specific index in Python?",
            options: ["list.append(x)", "list.insert(index, x)", "list.push(x)", "list.add(x)"],
            correctAnswer: 1,
            explanation: "To insert a new item into a list at a specific index, use the insert() method."
          },
          {
            id: 4,
            question: "Which of the following is used to define a function in Python?",
            options: ["function name()", "def name()", "func name()", "define name()"],
            correctAnswer: 1,
            explanation: "In Python, functions are defined using the 'def' keyword."
          }
        ],
        intermediate: [
          {
            id: 1,
            question: "What is a decorator in Python?",
            options: [
              "A function that takes another function as an argument",
              "A class that inherits from another class",
              "A type of variable",
              "A built-in module"
            ],
            correctAnswer: 0,
            explanation: "A decorator is a function that takes another function as an argument and extends its behavior without explicitly modifying it."
          },
          {
            id: 2,
            question: "What is the output of the following code? print(2 * 3 ** 2)",
            options: ["18", "36", "12", "9"],
            correctAnswer: 0,
            explanation: "The expression 3 ** 2 is evaluated first (9), then multiplied by 2 (18)."
          }
        ],
        advanced: [
          {
            id: 1,
            question: "What is a metaclass in Python?",
            options: [
              "A class that inherits from another class",
              "A class that defines how a class behaves",
              "A type of variable",
              "A built-in module"
            ],
            correctAnswer: 1,
            explanation: "A metaclass is a class for a class that defines how a class behaves."
          },
          {
            id: 2,
            question: "How do you create a class method in Python?",
            options: [
              "def method(cls):",
              "def classmethod(cls):",
              "class method(cls):",
              "@staticmethod",
              "class method(cls):"
            ],
            correctAnswer: 0,
            explanation: "In Python, class methods are defined using 'def method(cls):' or decorated with @classmethod."
          }
        ]
      }
    },
    html: {
      id: "html",
      title: "HTML",
      questions: {
        basic: [
          {
            id: 1,
            question: "What does HTML stand for?",
            options: [
              "Hyper Text Markup Language",
              "High Tech Modern Language",
              "Hyper Transfer Markup Language",
              "Home Tool Markup Language"
            ],
            correctAnswer: 0,
            explanation: "HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages."
          },
          {
            id: 2,
            question: "Which tag is used to create a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            correctAnswer: 1,
            explanation: "The <a> tag is used to create hyperlinks in HTML documents."
          },
          {
            id: 3,
            question: "Which tag is used to define a table in HTML?",
            options: ["<table>", "<tb>", "<tr>", "<td>"],
            correctAnswer: 0,
            explanation: "The <table> tag is used to define a table in HTML."
          }
        ],
        intermediate: [
          {
            id: 1,
            question: "What is the purpose of the <meta> tag?",
            options: [
              "To create metadata about an HTML document",
              "To define a mathematical equation",
              "To create a menu",
              "To define a table"
            ],
            correctAnswer: 0,
            explanation: "The <meta> tag provides metadata about the HTML document, including character set, description, keywords, author, and viewport settings."
          },
          {
            id: 2,
            question: "Which of the following HTML tags is used to define the largest heading?",
            options: ["<h1>", "<h2>", "<h3>", "<h4>"],
            correctAnswer: 0,
            explanation: "The <h1> tag is used to define the largest heading in HTML."
          }
        ],
        advanced: [
          {
            id: 1,
            question: "What is the purpose of the srcset attribute in the <img> tag?",
            options: [
              "To set multiple source files",
              "To specify different images for different screen sizes",
              "To create image animations",
              "To add image filters"
            ],
            correctAnswer: 1,
            explanation: "The srcset attribute allows you to specify different images for different screen sizes and resolutions, improving performance and responsiveness."
          }
        ]
      }
    },
    css: {
      id: "css",
      title: "CSS",
      questions: {
        basic: [
          {
            id: 1,
            question: "What does CSS stand for?",
            options: [
              "Cascading Style Sheets",
              "Creative Style System",
              "Computer Style Sheets",
              "Colorful Style Sheets"
            ],
            correctAnswer: 0,
            explanation: "CSS stands for Cascading Style Sheets, which is used to style and layout web pages."
          },
          {
            id: 2,
            question: "Which property is used to change text color?",
            options: ["text-color", "color", "font-color", "text-style"],
            correctAnswer: 1,
            explanation: "The color property is used to set the color of text."
          },
          {
            id: 3,
            question: "Which property is used to set the background color of an element?",
            options: ["color", "bgcolor", "background-color", "background"],
            correctAnswer: 2,
            explanation: "The 'background-color' property is used to set the background color of an element."
          }
        ],
        intermediate: [
          {
            id: 1,
            question: "What is the box model in CSS?",
            options: [
              "A model for creating boxes",
              "A layout model that consists of margins, borders, padding, and content",
              "A 3D modeling system",
              "A method for creating popups"
            ],
            correctAnswer: 1,
            explanation: "The CSS box model is a container that contains multiple properties including borders, margin, padding, and the content itself."
          }
        ],
        advanced: [
          {
            id: 1,
            question: "What is the difference between flex and grid?",
            options: [
              "Grid is newer than flex",
              "Flex is one-dimensional, grid is two-dimensional",
              "Grid is only for small layouts",
              "There is no difference"
            ],
            correctAnswer: 1,
            explanation: "Flexbox is designed for one-dimensional layouts (either rows OR columns), while Grid is designed for two-dimensional layouts (rows AND columns)."
          }
        ]
      }
    }
  };