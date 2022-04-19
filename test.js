function solution(str, ending){
    // TODO: complete
    let splitString = str.split("")
    if (splitString.includes(ending,-ending.length)) {
      return true
    } else {
      false
    }
  }