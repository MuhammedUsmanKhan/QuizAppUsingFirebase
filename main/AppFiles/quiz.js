let container = document.querySelector(`#container`)
let QuestionCont = document.querySelector(`#QuesCon`)
let Prev = document.querySelector(`#Prev`)
let Next = document.querySelector(`#Next`)
let submit = document.querySelector(`#Submit`)
let MCQ = [
    {
        Question: "Who made this Car",
        A: "Usman",
        B: "Umer",
        C: "Ushna",
        D: "Isha",
        Answer: "Usman",
    },
    {
        Question: "Who developed this Car",
        A: "Uvdsman",
        B: "Umefdgdfr",
        C: "helr",
        D: "Ishagf",
        Answer: "helr",
    },
    {
        Question: "Who invented this Car",
        A: "Uhehe",
        B: "lesgo",
        C: "good",
        D: "bye",
        Answer: "lesgo",
    },
]
let x = 0
//makingdivs
const LoadingArrItems = () => {
    if (x < 0) {
        x = 1
    }
    let lengthObj = Object.keys(MCQ[x]).length
    let keys = Object.keys(MCQ[x])

    console.log(MCQ[x][keys[5]])

    container.innerHTML = ''
    QuestionCont.innerHTML = ``

    for (let i = 0; i < lengthObj - 1; i++) {

        if (lengthObj != 0) {
            let newELEMENT = document.createElement(`div`)
            if (i == 0) {
                let QuesSpan = document.createElement(`span`)
                let txt = document.createTextNode(`${MCQ[x].Question}`)
                QuesSpan.appendChild(txt)
                QuesSpan.setAttribute(`id`, `ques`)
                QuesSpan.setAttribute(`class`, `font-semibold`)
                QuestionCont.appendChild(QuesSpan)
            }
            else {
                newELEMENT.setAttribute(`class`, ` flex items-center pl-3 bg-white text-black focuscolor rounded-2xl space-x-2`)
                container.append(newELEMENT)
                let Label = document.createElement(`label`)
                let txt = document.createTextNode(`${MCQ[x][`${keys[i]}`]}`)
                Label.appendChild(txt)
                Label.setAttribute(`id`, `Ans`)
                Label.setAttribute(`for`, `inp${i}`)
                let inp = document.createElement(`input`)
                Label.setAttribute(`class`, `flex labelcolor w-11/12 font-semibold h-12 items-center `)
                inp.setAttribute(`class`, `accent-[#00586c] option`)
                inp.setAttribute(`type`, `radio`)
                inp.setAttribute(`id`, `inp${i}`)
                inp.setAttribute(`name`, `options`)
                inp.setAttribute(`value`, `${keys[i]}`)

                newELEMENT.appendChild(inp)
                newELEMENT.appendChild(Label)

            }
        }
        else {
            break;
        }
    }
    x = x + 1;
    //  console.log(x)
}
LoadingArrItems()
//console.log(Object.keys(MCQ[x]).length)
const divList = document.querySelectorAll(`.focuscolor`)
const LabList = document.querySelectorAll(`.labelcolor`)

divList.forEach(singlediv => {
    singlediv.addEventListener(`click`, () => {
        document.querySelector(`.SingleDiv`)?.classList.remove(`SingleDiv`, `bg-blue-800`)
        singlediv.classList.add(`SingleDiv`, `bg-blue-800`)
    })
})
LabList.forEach(singlelist => {
    singlelist.addEventListener(`click`, () => {
        document.querySelector(`.SingleList`)?.classList.remove(`SingleList`, `text-white`)
        singlelist.classList.add(`SingleList`, `text-white`)
    })
})

// Prev.addEventListener(`click`, () => {
//     console.log("Prev value of x : " + x)
//     if (x == MCQ.length) {
//         x = x - 2
//     } else {
//         x--
//     }

//     let lengthObj = Object.keys(MCQ[x]).length
//     let keys = Object.keys(MCQ[x])

//     container.innerHTML = ''
//     QuestionCont.innerHTML = ``

//     for (let i = 0; i < lengthObj - 1; i++) {

