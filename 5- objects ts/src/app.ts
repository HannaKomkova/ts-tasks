// 15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]


// let arr: string[] = ['hschool', 'company'];
// let finalArr:string[] = [];

// arr.forEach((el:string) => {
//     finalArr.push(`!${el}`)
// })

// console.log(finalArr);

// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.

// const arr:number[] = [1, 2, 3, 4, 5, 7, 8, 9];

// let res:boolean;

// for (let i:number = 0; i < arr.length; i++) {
//     arr[i+1] !== arr[i]+1? res = false : res= true;
// }

// console.log(res);

// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами.

// let array:number[] = [1, 3, 40, 7, 8, 20];

// let res:number = 0;

// for (let index:number = 0; index < array.length; index++) {
//     Math.abs(array[index] - array[index+1])> res? 
//     res = Math.abs(array[index] - array[index+1]) : res;
    
// }

// console.log(res);

// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)

// const books:IBooks[] = [
//     {
//         title: "Война и мир",
//         author: "Толстой",
//         year: 1869
//     },
//     {
//         title: "Преступление и наказание", 
//         author: "Достоевский",
//         year: 1866
//     },
//     {
//         title: "Мастер и Маргарита",
//         author: "Булгаков",
//         year: 1967
//     },
//     {
//         title: "Собачье сердце",
//         author: "Булгаков", 
//         year: 1925
//     },
//     {
//         title: "Мёртвые души",
//         author: "Гоголь",
//         year: 1842
//     }
// ];

// interface IBooks{
//     title: string;
//     author: string;
//     year: number;
// }

// books.forEach((el:IBooks) => {
//     if(el.author === 'Булгаков'){
//         console.log(el);
        
//     }
// })

// 19. Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)

// const books:IBooks[] = [
//     {
//         title: "Гарри Поттер и философский камень",
//         author: "Роулинг",
//         price: 65
//     },
//     {
//         title: "Властелин колец", 
//         author: "Толкин",
//         price: 80
//     },
//     {
//         title: "1984",
//         author: "Оруэлл",
//         price: 45
//     },
//     {
//         title: "Три товарища",
//         author: "Ремарк", 
//         price: 55
//     },
//     {
//         title: "Маленький принц",
//         author: "Сент-Экзюпери",
//         price: 30
//     },
//     {
//         title: "Атлант расправил плечи",
//         author: "Рэнд",
//         price: 120
//     },
//     {
//         title: "Шерлок Холмс",
//         author: "Дойл",
//         price: 42
//     }
// ];

// interface IBooks{
//     title: string;
//     author: string;
//     price: number;
// }

// books.forEach((el:IBooks) => {
//     if(el.price >50){
//         console.log(el);
        
//     }
// })

// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)

// const books:IBooks[]= [
//     {
//         title: "Война и мир",
//         author: "Толстой",
//         count: 1225
//     },
//     {
//         title: "Преступление и наказание", 
//         author: "Достоевский",
//         count: 671
//     },
//     {
//         title: "Мастер и Маргарита",
//         author: "Булгаков",
//         count: 470
//     },
//     {
//         title: "Анна Каренина",
//         author: "Толстой", 
//         count: 864
//     },
//     {
//         title: "Братья Карамазовы",
//         author: "Достоевский",
//         count: 796
//     },
//     {
//         title: "Тихий Дон",
//         author: "Шолохов",
//         count: 1500
//     }
// ];

// interface IBooks{
//         title: string;
//         author: string;
//         count: number;
//     }

// let max:number = books.reduce((acc:number, el:IBooks) => el.count > acc? acc = el.count : acc, 0);

// let res:IBooks[] = books.filter((el:IBooks) => el.count === max);

// console.log(res);

// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

// const text = "Программирование это очень увлекательная и интересная деятельность";

// let max:number = text.split(' ')
// .reduce((acc:number, el:string) => el.length > acc? acc = el.length : acc , 0)

// console.log(max);

// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.

// const employees:IEmployees[] = [
//     {
//         name: "Алексей",
//         salary: 50000
//     },
//     {
//         name: "Мария",
//         salary: 65000
//     },
//     {
//         name: "Петр",
//         salary: 45000
//     },
//     {
//         name: "Елена",
//         salary: 70000
//     },
//     {
//         name: "Дмитрий",
//         salary: 55000
//     },
//     {
//         name: "Анна",
//         salary: 60000
//     }
// ];

// interface IEmployees {
//     name:string;
//     salary: number;
// }

// let sumOfSalary:number = employees.reduce((acc:number, el:IEmployees) => acc+=el.salary ,0);

// console.log(sumOfSalary / employees.length);

// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

// const products = [
//     {
//         name: "Хлеб",
//         price: 30,
//         quantity: 2
//     },
//     {
//         name: "Молоко",
//         price: 60,
//         quantity: 3
//     },
//     {
//         name: "Яблоки",
//         price: 120,
//         quantity: 1
//     },
//     {
//         name: "Сыр",
//         price: 250,
//         quantity: 2
//     },
//     {
//         name: "Мясо",
//         price: 400,
//         quantity: 1
//     }
// ];

