// Function to save notes to local storage
function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to load notes from local storage and add them to the DOM
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach((note, index) => {
        addNoteToDOM(note, index);
    });
}

// Function to add a note to the DOM
function addNoteToDOM(note, index) {
    const containerFl = document.querySelector('.container-fl');
    let html = `
    <div class="container notess mb-3 p-0" data-index="${index}">
        <div class="textarea-container">
            <textarea class="form-control w-100" rows="3">${note}</textarea>
            <button class="btn-icon">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </div>`;
    containerFl.insertAdjacentHTML("beforeend", html);

    const textarea = containerFl.lastElementChild.querySelector('textarea');
    const delbtn = containerFl.lastElementChild.querySelector('.btn-icon');

    // Update local storage when the text is changed
    textarea.addEventListener('input', (e) => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes[index] = e.target.value;
        saveNotes(notes);
    });

    // Remove note when the delete button is clicked
    delbtn.addEventListener('click', (e) => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        saveNotes(notes);
        e.target.closest('.container.notess').remove();
    });
}

// Initial load of notes from local storage
loadNotes();

// Add a new note when the button is clicked
document.querySelector('.button').addEventListener('click', () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(''); // Add a blank note to the list
    saveNotes(notes);
    addNoteToDOM('', notes.length - 1);
});
