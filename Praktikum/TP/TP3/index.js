const input = document.querySelector('.btn');
let nama,
  tglLahir,
  correctTglLahir,
  jnsKelamin,
  hobi = [],
  hobies,
  agama,
  pesan;
let index = 1;

const getData = () => {
  nama = document.querySelector('#name').value;
  tglLahir = document.querySelector('#tgl-lahir').value;
  correctTglLahir = tglLahir.split('-').reverse().join('-');
  jnsKelaminAll = document.querySelectorAll('.jenis-kelamin');
  hobiAll = document.querySelectorAll('.hobi');
  agama = document.querySelector('#agama').value;
  pesan = document.querySelector('#pesan').value;
  for (let i = 0; i < jnsKelaminAll.length; i++) {
    if (jnsKelaminAll[i].checked) {
      jnsKelamin = jnsKelaminAll[i].value;
    }
  }

  for (let i = 0; i < hobiAll.length; i++) {
    if (hobiAll[i].checked) {
      console.log(hobiAll[i].value);
      hobi.push(hobiAll[i].value);
    }
  }
  hobies = hobi.join(', ');
};

const addRecord = () => {
  const table = document.querySelector('.table');
  const record = document.createElement('tbody');
  record.setAttribute('class', 'table-content');
  record.innerHTML = `
    <tr>
      <th scope="row">Nama:</th>
      <td>${nama}</td>
    </tr>
    <tr>
      <th scope="row">Tanggal Lahir:</th>
      <td>${correctTglLahir}</td>
    </tr>
    <tr>
      <th scope="row">Jenis Kelamin:</th>
      <td>${jnsKelamin}</td>
    </tr>
    <tr>
      <th scope="row">Hobi:</th>
      <td>${hobies}</td>
    </tr>
    <tr>
      <th scope="row">Agama:</th>
      <td>${agama}</td>
    </tr>
    <tr>
      <th scope="row">Pesan:</th>
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
