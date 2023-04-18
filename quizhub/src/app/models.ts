export interface Answer{
  title: string,
  points: number
}

export interface Field{
  points: number,
  answer: string,
  description: string
}

export interface Question{
  question: string,
  answers: Answer[],
}

export interface Quiz{
  id: number,
  title: string,
  description: string,

  rating: number,

  questions:Question[],
  pointsTable: Field[]

}


export interface User{
  userId: number,
  userName: string,

  quizzes: Quiz[],
  favourites: Quiz[]
}


export const quizzes: Quiz[] = [
  {
    id: 1,
    title: "TestQuiz1",
    description: "",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "+10",
            points: 10
          },
          {
            title: "-10",
            points: -10
          }
          ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "0",
            points: 0
          },
          {
            title: "100",
            points: 100
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -10,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 10,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 100,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 1,
    title: "TestQuiz1",
    description: "",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "+10",
            points: 10
          },
          {
            title: "-10",
            points: -10
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "0",
            points: 0
          },
          {
            title: "100",
            points: 100
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -10,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 10,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 100,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 1,
    title: "TestQuiz1",
    description: "",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "+10",
            points: 10
          },
          {
            title: "-10",
            points: -10
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "0",
            points: 0
          },
          {
            title: "100",
            points: 100
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -10,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 10,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 100,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 1,
    title: "TestQuiz1",
    description: "",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "+10",
            points: 10
          },
          {
            title: "-10",
            points: -10
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "0",
            points: 0
          },
          {
            title: "100",
            points: 100
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -10,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 10,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 100,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 1,
    title: "TestQuiz1",
    description: "",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "+10",
            points: 10
          },
          {
            title: "-10",
            points: -10
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "0",
            points: 0
          },
          {
            title: "100",
            points: 100
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -10,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 10,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 100,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  },
  {
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 5,
    questions: [
      {
        question: "How many points to add?",
        answers:[
          {
            title: "50",
            points: 50
          },
          {
            title: "-20",
            points: -20
          }
        ]
      },
      {
        question: "How many points to add? Part two",
        answers: [
          {
            title: "1",
            points: 1
          },
          {
            title: "Twenty",
            points: 20
          }
        ]
      }
    ],
    pointsTable: [
      {
        points: -30,
        answer: "Negative points",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        description: "You chose super positive points"
      }
    ]
  }
]
