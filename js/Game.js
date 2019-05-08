class Game {
	constructor() {
		this.missed = 0;
		this.phrases = [];
		this.activePhrase = this.createPhrases();
	}

	/**
	* Creates phrases for use in game
	* @return {array} An array of phrases that could be used in the game
	*/
	createPhrases() {
		const phrases = ['test 1', 'te st2', 't est3', 'tes t4', 'te st5'];
		for (let i = 0; i < 5; i++) {
			this.phrases.push( new Phrase(phrases[i]));
		}
		return phrases;
	}
	/**
	* Selects random phrase from phrases property
	* @return {Object} Phrase object chosen to be used
	*/
	getRandomPhrase() {
		// Return a random phrase object
		return this.phrases[Math.floor(Math.random() * 5)];
	};
}