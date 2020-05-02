

pub struct Task {
    title: String 
}

pub fn new_task(a_title: &str) -> Task {
    return Task{
        title: a_title.to_string()
    };
}


#[cfg(test)]
mod tests {
    use crate::*;

    #[test]
    fn test_new_task(){
        // Arrange 
        let task:Task;

        // Act
        task = new_task("buy eggs");

        // Assert
        assert!(task.title == "buy eggs");
    }

}