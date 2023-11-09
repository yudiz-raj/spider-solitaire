
// You can write more code here

/* START OF COMPILED CODE */

class Card extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// card
		const card = scene.add.image(0, 0, "spade_1");
		card.scaleX = 0.45;
		card.scaleY = 0.45;
		this.add(card);

		this.card = card;

		/* START-USER-CTR-CODE */
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	card;

	/* START-USER-CODE */

	// Write your code here.
	setCard = (texture) => {
		this.card.setTexture(texture);
		this.card.setName(texture);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
