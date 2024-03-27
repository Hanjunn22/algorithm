function solution(nodeinfo) {
    const nodes = nodeinfo
        .map(([x, y], index) => ({ id: index + 1, x, y }))
        .sort((a, b) => b.y - a.y || a.x - b.x); // y 내림차순, x 오름차순 정렬

    const tree = buildTree(nodes);

    const preorderResult = [];
    const postorderResult = [];

    // 전위 순회
    function preorder(node) {
        if (!node) return;
        preorderResult.push(node.id);
        preorder(node.left);
        preorder(node.right);
    }

    // 후위 순회
    function postorder(node) {
        if (!node) return;
        postorder(node.left);
        postorder(node.right);
        postorderResult.push(node.id);
    }

    // 트리 구성
    function buildTree(nodes) {
        if (!nodes.length) return null;
        
        const [root, ...rest] = nodes;
        root.left = buildTree(rest.filter(node => node.x < root.x));
        root.right = buildTree(rest.filter(node => node.x > root.x));
        
        return root;
    }

    preorder(tree);
    postorder(tree);

    return [preorderResult, postorderResult];
}
