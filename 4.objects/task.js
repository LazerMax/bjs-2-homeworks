function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
    this.subjectName = subjectName;
}


Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...newMarks) {
    for (let mark of newMarks) {
        this.marks.push(mark);
    }
}

Student.prototype.getAverage = function () {
    let sum = 0;
    let Average;
    for (let mark of this.marks) sum += mark;
    Average = sum / this.marks.length;
    return Average;
}

Student.prototype.exclude = function (reason) {
    delete this.subjectName;
    delete this.marks;
    this.reason = reason;
}