const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);

const obj = Object.fromEntries(entries);       // von Array zu primitive Types
console.log(obj);                           //Zeigt z.b. den Typen 

//Schlüssel OBJECT

let student = {
    "name": "Max",                             //verschiedene Schreibweisen und Möglichkeiten 
    "age": 21,
    "subject": "English",
    2019: "Ungarn",
    "gewünschter Kurs:": "Spanisch",
    nochImKurs: false,
    numberOfCourses: 0
}

console.log(student.name);                  // Auf Eigenschaften zugreifen
console.log(student["age"]);                // Wird ausgewertet und auf eigenschaft zugegriffen

student["age"] = 22;                        // Neu zuweisen/
student.age = 23;                           // Neu hinzugefügt (falls existiert, überschrieben!)
student.bestNoten = "Englisch";             // in dem Fall, neu hinzugefügt, statt überschrieben
student["Interessen"] = "Reisen";

delete student.subject;         //löschen. Können auch beide Schreibweisen verwendet werden.

console.log(student);

let property = "name";                      // neue Zuweisung durch Variable
console.log(student[property]);             // Name wird in Konsole ausgegeben!
console.log(["na" + "me"]);                 // [] sind flexibler! Wird benutzt, wenn Leerzeichen in Strings gesetzt wurden.

if (student.name) {                         //Schlüssel gesetzt im IF.               
    console.log("Hallo");
    //Prüfung
}

if ("nochImKurs" in student) {              // in Operator, macht boolische Typen möglich
    console.log("hi");
}

if ("numberOfCourses" in student) {         // in Operator, macht Numbers auch möglich!
    console.log("Hat gefunzt");
}

for (let key in student) {                  // die for Schleife mit neuer Varialbe key, gibt nun alles raus, was in dem Schlüssel vorhanden ist.
    console.log("key:", key);

    let keycard = student[key];               // andere Möglichkeit und Schreibweise
    console.log("Was im Schlüssel verfasst wurde:", keycard);
}

// Object.keys()                                   
console.log("Eigenschaften:", Object.keys(student));     // Gibt im Array, die gesamten Eigenschaften des Schlüssels aus.

//Object.values()
console.log("Eigenschaften:", Object.values(student));  // Zeigt die Werte und Typen des Schlüssels an

//Object.entries()
console.log("Eigenschaften:", Object.entries(student));  // zeigt den Schlüssel in verschachtelten Arrays, für bspw for Schleifen

for (let entry of Object.entries(student)) {            // Verschachtelte Arrays, werden Wert für Wert durchgegangen
    console.log(entry);
    console.log(entry[0] + " : " + entry[1]);
}

let students = [                                        // Ojekte verschachteln
    { firstName: "Steffen", lastName: "Kloempges" },
    { firstName: "Erika", lastName: "Mustermann" }
]

console.log("Auflistung:", students);
console.log("teilnehmer:", students[0]);

for (let people of students) {
    console.log("Studenten:", people);
}







