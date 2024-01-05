
// You can write more code here

/* START OF COMPILED CODE */

class Logo extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// container_cards
		const container_cards = scene.add.container(0, 0);
		this.add(container_cards);

		// diamond_13
		const diamond_13 = scene.add.image(-218, -13, "diamond_13");
		diamond_13.scaleX = 0.49;
		diamond_13.scaleY = 0.49;
		diamond_13.angle = 13;
		container_cards.add(diamond_13);

		// spade_1
		const spade_1 = scene.add.image(-188, -14, "spade_1");
		spade_1.scaleX = 0.49;
		spade_1.scaleY = 0.49;
		spade_1.angle = 20;
		container_cards.add(spade_1);

		// heart_6
		const heart_6 = scene.add.image(-176, -8, "heart_6");
		heart_6.scaleX = 0.49;
		heart_6.scaleY = 0.49;
		heart_6.angle = 29.999999999999996;
		container_cards.add(heart_6);

		// club_11
		const club_11 = scene.add.image(-135, -5, "club_11");
		club_11.scaleX = 0.49;
		club_11.scaleY = 0.49;
		club_11.angle = 40;
		container_cards.add(club_11);

		// spade_4
		const spade_4 = scene.add.image(-76, -8, "spade_4");
		spade_4.scaleX = 0.49;
		spade_4.scaleY = 0.49;
		spade_4.angle = 50;
		container_cards.add(spade_4);

		// spider_logo
		const spider_logo = scene.add.image(-65, -5, "spider-logo");
		this.add(spider_logo);

		this.container_cards = container_cards;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	container_cards;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
