#[allow(dead_code)]

mod enums;
mod models;

use enums::Status;
use models::Document;

fn main() {


    let doc = Document {
        name: String::from("Registration Form"),
        status: Status::Initiated
    };

    println!("Doc '{}' is in '{}' state.", doc.name, doc.status);

}
