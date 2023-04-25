export interface Answer{
  title: string,
  points: number
}

export interface Field{
  points: number,
  answer: string,
  description: string,
  image: string
}

export interface Question{
  image: string;
  question: string,
  answers: Answer[],
}

export interface Quiz{
  image: string;
  id: number,
  title: string,
  description: string,

  rating: number,

  questions:Question[],
  pointsTable: Field[]

}


export interface User{
  image: string;
  userId: number,
  userName: string,

  quizzes: Quiz[],
  favourites: Quiz[]
}


export const quizzes: Quiz[] = [
  {
    image: "assets/test-image.png",
    id: 1,
    title: "TestQuiz1",
    description: "",
    rating: 5,
    questions: [
      {
        image: "assets/test-image.png",
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
        image: "assets/tmp_quiz.png",
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
        description: "You chose negative points",
        image: "assets/test-image.png"
      },
      {
        points: 10,
        answer: "Positive points",
        description: "You chose positive points",
        image: "assets/test-image.png"
      },
      {
        points: 100,
        answer: "Super positive points",
        description: "You chose super positive points",
        image: "assets/test-image.png"
      }
    ]
  },
  {
    image: "assets/tmp_quiz.png",
    id: 2,
    title: "TestQuiz2",
    description: "Some test quiz 2",
    rating: 3.5,
    questions: [
      {
        image: "assets/tmp_quiz.png",
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
        image: "assets/test-image.png",
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
        image: "assets/tmp_quiz.png",
        description: "You chose negative points"
      },
      {
        points: 0,
        answer: "Zero points",
        image: "assets/tmp_quiz.png",
        description: "You chose Zero points"
      },
      {
        points: 30,
        answer: "Positive points",
        image: "assets/tmp_quiz.png",
        description: "You chose positive points"
      },
      {
        points: 60,
        answer: "Super positive points",
        image: "assets/tmp_quiz.png",
        description: "You chose super positive points"
      }
    ]
  }
]
