class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}
	/**
	* Display phrase on game board
	*/
	addPhraseToDisplay() {
		// store the ul element found in the phrase div 
		const ul = document.getElementById('phrase').getElementsByTagName('ul')[0];
		
		// put phrase into an array. Each index is 
		// a separate letter  or space
		const phraseArray = this.phrase.split('')
		for (let i = 0; i < phraseArray.length; i++) {
			const li = document.createElement('LI');
			 if (phraseArray[i] === ' ') {
				
				li.className = 'space';
				li.textContent = phraseArray[i];
				ul.appendChild(li);
			} else {
				li.className = `hide letter ${phraseArray[i]}`;
				li.textContent = phraseArray[i];
				ul.appendChild(li);
			 }
		}
	}
}