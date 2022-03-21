
let btns = document.querySelectorAll(".card__buttons__rating")

let Span = document.querySelector("span")
let card__rating = document.getElementById("rating")
let card__submit = document.getElementById("thankyou")

Array.from(btns).forEach(btn => {
    btn.addEventListener("click", e => {
        const rating = e.target.textContent
        console.log(rating)
        textContent = ("You selected ") + rating + (" out of 5")
        return textContent


    })


})

let btn_Submit = document.querySelector(".card__buttons__submit")

btn_Submit.addEventListener("click", e => {
    Span.textContent = textContent
    card__submit.classList.remove('hide')
    card__rating.classList.add('hide')
})
