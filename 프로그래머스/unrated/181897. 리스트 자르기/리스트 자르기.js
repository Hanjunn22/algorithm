function solution(n, slicer, num_list) {
    let a = slicer[0];
    let b = slicer[1];
    let c = slicer[2];

    switch(n) {
        case 1:
            return num_list.slice(0, b + 1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b + 1);
        case 4:
            return num_list.slice(a, b + 1).filter((_, index) => index % c === 0);
        default:
            return [];
    }
}