/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
 constructor(){
    this.todoArr=[];
  }
  add(list){
    this.todoArr.push(list)
  }
  getAll(){
    return this.todoArr;
  }
  remove(index){
    this.todoArr.splice(index,1);
    return this.todoArr;
  }
  update(index, update){
    if(this.todoArr.length-1 < index) return this.todoArr
    this.todoArr.splice(index,1,update);
    return this.todoArr;
  }
  get(index){
    if(this.todoArr.length-1 < index) return null
    return this.todoArr[index];
  }
  clear(){
    this.todoArr.splice(0,this.todoArr.length)
    return this.todoArr;
  }
}
// let test = new Todo()
// test.add("test1")
// test.add("test2")
// test.add("test3")
// console.log(test.getAll())
// console.log(test.get(3))
// console.log(test.update(3,"updated"))
module.exports = Todo;
