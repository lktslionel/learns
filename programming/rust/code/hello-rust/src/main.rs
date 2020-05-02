#[allow(dead_code)]

mod enums;
mod models;

use enums::Status;
use models::Document;

fn main() {

    let temp_doc:Document;


    let doc = Document {
        name: String::from("Document"),
        status: Status::Initiated
    };

    temp_doc = doc;

    println!("Doc '{}' is in '{}' state.", temp_doc.name, temp_doc.status);

}
