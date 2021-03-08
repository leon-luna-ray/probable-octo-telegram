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
        mood: 'tired',
        emoji: '🥱'
    },
]; //moodBtns

const moodDiv = document.getElementById('mood-grid');

function generateBtn(mood, emoji) {
    const markup = `

        <div id="${mood}" class="col s2 center-align mood-btn" onclick="addMood(this.id)">
            <h2 class="mood-emoji">${emoji}</h2>
            <p class="mood-title">${mood}</p>
        </div>

    `;

    moodDiv.append(markup);

};

function generatePage() {
    moodBtns.forEach(data => {
        generateBtn(data.mood, data.emoji);
        console.log(data.mood, data.emoji);
    });
};

generatePage();