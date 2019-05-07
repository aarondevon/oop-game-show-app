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
		const phrases = ['test1', 'test2', 'test3', 'test4', 'test5'];
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