// interface IProducts{
//     name: string;
//     price: number;
//     quantity: number;
// }

// let finalPrice:number = 0;

// products.forEach((el:IProducts) => finalPrice+= (el.price * el.quantity));

// console.log(finalPrice);

// 1. Отфильтруй массив users, чтобы получить только активных пользователей.

// const users:IUsers[] = [
//     { id: 1, name: 'Alice', isActive: true },
//     { id: 2, name: 'Bob', isActive: false },
//     { id: 3, name: 'Charlie', isActive: true },
//     { id: 4, name: 'Diana', isActive: false },
//   ];

// interface IUsers{
//     id: number;
//     name: string;
//     isActive: boolean;
// }  

// let activeUsers:IUsers[] = users.filter((el:IUsers) => el.isActive);

// console.log(activeUsers);

// 2. Преобразуй массив users в массив строк из имён пользователей.

// const users:IUsers[] = [
//     { id: 1, name: 'Alice', isActive: true },
//     { id: 2, name: 'Bob', isActive: false },
//     { id: 3, name: 'Charlie', isActive: true },
//     { id: 4, name: 'Diana', isActive: false },
//   ];

// interface IUsers{
//     id: number;
//     name: string;
//     isActive: boolean;
// }  

// let usersName:string[] = users.map((el:IUsers) => el.name);

// console.log(usersName);

// 3. Проверь, есть ли хотя бы один неактивный пользователь. Если есть - true, иначе - false

// const users:IUsers[] = [
//     { id: 1, name: 'Alice', isActive: true },
//     { id: 2, name: 'Bob', isActive: false },
//     { id: 3, name: 'Charlie', isActive: true },
//     { id: 4, name: 'Diana', isActive: false },
//   ];

// interface IUsers{
//     id: number;
//     name: string;
//     isActive: boolean;
// } 

// let notActiveUsers:boolean = users.some((el:IUsers) => !el.isActive);

// console.log(notActiveUsers);

// 4. Из массива students отфильтруй только тех, у кого балл выше 80.

// const students:IStudents[] = [
//   { id: 1, name: 'Anna', score: 75 },
//   { id: 2, name: 'John', score: 92 },
//   { id: 3, name: 'Tom', score: 88 },
// ];

// interface IStudents {
//     id: number;
//     name: string;
//     score: number;
// }

// let filteredStudents:IStudents[] = students.filter((el:IStudents) => el.score > 80);
// console.log(filteredStudents);

// 5. Отобрази список имён всех курсов, которые проходят пользователи. 
// Курсы находятся внутри каждого пользователя в массиве courses.

// const users:IUsers[] = [
//   { id: 1, name: 'Alice', courses: ['TS', 'React'] },
//   { id: 2, name: 'Bob', courses: ['Node', 'TS'] },
//   { id: 3, name: 'Clara', courses: ['HTML'] },
// ]

// interface IUsers {
//     id: number;
//     name: string;
//     courses: string[];
// }

// let allCourses:string[] =[] 
// users.forEach((el:IUsers) => {
//     allCourses.push(...el.courses)
// })

// console.log(allCourses);

// 6. Из массива projects получи список названий только тех проектов, 
// в которых участвует пользователь с userId === 3.

// Результат: ['CRM', 'Mobile App']

// const projects:IProjects[] = [
//   { id: 1, name: 'CRM', members: [1, 2, 3] },
//   { id: 2, name: 'Landing Page', members: [2] },
//   { id: 3, name: 'Mobile App', members: [3, 4] },
// ];

// interface IProjects {
//     id: number;
//     name: string;
//     members: number[];
// }

// let projectList:string[] =  projects.filter((el:IProjects) => el.members.includes(3))
// .map((project:IProjects) => project.name)

// console.log(projectList); 

// 7. В массиве events найди все записи, которые происходят в 2023 году.

// Результат:  ["Conference", "Workshop"]

// const events: IEvents[] = [
//   { id: 1, name: 'Conference', date: '2023-05-01' },
//   { id: 2, name: 'Workshop', date: '2023-11-15' },
//   { id: 3, name: 'Webinar', date: '2025-01-20' },
// ];

// interface IEvents {
//     id: number;
//     name: string;
//     date: string;
// }

// let filteredEvents:string[] = events.filter((el:IEvents) => el.date.includes('2023'))
// .map((event:IEvents) => event.name)

// console.log(filteredEvents);

// 8. Для массива teams получи имена всех участников всех команд, 
// но без повторений.

// Результат:  ['Alice', 'Bob', 'Clara', 'Dave']

const teams = [
  { id: 1, members: ['Alice', 'Bob'] },
  { id: 2, members: ['Bob', 'Clara'] },
  { id: 3, members: ['Dave', 'Alice'] },
];

interface ITeams {
    id: number;
    members: string[];
}

let allMembers: string[] = [];
teams.forEach((el:ITeams) => allMembers.push(...el.members));

let filteredMembers:string[] = [];
allMembers.forEach((el:string) => !filteredMembers.includes(el)? filteredMembers.push(el) : null )

console.log(filteredMembers);
