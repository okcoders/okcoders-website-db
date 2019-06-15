const htmlHash = "507f191e810c19729de860ea"
const jsHash = "507f191e810c19729de860eb"
const classHash = "507f191e810c19729de860ec"
const classHash2 = "507f191e810c19729de860ed"

db.languages.insertOne({
  _id: ObjectId(htmlHash),
  language: "html"
});

db.languages.insertOne({
  _id: ObjectId(jsHash),
  language: "js"
});

db.classes.insertOne({
  _id: ObjectId(classHash),
  yearOfClass: 2018,
  moduleNumber: 1,
  languages: [htmlHash],
  title: "a class",
  difficulty: "easy"
});

db.classes.insertOne({
  _id: ObjectId(classHash2),
  yearOfClass: 2019,
  moduleNumber: 2,
  languages: [htmlHash, jsHash],
  title: "another class",
  difficulty: "easy"
});

db.alumnis.insertOne({
  firstName: "Zach",
  lastName: "Mays",
  avatar: "https://avatars2.githubusercontent.com/u/4370615?s=400&v=4",
  age: 29,
  linkedin: "https://www.linkedin.com/in/zmays/",
  github: "https://github.com/zmays",
  classes: [classHash, classHash2],
  verified: true
});

db.alumnis.insertOne({
  firstName: "Terry",
  lastName: "Brown",
  avatar: "https://avatars1.githubusercontent.com/u/42389818?s=400&v=4",
  age: 30,
  linkedin: "https://www.linkedin.com/in/terry-brown-9aa1b8119/",
  github: "https://github.com/ptbrown4",
  classes: [classHash],
  verified: true
});

db.alumnis.insertOne({
  firstName: "Joseph",
  lastName: "Okpara",
  avatar: "https://avatars1.githubusercontent.com/u/42412163?s=400&v=4",
  age: 30,
  linkedin: "https://www.linkedin.com/in/joseph-okpara-0b8a6429/",
  github: "https://github.com/ojo88",
  classes: [classHash],
  verified: false
});

db.alumnis.insertOne({
  firstName: "Brayden",
  lastName: "Robbins",
  avatar: "https://avatars2.githubusercontent.com/u/42324388?s=400&v=4",
  age: 20,
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/braydenrobbins",
  classes: [classHash2],
});

db.alumnis.insertOne({
  firstName: "Susan",
  lastName: "Moring",
  avatar: "https://avatars0.githubusercontent.com/u/26634819?s=400&v=4",
  age: 29,
  linkedin: "https://www.linkedin.com/in/susanmoring/",
  github: "https://github.com/smoring",
  classes: [classHash2],
  verified: false
});
