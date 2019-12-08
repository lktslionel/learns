use std::fmt;


pub enum Status {
    Initiated,
    Draft,
    Reviewing,
    Published,
}


impl fmt::Display for Status {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    match *self {
      Status::Initiated => write!(f, "Initiated"),
      Status::Draft     => write!(f, "Draft"),
      Status::Reviewing => write!(f, "Reviewing"),
      Status::Published => write!(f, "Published"),
    }      
  }
}