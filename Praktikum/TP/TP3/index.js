const input = document.querySelector('.btn');
let nama,
  tglLahir,
  jnsKelamin,
  hobi = [],
  hobies,
  agama,
  pesan;
let index = 1;

const getData = () => {
  nama = document.querySelector('#name').value;
  tglLahir = document.querySelector('#tgl-lahir').value;
  jnsKelaminAll = document.querySelectorAll('.jenis-kelamin');
  hobiAll = document.querySelectorAll('.hobi');
  agama = document.querySelector('#agama').value;
  pesan = document.querySelector('#pesan').value;
  for (let i = 0; i < jnsKelaminAll.length; i++) {
    if (jnsKelaminAll[i].checked) {
      console.log(jnsKelaminAll[i].value);
      jnsKelamin = jnsKelaminAll[i].value;
    }
  }

  for (let i = 0; i < hobiAll.length; i++) {
    if (hobiAll[i].checked) {
      hobi.push(hobiAll[i]);
    }
  }
  hobies = hobi.toString();
};

const addRecord = () => {
  const table = document.querySelector('.table-content');
  const record = document.createElement('tr');
  console.log(nama, tglLahir, jnsKelamin, hobies);
  record.innerHTML = `
    <tr>
      <td>Nama:</td>
      <td>${nama}</td>
    </tr>
    <tr>
      <td>Tanggal Lahir:</td>
      <td>${tglLahir}</td>
    </tr>
    <tr>
      <td>Jenis Kelamin:</td>
      <td>${jnsKelamin}</td>
    </tr>
    <tr>
      <td>Hobi:</td>
      <td>${hobies}</td>
    </tr>
    <tr>
      <td>Agama:</td>
      <td>${agama}</td>
    </tr>
    <tr>
      <td>Pesan:</td>
      <td>${pesan}</td>
    </tr>
  `;
  table.appendChild(record);
};

input.addEventListener('click', (e) => {
  e.preventDefault();
  getData();
  addRecord();
});
