// --- DAFTAR SOAL ---
const questions = [
    { q: "Kepada siapakah firman TUHAN datang dalam Yunus 1?", o: ["Yunus bin Amittai", "Yunus bin Abinadab", "Yunus bin Elia", "Yunus bin Samuel"], a: 0 },
    { q: "Ke kota manakah TUHAN memerintahkan Yunus untuk pergi?", o: ["Tarsis", "Yafo", "Niniwe", "Babel"], a: 2 },
    { q: "Mengapa TUHAN menyuruh Yunus berseru terhadap kota tersebut?", o: ["Karena penduduknya sedang menderita", "Karena kejahatannya telah sampai kepada TUHAN", "Karena kota itu hendak dihancurkan oleh musuh", "Karena kota itu belum pernah mendengar tentang TUHAN"], a: 1 },
    { q: "Ke manakah Yunus berniat melarikan diri untuk menjauh dari hadapan TUHAN?", o: ["Yafo", "Tarsis", "Niniwe", "Yerusalem"], a: 1 },
    { q: "Ke kota manakah Yunus pergi terlebih dahulu untuk mendapatkan kapal?", o: ["Tarsis", "Niniwe", "Yafo", "Babilonia"], a: 2 },
    { q: "Apa yang dilakukan Yunus sebelum naik ke kapal yang menuju ke Tarsis?", o: ["Berdoa memohon perlindungan", "Membayar biaya perjalanannya", "Membeli bekal makanan", "Berpamitan dengan keluarganya"], a: 1 },
    { q: "Apa yang dilakukan TUHAN setelah kapal Yunus berlayar?", o: ["Mengirimkan petir menyambar kapal", "Menurunkan angin ribut ke laut sehingga terjadi badai besar", "Menghentikan angin sehingga kapal tidak bisa berlayar", "Mendatangkan gelombang air surut"], a: 1 },
    { q: "Bagaimana kondisi kapal akibat badai besar tersebut?", o: ["Tenggelam ke dasar laut", "Rusak kemudianya", "Hampir-hampir terpukul hancur", "Terdampar di pulau terasing"], a: 2 },
    { q: "Apa reaksi awal dari para awak kapal ketika terjadi badai besar?", o: ["Masing-masing berteriak-teriak kepada allahnya dan menjadi takut", "Langsung mencari Yunus", "Melompat keluar kapal untuk berenang", "Menyalahkan nakhoda kapal"], a: 0 },
    { q: "Apa yang dibuang oleh para awak kapal ke dalam laut untuk meringankan beban kapal?", o: ["Barang bawaan Yunus saja", "Makanan dan minuman", "Segala muatan kapal", "Alat-alat kemudi kapal"], a: 2 },
    { q: "Di manakah Yunus berada saat badai hebat terjadi?", o: ["Di geladak kapal sambil berdoa", "Di samping nakhoda membantu mengemudi", "Di ruang kapal yang paling bawah dan tertidur nyenyak", "Di dalam air laut karena melompat"], a: 2 },
    { q: "Siapakah yang mendatangi Yunus di tempat persembunyiannya?", o: ["Nakhoda kapal", "Awak kapal", "Utusan dari Niniwe", "Kapten kapal"], a: 0 },
    { q: "Apa perkataan nakhoda kepada Yunus ketika menemukannya sedang tidur?", o: ["Mengapa engkau tidak membantu kami?", "Bagaimana mungkin engkau tidur begitu nyenyak? Bangunlah, berserulah kepada Allahmu", "Turunlah dan buanglah muatanmu ke laut!", "Siapakah engkau dan mengapa engkau bersembunyi?"], a: 1 },
    { q: "Mengapa awak kapal memutuskan untuk membuang undi?", o: ["Untuk menentukan siapa yang harus memimpin doa", "Untuk menentukan siapa yang harus dibuang ke laut", "Supaya mengetahui karena siapa mereka ditimpa malapetaka ini", "Untuk memilih nakhoda baru"], a: 2 },
    { q: "Siapakah yang terkena undi saat para awak kapal membuang undi?", o: ["Nakhoda", "Yunus", "Salah seorang awak kapal", "Pemilik muatan kapal"], a: 1 },
    { q: "Pertanyaan apa saja yang diajukan awak kapal kepada Yunus setelah ia terkena undi?", o: ["Siapa nama orang tuamu dan di mana tempat tinggalmu?", "Mengapa engkau tidur saat ada badai?", "Apa pekerjaanmu, dari mana engkau datang, apa negerimu, dan dari bangsa manakah engkau?", "Berapa biaya yang engkau bayar untuk perjalanan ini?"], a: 2 },
    { q: "Bagaimana Yunus memperkenalkan dirinya dan Allahnya kepada para awak kapal?", o: ["Aku seorang Israel yang menyembah dewa laut.", "Aku seorang Ibrani; aku takut akan TUHAN, Allah yang empunya langit, yang telah menjadikan lautan dan daratan.", "Aku seorang nabi dari Yerusalem yang sedang berlibur.", "Aku seorang pedagang dari Yafo yang hendak ke Tarsis."], a: 1 },
    { q: "Mengapa orang-orang di kapal menjadi sangat takut setelah mendengar pengakuan Yunus?", o: ["Karena mereka tahu Yunus melarikan diri jauh dari hadapan TUHAN", "Karena mereka takut diserang oleh bangsa Yunus", "Karena kapal mereka mulai tenggelam", "Karena Yunus mengutuk mereka"], a: 0 },
    { q: "Apa yang ditanyakan awak kapal setelah mengetahui bahwa Yunus melarikan diri dari TUHAN?", o: ["Mengapa engkau melarikan diri ke Tarsis?", "Akan kami apakan engkau, supaya laut menjadi reda dan tidak menyerang kami lagi?", "Apakah Allahmu akan mengampuni kami?", "Berapa banyak uang yang engkau miliki?"], a: 1 },
    { q: "Apakah saran Yunus kepada para awak kapal agar laut menjadi reda?", o: ["Berdoalah bersama-samaku kepada TUHAN.", "Kembalikanlah kapal ini ke pelabuhan Yafo.", "Angkatlah aku, campakkanlah aku ke dalam laut.", "Buanglah seluruh sisa muatan kapal ini."], a: 2 },
    { q: "Mengapa Yunus yakin bahwa laut akan reda jika ia dicampakkan ke laut?", o: ["Karena ia tahu badai besar itu menyerang karena dirinya", "Karena ia bisa berenang sampai ke daratan", "Karena nakhoda yang memerintahkannya", "Karena ia telah mendapat penglihatan dari TUHAN"], a: 0 },
    { q: "Apa tindakan pertama yang dilakukan para awak kapal setelah mendengar perintah Yunus untuk mencampakkannya?", o: ["Langsung melempar Yunus ke dalam laut", "Berdayung dengan sekuat tenaga untuk membawa kapal kembali ke darat", "Mengikat Yunus di tiang kapal", "Meminta tambahan uang dari Yunus"], a: 1 },
    { q: "Mengapa usaha para awak kapal untuk kembali ke darat mengalami kegagalan?", o: ["Karena dayung kapal mereka patah", "Karena laut semakin bergelora menyerang mereka", "Karena mereka kehilangan arah", "Karena angin bertiup ke arah berlawanan"], a: 1 },
    { q: "Kepada siapakah para awak kapal berseru ketika usaha berdayung mereka gagal?", o: ["Kepada dewa-dewa mereka sendiri", "Kepada nakhoda kapal", "Kepada TUHAN", "Kepada Yunus"], a: 2 },
    { q: "Apa permohonan para awak kapal dalam doa mereka kepada TUHAN?", o: ["Minta agar kapal tidak tenggelam", "Minta agar jangan dibiarkan binasa karena nyawa Yunus dan tidak ditanggungkan darah orang tidak bersalah", "Minta agar Yunus diubah hatinya", "Minta agar mendapat muatan kapal yang baru"], a: 1 },
    { q: "Apa yang terjadi pada laut segera setelah Yunus dicampakkan ke dalamnya?", o: ["Laut semakin mengamuk", "Laut menjadi membeku", "Laut berhenti mengamuk", "Terjadi gempa bumi di laut"], a: 2 },
    { q: "Bagaimana reaksi para awak kapal setelah melihat laut menjadi tenang?", o: ["Mereka tertawa gembira", "Mereka menjadi sangat takut kepada TUHAN, mempersembahkan korban sembelihan, serta mengikrarkan nazar", "Mereka melanjutkan perjalanan ke Tarsis dengan tenang", "Mereka memutuskan untuk menjadi pelaut selamanya"], a: 1 },
    { q: "Apa yang mendatangkan ikan besar untuk menelan Yunus?", o: ["Kebetulan ikan itu lewat", "Atas penentuan TUHAN", "Karena aroma makanan di tubuh Yunus", "Doa dari nakhoda kapal"], a: 1 },
    { q: "Berapa lama Yunus tinggal di dalam perut ikan besar tersebut?", o: ["Tiga hari tiga malam", "Satu hari satu malam", "Tujuh hari tujuh malam", "Empat puluh hari empat puluh malam"], a: 0 },
    { q: "Inti dari kisah Yunus Bab 1 ini menunjukkan bahwa Yunus mengalami badai karena...", o: ["Kesalahan nakhoda dan awak kapal", "Ketidaktaatannya dan usahanya melarikan diri dari perintah TUHAN", "Cuaca buruk yang biasa terjadi di Laut Tengah", "Muatan kapal yang terlalu berat"], a: 1 }
];

