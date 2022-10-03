export class ValidationService {

    static notEmpty(parameter) {
        if(!parameter == '') return true
      }
    
      static ifString(parameter){
        if( typeof parameter == 'string') return true
      }
    
      static ifNumber(parameter){
        if( typeof parameter == "number") return true
      }
    
      static ifStringNotEmpty(parameter) {
        if(this.ifString(parameter) && this.notEmpty(parameter)) return true
      }
    
      static validNewStudent (name, classGroup, age) {
        const nameValid = this.ifStringNotEmpty(name)
        const classGroupValid = this.ifStringNotEmpty(classGroup)
        const ageValid = this.ifNumber(age)
    
        if (nameValid && classGroupValid && ageValid) { 
          return true 
        } else {
          return false
        }
    
      }
    }