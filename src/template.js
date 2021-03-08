function moodTemplate(mood, emoji) {
    return `
    <div class="row"> <!--row 1-->
    <div id="${mood}" class="col s2 center-align mood-btn" onclick="addMood(this.id)">
        <h2 class="mood-emoji">${emoji}</h2>
        <p class="mood-title">${mood}</p>
    </div>
    `
};

module.exports = { moodTemplate }