const questions = [
    {
        question: "ما هو اسم النبي الذي بنى الكعبة الأولى؟",
        choices: ["نوح عليه السلام", "إسماعيل عليه السلام", "إبراهيم عليه السلام", "موسى عليه السلام"],
        answer: "إبراهيم عليه السلام"
    },
    {
        question: "من هو النبي الذي عاش أطول فترة بين الأنبياء؟",
        choices: ["نوح عليه السلام", "إبراهيم عليه السلام", "محمد صلى الله عليه وسلم", "موسى عليه السلام"],
        answer: "نوح عليه السلام"
    },
    {
        question: "ما هو اسم الزوجة الثانية للنبي محمد صلى الله عليه وسلم؟",
        choices: ["خديجة بنت خويلد", "عائشة بنت أبي بكر", "سودة بنت زمعة", "حفصة بنت عمر"],
        answer: "سودة بنت زمعة"
    },
    {
        question: "من هو النبي الذي علمه الله الحكمة والكتاب؟",
        choices: ["موسى عليه السلام", "داود عليه السلام", "سليمان عليه السلام", "يوسف عليه السلام"],
        answer: "داود عليه السلام"
    },
    {
        question: "من هو النبي الذي ذكر في القرآن الكريم بأنه نسي؟",
        choices: ["موسى عليه السلام", "يونس عليه السلام", "نوح عليه السلام", "صالح عليه السلام"],
        answer: "موسى عليه السلام"
    },
    {
        question: "ما هو اسم السورة التي تبدأ بحرف الفاء؟",
        choices: ["الفاتحة", "الفلق", "الفجر", "الفيل"],
        answer: "الفاتحة"
    },
    {
        question: "ما هو اسم النبي الذي كان يعمل صانعاً للدروع؟",
        choices: ["إسماعيل عليه السلام", "داود عليه السلام", "إبراهيم عليه السلام", "عيسى عليه السلام"],
        answer: "داود عليه السلام"
    },
    {
        question: "من هو النبي الذي وُلِدَ بَعْدَ مَوْتِ أَمِّهِ؟",
        choices: ["موسى عليه السلام", "عيسى عليه السلام", "محمد صلى الله عليه وسلم", "إبراهيم عليه السلام"],
        answer: "عيسى عليه السلام"
    },
    {
        question: "من هو النبي الذي قالت عنه أمه إنها تَرَكَتْهُ فِي الْمَاءِ عَلَى سَرِيرٍ؟",
        choices: ["موسى عليه السلام", "محمد صلى الله عليه وسلم", "عيسى عليه السلام", "يوسف عليه السلام"],
        answer: "موسى عليه السلام"
    },
    {
        question: "من هو النبي الذي قالت عنه أمه أنها أُلْقِيَ بِهِ فِي النَّارِ؟",
        choices: ["موسى عليه السلام", "إبراهيم عليه السلام", "يوسف عليه السلام", "عيسى عليه السلام"],
        answer: "إبراهيم عليه السلام"
    },
    {
        question: "من هو النبي الذي دعا الله لينزل عليه كتاب؟",
        choices: ["يوسف عليه السلام", "موسى عليه السلام", "عيسى عليه السلام", "محمد صلى الله عليه وسلم"],
        answer: "محمد صلى الله عليه وسلم"
    },
    {
        question: "ما هي أول كلمة نزلت من القرآن؟",
        choices: ["اقرأ", "يا أيها الناس", "سمع", "اذكر"],
        answer: "اقرأ"
    },
    {
        question: "من هو النبي الذي دعا الله ليرفع عنه البلاء والهم؟",
        choices: ["نوح عليه السلام", "يونس عليه السلام", "أيوب عليه السلام", "شعيب عليه السلام"],
        answer: "أيوب عليه السلام"
    },
    {
        question: "من هو النبي الذي تولى أمر البلاد بعد أبيه؟",
        choices: ["يوسف عليه السلام", "إسماعيل عليه السلام", "سليمان عليه السلام", "داود عليه السلام"],
        answer: "سليمان عليه السلام"
    },
    {
        question: "من هو النبي الذي عاش في البحر ثلاثة أيام ولياليها؟",
        choices: ["موسى عليه السلام", "نوح عليه السلام", "يونس عليه السلام", "صالح عليه السلام"],
        answer: "يونس عليه السلام"
    },
    {
        question: "من هو النبي الذي صنع الله له تمثالاً يشبهه وهو نائم؟",
        choices: ["إسماعيل عليه السلام", "يعقوب عليه السلام", "يوسف عليه السلام", "نوح عليه السلام"],
        answer: "إسماعيل عليه السلام"
    },
    {
        question: "من هو النبي الذي بُنِيَ له الكعبة في الجاهلية؟",
        choices: ["عبد الله عليه السلام", "إبراهيم عليه السلام", "إسماعيل عليه السلام", "عمران عليه السلام"],
        answer: "إسماعيل عليه السلام"
    },
    {
        question: "ما هو اسم النبي الذي وُلِدَ بعد وفاة والده؟",
        choices: ["يوسف عليه السلام", "عيسى عليه السلام", "محمد صلى الله عليه وسلم", "يعقوب عليه السلام"],
        answer: "يوسف عليه السلام"
    },
    {
        question: "من هو النبي الذي تعرض لمحنة العذاب بالنار؟",
        choices: ["إبراهيم عليه السلام", "يوسف عليه السلام", "موسى عليه السلام", "عيسى عليه السلام"],
        answer: "إبراهيم عليه السلام"
    },
    {
        question: "من هو النبي الذي قيل عنه بأنه أحب الأنبياء إلى الله؟",
        choices: ["محمد صلى الله عليه وسلم", "عيسى عليه السلام", "داود عليه السلام", "إبراهيم عليه السلام"],
        answer: "محمد صلى الله عليه وسلم"
    },
    {
        question: "من هو النبي الذي عاش في طير السماء؟",
        choices: ["يوسف عليه السلام", "داود عليه السلام", "عيسى عليه السلام", "محمد صلى الله عليه وسلم"],
        answer: "عيسى عليه السلام"
    },
    {
        question: "من هو النبي الذي دعا الله ليقتل ابنه؟",
        choices: ["يعقوب عليه السلام", "إسماعيل عليه السلام", "إسحاق عليه السلام", "إبراهيم عليه السلام"],
        answer: "إبراهيم عليه السلام"
    },
    {
        question: "من هو النبي الذي قال الله له 'يا نار كوني برداً وسلاماً؟'",
        choices: ["إبراهيم عليه السلام", "يوسف عليه السلام", "موسى عليه السلام", "عيسى عليه السلام"],
        answer: "إبراهيم عليه السلام"
    },
    {
        question: "من هو النبي الذي عاش مع شعبه في الفراعنة؟",
        choices: ["موسى عليه السلام", "يوسف عليه السلام", "هود عليه السلام", "صالح عليه السلام"],
        answer: "موسى عليه السلام"
    }
    // Add more questions here
];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the questions array before displaying them
shuffleArray(questions);
let currentQuestion = 0;
let score = 0;
const totalQuestions = 10; // Total number of questions

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    if (currentQuestion < totalQuestions) {
        questionElement.textContent = questions[currentQuestion].question;
        choicesElement.innerHTML = "";

        questions[currentQuestion].choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.onclick = () => checkAnswer(choice);
            choicesElement.appendChild(button);
        });
    } else {
        showResult();
    }
}

function checkAnswer(choice) {
    if (choice === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < totalQuestions) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `نتيجتك: ${score}/${totalQuestions}`;
    displayRestartButton();
    // Shuffle the questions array again when displaying the result
    shuffleArray(questions);
}

function displayRestartButton() {
    const restartButton = document.getElementById("restartButton");
    restartButton.style.display = "block";
    restartButton.onclick = restartQuiz;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    hideRestartButton();
    hideResult();
    // Shuffle the questions array again when restarting the quiz
    shuffleArray(questions);
    displayQuestion();
}

function hideRestartButton() {
    const restartButton = document.getElementById("restartButton");
    restartButton.style.display = "none";
}

function hideResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = ""; // Clear result message and score
}

// Hide restart button initially
hideRestartButton();

displayQuestion();

