fn main(){
    // You can either use the constructor 
    let s = String::from("Hello 🤗");
  
    println!("Chars");
  
    for c in s.chars() {
      println!("{}", c);
    }
  
    println!("Bytes");
  
    for b in s.bytes() {
      println!("{}", b);
    }

    
    println!("Len = {}", s.len());
  }