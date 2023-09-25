function solution(order) {
    let price = 0;

    for (let i = 0; i < order.length; i++) {
        switch(order[i]) {
            case "iceamericano":
            case "americanoice":
            case "americano":
            case "anything":
                price += 4500;
                break;
            case "hotamericano":
            case "americanohot":
                price += 4500;
                break;
            case "icecafelatte":
            case "cafelatteice":
            case "cafelatte":
                price += 5000;
                break;
            case "hotcafelatte":
            case "cafelattehot":
                price += 5000;
                break;
        }
    }

    return price;
}