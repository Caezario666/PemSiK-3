// Sample data (an array of students)
const students = [
    {
      name: "John Doe",
      fakultas: "Fakultas Ilmu Komputer",
      semester: 5,
      tanggalLahir: "2001-09-15",
      nilai: { matematika: 85, fisika: 90, kimia: 80 },
      organisasi: ["BEM", "HIMTI"],
      aktif: true
    },
    {
      name: "Jane Smith",
      fakultas: "Fakultas Ekonomi",
      semester: 3,
      tanggalLahir: "2002-03-22",
      nilai: { matematika: 75, fisika: 85, kimia: 78 },
      organisasi: ["BEM"],
      aktif: false
    }
  ];
  
  // 1. Tampilkan Data Mahasiswa yang pertama
  console.log("Data Mahasiswa Pertama: ", students[0]);
  
  // 2. Destructuring seluruh field
  const { name, fakultas, semester, tanggalLahir, nilai, organisasi, aktif } = students[0];
  console.log("Destructured: ", name, fakultas, semester, tanggalLahir, nilai, organisasi, aktif);
  
  // 3. Destructuring pada field nilai
  const { matematika, fisika, kimia } = students[0].nilai;
  console.log("Nilai: ", matematika, fisika, kimia);
  
  // 4. Destructuring pada field organisasi
  const [org1, org2] = students[0].organisasi;
  console.log("Organisasi: ", org1, org2);
  
  // 5. Spread operator untuk field organisasi
  const allOrgs = [...students[0].organisasi, "UKM"];
  console.log("Organisasi dengan Spread Operator: ", allOrgs);
  
  // 6. Update pada field fakultas dan field semester
  students[0] = { ...students[0], fakultas: "Fakultas Teknik", semester: 6 };
  console.log("Updated Mahasiswa: ", students[0]);
  
  // 7. Split pada field tanggal lahir dan tampilkan tahun saja
  const [year, month, day] = students[0].tanggalLahir.split("-");
  console.log("Tahun Lahir: ", year);
  
  // 8. Conditional Operator ‘?’
  const status = students[0].aktif ? "Aktif" : "Tidak Aktif";
  console.log("Status Mahasiswa: ", status);
  
  // 9. Map tampilkan semua nama mahasiswa
  const allNames = students.map((student) => student.name);
  console.log("Nama Semua Mahasiswa: ", allNames);
  
  // 10. Filtering tampilkan semua mahasiswa yang aktif dan dari Fakultas Ilmu Komputer
  const filteredStudents = students.filter(
    (student) => student.aktif && student.fakultas === "Fakultas Ilmu Komputer"
  );
  console.log("Mahasiswa Aktif dari Fakultas Ilmu Komputer: ", filteredStudents);
  
  // 11. Totalkan nilai seluruh mahasiswa
  const totalNilai = students.reduce((acc, student) => {
    const { matematika, fisika, kimia } = student.nilai;
    return acc + matematika + fisika + kimia;
  }, 0);
  console.log("Total Nilai Mahasiswa: ", totalNilai);
  
  // 12. Sort seluruh mahasiswa berdasarkan semester
  const sortedStudents = students.sort((a, b) => a.semester - b.semester);
  console.log("Sorted Mahasiswa Berdasarkan Semester: ", sortedStudents);
  
  // 13. Menambahkan Mahasiswa Baru
  students.push({
    name: "Michael Johnson",
    fakultas: "Fakultas Ilmu Komputer",
    semester: 1,
    tanggalLahir: "2003-06-10",
    nilai: { matematika: 88, fisika: 92, kimia: 85 },
    organisasi: ["HIMTI"],
    aktif: true
  });
  console.log("Mahasiswa Setelah Penambahan: ", students);
  
  // 14. Delete dan Update pada salah satu Mahasiswa
  const deleteIndex = students.findIndex(student => student.name === "Jane Smith");
  students.splice(deleteIndex, 1); // Delete
  students[0] = { ...students[0], aktif: false }; // Update
  console.log("Mahasiswa Setelah Delete dan Update: ", students);
  