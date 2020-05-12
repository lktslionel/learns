

trait HttpService {
    fn new(name: &'static str) -> Self;
}

#[derive(Debug)]
struct Service {
    endpoint: String
}

impl HttpService for Service {
    fn new(name: &'static str) -> Service {
        Service {endpoint: format!("http://{}/", name)}
    }
}

fn main() {
    
    let svc: Service = Service::new("webservice");
    println!("{:?}", svc);

}
