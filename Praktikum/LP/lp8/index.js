const input = document.querySelector('.input');
const changeColor = document.querySelector('.change-color');
const resetColor = document.querySelector('.undo-color');

let nama, NIM, alpro, disweb, arskom, metnum, wirausaha, datmin, statistika, ml;
let ip = 0;
let index = 1;

const inputData = () => {
  nama = window.prompt('Masukan Nama');
  NIM = window.prompt('Masukan NIM');
  alpro = window.prompt('Masukan nilai Algoritma Pemrograman (3 sks)');
  disweb = window.prompt('Masukan nilai Desain Web (3 sks)');
  arskom = window.prompt('Masukan nilai Arsitektur Komputer (3 sks)');
  metnum = window.prompt('Masukan nilai Metode Numerik (3 sks)');
  wirausaha = window.prompt('Masukan nilai Kewirausahaan (2 sks)');
  datmin = window.prompt('Masukan nilai Data Mining (2 sks)');
  statistika = window.prompt('Masukan nilai Statistika (3 sks)');
  ml = window.prompt('Masukan nilai Machine Learning (3 sks)');
  ip =
    ((alpro / 25) * 3 +
      (disweb / 25) * 3 +
      (arskom / 25) * 3 +
      (metnum / 25) * 3 +
      (wirausaha / 25) * 2 +
      (datmin / 25) * 2 +
      (statistika / 25) * 3 +
      (ml / 25) * 3) /
    22;
};

const addRecord = () => {
  const table = document.querySelector('.table-content');
  const record = document.createElement('tr');
  record.innerHTML = `
    <tr>
      <th>${index++}</th>
      <td>${nama}</td>
      <td>${NIM}</td>
      <td>${alpro}</td>
      <td>${disweb}</td>
      <td>${arskom}</td>
      <td>${metnum}</td>
      <td>${wirausaha}</td>
      <td>${datmin}</td>
      <td>${statistika}</td>
      <td>${ml}</td>
      <th>${ip}</th>
    </tr>
  `;
  table.appendChild(record);
};

input.addEventListener('click', (e) => {
  inputData();
  addRecord();
});

changeColor.addEventListener('click', (e) => {
  const color = prompt('Input Color: ');
  document.body.style.backgroundColor = color;
});

resetColor.addEventListener('click', (e) => {
  document.body.style.backgroundColor = 'unset';
});
