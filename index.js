const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
]

function main() {
    let root = document.getElementById("root")
    let h1 = document.createElement("h1")
    h1.setAttribute("id", "pageTitle")
    h1.innerHTML = "FREELANCERS"
    root.appendChild(h1)

    let ul = document.createElement("ul")
    ul.setAttribute("id", "theList")

    for (const person of users) {
        let li = document.createElement("li")
        li.innerHTML = `${person.name} is ${person.age} 
            years old and works as a ${person.occupation}`
        ul.appendChild(li)
    }

    root.appendChild(ul)
}

function hovering() {
const lis = document.querySelectorAll('li')
lis.forEach((li) => {
  li.style.setProperty('--td-background-color', '#684BE3');
});
}

//call the main function
main()
hovering()

