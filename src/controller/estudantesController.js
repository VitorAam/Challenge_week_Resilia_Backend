import { Database } from '../infra/database.js'

class DbMethods {
  static createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS students(
      id_student INTEGER PRIMARY KEY AUTOINCREMENT,
      name_student VARCHAR,
      class_student VARCHAR,
      age_student INTERGER
      )
    `;
    return new Promise((resolve, reject) => {
      Database.run(query, (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve("Successfully creating students table!");
        }
      });
    });
  }

  static getStudents() {
    const query = `SELECT * FROM students`

    return new Promise((resolve, reject)=> {
      Database.all(query, (e, result)=>{
          if(e){
              reject(e.message)
          } else {
              resolve(result)
          }
      })
    })
  }

  static postStudent(item) {

    const query = `INSERT INTO students (name_student, class_student, age_student) VALUES (?,?,?)`

    const body = Object.values(item)

      return new Promise((resolve, reject)=>{
        Database.run(query, [...body], (e)=>{
          if(e){
            reject(e.message)
          } else {
            resolve({message: "Registered successfully!"})
          }
        })
      })
    
  }

  static deletStudent(id) {
    const query = `DELETE FROM students WHERE id_student = ?`
    return new Promise((resolve, reject) => {
      Database.run(query, id, (e)=>{
          if(e){
              reject(e.message)
          } else {
              resolve({message: `Record with Id ${id} successfully deleted.`})
          }
      })
    })
  }

}

export default DbMethods;