use std::env;

enum HealthCheckStatus<A,B> {
    Ok(A),
    Fail(A, B),
}

fn main() {
    
    let args: Vec<String> = env::args().collect();
    let mut status_code: usize = Default::default();


    match args.len() {
        2 => {
            match args[1].parse::<usize>() {
                Ok(code) => {
                    status_code = code;
                }
                Err(_) => eprintln!("The status code must be a number."),
            }
        }

        _ => {
            eprintln!("error: missing arg <http_code>");
            return;
        }
    }

    if status_code == 200 {
        println!("Success. code={}", status_code);
        return;
    }

    println!("Failure. code={}", status_code);

}
