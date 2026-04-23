function verProduto() {
    let produto = document.getElementById("produto").value;

    if (produto === "") {
        alert("Selecione um produto válido");
        return;
    }

    let nome = document.getElementById("nome");
    let descricao = document.getElementById("descricao");
    let preco = document.getElementById("preco");
    let imagem = document.getElementById("imagem");

    switch (produto) {
        case "arroz":
            nome.innerText = "Arroz Premium";
            descricao.innerText = "Arroz branco tipo 1 selecionado";
            preco.innerText = "R$ 25,00";
            imagem.src = "arroz.webp";
            break;

        case "macarrao":
            nome.innerText = "Macarrão Italiano";
            descricao.innerText = "Espaguete de alta qualidade";
            preco.innerText = "R$ 8,00";
            imagem.src = "macarrao.webp";
            break;

        case "feijao":
            nome.innerText = "Feijão Carioca";
            descricao.innerText = "Selecionado e de grãos uniformes";
            preco.innerText = "R$ 10,00";
            imagem.src = "feijao.webp";
            break;

        case "sardinha":
            nome.innerText = "Sardinha Especial";
            descricao.innerText = "Sardinha enlatada premium";
            preco.innerText = "R$ 6,00";
            imagem.src = "sardinha.webp";
            break;

        case "suco":
            nome.innerText = "Suco Natural";
            descricao.innerText = "Sem conservantes";
            preco.innerText = "R$ 7,00";
            imagem.src = "suco.webp";
            break;

        case "refrigerante":
            nome.innerText = "Refrigerante 2L";
            descricao.innerText = "Bebida gelada e refrescante";
            preco.innerText = "R$ 9,00";
            imagem.src = "refrigerante.webp";
            break;

        case "extrato":
            nome.innerText = "Extrato de Tomate";
            descricao.innerText = "Concentrado e encorpado";
            preco.innerText = "R$ 5,00";
            imagem.src = "massaDeTomate.webp";
            break;

        case "doce":
            nome.innerText = "Doce de Leite";
            descricao.innerText = "Cremoso e artesanal";
            preco.innerText = "R$ 12,00";
            imagem.src = "doceDeLeite.webp";
            break;
    }
}

function limpar() {
    document.getElementById("produto").value = "";
    document.getElementById("nome").innerText = "Selecione um produto";
    document.getElementById("descricao").innerText = "Aqui aparecerá a descrição";
    document.getElementById("preco").innerText = "";
    document.getElementById("imagem").src = "supermercado.jpeg.webp";
}

document.getElementById("ano").innerText = new Date().getFullYear();
