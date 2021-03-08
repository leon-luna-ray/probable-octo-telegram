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

function moodBtn(mood, emoji) {
    return `<div id="${mood}" class="col s2 center-align mood-btn" emoji="${emoji}" onclick="addMood(this.id, this.emoji)">
        <h2 class="mood-emoji">${emoji}</h2>
        <p class="mood-title">${mood}</p>
    </div>`;
};

const moodBtnsDiv = document.getElementById('mood-btns');

function generatePage() {
    const buttons = [];

    moodBtns.forEach(data => {
        const button = moodBtn(data.mood, data.emoji);

        buttons.push(button);

    });

    //add loop to create rows

    const markup = buttons.join(' ');
    moodBtnsDiv.innerHTML = markup;
    
};

generatePage();