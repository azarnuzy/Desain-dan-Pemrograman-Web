const input = document.querySelector('.input');

const nama = [],
  NIM = [],
  alpro = [],
  disweb = [],
  arskom = [],
  metnum = [],
  wirausaha = [],
  datmin = [],
  statistika = [],
  ml = [];
let index = 0;

const inputData = (index) => {
  nama[index] = window.prompt('Masukan Nama');
  NIM[index] = window.prompt('Masukan NIM');
  alpro[index] = window.prompt('Masukan nilai Algoritma Pemrograman (3 sks)');
  disweb[index] = window.prompt('Masukan nilai Desain Web (3 sks)');
  arskom[index] = window.prompt('Masukan nilai Arsitektur Komputer (3 sks)');
  metnum[index] = window.prompt('Masukan nilai Metode Numerik (3 sks)');
  wirausaha[index] = window.prompt('Masukan nilai Kewirausahaan (2 sks)');
  datmin[index] = window.prompt('Masukan nilai Data Mining (2 sks)');
  statistika[index] = window.prompt('Masukan nilai Statistika (3 sks)');
  ml[index] = window.prompt('Masukan nilai Machine Learning (3 sks)');
};

const addRecord = (index) => {
  const table = document.querySelector('.table-content');
  for (let i = 0; i <= index; i++) {}
};

input.addEventListener('click', (e) => {
  inputData(index++);
});
