const createNote = document.querySelector('.add-note');
const popUp = document.querySelector('.popup-box');
const popUpTitle = popUp.querySelector('.popup-header p');
const closePopUp = popUp.querySelector('.close-icon');
const titelValue = popUp.querySelector('.title input');
const contentValue = popUp.querySelector('.description textarea');
const datesValue = popUp.querySelector('.dates input');
const categoryValue = popUp.querySelector('.category select');
const addNote = popUp.querySelector('.btn-addNote');
// const noteItem = document.querySelector('');


const taskIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z"/></svg>`;
const randomIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M208 175.1c-8.836 0-16 7.162-16 16c0 8.836 7.163 15.1 15.1 15.1s16-7.164 16-16C224 183.2 216.8 175.1 208 175.1zM272 239.1c-8.836 0-15.1 7.163-15.1 16c0 8.836 7.165 16 16 16s16-7.164 16-16C288 247.2 280.8 239.1 272 239.1zM509.2 275c-20.94-47.13-48.46-151.7-73.1-186.8C397.7 33.59 334.6 0 266.1 0H192C85.95 0 0 85.95 0 192c0 56.8 24.8 107.7 64 142.8L64 512h256l-.0044-64h63.99c35.34 0 63.1-28.65 63.1-63.1V320h31.98C503.1 320 518.6 296.2 509.2 275zM368 240h-12.12c-28.51 0-42.79 34.47-22.63 54.63l8.576 8.576c6.25 6.25 6.25 16.38 0 22.62c-3.125 3.125-7.219 4.688-11.31 4.688s-8.188-1.562-11.31-4.688l-8.576-8.576c-20.16-20.16-54.63-5.881-54.63 22.63V352c0 8.844-7.156 16-16 16s-16-7.156-16-16v-12.12c0-28.51-34.47-42.79-54.63-22.63l-8.576 8.576c-3.125 3.125-7.219 4.688-11.31 4.688c-4.096 0-8.188-1.562-11.31-4.688c-6.25-6.25-6.25-16.38 0-22.62l8.577-8.576C166.9 274.5 152.6 240 124.1 240H112c-8.844 0-16-7.156-16-16s7.157-16 16-16L124.1 208c28.51 0 42.79-34.47 22.63-54.63L138.2 144.8c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.63 0L169.4 130.7c20.16 20.16 54.63 5.881 54.63-22.63V96c0-8.844 7.156-16 16-16S256 87.16 256 96v12.12c0 28.51 34.47 42.79 54.63 22.63l8.576-8.576c6.25-6.25 16.38-6.25 22.63 0s6.25 16.38 0 22.62L333.3 153.4C313.1 173.5 327.4 208 355.9 208l12.12-.0004c8.844 0 15.1 7.157 15.1 16S376.8 240 368 240z"/></svg>`;
const ideaIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"/></svg>`;


const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const notes = JSON.parse(localStorage.getItem('notes') || '[]');

let isUpdate = false, updateId;

createNote.addEventListener('click', () => {
    
    titelValue.focus();
    popUp.classList.add('show');
});

closePopUp.addEventListener('click', () => {
    isUpdate = false;
    titelValue.value = '';
    contentValue.value = '';
    datesValue.value = '';
    addNote.innerHTML = 'Add a Note';
    popUpTitle.innerHTML = 'Add a new Note';
    popUp.classList.remove('show');
});

function showNotes() {
   document.querySelectorAll(".note").forEach(note => note.remove());
   notes.map((note, index) => {
        let noteItem = `<div id="${index}" class="notes note note-item" >  
                    <div class="icon" onclick="openNote(${index}, '${note.title}', '${note.description}', '${note.dates}' )">
                        ${note.icon}
                    </div>
                    <div class="title">${note.title}</div>
                    <div class="created">${note.date}</div>
                    <div class="category">${note.category}</div>
                    <div class="content">${note.description}</div>
                    <div class="dates">${note.dates}</div>
                    <div class="funcbtn">
                        <svg onclick="updateNote(${index}, '${note.title}', '${note.description}', '${note.dates}' )" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM336 311.1h-56v56C279.1 381.3 269.3 392 256 392c-13.27 0-23.1-10.74-23.1-23.1V311.1H175.1C162.7 311.1 152 301.3 152 288c0-13.26 10.74-23.1 23.1-23.1h56V207.1C232 194.7 242.7 184 256 184s23.1 10.74 23.1 23.1V264h56C349.3 264 360 274.7 360 288S349.3 311.1 336 311.1z"/></svg>
                        <svg onclick=deleteNote(${index}) xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 160H48V152C48 68.05 116.1 0 200 0H248C331.9 0 400 68.05 400 152V160H352V152C352 94.56 305.4 48 248 48H200C142.6 48 96 94.56 96 152V160zM.0003 224C.0003 206.3 14.33 192 32 192H416C433.7 192 448 206.3 448 224C448 241.7 433.7 256 416 256H410.9L388.5 469C385.1 493.5 365.4 512 340.8 512H107.2C82.65 512 62.05 493.5 59.48 469L37.05 256H32C14.33 256 0 241.7 0 224H.0003z"/></svg>
                    </div>
                </div>`;
                document.querySelector('.note-list').insertAdjacentHTML('afterend', noteItem);
    });
}

function deleteNote(noteId) {
    notes.splice(noteId, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

function updateNote(noteId, title, description, dates) {
 
    isUpdate = true;
    updateId = noteId;
    disableForm(false);
    createNote.click();
    titelValue.value = title;
    contentValue.value = description;
    datesValue.value = dates;
    addNote.innerHTML = 'Update Note';
    popUpTitle.innerHTML = 'Update Note';
  
}

function disableForm(active) {
    if (active === true) {
        titelValue.readOnly = true;
        contentValue.readOnly = true;
        datesValue.readOnly = true;
        categoryValue.disabled = true;
    } else if (active === false) {
        titelValue.readOnly = false;
        contentValue.readOnly = false;
        datesValue.readOnly = false;
        categoryValue.disabled = false;
    }
    
}


function openNote(noteId, title, description, dates) {
    popUp.classList.add('show');
    titelValue.value = title;
    contentValue.value = description;
    datesValue.value = dates;
    addNote.innerHTML = '';
    popUpTitle.innerHTML = 'Your Note';
    disableForm(true);
}


addNote.addEventListener('click', (e) => {
   e.preventDefault();
   disableForm(false);
   let noteTitle = titelValue.value;
   let noteContent = contentValue.value;
   let noteDates = datesValue.value;
   let noteCategory = categoryValue.value;
   let noteIcon;

   if (noteCategory == 'Task') {
    noteIcon = taskIcon;
   } else if  (noteCategory == 'Random Thought') {
    noteIcon = randomIcon;
   } else if  (noteCategory == 'Idea') {
    noteIcon = ideaIcon;
   }

 
   if ( noteTitle && noteContent) {
       let dateObj = new Date();
       let month = months[dateObj.getMonth()];
       let day = dateObj.getDay();
       let year = dateObj.getFullYear();

       let noteInfo = {
           icon: noteIcon,
           title: noteTitle,
           description: noteContent,
           category: noteCategory,
           dates: noteDates,
           date: `${month} ${day}, ${year}` 
       }
       if(!isUpdate) {
            notes.push(noteInfo);
       } else {
           isUpdate = false;
           notes[updateId] = noteInfo;
       }

       localStorage.setItem('notes', JSON.stringify(notes));
       
       showNotes();
       closePopUp.click();
   }
 
});

