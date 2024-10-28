const students = [
    {
      name: "Vinsen",
      fakultas: "Fakultas Ilmu Komputer",
      semester: 5,
      tanggalLahir: "2002-02-20",
      nilai: { matematika: 85, fisika: 90, kimia: 80 },
      organisasi: ["BEM"],
      aktif: true
    },
    {
      name: "Bejo",
      fakultas: "Fakultas Ekonomi",
      semester: 7,
      tanggalLahir: "2001-02-23",
      nilai: { matematika: 75, fisika: 85, kimia: 78 },
      organisasi: ["BEM"],
      aktif: false
    }
  ];
  

  console.log("Data Mahasiswa Pertama: ", students[0]);
  
  const { name, fakultas, semester, tanggalLahir, nilai, organisasi, aktif } = students[0];
  console.log("Destructured: ", name, fakultas, semester, tanggalLahir, nilai, organisasi, aktif);
  
  const { matematika, fisika, kimia } = students[0].nilai;
  console.log("Nilai: ", matematika, fisika, kimia);
  
  const [org1, org2] = students[0].organisasi;
  console.log("Organisasi: ", org1, org2);
  
  const allOrgs = [...students[0].organisasi, "UKM"];
  console.log("Organisasi dengan Spread Operator: ", allOrgs);
  
  students[0] = { ...students[0], fakultas: "Fakultas Teknik", semester: 6 };
  console.log("Updated Mahasiswa: ", students[0]);

  const [year, month, day] = students[0].tanggalLahir.split("-");
  console.log("Tahun Lahir: ", year);
  
  const status = students[0].aktif ? "Aktif" : "Tidak Aktif";
  console.log("Status Mahasiswa: ", status);

  const allNames = students.map((student) => student.name);
  console.log("Nama Semua Mahasiswa: ", allNames);

  const filteredStudents = students.filter(
    (student) => student.aktif && student.fakultas === "Fakultas Ilmu Komputer"
  );
  console.log("Mahasiswa Aktif dari Fakultas Ilmu Komputer: ", filteredStudents);

  const totalNilai = students.reduce((acc, student) => {
    const { matematika, fisika, kimia } = student.nilai;
    return acc + matematika + fisika + kimia;
  }, 0);
  console.log("Total Nilai Mahasiswa: ", totalNilai);

  const sortedStudents = students.sort((a, b) => a.semester - b.semester);
  console.log("Sorted Mahasiswa Berdasarkan Semester: ", sortedStudents);

  students.push({
    name: "Fufa",
    fakultas: "Fakultas Ilmu Komputer",
    semester: 3,
    tanggalLahir: "2005-06-07",
    nilai: { matematika: 88, fisika: 92, kimia: 85 },
    organisasi: ["HIMTI"],
    aktif: true
  });
  console.log("Mahasiswa Setelah Penambahan: ", students);

  const deleteIndex = students.findIndex(student => student.name === "Jane Smith");
  students.splice(deleteIndex, 1); // Delete
  students[0] = { ...students[0], aktif: false }; // Update
  console.log("Mahasiswa Setelah Delete dan Update: ", students);
  