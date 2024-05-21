
const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr1, arr2) => {
    const passStudent = [];
   
        for (let i = 0; i < arr1.length; i++) {
            if(arr1.includes(arr2[i])) {
                passStudent.push(arr1[i])
            }
        }
        return passStudent;
    
    }
    

console.log("Студетны, которые сдали экзамен:", filter( allStudents, failedStudents));
