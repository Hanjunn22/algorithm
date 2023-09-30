function solution(str_list) {
    let l_index = str_list.indexOf("l");
    let r_index = str_list.indexOf("r");
    
    if (l_index === -1 && r_index === -1) {
        return [];
    }

    if (r_index === -1 || (l_index !== -1 && l_index < r_index)) {
        return str_list.slice(0, l_index);
    }
    
    return str_list.slice(r_index + 1);
}