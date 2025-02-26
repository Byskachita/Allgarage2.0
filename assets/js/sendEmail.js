const form = document.getElementById('form')
const sendMail = document.getElementById('emailA')

function handleSendEmail(event) {
    event.preventDefault()
    const fd = new FormData(this)

    sendMail.setAttribute(
        'href',
        `mailTo:denisserosseln@gmail.com?formGroupExampleInput=${fd.get('formGroupExampleInput')}&body=${fd.get('message')}`
    )

    sendMail.click()
}

form.addEventListener('submit', handleSendEmail)