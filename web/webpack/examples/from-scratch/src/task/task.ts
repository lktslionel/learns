
enum Status {
    Todo,
    Doing,
    WaitingFor,
    Done,
  }

class Task {
    title: string 
    status: Status
}


export { Task, Status };