import BaseScene from '@scenes/base/BaseScene'
import { Animation, Button, IglooBuy, Interactive, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class IglooCatalog extends BaseScene {

    constructor() {
        super("IglooCatalog");

        /** @type {Phaser.GameObjects.Container} */
        this.pg1;
        /** @type {Phaser.GameObjects.Container} */
        this.pg2;
        /** @type {Phaser.GameObjects.Container} */
        this.pg3;
        /** @type {Phaser.GameObjects.Container} */
        this.pg4;
        /** @type {Phaser.GameObjects.Container} */
        this.pg5;
        /** @type {Phaser.GameObjects.Container} */
        this.pg6;
        /** @type {Phaser.GameObjects.Container} */
        this.pg7;
        /** @type {Phaser.GameObjects.Container} */
        this.pg8;
        /** @type {Phaser.GameObjects.Container} */
        this.pg9;
        /** @type {Phaser.GameObjects.Container} */
        this.pg10;
        /** @type {Phaser.GameObjects.Container} */
        this.pg11;
        /** @type {Phaser.GameObjects.Container} */
        this.pg12;
        /** @type {Phaser.GameObjects.Container} */
        this.pg13;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pagex;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Container} */
        this.wallet;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("igloo-pack", "assets/media/interface/game/igloo/igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block_3
        const block_3 = this.add.rectangle(4, 2, 1520, 960);
        block_3.setOrigin(0, 0);
        block_3.isFilled = true;
        block_3.fillColor = 0;
        block_3.fillAlpha = 0.2;

        // pg1
        const pg1 = this.add.container(0, 0);

        // pg_1
        const pg_1 = this.add.image(0, 0, "nov24igloo", "nov24igloocover");
        pg_1.setOrigin(0, 0);
        pg1.add(pg_1);

        // x_3
        const x_3 = this.add.image(1001, 198, "catalogs", "x");
        pg1.add(x_3);

        // flip
        const flip = this.add.image(1002, 747, "catalogs", "flip");
        flip.flipX = true;
        pg1.add(flip);

        // pg2
        const pg2 = this.add.container(0, 0);
        pg2.visible = false;

        // pg_3
        const pg_3 = this.add.image(0, 0, "igloo", "Undersea");
        pg_3.setOrigin(0, 0);
        pg2.add(pg_3);

        // flip_2
        const flip_2 = this.add.image(201, 747, "catalogs", "flip");
        pg2.add(flip_2);

        // flip_3
        const flip_3 = this.add.image(1318, 747, "catalogs", "flip");
        flip_3.flipX = true;
        pg2.add(flip_3);

        // buy
        const buy = this.add.image(453, 738, "catalogs", "buy");
        pg2.add(buy);

        // coin1
        const coin1 = this.add.image(495, 737, "catalogs", "coin");
        coin1.scaleX = 0.9;
        coin1.scaleY = 0.9;
        pg2.add(coin1);

        // text1
        const text1 = this.add.text(414, 723, "", {});
        text1.text = "3000";
        text1.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg2.add(text1);

        // pg3
        const pg3 = this.add.container(0, 0);
        pg3.visible = false;

        // pg_5
        const pg_5 = this.add.image(0, 0, "igloo", "Mountain");
        pg_5.setOrigin(0, 0);
        pg3.add(pg_5);

        // flip_4
        const flip_4 = this.add.image(201, 747, "catalogs", "flip");
        pg3.add(flip_4);

        // flip_5
        const flip_5 = this.add.image(1318, 747, "catalogs", "flip");
        flip_5.flipX = true;
        pg3.add(flip_5);

        // buy_1
        const buy_1 = this.add.image(453, 738, "catalogs", "buy");
        pg3.add(buy_1);

        // text_1
        const text_1 = this.add.text(414, 723, "", {});
        text_1.text = "3000";
        text_1.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg3.add(text_1);

        // coin_1
        const coin_1 = this.add.image(495, 737, "catalogs", "coin");
        coin_1.scaleX = 0.9;
        coin_1.scaleY = 0.9;
        pg3.add(coin_1);

        // pg4
        const pg4 = this.add.container(0, 0);
        pg4.visible = false;

        // pg_7
        const pg_7 = this.add.image(0, 0, "igloo", "Beach");
        pg_7.setOrigin(0, 0);
        pg4.add(pg_7);

        // flip_6
        const flip_6 = this.add.image(201, 747, "catalogs", "flip");
        pg4.add(flip_6);

        // flip_7
        const flip_7 = this.add.image(1318, 747, "catalogs", "flip");
        flip_7.flipX = true;
        pg4.add(flip_7);

        // buy_2
        const buy_2 = this.add.image(452, 738, "catalogs", "buy");
        pg4.add(buy_2);

        // coin_2
        const coin_2 = this.add.image(494, 737, "catalogs", "coin");
        coin_2.scaleX = 0.9;
        coin_2.scaleY = 0.9;
        pg4.add(coin_2);

        // text_2
        const text_2 = this.add.text(413, 723, "", {});
        text_2.text = "3000";
        text_2.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg4.add(text_2);

        // pg5
        const pg5 = this.add.container(0, 0);
        pg5.visible = false;

        // pg_71
        const pg_71 = this.add.image(0, 0, "igloo", "Forest");
        pg_71.setOrigin(0, 0);
        pg5.add(pg_71);

        // flip_61
        const flip_61 = this.add.image(201, 747, "catalogs", "flip");
        pg5.add(flip_61);

        // flip_71
        const flip_71 = this.add.image(1318, 747, "catalogs", "flip");
        flip_71.flipX = true;
        pg5.add(flip_71);

        // secret_11
        const secret_11 = this.add.rectangle(465, 293, 128, 128);
        secret_11.scaleX = 0.2842551982262872;
        secret_11.scaleY = 0.30577828818816355;
        secret_11.fillColor = 837887;
        secret_11.fillAlpha = 100;
        pg5.add(secret_11);

        // buy_3
        const buy_3 = this.add.image(452, 738, "catalogs", "buy");
        pg5.add(buy_3);

        // coin_3
        const coin_3 = this.add.image(494, 737, "catalogs", "coin");
        coin_3.scaleX = 0.9;
        coin_3.scaleY = 0.9;
        pg5.add(coin_3);

        // text_3
        const text_3 = this.add.text(413, 723, "", {});
        text_3.text = "3000";
        text_3.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg5.add(text_3);

        // pg6
        const pg6 = this.add.container(0, 0);
        pg6.visible = false;

        // pg_4
        const pg_4 = this.add.image(0, 0, "igloo", "Flooring1");
        pg_4.setOrigin(0, 0);
        pg6.add(pg_4);

        // flip_8
        const flip_8 = this.add.image(201, 747, "catalogs", "flip");
        pg6.add(flip_8);

        // flip_9
        const flip_9 = this.add.image(1318, 747, "catalogs", "flip");
        flip_9.flipX = true;
        pg6.add(flip_9);

        // buy_8
        const buy_8 = this.add.image(1208, 730, "catalogs", "buy");
        pg6.add(buy_8);

        // coin_8
        const coin_8 = this.add.image(1255, 730, "catalogs", "coin");
        pg6.add(coin_8);

        // text_8
        const text_8 = this.add.text(1177, 715, "", {});
        text_8.text = "750";
        text_8.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg6.add(text_8);

        // buy_7
        const buy_7 = this.add.image(1208, 499, "catalogs", "buy");
        pg6.add(buy_7);

        // coin_7
        const coin_7 = this.add.image(1252, 499, "catalogs", "coin");
        pg6.add(coin_7);

        // text_7
        const text_7 = this.add.text(1174, 484, "", {});
        text_7.text = "530";
        text_7.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg6.add(text_7);

        // buy_6
        const buy_6 = this.add.image(1208, 252, "catalogs", "buy");
        pg6.add(buy_6);

        // coin_6
        const coin_6 = this.add.image(1247, 253, "catalogs", "coin");
        pg6.add(coin_6);

        // text_6
        const text_6 = this.add.text(1176, 238, "", {});
        text_6.text = "50";
        text_6.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg6.add(text_6);

        // buy_5
        const buy_5 = this.add.image(568, 690, "catalogs", "buy");
        pg6.add(buy_5);

        // coin_5
        const coin_5 = this.add.image(613, 689, "catalogs", "coin");
        pg6.add(coin_5);

        // text_5
        const text_5 = this.add.text(540, 674, "", {});
        text_5.text = "750";
        text_5.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg6.add(text_5);

        // buy_4
        const buy_4 = this.add.image(571, 388, "catalogs", "buy");
        pg6.add(buy_4);

        // coin_4
        const coin_4 = this.add.image(616, 388, "catalogs", "coin");
        pg6.add(coin_4);

        // text_4
        const text_4 = this.add.text(542, 373, "", {});
        text_4.text = "800";
        text_4.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg6.add(text_4);

        // pg7
        const pg7 = this.add.container(0, 0);
        pg7.visible = false;

        // pg_41
        const pg_41 = this.add.image(0, 0, "igloo", "Flooring2");
        pg_41.setOrigin(0, 0);
        pg7.add(pg_41);

        // flip_81
        const flip_81 = this.add.image(201, 747, "catalogs", "flip");
        pg7.add(flip_81);

        // flip_91
        const flip_91 = this.add.image(1318, 747, "catalogs", "flip");
        flip_91.flipX = true;
        pg7.add(flip_91);

        // buy_13
        const buy_13 = this.add.image(1178, 665, "catalogs", "buy");
        pg7.add(buy_13);

        // coin_13
        const coin_13 = this.add.image(1233, 664, "catalogs", "coin");
        pg7.add(coin_13);

        // text_13
        const text_13 = this.add.text(1146, 650, "", {});
        text_13.text = "1000";
        text_13.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg7.add(text_13);

        // buy_12
        const buy_12 = this.add.image(1176, 361, "catalogs", "buy");
        pg7.add(buy_12);

        // coin_12
        const coin_12 = this.add.image(1228, 360, "catalogs", "coin");
        pg7.add(coin_12);

        // text_12
        const text_12 = this.add.text(1143, 347, "", {});
        text_12.text = "400";
        text_12.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg7.add(text_12);

        // buy_11
        const buy_11 = this.add.image(567, 741, "catalogs", "buy");
        pg7.add(buy_11);

        // coin_11
        const coin_11 = this.add.image(620, 740, "catalogs", "coin");
        pg7.add(coin_11);

        // text_11
        const text_11 = this.add.text(536, 727, "", {});
        text_11.text = "620";
        text_11.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg7.add(text_11);

        // buy_10
        const buy_10 = this.add.image(560, 509, "catalogs", "buy");
        pg7.add(buy_10);

        // coin_10
        const coin_10 = this.add.image(607, 510, "catalogs", "coin");
        pg7.add(coin_10);

        // text_10
        const text_10 = this.add.text(531, 495, "", {});
        text_10.text = "620";
        text_10.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg7.add(text_10);

        // buy_9
        const buy_9 = this.add.image(559, 279, "catalogs", "buy");
        pg7.add(buy_9);

        // coin_9
        const coin_9 = this.add.image(612, 279, "catalogs", "coin");
        pg7.add(coin_9);

        // text_9
        const text_9 = this.add.text(531, 264, "", {});
        text_9.text = "530";
        text_9.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg7.add(text_9);

        // pg8
        const pg8 = this.add.container(0, 0);
        pg8.visible = false;

        // pg_6
        const pg_6 = this.add.image(0, 0, "igloo", "Flooring3");
        pg_6.setOrigin(0, 0);
        pg8.add(pg_6);

        // flip_10
        const flip_10 = this.add.image(201, 747, "catalogs", "flip");
        pg8.add(flip_10);

        // flip_11
        const flip_11 = this.add.image(1318, 747, "catalogs", "flip");
        flip_11.flipX = true;
        pg8.add(flip_11);

        // buy_17
        const buy_17 = this.add.image(957, 368, "catalogs", "buy");
        pg8.add(buy_17);

        // text_17
        const text_17 = this.add.text(931, 355, "", {});
        text_17.text = "20";
        text_17.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg8.add(text_17);

        // coin_17
        const coin_17 = this.add.image(998, 370, "catalogs", "coin");
        pg8.add(coin_17);

        // buy_16
        const buy_16 = this.add.image(574, 739, "catalogs", "buy");
        pg8.add(buy_16);

        // text_16
        const text_16 = this.add.text(537, 725, "", {});
        text_16.text = "400";
        text_16.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg8.add(text_16);

        // coin_16
        const coin_16 = this.add.image(609, 738, "catalogs", "coin");
        pg8.add(coin_16);

        // buy_15
        const buy_15 = this.add.image(568, 501, "catalogs", "buy");
        pg8.add(buy_15);

        // text_15
        const text_15 = this.add.text(527, 487, "", {});
        text_15.text = "280";
        text_15.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg8.add(text_15);

        // coin_15
        const coin_15 = this.add.image(601, 502, "catalogs", "coin");
        pg8.add(coin_15);

        // buy_14
        const buy_14 = this.add.image(576, 271, "catalogs", "buy");
        pg8.add(buy_14);

        // text_14
        const text_14 = this.add.text(539, 257, "", {});
        text_14.text = "530";
        text_14.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg8.add(text_14);

        // coin_14
        const coin_14 = this.add.image(613, 271, "catalogs", "coin");
        pg8.add(coin_14);

        // pg9
        const pg9 = this.add.container(0, 0);
        pg9.visible = false;

        // pg_10
        const pg_10 = this.add.image(0, 0, "nov24igloo", "nov24igloop1");
        pg_10.setOrigin(0, 0);
        pg9.add(pg_10);

        // flip_14
        const flip_14 = this.add.image(201, 747, "catalogs", "flip");
        pg9.add(flip_14);

        // flip_15
        const flip_15 = this.add.image(1318, 747, "catalogs", "flip");
        flip_15.flipX = true;
        pg9.add(flip_15);

        // buy_20
        const buy_20 = this.add.image(439, 760, "catalogs", "buy");
        pg9.add(buy_20);

        // text_20
        const text_20 = this.add.text(402, 745, "", {});
        text_20.text = "0";
        text_20.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg9.add(text_20);

        // coin_20
        const coin_20 = this.add.image(494, 761, "catalogs", "coin");
        coin_20.scaleX = 0.9;
        coin_20.scaleY = 0.9;
        pg9.add(coin_20);

        // buy_21
        const buy_21 = this.add.image(1081, 760, "catalogs", "buy");
        pg9.add(buy_21);

        // text_21
        const text_21 = this.add.text(1044, 745, "", {});
        text_21.text = "0";
        text_21.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg9.add(text_21);

        // coin_21
        const coin_21 = this.add.image(1130, 761, "catalogs", "coin");
        coin_21.scaleX = 0.9;
        coin_21.scaleY = 0.9;
        pg9.add(coin_21);

        // pg10
        const pg10 = this.add.container(0, 0);
        pg10.visible = false;

        // pg_11
        const pg_11 = this.add.image(0, 0, "oct24igloo", "oct24igloop1");
        pg_11.setOrigin(0, 0);
        pg10.add(pg_11);

        // flip_140
        const flip_140 = this.add.image(201, 747, "catalogs", "flip");
        pg10.add(flip_140);

        // flip_100
        const flip_100 = this.add.image(1318, 747, "catalogs", "flip");
        flip_100.flipX = true;
        pg10.add(flip_100);

        // buy_22
        const buy_22 = this.add.image(425, 749, "catalogs", "buy");
        pg10.add(buy_22);

        // text_22
        const text_22 = this.add.text(384, 735, "", {});
        text_22.text = "0";
        text_22.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg10.add(text_22);

        // coin_22
        const coin_22 = this.add.image(470, 748, "catalogs", "coin");
        coin_22.scaleX = 0.9;
        coin_22.scaleY = 0.9;
        pg10.add(coin_22);

        // buy_23
        const buy_23 = this.add.image(1081, 749, "catalogs", "buy");
        pg10.add(buy_23);

        // text_23
        const text_23 = this.add.text(1039, 736, "", {});
        text_23.text = "0";
        text_23.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg10.add(text_23);

        // coin_23
        const coin_23 = this.add.image(1128, 749, "catalogs", "coin");
        coin_23.scaleX = 0.9;
        coin_23.scaleY = 0.9;
        pg10.add(coin_23);

        // secret_2
        const secret_2 = this.add.rectangle(1074, 403, 10, 10);
        secret_2.fillColor = 837887;
        secret_2.fillAlpha = 100;
        pg10.add(secret_2);

        // pg11
        const pg11 = this.add.container(0, 0);
        pg11.visible = false;

        // pg_14
        const pg_14 = this.add.image(0, 0, "igloo", "BlueIgloos");
        pg_14.setOrigin(0, 0);
        pg11.add(pg_14);

        // flip_18
        const flip_18 = this.add.image(201, 747, "catalogs", "flip");
        pg11.add(flip_18);

        // flip_19
        const flip_19 = this.add.image(1318, 747, "catalogs", "flip");
        flip_19.flipX = true;
        pg11.add(flip_19);

        // buy_25
        const buy_25 = this.add.image(1081, 749, "catalogs", "buy");
        pg11.add(buy_25);

        // text_25
        const text_25 = this.add.text(1041, 736, "", {});
        text_25.text = "0";
        text_25.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg11.add(text_25);

        // coin_25
        const coin_25 = this.add.image(1127, 749, "catalogs", "coin");
        coin_25.scaleX = 0.9;
        coin_25.scaleY = 0.9;
        pg11.add(coin_25);

        // buy_24
        const buy_24 = this.add.image(422, 749, "catalogs", "buy");
        pg11.add(buy_24);

        // text_24
        const text_24 = this.add.text(386, 735, "", {});
        text_24.text = "0";
        text_24.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg11.add(text_24);

        // coin_24
        const coin_24 = this.add.image(474, 748, "catalogs", "coin");
        coin_24.scaleX = 0.9;
        coin_24.scaleY = 0.9;
        pg11.add(coin_24);

        // secret_3
        const secret_3 = this.add.rectangle(1230, 359, 128, 128);
        secret_3.scaleX = 0.2842551982262872;
        secret_3.scaleY = 0.30577828818816355;
        secret_3.fillColor = 837887;
        secret_3.fillAlpha = 100;
        pg11.add(secret_3);

        // pg12
        const pg12 = this.add.container(0, 0);
        pg12.visible = false;

        // pg_32
        const pg_32 = this.add.image(0, 0, "igloo", "BasicIgloo");
        pg_32.setOrigin(0, 0);
        pg12.add(pg_32);

        // flip_46
        const flip_46 = this.add.image(201, 747, "catalogs", "flip");
        pg12.add(flip_46);

        // flip_47
        const flip_47 = this.add.image(1318, 747, "catalogs", "flip");
        flip_47.flipX = true;
        pg12.add(flip_47);

        // buy_27
        const buy_27 = this.add.image(1080, 749, "catalogs", "buy");
        pg12.add(buy_27);

        // coin_27
        const coin_27 = this.add.image(1123, 747, "catalogs", "coin");
        coin_27.scaleX = 0.9;
        coin_27.scaleY = 0.9;
        pg12.add(coin_27);

        // text_27
        const text_27 = this.add.text(1041, 734, "", {});
        text_27.text = "0";
        text_27.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg12.add(text_27);

        // buy_26
        const buy_26 = this.add.image(422, 749, "catalogs", "buy");
        pg12.add(buy_26);

        // coin_26
        const coin_26 = this.add.image(469, 747, "catalogs", "coin");
        coin_26.scaleX = 0.9;
        coin_26.scaleY = 0.9;
        pg12.add(coin_26);

        // text_26
        const text_26 = this.add.text(392, 734, "", {});
        text_26.text = "0";
        text_26.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        pg12.add(text_26);

        // pg13
        const pg13 = this.add.container(0, 0);
        pg13.visible = false;

        // nov24iglooback
        const nov24iglooback = this.add.image(0, 0, "nov24igloo", "nov24iglooback");
        nov24iglooback.setOrigin(0, 0);
        pg13.add(nov24iglooback);

        // flip_1
        const flip_1 = this.add.image(523, 740, "catalogs", "flip");
        pg13.add(flip_1);

        // x_2
        const x_2 = this.add.image(523, 192, "catalogs", "x");
        x_2.flipX = true;
        pg13.add(x_2);

        // pagex
        const pagex = this.add.sprite(1318, 199, "catalogs", "x");
        pagex.visible = false;

        // wallet
        const wallet = this.add.container(0, 37);
        wallet.visible = false;

        // text
        const text = this.add.text(1132, 872, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "YOUR COINS: 999999";
        text.setStyle({ "align": "center", "fontFamily": "CCFaceFront", "fontSize": "32px", "fontStyle": "bold italic", "stroke": "#000000ff", "strokeThickness":12});
        wallet.add(text);

        // block_3 (components)
        new Interactive(block_3);

        // x_3 (components)
        const x_3Button = new Button(x_3);
        x_3Button.spriteName = "x";
        x_3Button.callback = () => this.scene.stop();

        // flip (components)
        const flipButton = new Button(flip);
        flipButton.spriteName = "flip";
        flipButton.callback = () => this.onPage2Click();

        // flip_2 (components)
        const flip_2Button = new Button(flip_2);
        flip_2Button.spriteName = "flip";
        flip_2Button.callback = () => this.onPage1Click();

        // flip_3 (components)
        const flip_3Button = new Button(flip_3);
        flip_3Button.spriteName = "flip";
        flip_3Button.callback = () => this.onPage3Click();

        // buy (components)
        const buyButton = new Button(buy);
        buyButton.spriteName = "buy";
        buyButton.callback = () => { this.interface.prompt.showLocation(8) };

        // flip_4 (components)
        const flip_4Button = new Button(flip_4);
        flip_4Button.spriteName = "flip";
        flip_4Button.callback = () => this.onPage2_1Click();

        // flip_5 (components)
        const flip_5Button = new Button(flip_5);
        flip_5Button.spriteName = "flip";
        flip_5Button.callback = () => this.onPage4Click();

        // buy_1 (components)
        const buy_1Button = new Button(buy_1);
        buy_1Button.spriteName = "buy";
        buy_1Button.callback = () => { this.interface.prompt.showLocation(4) };

        // flip_6 (components)
        const flip_6Button = new Button(flip_6);
        flip_6Button.spriteName = "flip";
        flip_6Button.callback = () => this.onPage3_1Click();

        // flip_7 (components)
        const flip_7Button = new Button(flip_7);
        flip_7Button.spriteName = "flip";
        flip_7Button.callback = () => this.onPage5Click();

        // buy_2 (components)
        const buy_2Button = new Button(buy_2);
        buy_2Button.spriteName = "buy";
        buy_2Button.callback = () => { this.interface.prompt.showLocation(2) };

        // flip_61 (components)
        const flip_61Button = new Button(flip_61);
        flip_61Button.spriteName = "flip";
        flip_61Button.callback = () => this.onPage4_1Click();

        // flip_71 (components)
        const flip_71Button = new Button(flip_71);
        flip_71Button.spriteName = "flip";
        flip_71Button.callback = () => this.onPage6Click();

        // secret_11 (components)
        const secret_11SimpleButton = new SimpleButton(secret_11);
        secret_11SimpleButton.callback = () => { this.interface.prompt.showSecretLocation(11); };

        // buy_3 (components)
        const buy_3Button = new Button(buy_3);
        buy_3Button.spriteName = "buy";
        buy_3Button.callback = () => { this.interface.prompt.showLocation(3) };

        // flip_8 (components)
        const flip_8Button = new Button(flip_8);
        flip_8Button.spriteName = "flip";
        flip_8Button.callback = () => this.onPage5_1Click();

        // flip_9 (components)
        const flip_9Button = new Button(flip_9);
        flip_9Button.spriteName = "flip";
        flip_9Button.callback = () => this.onPage7Click();

        // buy_8 (components)
        const buy_8Button = new Button(buy_8);
        buy_8Button.spriteName = "buy";
        buy_8Button.callback = () => { this.interface.prompt.showFloor(12) };

        // buy_7 (components)
        const buy_7Button = new Button(buy_7);
        buy_7Button.spriteName = "buy";
        buy_7Button.callback = () => { this.interface.prompt.showFloor(11) };

        // buy_6 (components)
        const buy_6Button = new Button(buy_6);
        buy_6Button.spriteName = "buy";
        buy_6Button.callback = () => { this.interface.prompt.showFurniture(607) };

        // buy_5 (components)
        const buy_5Button = new Button(buy_5);
        buy_5Button.spriteName = "buy";
        buy_5Button.callback = () => { this.interface.prompt.showFloor(23) };

        // buy_4 (components)
        const buy_4Button = new Button(buy_4);
        buy_4Button.spriteName = "buy";
        buy_4Button.callback = () => { this.interface.prompt.showFloor(16) };

        // flip_81 (components)
        const flip_81Button = new Button(flip_81);
        flip_81Button.spriteName = "flip";
        flip_81Button.callback = () => this.onPage6_1Click();

        // flip_91 (components)
        const flip_91Button = new Button(flip_91);
        flip_91Button.spriteName = "flip";
        flip_91Button.callback = () => this.onPage8Click();

        // buy_13 (components)
        const buy_13Button = new Button(buy_13);
        buy_13Button.spriteName = "buy";
        buy_13Button.callback = () => { this.interface.prompt.showFloor(7) };

        // buy_12 (components)
        const buy_12Button = new Button(buy_12);
        buy_12Button.spriteName = "buy";
        buy_12Button.callback = () => { this.interface.prompt.showFloor(10) };

        // buy_11 (components)
        const buy_11Button = new Button(buy_11);
        buy_11Button.spriteName = "buy";
        buy_11Button.callback = () => { this.interface.prompt.showFloor(13) };

        // buy_10 (components)
        const buy_10Button = new Button(buy_10);
        buy_10Button.spriteName = "buy";
        buy_10Button.callback = () => { this.interface.prompt.showFloor(2) };

        // buy_9 (components)
        const buy_9Button = new Button(buy_9);
        buy_9Button.spriteName = "buy";
        buy_9Button.callback = () => { this.interface.prompt.showFloor(4) };

        // flip_10 (components)
        const flip_10Button = new Button(flip_10);
        flip_10Button.spriteName = "flip";
        flip_10Button.callback = () => this.onPage7_1Click();

        // flip_11 (components)
        const flip_11Button = new Button(flip_11);
        flip_11Button.spriteName = "flip";
        flip_11Button.callback = () => this.onPage9Click();

        // buy_17 (components)
        const buy_17Button = new Button(buy_17);
        buy_17Button.spriteName = "buy";
        buy_17Button.callback = () => { this.interface.prompt.showFloor(0) };

        // buy_16 (components)
        const buy_16Button = new Button(buy_16);
        buy_16Button.spriteName = "buy";
        buy_16Button.callback = () => { this.interface.prompt.showFloor(18) };

        // buy_15 (components)
        const buy_15Button = new Button(buy_15);
        buy_15Button.spriteName = "buy";
        buy_15Button.callback = () => { this.interface.prompt.showFloor(8) };

        // buy_14 (components)
        const buy_14Button = new Button(buy_14);
        buy_14Button.spriteName = "buy";
        buy_14Button.callback = () => { this.interface.prompt.showFloor(15) };

        // flip_14 (components)
        const flip_14Button = new Button(flip_14);
        flip_14Button.spriteName = "flip";
        flip_14Button.callback = () => this.onPage8_1Click();

        // flip_15 (components)
        const flip_15Button = new Button(flip_15);
        flip_15Button.spriteName = "flip";
        flip_15Button.callback = () => this.onPage10Click();

        // buy_20 (components)
        const buy_20Button = new Button(buy_20);
        buy_20Button.spriteName = "buy";
        buy_20Button.callback = () => { this.interface.prompt.showIgloo(36) };

        // text_20 (components)
        const text_20IglooBuy = new IglooBuy(text_20);
        text_20IglooBuy.id = 36;

        // buy_21 (components)
        const buy_21Button = new Button(buy_21);
        buy_21Button.spriteName = "buy";
        buy_21Button.callback = () => { this.interface.prompt.showIgloo(30) };

        // text_21 (components)
        const text_21IglooBuy = new IglooBuy(text_21);
        text_21IglooBuy.id = 30;

        // flip_140 (components)
        const flip_140Button = new Button(flip_140);
        flip_140Button.spriteName = "flip";
        flip_140Button.callback = () => this.onPage9_1Click();

        // flip_100 (components)
        const flip_100Button = new Button(flip_100);
        flip_100Button.spriteName = "flip";
        flip_100Button.callback = () => this.onPage11Click();

        // buy_22 (components)
        const buy_22Button = new Button(buy_22);
        buy_22Button.spriteName = "buy";
        buy_22Button.callback = () => { this.interface.prompt.showIgloo(42) };

        // text_22 (components)
        const text_22IglooBuy = new IglooBuy(text_22);
        text_22IglooBuy.id = 42;

        // buy_23 (components)
        const buy_23Button = new Button(buy_23);
        buy_23Button.spriteName = "buy";
        buy_23Button.callback = () => { this.interface.prompt.showIgloo(20) };

        // text_23 (components)
        const text_23IglooBuy = new IglooBuy(text_23);
        text_23IglooBuy.id = 31;

        // secret_2 (components)
        const secret_2SimpleButton = new SimpleButton(secret_2);
        secret_2SimpleButton.callback = () => { this.interface.prompt.showSecretIgloo(66); };

        // flip_18 (components)
        const flip_18Button = new Button(flip_18);
        flip_18Button.spriteName = "flip";
        flip_18Button.callback = () => this.onPage10_1Click();

        // flip_19 (components)
        const flip_19Button = new Button(flip_19);
        flip_19Button.spriteName = "flip";
        flip_19Button.callback = () => this.onPage12Click();

        // buy_25 (components)
        const buy_25Button = new Button(buy_25);
        buy_25Button.spriteName = "buy";
        buy_25Button.callback = () => { this.interface.prompt.showIgloo(3) };

        // text_25 (components)
        const text_25IglooBuy = new IglooBuy(text_25);
        text_25IglooBuy.id = 3;

        // buy_24 (components)
        const buy_24Button = new Button(buy_24);
        buy_24Button.spriteName = "buy";
        buy_24Button.callback = () => { this.interface.prompt.showIgloo(13) };

        // text_24 (components)
        const text_24IglooBuy = new IglooBuy(text_24);
        text_24IglooBuy.id = 13;

        // coin_24 (components)
        const coin_24IglooBuy = new IglooBuy(coin_24);
        coin_24IglooBuy.id = 3;

        // secret_3 (components)
        const secret_3SimpleButton = new SimpleButton(secret_3);
        secret_3SimpleButton.callback = () => { this.interface.prompt.showSecretIgloo(8); };

        // flip_46 (components)
        const flip_46Button = new Button(flip_46);
        flip_46Button.spriteName = "flip";
        flip_46Button.callback = () => this.onPage11_1Click();

        // flip_47 (components)
        const flip_47Button = new Button(flip_47);
        flip_47Button.spriteName = "flip";
        flip_47Button.callback = () => this.onPage13Click();

        // buy_27 (components)
        const buy_27Button = new Button(buy_27);
        buy_27Button.spriteName = "buy";
        buy_27Button.callback = () => { this.interface.prompt.showIgloo(100) };

        // coin_27 (components)
        const coin_27IglooBuy = new IglooBuy(coin_27);
        coin_27IglooBuy.id = 3;

        // text_27 (components)
        const text_27IglooBuy = new IglooBuy(text_27);
        text_27IglooBuy.id = 100;

        // buy_26 (components)
        const buy_26Button = new Button(buy_26);
        buy_26Button.spriteName = "buy";
        buy_26Button.callback = () => { this.interface.prompt.showIgloo(1) };

        // coin_26 (components)
        const coin_26IglooBuy = new IglooBuy(coin_26);
        coin_26IglooBuy.id = 3;

        // text_26 (components)
        const text_26IglooBuy = new IglooBuy(text_26);
        text_26IglooBuy.id = 1;

        // flip_1 (components)
        const flip_1Button = new Button(flip_1);
        flip_1Button.spriteName = "flip";
        flip_1Button.callback = () => this.onPage12_1Click();

        // x_2 (components)
        const x_2Button = new Button(x_2);
        x_2Button.spriteName = "x";
        x_2Button.callback = () => this.scene.stop();

        // pagex (components)
        const pagexButton = new Button(pagex);
        pagexButton.spriteName = "x";
        pagexButton.callback = () => {this.scene.stop(); this.world.events.off("COINS_CHANGED", this.handleUpdateCoins, this);};

        this.pg1 = pg1;
        this.pg2 = pg2;
        this.pg3 = pg3;
        this.pg4 = pg4;
        this.pg5 = pg5;
        this.pg6 = pg6;
        this.pg7 = pg7;
        this.pg8 = pg8;
        this.pg9 = pg9;
        this.pg10 = pg10;
        this.pg11 = pg11;
        this.pg12 = pg12;
        this.pg13 = pg13;
        this.pagex = pagex;
        this.text = text;
        this.wallet = wallet;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        this._create();

        this.interface.prompt.closeLoading();

        this.world.events.on("COINS_CHANGED", this.handleUpdateCoins, this);
        this.handleUpdateCoins();

        this.interface.bringToTop(this.sys.config.key);
    }

    handleUpdateCoins() {
        this.text.text = `Your Coins: ${this.world.client.coins}`;
    }

    onPage2Click() {
        this.pg1.visible = false
        this.pg2.visible = true
        this.pagex.visible = true
        this.wallet.visible = true
    }

    onPage3Click() {
        this.pg2.visible = false
        this.pg3.visible = true
    }

    onPage4Click() {
        this.pg3.visible = false
        this.pg4.visible = true
    }

    onPage5Click() {
        this.pg4.visible = false
        this.pg5.visible = true
    }

    onPage6Click() {
        this.pg5.visible = false
        this.pg6.visible = true
    }

    onPage7Click() {
        this.pg6.visible = false
        this.pg7.visible = true
    }

    onPage8Click() {
        this.pg7.visible = false
        this.pg8.visible = true
    }

    onPage9Click() {
        this.pg8.visible = false
        this.pg9.visible = true
    }

    onPage10Click() {
        this.pg9.visible = false
        this.pg10.visible = true
    }

    onPage11Click() {
        this.pg10.visible = false
        this.pg11.visible = true
    }

    onPage12Click() {
        this.pg11.visible = false
        this.pg12.visible = true
    }

    onPage13Click() {
        this.pg12.visible = false
        this.pg13.visible = true
    }
    onPage14Click() {
        this.pg13.visible = false
        this.pg14.visible = true
        this.pagex.visible = false
        this.wallet.visible = false
    }

    // Back

    onPage1Click() {
        this.pg2.visible = false
        this.pg1.visible = true
        this.pagex.visible = false
        this.wallet.visible = false
    }

    onPage2_1Click() {
        this.pg3.visible = false
        this.pg2.visible = true
    }

    onPage3_1Click() {
        this.pg4.visible = false
        this.pg3.visible = true
    }

    onPage4_1Click() {
        this.pg5.visible = false
        this.pg4.visible = true
    }

    onPage5_1Click() {
        this.pg6.visible = false
        this.pg5.visible = true
    }

    onPage6_1Click() {
        this.pg7.visible = false
        this.pg6.visible = true
    }

    onPage7_1Click() {
        this.pg8.visible = false
        this.pg7.visible = true
    }

    onPage8_1Click() {
        this.pg9.visible = false
        this.pg8.visible = true
    }

    onPage9_1Click() {
        this.pg10.visible = false
        this.pg9.visible = true
    }

    onPage10_1Click() {
        this.pg11.visible = false
        this.pg10.visible = true
    }

    onPage11_1Click() {
        this.pg12.visible = false
        this.pg11.visible = true
    }

    onPage12_1Click() {
        this.pg13.visible = false
        this.pg12.visible = true
    }
    onPage13_1Click() {
        this.pg14.visible = false
        this.pg13.visible = true
        this.pagex.visible = true
        this.wallet.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
