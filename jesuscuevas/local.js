function saveToLocalStorage(name, email, message) {
    const contactData = {
        name: name,
        email: email,
        message: message,
        date: new Date().toISOString()
    };

    let examen = JSON.parse(localStorage.getItem('examen')) || [];
    examen.push(contactData);
    localStorage.setItem('examen', JSON.stringify(examen));
}