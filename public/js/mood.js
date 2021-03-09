const moodBtns = [
    {
        mood: 'Afraid',
        emoji: '😓'
    },     
    {
        mood: 'Angry',
        emoji: '😡'
    },
    {
        mood: 'Annoyed',
        emoji: '🙄'
    },
    {
        mood: 'Anxious',
        emoji: '😣'
    },     
    {
        mood: 'Bored',
        emoji: '😑'
    },
    {
        mood: 'Calm',
        emoji: '😌'
    },
    {
        mood: 'Confused',
        emoji: '🤔'
    },     
    {
        mood: 'Crazy',
        emoji: '🤪'
    },
    {
        mood: 'Disgusted',
        emoji: '😒'
    },
    {
        mood: 'Embarrassed',
        emoji: '😅'
    },     
    {
        mood: 'Excited',
        emoji: '😆'
    },
    {
        mood: 'Happy',
        emoji: '🙂'
    },
    {
        mood: 'Lonely',
        emoji: '😔'
    },     
    {
        mood: 'Nostalgic',
        emoji: '🥲'
    },
    {
        mood: 'Numb',
        emoji: '😐'
    },
    {
        mood: 'Optimistic',
        emoji: '😃'
    },     
    {
        mood: 'Proud',
        emoji: '😎'
    },
    {
        mood: 'Sad',
        emoji: '🙁'
    },
    {
        mood: 'Sick',
        emoji: '🤢'
    },     
    {
        mood: 'Silly',
        emoji: '🤡'
    },
    {
        mood: 'Sleepy',
        emoji: '😴'
    },
    {
        mood: 'Stressed',
        emoji: '😤'
    },     
    {
        mood: 'Surprised',
        emoji: '😮'
    },
    {
        mood: 'Tired',
        emoji: '🥱'
    },
]; //moodBtns

const moodBtnsDiv = document.getElementById('mood-btns');

function moodBtn(mood, emoji) {
    return `
    <div id="${mood}" class="col s2 center-align mood-btn" emoji="${emoji}" onclick="addMood(this.id, this.emoji)">
        <h2 class="mood-emoji">${emoji}</h2>
        <p class="mood-title">${mood}</p>
    </div>`;
};

function generateBtns() {
    const buttons = [];

    for (let i = 0; i < moodBtns.length; i++) {
        const button = moodBtn(moodBtns[i].mood, moodBtns[i].emoji);
        buttons.push(button)
    }
    
    return buttons;
};

function generateBtnGrid() {
    const buttons = generateBtns();
    const btnGrid = [];

    const newRow = `

    <div class="row">

    `
    const endRow = `

    </div> <!-- row -->

    `

    // Loop to insert rows every 6 btns
    for (let i = 0; i < buttons.length; i++) { 
        if (i === 0) {
            btnGrid.push(newRow)
            btnGrid.push(buttons[i]);
        } else if (i % 6 === 0) {
            btnGrid.push(endRow);
            btnGrid.push(newRow);
            btnGrid.push(buttons[i]);
        } else {
            btnGrid.push(buttons[i]);
        };
    }

    btnGrid.push(endRow);
    
    const markup = btnGrid.join(' ');
    moodBtnsDiv.innerHTML = markup;
    console.log(markup);
}; generateBtnGrid

generateBtnGrid();