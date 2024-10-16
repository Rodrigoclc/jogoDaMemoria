function main() {

    const nodes = document.querySelectorAll('.node');
    // for (var index = 0; index < 3; index++) {
    //     (function (index) {
    //         setTimeout(function () {
    //             timeoutFunction(nodes);
    //         }, 4500 * index);
    //     })(index);
    // };

    // 

    nodes.forEach(node => {
        node.addEventListener('click', () => {
            node.classList.remove('node');
            const lista = [];
            for (let index = 0; index < 3; index++) {
                const indice = selecionarNodes(0, 9);
                lista.push(indice);

            }
            lista.forEach(x => {
                nodes[x].classList.add('node-ativado');
            })
            console.log(lista);
            //console.log(selecionarNodes(0,9));
        });
    });
}
main();

function selecionarNodes(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}

function timeoutFunction(nodes, index) {
    for (var index = 0; index < 9; index++) {
        (function (index) {
            setTimeout(function () {
                nodes[index].classList.remove('node');
                setTimeout(() => { nodes[index].classList.add('node') }, "250");
            }, 500 * index);
        })(index);
    };
}