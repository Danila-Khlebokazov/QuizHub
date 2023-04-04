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
  answers: [Answer],
}

export interface Quiz{
  id: number,
  title: string,

  rating: number,

  questions:[Question],
  pointsTable: [Field]

}


export interface User{
  userId: number,
  userName: string,

  quizzes: [Quiz],
  favourites: [Quiz]
}
