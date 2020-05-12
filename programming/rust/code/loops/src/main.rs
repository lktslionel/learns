fn main() {
    let nums = vec![1, 2, 3];
    foreach(|num| { println!("num: {}", num)}, nums);
}




fn foreach(f: fn(i64), numbers: Vec<i64>){
    for num in numbers {
        f(num);
    }
}