const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());

const daftarBarang = [
    { id: "BRG001", nama: "Kursi Lipat" },
    { id: "BRG002", nama: "Meja Belajar" },
];

server.get("/barang", (req, res) => {
    res.status(200).json(daftarBarang);
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server API aktif di alamat http://localhost:${PORT}`);
});
