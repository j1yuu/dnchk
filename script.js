const Answers = [
    {
        question: 'Это действительно вы, Даниил?',
        case1: 'Да',
        case2: 'Конечно',
        imgsource: './img/1.png'
    },
    {
        question: 'Как вы оцениваете эту крошку сверху?',
        case1: 'Да',
        case2: 'Вкусно и питательно',
        imgsource: './img/2.png'
    },
    {
        question: 'Молодец, Даниил. Теперь вопрос сложнее: помните данную гитару?',
        case1: 'Да',
        case2: 'Так ты сам её отдал пару дней назад...',
        imgsource: './img/3.png'
    },
    {
        question: 'Не вавжно. Раз уж помните, то, скажите пожалуйста, вы знаете, что сегодня за день?',
        case1: 'Да',
        case2: 'Ну ты и Костя',
        imgsource: './img/4.png'
    },
    {
        question: 'Отлично, память вам не отказывает. Теперь самое тяжёлое - знаете, что вас ждёт дальше?',
        case1: 'Да',
        case2: 'Ока в Оке? Волга в Волге?',
        imgsource: './img/5.png'
    },
    {
        question: 'Она достаётся вам! Безвозмездно. Вы рады?',
        case1: 'Да',
        case2: 'Ну ты и сука.',
        imgsource: './img/6.png'
    }
]


$(document).ready(function () {
    let i = 0;
    function Render() {
        $('.question').text(function () {
            return Answers[i].question
        })
        $('.img').html(function () {
            return `<img src=${Answers[i].imgsource}>`
        })
        $('.answ1').text(function () {
            return Answers[i].case1
        })
        $('.answ2').text(function () {
            return Answers[i].case2
        })
    }
    Render()

    $('.case').click(function () {
        if (i < 5) {
            i++
            Render()
        } else {
            location.href = 'https://www.youtube.com/watch?v=9OYAjj8JKkE'
        }
    })
})