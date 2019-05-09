class Game {
	constructor() {
		this.missed = 0;
		this.phrases = this.createPhrases();
		this.activePhrase = null;
	}

	/**
	* Creates phrases for use in game
	* @return {array} An array of phrases that could be used in the game
	*/
	createPhrases() {
		const phraseList = ['test 1', 'te st2', 't est3', 'tes t4', 'te st5'];
		const phraseObjects = [];
		for (let i = 0; i < 5; i++) {
			phraseObjects.push( new Phrase(phraseList[i]));
		}
		return phraseObjects;
	}
	/**
	* Selects random phrase from phrases property
	* @return {Object} Phrase object chosen to be used
	*/
	getRandomPhrase() {
		// Return a random phrase object
		return this.phrases[Math.floor(Math.random() * 5)];
	};

	/**
	* Begins game by selecting a random phrase and displaying it to user
	*/
	startGame() {
		document.getElementById('overlay').style.display = 'none';
		this.activePhrase = this.getRandomPhrase();
		
		this.activePhrase.addPhraseToDisplay();
		
		
	};
}