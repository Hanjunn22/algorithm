function solution(arr, delete_list) {
    return arr.filter(char => !delete_list.includes(char));
}