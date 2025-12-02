let keranjang = [];

function tambahKeranjang(namaProduk) {
    keranjang.push(namaProduk);
    updateKeranjang();
}

function updateKeranjang() {
    const list = document.getElementById("listKeranjang");
    list.innerHTML = "";

    keranjang.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}