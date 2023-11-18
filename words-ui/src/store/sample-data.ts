export type TestWord = {
  russian: string;
  english: string,
}

function createData(
  testId: number,
  testName: string,
  complexity: string,
  topic: string,
  authorId: number,
  authorName: string,
  words: TestWord[]
) {
  return {
    testId,
    testName,
    complexity,
    topic,
    authorId,
    authorName,
    words
  }
}

export const test1Words = [{
  russian: "школа",
  english: "school",
},
{
  russian: "музей",
  english: "museum",
},
{
  russian: "парк",
  english: "park",
}];

export const test2Words = [{
  russian: "университет",
  english: "university",
},
{
  russian: "река",
  english: "river",
},
{
  russian: "библиотека",
  english: "library",
}];

export const test3Words = [{
  russian: "завод",
  english: "factory",
},
{
  russian: "церковь",
  english: "church",
},
{
  russian: "заправочная станция",
  english: "petrol station",
}];

export const test4Words = [{
  russian: "линейка",
  english: "ruler",
},
{
  russian: "ножницы",
  english: "scissors",
},
{
  russian: "карандаш",
  english: "pencil",
}];

export const testsList = [
  createData(1, 'Common words', 'EASY', 'City', 1, 'Admin', test1Words),
  createData(2, 'Common words', 'MEDIUM', 'City', 1, 'Admin', test2Words),
  createData(3, 'Common words', 'DIFFICULT', 'City', 1, 'Admin', test3Words),
  createData(4, 'My test', 'EASY', 'Random words', 2, 'Current User', test4Words),
];
