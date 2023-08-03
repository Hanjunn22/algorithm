function solution(dots) {
    let xCoordinates = dots.map(dot => dot[0]);
    let yCoordinates = dots.map(dot => dot[1]);
    
    let width = Math.max(...xCoordinates) - Math.min(...xCoordinates);
    let height = Math.max(...yCoordinates) - Math.min(...yCoordinates);

    return width * height;
}
