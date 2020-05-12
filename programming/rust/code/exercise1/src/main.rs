use std::env;



fn main() {
    
    for arg in env::args() {
        if let Some(v) = arg.chars().nth(0) {
            match v {
                'w' | 'W' => println!("Hello, {}", arg),
                _ => {}
            }
            
        }
    }

}