//         if (lengthObj != 0) {
//             let newELEMENT = document.createElement(`div`)
//             if (i == 0) {
//                 let QuesSpan = document.createElement(`span`)
//                 let txt = document.createTextNode(`${MCQ[x].Question}`)
//                 QuesSpan.appendChild(txt)
//                 QuesSpan.setAttribute(`id`, `ques`)
//                 QuesSpan.setAttribute(`class`, `font-semibold`)
//                 QuestionCont.appendChild(QuesSpan)
//             }
//             else {
//                 newELEMENT.setAttribute(`class`, ` flex items-center pl-3 bg-white text-black focuscolor rounded-2xl space-x-2`)
//                 container.append(newELEMENT)
//                 let Label = document.createElement(`label`)
//                 let txt = document.createTextNode(`${MCQ[x][`${keys[i]}`]}`)
//                 Label.appendChild(txt)
//                 Label.setAttribute(`id`, `Ans`)
//                 Label.setAttribute(`for`, `inp${i}`)
//                 let inp = document.createElement(`input`)
//                 Label.setAttribute(`class`, `flex labelcolor w-11/12 font-semibold h-12 items-center `)
//                 inp.setAttribute(`class`, `accent-[#00586c]`)
//                 inp.setAttribute(`type`, `radio`)
//                 inp.setAttribute(`id`, `inp${i}`)
//                 inp.setAttribute(`name`, `options`)
//                 inp.setAttribute(`value`, `${keys[i]}`)

//                 newELEMENT.appendChild(inp)
//                 newELEMENT.appendChild(Label)

//             }
//         }
//         else {
//             break;
//         }
//     }

// })

const LoadingArrItemsNex = () => {
    console.log("Nex value of x : " + x)
    if (x <= 0) {
        x = 1
    }
    let lengthObj = Object.keys(MCQ[x]).length
    let keys = Object.keys(MCQ[x])

    container.innerHTML = ''
    QuestionCont.innerHTML = ``
    
    for (let i = 0; i < lengthObj - 1; i++) {

        if (lengthObj != 0) {
            let newELEMENT = document.createElement(`div`)
            if (i == 0) {
                let QuesSpan = document.createElement(`span`)
                let txt = document.createTextNode(`${MCQ[x].Question}`)
                QuesSpan.appendChild(txt)
                QuesSpan.setAttribute(`id`, `ques`)
                QuesSpan.setAttribute(`class`, `font-semibold`)
                QuestionCont.appendChild(QuesSpan)
            }
            else {
                newELEMENT.setAttribute(`class`, ` flex items-center pl-3 bg-white text-black focuscolor rounded-2xl space-x-2`)
                container.append(newELEMENT)
                let Label = document.createElement(`label`)
                let txt = document.createTextNode(`${MCQ[x][`${keys[i]}`]}`)
                Label.appendChild(txt)
                Label.setAttribute(`id`, `Ans`)
                Label.setAttribute(`for`, `inp${i}`)
                let inp = document.createElement(`input`)
                Label.setAttribute(`class`, `flex labelcolor w-11/12 font-semibold h-12 items-center `)
                inp.setAttribute(`class`, `accent-[#00586c] option`)
                inp.setAttribute(`type`, `radio`)
                inp.setAttribute(`id`, `inp${i}`)
                inp.setAttribute(`name`, `options`)
                inp.setAttribute(`value`, `${keys[i]}`)

                newELEMENT.appendChild(inp)
                newELEMENT.appendChild(Label)

            }
        }
        else {
            break;
        }
    }
    
    x = x + 1;
    //console.log(x)
}
let count = 0;
submit.addEventListener(`click`, () => {
    console.log("Submit value of x : " + x)

    //    let keys = Object.keys(MCQ[x])
    let Options = document.querySelectorAll(`.option`)
    let CorrectAns = () => {
        let Answer
        Options.forEach((input) => {
            if (input.checked) {
                console.log(input.value)
                Answer = input.value
            }
        })
        let ansArr = []
        ansArr.splice(0,0,Answer)
        console.log(ansArr)
        // console.log(Answer)
        // console.log(MCQ[McqNum][Answer])
        // console.log(MCQ[McqNum].Answer)
        // if (MCQ[x][Answer] == MCQ[x].Answer) {
        //     count++
        //     console.log("count : " + count)
        // }
    }
    CorrectAns()

    // console.log(MCQ[x-1].Answer)
    // if(Answer == MCQ[x-1].Answer){
    //   console.log("lesgo")
    // }

})
