const btn = document.getElementById('btn')
// const box = document.getElementById('box')
// const Selectbox = document.getElementById('op')

const InvokSomething = event => {
        document.getElementById('heading').innerText = "Document Object Model";
        // document.querySelector('.card-body').style.backgroundColor = '#ccc'

        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.id)
        // console.log(event.target.textContent)

        // event.target.className = 'Hello'
        // event.target.classList.add('hovers')
        // event.target.classList.toggle('hovers')
        // console.log(event.target.className)

        // console.log(event.clientX)
        // console.log(event.clientY)

        // console.log(event.offsetX)
        // console.log(event.offsetY)

        // console.log(event.ctrlKey)
        // console.log(event.altKey)
        // console.log(event.shiftKey)

        // if (event.ctrlKey && event.altKey) {
        //     console.log('You just Hit Both Buttons');
        // }

        // document.getElementById('output').innerHTML = ` <strong>Xaxis:- </strong> ${event.offsetX} <strong>Yaxis:- </strong> ${event.offsetY} `;

        // document.body.style.background = `rgb(${event.offsetX}, ${event.offsetY}, 40)`;

        console.log(event.target.value)
}

btn.addEventListener('click', InvokSomething);
// btn.addEventListener('dblclick', InvokSomething);
// btn.addEventListener('mousedown', InvokSomething);
// btn.addEventListener('mouseup', InvokSomething);
// box.addEventListener('mouseenter', InvokSomething);
// box.addEventListener('mouseleave', InvokSomething);
// box.addEventListener('mousemove', InvokSomething);
// Selectbox.addEventListener('change', InvokSomething);