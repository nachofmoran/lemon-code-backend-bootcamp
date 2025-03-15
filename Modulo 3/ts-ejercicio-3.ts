namespace Ejercicio3 {
  interface Student {
    name: string;
    age: number;
    occupation: string;
  }

  interface Teacher {
    name: string;
    age: number;
    subject: string;
  }

  type User = Student | Teacher;

  const users: User[] = [
    {
      name: "Luke Patterson",
      age: 32,
      occupation: "Internal auditor",
    },
    {
      name: "Jane Doe",
      age: 41,
      subject: "English",
    },
    {
      name: "Alexandra Morton",
      age: 35,
      occupation: "Conservation worker",
    },
    {
      name: "Bruce Willis",
      age: 39,
      subject: "Biology",
    },
  ];

  const isStudent = (user: Teacher | Student): user is Student => {
    return (user as Student).occupation !== undefined;
  };

  const isTeacher = (user: Teacher | Student): user is Teacher => {
    return (user as Teacher).subject !== undefined;
  };

  const logUser = (user: User) => {
    let extraInfo: string = "unknown";
    if (isStudent(user)) {
      extraInfo = user.occupation;
    } else if (isTeacher(user)) {
      extraInfo = user.subject;
    }
    console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
  };

  users.forEach(logUser);
}
