function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var person = line.shift()
    return `Currently serving ${person}.`
  }
}
function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
  else{
    var ret = "The line is currently:"
    for(var i = 0; i < line.length - 1; i++){
      ret += ` ${i+1}. ${line[i]},`
    }
    ret += ` ${i+1}. ${line[i]}`
    return ret
  }
}
var lista = ["pierwszy", "drugi", "trzeci"]
console.log(lista.join(",.??.,"))