// --- STATE VARIABLES ---
let currentQuestionIndex = 0;
let score = 0;
let studentName = "";
let studentClass = "";
let canAnswer = true;

// --- DOM ELEMENTS ---
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const inputNama = document.getElementById('input-nama');
const inputKelas = document.getElementById('input-kelas');
const btnStart = document.getElementById('btn-start');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnNext = document.getElementById('btn-next');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const siswaInfo = document.getElementById('siswa-info');

// --- EVENT LISTENERS ---
btnStart.addEventListener('click', startQuiz);
btnNext.addEventListener('click', nextQuestion);
document.getElementById('btn-restart').addEventListener('click', () => {
    startScreen.classList.add('active');
    resultScreen.classList.remove('active');
});

function startQuiz() {
    studentName = inputNama.value.trim();
    studentClass = inputKelas.value.trim();

    if (studentName === "" || studentClass === "") {
        alert("Shalom! Ayo isi nama dan kelasmu dulu ya! 😊");
        return;
    }

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    siswaInfo.textContent = `${studentName} | ${studentClass}`;
    currentQuestionIndex = 0;
    score = 0;
    
    loadQuestion();
}

function loadQuestion() {
    canAnswer = true;
    btnNext.style.display = 'none';
    optionsContainer.innerHTML = '';
    
    // Update Progress
    const progressPercent = (currentQuestionIndex / questions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    progressText.textContent = `Soal ${currentQuestionIndex + 1}/${questions.length}`;

    // Tampilkan Soal
    const currentQ = questions[currentQuestionIndex];
    questionText.textContent = `${currentQuestionIndex + 1}. ${currentQ.q}`;

    // Buat Tombol Opsi
    currentQ.o.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.innerHTML = `<span><strong>${String.fromCharCode(65 + index)}.</strong> ${option}</span>`;
        button.onclick = () => checkAnswer(index, button);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex, btnElement) {
    if (!canAnswer) return; // Mencegah klik ganda
    canAnswer = false;

    const currentQ = questions[currentQuestionIndex];
    const allButtons = optionsContainer.querySelectorAll('.option-btn');

    if (selectedIndex === currentQ.a) {
        // --- JAWABAN BENAR ---
        btnElement.classList.add('correct');
        btnElement.innerHTML += ` <span style="font-size:1.2rem;">✅</span>`;
        score++;
        
        // Efek Confetti Kecil Setiap Jawab Benar
        confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#4CAF50', '#FFD700', '#4facfe']
        });
        
    } else {
        // --- JAWABAN SALAH ---
        btnElement.classList.add('wrong', 'shake');
        btnElement.innerHTML += ` <span style="font-size:1.2rem;">❌</span>`;
        
        // Tunjukkan jawaban yang benar
        allButtons[currentQ.a].classList.add('correct');
        allButtons[currentQ.a].innerHTML += ` <span style="font-size:1.2rem;">✅</span>`;
    }

    // Munculkan tombol lanjut
    btnNext.style.display = 'block';
    if (currentQuestionIndex === questions.length - 1) {
        btnNext.textContent = "Lihat Hasil 🏁";
    } else {
        btnNext.textContent = "Lanjut ➡️";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    const totalSoal = questions.length;
    const nilaiAkhir = Math.round((score / totalSoal) * 100);
    const salah = totalSoal - score;

    document.getElementById('res-nama').textContent = studentName;
    document.getElementById('res-kelas').textContent = studentClass;
    document.getElementById('res-benar').textContent = score;
    document.getElementById('res-salah').textContent = salah;
    document.getElementById('res-nilai').textContent = nilaiAkhir;

    const pesanElement = document.getElementById('res-pesan');
    if (nilaiAkhir >= 90) {
        pesanElement.textContent = "Luar biasa! Kamu pintar sekali! 🌟";
        fireConfetti(); 
    } else if (nilaiAkhir >= 70) {
        pesanElement.textContent = "Bagus sekali! Terus semangat belajar ya! 👏";
        fireConfetti();
    } else if (nilaiAkhir >= 50) {
        pesanElement.textContent = "Cukup baik! Ayo baca Alkitab lagi ya! 📖";
    } else {
        pesanElement.textContent = "Jangan sedih ya, ayo coba lagi! Kamu pasti bisa! 💪";
    }
}

// Fungsi Efek Confetti Hujan
function fireConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}