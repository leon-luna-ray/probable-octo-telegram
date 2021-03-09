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


function addMood(mood, emoji) {

    console.log(mood, emoji);
    // use to send to backend then to databasenod
    // addUser.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     fetch('/api/signUp', {
    //       method: 'POST',

};

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

    for (let i = 0; i < buttons.length; i++) {
        if (i % 6 === 0) {
            console.log(buttons[i])
        }
        
    }

};

generateBtnGrid();