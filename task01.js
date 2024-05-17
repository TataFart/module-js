
const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];

const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr1, arr2) => {
    const passStudent = [];
   if(arr1.length > arr2.length){
        for (let i = 0; i < arr1.length; i++) {
            if(!arr2.includes(arr1[i])) {
                passStudent.push(arr1[i])
            }
        }
        return passStudent;
    } else {
        for (let i = 0; i < arr2.length; i++) {
            if(!arr1.includes(arr1[i])) {
                passStudent.push(arr2[i])
            }
        }
        return passStudent;
    }
    }

console.log("Студетны, которые сдали экзамен:", filter(failedStudents, allStudents));
