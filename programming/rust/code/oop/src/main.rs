#[derive(Debug)]
struct Server {
    id:i32,
    hostname:String,
    os:String,
    status:String
}

impl Server {
    // Use `&mut` if you want to modify the struct inside the function
    // `&self`prevent you from using the `self` struct 
    fn reference(&self) -> String {
      return format!("Server[{}#{}] is '{}'", self.hostname, self.id, self.status);
    }

    fn stop(&mut self) {
        self.status = String::from("STOPPED");
    }
    
    fn state(self) {
        println!("Server.state = {}", self.status);
    }
  }


fn main() {
    
    let mut s = Server{
        id: 1,
        hostname: "localhost".to_string(),
        os: "macos".to_string(),
        status: "RUNNING".to_string(),
    };

    println!("{}", s.reference());
    s.stop();
    println!("{}", s.reference());
    s.state();
    s.stop();

}
