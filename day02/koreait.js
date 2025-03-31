// class는 속성[변수]과 행동[함수]

class Employee {
  #name;
  #age;
  #gender;
  #position;

  constructor(name, age, gender, position) {
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
    this.#position = position;
  }

  introduce() {
    console.log(`안녕하세요. ${this.#position} ${this.#name}입니다`);
  }
}

class President extends Employee {
  meet() {}
  observe() {}
}

class Mento extends Employee {
  #students;

  constructor(name, age, gender, position) {
    // 부모에 있는 함수 쓸때 super
    super(name, age, gender, position);
    // 여기서 필요한거는 따로 해주셈
    this.#students = [];
  }

  manage() {
    console.log("담당 학생 리스트");
  }

  counsel() {}
}

// const albert = new Mento("알버트 덤블도어", "?", "남", "교장");

// albert.introduce();
// albert.enroll("해리포터");
// albert.enroll("헤르미온느");
// albert.enroll("론");
// albert.manage();
