import BaseScene from '@scenes/base/BaseScene'
import { Animation, Button, FurnitureBuy, Interactive, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class FurnitureCatalog extends BaseScene {

    constructor() {
        super("FurnitureCatalog");

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

        this.load.pack("furniture-pack", "assets/media/interface/game/furniture/furniture-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(0, 0, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // pg1
        const pg1 = this.add.container(0, 0);

        // pg_1
        const pg_1 = this.add.image(0, 0, "nov24furn", "nov24furncover");
        pg_1.setOrigin(0, 0);
        pg1.add(pg_1);

        // x_3
        const x_3 = this.add.image(1000, 199, "catalogs", "x");
        pg1.add(x_3);

        // flip_43
        const flip_43 = this.add.image(1001, 747, "catalogs", "flip");
        flip_43.flipX = true;
        pg1.add(flip_43);

        // pg2
        const pg2 = this.add.container(0, 0);
        pg2.visible = false;

        // pg_2
        const pg_2 = this.add.image(0, 0, "nov24furn", "nov24furn1");
        pg_2.setOrigin(0, 0);
        pg2.add(pg_2);

        // buy_3
        const buy_3 = this.add.container(312, 386);
        pg2.add(buy_3);

        // buy3w
        const buy3w = this.add.image(-17, 14, "catalogs", "buy");
        buy3w.scaleX = 0.9;
        buy3w.scaleY = 0.9;
        buy_3.add(buy3w);

        // text3w
        const text3w = this.add.text(-47, 0, "", {});
        text3w.text = "0";
        text3w.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_3.add(text3w);

        // coin3w
        const coin3w = this.add.image(28, 14, "catalogs", "coin");
        coin3w.scaleX = 0.9;
        coin3w.scaleY = 0.9;
        buy_3.add(coin3w);

        // buy_6
        const buy_6 = this.add.container(613, 548);
        pg2.add(buy_6);

        // buy3u
        const buy3u = this.add.image(-17, 14, "catalogs", "buy");
        buy3u.scaleX = 0.9;
        buy3u.scaleY = 0.9;
        buy_6.add(buy3u);

        // text3u
        const text3u = this.add.text(-47, 0, "", {});
        text3u.text = "0";
        text3u.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_6.add(text3u);

        // coin3u
        const coin3u = this.add.image(28, 14, "catalogs", "coin");
        coin3u.scaleX = 0.9;
        coin3u.scaleY = 0.9;
        buy_6.add(coin3u);

        // buy_11
        const buy_11 = this.add.container(613, 752);
        pg2.add(buy_11);

        // buy3s
        const buy3s = this.add.image(-17, 14, "catalogs", "buy");
        buy3s.scaleX = 0.9;
        buy3s.scaleY = 0.9;
        buy_11.add(buy3s);

        // text3s
        const text3s = this.add.text(-47, 0, "", {});
        text3s.text = "0";
        text3s.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_11.add(text3s);

        // coin3s
        const coin3s = this.add.image(28, 14, "catalogs", "coin");
        coin3s.scaleX = 0.9;
        coin3s.scaleY = 0.9;
        buy_11.add(coin3s);

        // buy_12
        const buy_12 = this.add.container(312, 725);
        pg2.add(buy_12);

        // buy3r
        const buy3r = this.add.image(-17, 14, "catalogs", "buy");
        buy3r.scaleX = 0.9;
        buy3r.scaleY = 0.9;
        buy_12.add(buy3r);

        // text3r
        const text3r = this.add.text(-47, 0, "", {});
        text3r.text = "0";
        text3r.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_12.add(text3r);

        // coin3r
        const coin3r = this.add.image(28, 14, "catalogs", "coin");
        coin3r.scaleX = 0.9;
        coin3r.scaleY = 0.9;
        buy_12.add(coin3r);

        // buy_13
        const buy_13 = this.add.container(952, 741);
        pg2.add(buy_13);

        // buy3q
        const buy3q = this.add.image(-17, 14, "catalogs", "buy");
        buy3q.scaleX = 0.9;
        buy3q.scaleY = 0.9;
        buy_13.add(buy3q);

        // text3q
        const text3q = this.add.text(-47, 0, "", {});
        text3q.text = "0";
        text3q.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_13.add(text3q);

        // coin3q
        const coin3q = this.add.image(28, 14, "catalogs", "coin");
        coin3q.scaleX = 0.9;
        coin3q.scaleY = 0.9;
        buy_13.add(coin3q);

        // buy_15
        const buy_15 = this.add.container(952, 451);
        pg2.add(buy_15);

        // buy3p
        const buy3p = this.add.image(-17, 14, "catalogs", "buy");
        buy3p.scaleX = 0.9;
        buy3p.scaleY = 0.9;
        buy_15.add(buy3p);

        // text3p
        const text3p = this.add.text(-47, 0, "", {});
        text3p.text = "0";
        text3p.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_15.add(text3p);

        // coin3p
        const coin3p = this.add.image(28, 14, "catalogs", "coin");
        coin3p.scaleX = 0.9;
        coin3p.scaleY = 0.9;
        buy_15.add(coin3p);

        // buy_16
        const buy_16 = this.add.container(1290, 546);
        pg2.add(buy_16);

        // buy3o
        const buy3o = this.add.image(-17, 14, "catalogs", "buy");
        buy3o.scaleX = 0.9;
        buy3o.scaleY = 0.9;
        buy_16.add(buy3o);

        // text3o
        const text3o = this.add.text(-47, 0, "", {});
        text3o.text = "0";
        text3o.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_16.add(text3o);

        // coin3o
        const coin3o = this.add.image(28, 14, "catalogs", "coin");
        coin3o.scaleX = 0.9;
        coin3o.scaleY = 0.9;
        buy_16.add(coin3o);

        // buy_17
        const buy_17 = this.add.container(1290, 375);
        pg2.add(buy_17);

        // buy3n
        const buy3n = this.add.image(-17, 14, "catalogs", "buy");
        buy3n.scaleX = 0.9;
        buy3n.scaleY = 0.9;
        buy_17.add(buy3n);

        // text3n
        const text3n = this.add.text(-47, 0, "", {});
        text3n.text = "0";
        text3n.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_17.add(text3n);

        // coin3n
        const coin3n = this.add.image(28, 14, "catalogs", "coin");
        coin3n.scaleX = 0.9;
        coin3n.scaleY = 0.9;
        buy_17.add(coin3n);

        // buy_14
        const buy_14 = this.add.container(1290, 749);
        pg2.add(buy_14);

        // buy3
        const buy3 = this.add.image(-17, 14, "catalogs", "buy");
        buy3.scaleX = 0.9;
        buy3.scaleY = 0.9;
        buy_14.add(buy3);

        // text3
        const text3 = this.add.text(-47, 0, "", {});
        text3.text = "0";
        text3.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_14.add(text3);

        // coin3
        const coin3 = this.add.image(28, 14, "catalogs", "coin");
        coin3.scaleX = 0.9;
        coin3.scaleY = 0.9;
        buy_14.add(coin3);

        // secret151
        const secret151 = this.add.rectangle(272, 322, 32, 32);
        secret151.scaleX = 0.2842551982262872;
        secret151.scaleY = 0.30577828818816355;
        secret151.fillColor = 837887;
        secret151.fillAlpha = 100;
        pg2.add(secret151);

        // secret46
        const secret46 = this.add.rectangle(935, 265, 32, 32);
        secret46.scaleX = 0.2842551982262872;
        secret46.scaleY = 0.30577828818816355;
        secret46.fillColor = 837887;
        secret46.fillAlpha = 100;
        pg2.add(secret46);

        // secret155
        const secret155 = this.add.rectangle(657, 329, 64, 64);
        secret155.scaleX = 0.2842551982262872;
        secret155.scaleY = 0.30577828818816355;
        secret155.fillColor = 837887;
        secret155.fillAlpha = 100;
        pg2.add(secret155);

        // secret_12
        const secret_12 = this.add.rectangle(630, 689, 32, 32);
        secret_12.scaleX = 0.2842551982262872;
        secret_12.scaleY = 0.30577828818816355;
        secret_12.fillColor = 837887;
        secret_12.fillAlpha = 100;
        pg2.add(secret_12);

        // secret_13
        const secret_13 = this.add.rectangle(1152, 266, 32, 32);
        secret_13.scaleX = 0.2842551982262872;
        secret_13.scaleY = 0.30577828818816355;
        secret_13.fillColor = 837887;
        secret_13.fillAlpha = 100;
        pg2.add(secret_13);

        // secret_14
        const secret_14 = this.add.rectangle(1062, 136, 32, 32);
        secret_14.scaleX = 0.2842551982262872;
        secret_14.scaleY = 0.30577828818816355;
        secret_14.fillColor = 837887;
        secret_14.fillAlpha = 100;
        pg2.add(secret_14);

        // flip_pg1
        const flip_pg1 = this.add.image(201, 747, "catalogs", "flip");
        flip_pg1.setInteractive(new Phaser.Geom.Rectangle(-1, 80, 40.027088941856135, 139.86789178617656), Phaser.Geom.Rectangle.Contains);
        pg2.add(flip_pg1);

        // flip_pg3
        const flip_pg3 = this.add.image(1347.6190813181531, 791.9063490952642, "catalogs", "flip");
        flip_pg3.setInteractive(new Phaser.Geom.Rectangle(87, 82, 44.389376013518785, 136.34480218551664), Phaser.Geom.Rectangle.Contains);
        flip_pg3.setOrigin(0.7278390870627163, 0.7031961497523267);
        flip_pg3.flipX = true;
        pg2.add(flip_pg3);

        // pg3
        const pg3 = this.add.container(0, 0);
        pg3.visible = false;

        // pg_3
        const pg_3 = this.add.image(0, 0, "nov24furn", "nov24furn2");
        pg_3.setOrigin(0, 0);
        pg3.add(pg_3);

        // buy_21
        const buy_21 = this.add.container(1239, 453);
        pg3.add(buy_21);

        // buy3k
        const buy3k = this.add.image(-17, 14, "catalogs", "buy");
        buy3k.scaleX = 0.9;
        buy3k.scaleY = 0.9;
        buy_21.add(buy3k);

        // text3k
        const text3k = this.add.text(-47, 0, "", {});
        text3k.text = "0";
        text3k.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_21.add(text3k);

        // coin3k
        const coin3k = this.add.image(28, 14, "catalogs", "coin");
        coin3k.scaleX = 0.9;
        coin3k.scaleY = 0.9;
        buy_21.add(coin3k);

        // buy_23
        const buy_23 = this.add.container(966, 453);
        pg3.add(buy_23);

        // buy3j
        const buy3j = this.add.image(-17, 14, "catalogs", "buy");
        buy3j.scaleX = 0.9;
        buy3j.scaleY = 0.9;
        buy_23.add(buy3j);

        // text3j
        const text3j = this.add.text(-47, 0, "", {});
        text3j.text = "0";
        text3j.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_23.add(text3j);

        // coin3j
        const coin3j = this.add.image(28, 14, "catalogs", "coin");
        coin3j.scaleX = 0.9;
        coin3j.scaleY = 0.9;
        buy_23.add(coin3j);

        // buy_26
        const buy_26 = this.add.container(615, 748);
        pg3.add(buy_26);

        // buy3h
        const buy3h = this.add.image(-17, 14, "catalogs", "buy");
        buy3h.scaleX = 0.9;
        buy3h.scaleY = 0.9;
        buy_26.add(buy3h);

        // text3h
        const text3h = this.add.text(-47, 0, "", {});
        text3h.text = "0";
        text3h.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_26.add(text3h);

        // coin3h
        const coin3h = this.add.image(29, 14, "catalogs", "coin");
        coin3h.scaleX = 0.9;
        coin3h.scaleY = 0.9;
        buy_26.add(coin3h);

        // buy_27
        const buy_27 = this.add.container(315, 748);
        pg3.add(buy_27);

        // buy3g
        const buy3g = this.add.image(-17, 14, "catalogs", "buy");
        buy3g.scaleX = 0.9;
        buy3g.scaleY = 0.9;
        buy_27.add(buy3g);

        // text3g
        const text3g = this.add.text(-47, 0, "", {});
        text3g.text = "0";
        text3g.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_27.add(text3g);

        // coin3g
        const coin3g = this.add.image(28, 14, "catalogs", "coin");
        coin3g.scaleX = 0.9;
        coin3g.scaleY = 0.9;
        buy_27.add(coin3g);

        // buy_29
        const buy_29 = this.add.container(615, 350);
        pg3.add(buy_29);

        // buy3e
        const buy3e = this.add.image(-17, 14, "catalogs", "buy");
        buy3e.scaleX = 0.9;
        buy3e.scaleY = 0.9;
        buy_29.add(buy3e);

        // text3e
        const text3e = this.add.text(-47, 0, "", {});
        text3e.text = "0";
        text3e.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_29.add(text3e);

        // coin3e
        const coin3e = this.add.image(28, 14, "catalogs", "coin");
        coin3e.scaleX = 0.9;
        coin3e.scaleY = 0.9;
        buy_29.add(coin3e);

        // buy_30
        const buy_30 = this.add.container(1272, 672);
        pg3.add(buy_30);

        // buy3d
        const buy3d = this.add.image(-20, 7, "catalogs", "buy");
        buy3d.scaleX = 0.9;
        buy3d.scaleY = 0.9;
        buy_30.add(buy3d);

        // text3d
        const text3d = this.add.text(-50, -7, "", {});
        text3d.text = "0";
        text3d.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_30.add(text3d);

        // coin3d
        const coin3d = this.add.image(25, 7, "catalogs", "coin");
        coin3d.scaleX = 0.9;
        coin3d.scaleY = 0.9;
        buy_30.add(coin3d);

        // secret_15
        const secret_15 = this.add.rectangle(1223, 422, 32, 32);
        secret_15.scaleX = 0.2842551982262872;
        secret_15.scaleY = 0.30577828818816355;
        secret_15.fillColor = 837887;
        secret_15.fillAlpha = 100;
        pg3.add(secret_15);

        // secret_16
        const secret_16 = this.add.rectangle(946, 362, 32, 32);
        secret_16.scaleX = 0.2842551982262872;
        secret_16.scaleY = 0.30577828818816355;
        secret_16.fillColor = 837887;
        secret_16.fillAlpha = 100;
        pg3.add(secret_16);

        // secret_17
        const secret_17 = this.add.rectangle(673, 654, 32, 32);
        secret_17.scaleX = 0.2842551982262872;
        secret_17.scaleY = 0.30577828818816355;
        secret_17.fillColor = 837887;
        secret_17.fillAlpha = 100;
        pg3.add(secret_17);

        // secret_18
        const secret_18 = this.add.rectangle(852, 741, 32, 32);
        secret_18.scaleX = 0.2842551982262872;
        secret_18.scaleY = 0.30577828818816355;
        secret_18.fillColor = 837887;
        secret_18.fillAlpha = 100;
        pg3.add(secret_18);

        // flip_pg2_back
        const flip_pg2_back = this.add.image(201, 747, "catalogs", "flip");
        pg3.add(flip_pg2_back);

        // flip_pg4
        const flip_pg4 = this.add.image(1318, 747, "catalogs", "flip");
        flip_pg4.flipX = true;
        pg3.add(flip_pg4);

        // pg4
        const pg4 = this.add.container(0, 0);
        pg4.visible = false;

        // pg_4
        const pg_4 = this.add.image(0, 0, "nov24furn", "nov24furn3");
        pg_4.setOrigin(0, 0);
        pg4.add(pg_4);

        // buy_25
        const buy_25 = this.add.container(1250, 460);
        pg4.add(buy_25);

        // buy3a
        const buy3a = this.add.image(-17, 14, "catalogs", "buy");
        buy3a.scaleX = 0.9;
        buy3a.scaleY = 0.9;
        buy_25.add(buy3a);

        // text3a
        const text3a = this.add.text(-47, 0, "", {});
        text3a.text = "0";
        text3a.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_25.add(text3a);

        // coin3a
        const coin3a = this.add.image(28, 14, "catalogs", "coin");
        coin3a.scaleX = 0.9;
        coin3a.scaleY = 0.9;
        buy_25.add(coin3a);

        // buy_31
        const buy_31 = this.add.container(950, 460);
        pg4.add(buy_31);

        // buy39
        const buy39 = this.add.image(-17, 14, "catalogs", "buy");
        buy39.scaleX = 0.9;
        buy39.scaleY = 0.9;
        buy_31.add(buy39);

        // text39
        const text39 = this.add.text(-47, 0, "", {});
        text39.text = "0";
        text39.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_31.add(text39);

        // coin39
        const coin39 = this.add.image(28, 14, "catalogs", "coin");
        coin39.scaleX = 0.9;
        coin39.scaleY = 0.9;
        buy_31.add(coin39);

        // buy_33
        const buy_33 = this.add.container(310, 680);
        pg4.add(buy_33);

        // buy37
        const buy37 = this.add.image(-17, 14, "catalogs", "buy");
        buy37.scaleX = 0.9;
        buy37.scaleY = 0.9;
        buy_33.add(buy37);

        // text37
        const text37 = this.add.text(-47, 0, "", {});
        text37.text = "0";
        text37.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_33.add(text37);

        // coin37
        const coin37 = this.add.image(28, 14, "catalogs", "coin");
        coin37.scaleX = 0.9;
        coin37.scaleY = 0.9;
        buy_33.add(coin37);

        // buy_34
        const buy_34 = this.add.container(610, 760);
        pg4.add(buy_34);

        // buy36
        const buy36 = this.add.image(-17, 14, "catalogs", "buy");
        buy36.scaleX = 0.9;
        buy36.scaleY = 0.9;
        buy_34.add(buy36);

        // text36
        const text36 = this.add.text(-47, 0, "", {});
        text36.text = "0";
        text36.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_34.add(text36);

        // coin36
        const coin36 = this.add.image(28, 14, "catalogs", "coin");
        coin36.scaleX = 0.9;
        coin36.scaleY = 0.9;
        buy_34.add(coin36);

        // buy_36
        const buy_36 = this.add.container(610, 430);
        pg4.add(buy_36);

        // buy34
        const buy34 = this.add.image(-17, 14, "catalogs", "buy");
        buy34.scaleX = 0.9;
        buy34.scaleY = 0.9;
        buy_36.add(buy34);

        // text34
        const text34 = this.add.text(-47, 0, "", {});
        text34.text = "0";
        text34.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_36.add(text34);

        // coin34
        const coin34 = this.add.image(28, 14, "catalogs", "coin");
        coin34.scaleX = 0.9;
        coin34.scaleY = 0.9;
        buy_36.add(coin34);

        // buy_39
        const buy_39 = this.add.container(1265, 700);
        pg4.add(buy_39);

        // buy31
        const buy31 = this.add.image(-17, 14, "catalogs", "buy");
        buy31.scaleX = 0.9;
        buy31.scaleY = 0.9;
        buy_39.add(buy31);

        // text31
        const text31 = this.add.text(-47, 0, "", {});
        text31.text = "0";
        text31.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_39.add(text31);

        // coin31
        const coin31 = this.add.image(28, 14, "catalogs", "coin");
        coin31.scaleX = 0.9;
        coin31.scaleY = 0.9;
        buy_39.add(coin31);

        // flip_pg3_back
        const flip_pg3_back = this.add.image(201, 747, "catalogs", "flip");
        flip_pg3_back.setInteractive(new Phaser.Geom.Rectangle(-2, 60, 41.6895678602503, 161.2100526426651), Phaser.Geom.Rectangle.Contains);
        pg4.add(flip_pg3_back);

        // flip_pg5
        const flip_pg5 = this.add.image(1318, 747, "catalogs", "flip");
        flip_pg5.setInteractive(new Phaser.Geom.Rectangle(90, 96, 38.63527097042599, 118.90492689392983), Phaser.Geom.Rectangle.Contains);
        flip_pg5.flipX = true;
        pg4.add(flip_pg5);

        // secret_21
        const secret_21 = this.add.rectangle(623, 387, 64, 64);
        secret_21.scaleX = 0.2;
        secret_21.scaleY = 0.2;
        secret_21.fillColor = 837887;
        secret_21.fillAlpha = 100;
        pg4.add(secret_21);

        // pg5
        const pg5 = this.add.container(0, 0);
        pg5.visible = false;

        // pg_6
        const pg_6 = this.add.image(0, 0, "oct24furn", "oct24furn1");
        pg_6.setOrigin(0, 0);
        pg5.add(pg_6);

        // container_2
        const container_2 = this.add.container(1201, 749);
        pg5.add(container_2);

        // buy_9
        const buy_9 = this.add.image(27, 15, "catalogs", "buy");
        container_2.add(buy_9);

        // coin_8
        const coin_8 = this.add.image(72, 15, "catalogs", "coin");
        coin_8.scaleX = 0.9;
        coin_8.scaleY = 0.9;
        container_2.add(coin_8);

        // text_9
        const text_9 = this.add.text(0, 0, "", {});
        text_9.text = "0";
        text_9.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        container_2.add(text_9);

        // container
        const container = this.add.container(1259, 327);
        container.scaleX = 0.9;
        container.scaleY = 0.9;
        pg5.add(container);

        // buy_9dwada
        const buy_9dwada = this.add.image(27, 15, "catalogs", "buy");
        container.add(buy_9dwada);

        // coin_8dawDAW
        const coin_8dawDAW = this.add.image(72, 15, "catalogs", "coin");
        coin_8dawDAW.scaleX = 0.9;
        coin_8dawDAW.scaleY = 0.9;
        container.add(coin_8dawDAW);

        // text_9dwadwadwadd
        const text_9dwadwadwadd = this.add.text(0, 0, "", {});
        text_9dwadwadwadd.text = "0";
        text_9dwadwadwadd.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        container.add(text_9dwadwadwadd);

        // buy_809
        const buy_809 = this.add.container(1259, 531);
        buy_809.scaleX = 0.9;
        buy_809.scaleY = 0.9;
        pg5.add(buy_809);

        // buy_4
        const buy_4 = this.add.image(27, 15, "catalogs", "buy");
        buy_809.add(buy_4);

        // text_4
        const text_4 = this.add.text(0, 0, "", {});
        text_4.text = "0";
        text_4.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_809.add(text_4);

        // coin_3
        const coin_3 = this.add.image(72, 15, "catalogs", "coin");
        coin_3.scaleX = 0.9;
        coin_3.scaleY = 0.9;
        buy_809.add(coin_3);

        // container_4
        const container_4 = this.add.container(950, 532);
        container_4.scaleX = 0.9;
        container_4.scaleY = 0.9;
        pg5.add(container_4);

        // buy771
        const buy771 = this.add.image(27, 15, "catalogs", "buy");
        container_4.add(buy771);

        // text_771
        const text_771 = this.add.text(0, 0, "", {});
        text_771.text = "0";
        text_771.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        container_4.add(text_771);

        // coin_771
        const coin_771 = this.add.image(72, 15, "catalogs", "coin");
        coin_771.scaleX = 0.9;
        coin_771.scaleY = 0.9;
        container_4.add(coin_771);

        // buy_808
        const buy_808 = this.add.container(993, 339);
        buy_808.scaleX = 0.9;
        buy_808.scaleY = 0.9;
        pg5.add(buy_808);

        // buy2149
        const buy2149 = this.add.image(-13.200676616845726, -2.4264408776705864, "catalogs", "buy");
        buy_808.add(buy2149);

        // text770
        const text770 = this.add.text(-40.200676616845726, -16.426440877670586, "", {});
        text770.text = "0";
        text770.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_808.add(text770);

        // coin770
        const coin770 = this.add.image(31.799323383154274, -1.4264408776705864, "catalogs", "coin");
        coin770.scaleX = 0.9;
        coin770.scaleY = 0.9;
        buy_808.add(coin770);

        // buy_812
        const buy_812 = this.add.container(664, 759);
        buy_812.scaleX = 0.9;
        buy_812.scaleY = 0.9;
        pg5.add(buy_812);

        // buy658
        const buy658 = this.add.image(-10, -4, "catalogs", "buy");
        buy_812.add(buy658);

        // text908
        const text908 = this.add.text(-36, -19, "", {});
        text908.text = "0";
        text908.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_812.add(text908);

        // coin908
        const coin908 = this.add.image(36, -4, "catalogs", "coin");
        coin908.scaleX = 0.9;
        coin908.scaleY = 0.9;
        buy_812.add(coin908);

        // buy_807
        const buy_807 = this.add.container(329, 742);
        buy_807.scaleX = 0.9;
        buy_807.scaleY = 0.9;
        pg5.add(buy_807);

        // buy2090
        const buy2090 = this.add.image(27, 15, "catalogs", "buy");
        buy_807.add(buy2090);

        // text2090
        const text2090 = this.add.text(0, 0, "", {});
        text2090.text = "0";
        text2090.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_807.add(text2090);

        // coin2090
        const coin2090 = this.add.image(73, 16, "catalogs", "coin");
        coin2090.scaleX = 0.9;
        coin2090.scaleY = 0.9;
        buy_807.add(coin2090);

        // buy_811
        const buy_811 = this.add.container(329, 534);
        buy_811.scaleX = 0.9;
        buy_811.scaleY = 0.9;
        pg5.add(buy_811);

        // buy929
        const buy929 = this.add.image(27, 15, "catalogs", "buy");
        buy_811.add(buy929);

        // text929
        const text929 = this.add.text(0, 0, "", {});
        text929.text = "0";
        text929.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_811.add(text929);

        // coin2089
        const coin2089 = this.add.image(72, 15, "catalogs", "coin");
        coin2089.scaleX = 0.9;
        coin2089.scaleY = 0.9;
        buy_811.add(coin2089);

        // container_3
        const container_3 = this.add.container(573, 535);
        container_3.scaleX = 0.9;
        container_3.scaleY = 0.9;
        pg5.add(container_3);

        // buy813
        const buy813 = this.add.image(27, 14, "catalogs", "buy");
        container_3.add(buy813);

        // text813
        const text813 = this.add.text(0, 0, "", {});
        text813.text = "0";
        text813.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        container_3.add(text813);

        // coin813
        const coin813 = this.add.image(72, 14, "catalogs", "coin");
        coin813.scaleX = 0.9;
        coin813.scaleY = 0.9;
        container_3.add(coin813);

        // buy_813
        const buy_813 = this.add.container(329, 325);
        buy_813.scaleX = 0.9;
        buy_813.scaleY = 0.9;
        pg5.add(buy_813);

        // buy_7
        const buy_7 = this.add.image(28, 13, "catalogs", "buy");
        buy_813.add(buy_7);

        // text_7
        const text_7 = this.add.text(0, 0, "", {});
        text_7.text = "0";
        text_7.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_813.add(text_7);

        // coin_4
        const coin_4 = this.add.image(72, 13, "catalogs", "coin");
        coin_4.scaleX = 0.9;
        coin_4.scaleY = 0.9;
        buy_813.add(coin_4);

        // secret2151
        const secret2151 = this.add.rectangle(926, 732, 50, 50);
        secret2151.scaleX = 0.2842551982262872;
        secret2151.scaleY = 0.30577828818816355;
        secret2151.fillColor = 837887;
        secret2151.fillAlpha = 100;
        pg5.add(secret2151);

        // secret2167
        const secret2167 = this.add.rectangle(1163, 521, 32, 32);
        secret2167.scaleX = 0.2842551982262872;
        secret2167.scaleY = 0.30577828818816355;
        secret2167.fillColor = 837887;
        secret2167.fillAlpha = 100;
        pg5.add(secret2167);

        // secret
        const secret = this.add.rectangle(228, 302, 40, 40);
        secret.scaleX = 0.2842551982262872;
        secret.scaleY = 0.30577828818816355;
        secret.fillColor = 837887;
        secret.fillAlpha = 100;
        pg5.add(secret);

        // secret_1
        const secret_1 = this.add.rectangle(227, 482, 50, 50);
        secret_1.scaleX = 0.2842551982262872;
        secret_1.scaleY = 0.30577828818816355;
        secret_1.fillColor = 837887;
        secret_1.fillAlpha = 100;
        pg5.add(secret_1);

        // secret_3
        const secret_3 = this.add.rectangle(499, 720, 45, 40);
        secret_3.scaleX = 0.2842551982262872;
        secret_3.scaleY = 0.30577828818816355;
        secret_3.fillColor = 837887;
        secret_3.fillAlpha = 100;
        pg5.add(secret_3);

        // flip_pg4_back
        const flip_pg4_back = this.add.image(201, 747, "catalogs", "flip");
        pg5.add(flip_pg4_back);

        // flip_pg6
        const flip_pg6 = this.add.image(1318, 747, "catalogs", "flip");
        flip_pg6.flipX = true;
        pg5.add(flip_pg6);

        // secret_25
        const secret_25 = this.add.rectangle(365, 703, 45, 40);
        secret_25.scaleX = 0.2842551982262872;
        secret_25.scaleY = 0.30577828818816355;
        secret_25.fillColor = 837887;
        secret_25.fillAlpha = 100;
        pg5.add(secret_25);

        // secret_26
        const secret_26 = this.add.rectangle(846, 473, 45, 40);
        secret_26.scaleX = 0.2842551982262872;
        secret_26.scaleY = 0.30577828818816355;
        secret_26.fillColor = 837887;
        secret_26.fillAlpha = 100;
        pg5.add(secret_26);

        // secret_27
        const secret_27 = this.add.rectangle(870, 282, 45, 40);
        secret_27.scaleX = 0.2842551982262872;
        secret_27.scaleY = 0.30577828818816355;
        secret_27.fillColor = 837887;
        secret_27.fillAlpha = 100;
        pg5.add(secret_27);

        // secret_28
        const secret_28 = this.add.rectangle(441, 142, 45, 40);
        secret_28.scaleX = 0.2842551982262872;
        secret_28.scaleY = 0.30577828818816355;
        secret_28.fillColor = 837887;
        secret_28.fillAlpha = 100;
        pg5.add(secret_28);

        // pg6
        const pg6 = this.add.container(0, 0);
        pg6.visible = false;

        // oct24furn2
        const oct24furn2 = this.add.image(0, 0, "oct24furn", "oct24furn2");
        oct24furn2.setOrigin(0, 0);
        pg6.add(oct24furn2);

        // buy_359
        const buy_359 = this.add.container(244, 538);
        buy_359.scaleX = 0.9;
        buy_359.scaleY = 0.9;
        pg6.add(buy_359);

        // buy586
        const buy586 = this.add.image(33.799323383154274, 14.573559122329414, "catalogs", "buy");
        buy_359.add(buy586);

        // text_586
        const text_586 = this.add.text(0, 0, "", {});
        text_586.text = "0";
        text_586.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_359.add(text_586);

        // coin_586
        const coin_586 = this.add.image(81.79932338315427, 14.573559122329414, "catalogs", "coin");
        coin_586.scaleX = 0.9;
        coin_586.scaleY = 0.9;
        buy_359.add(coin_586);

        // buy_67
        const buy_67 = this.add.container(943, 538);
        buy_67.scaleX = 0.9;
        buy_67.scaleY = 0.9;
        pg6.add(buy_67);

        // buy_1DWADWAdAW
        const buy_1DWADWAdAW = this.add.image(34, 15, "catalogs", "buy");
        buy_67.add(buy_1DWADWAdAW);

        // coin_1ddsdsdsa
        const coin_1ddsdsdsa = this.add.image(79, 15, "catalogs", "coin");
        coin_1ddsdsdsa.scaleX = 0.9;
        coin_1ddsdsdsa.scaleY = 0.9;
        buy_67.add(coin_1ddsdsdsa);

        // text_2dddsawdsa
        const text_2dddsawdsa = this.add.text(0, 0, "", {});
        text_2dddsawdsa.text = "0";
        text_2dddsawdsa.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_67.add(text_2dddsawdsa);

        // buy_393
        const buy_393 = this.add.container(946, 740);
        buy_393.scaleX = 0.9;
        buy_393.scaleY = 0.9;
        pg6.add(buy_393);

        // buy587
        const buy587 = this.add.image(34, 15, "catalogs", "buy");
        buy_393.add(buy587);

        // text587
        const text587 = this.add.text(0, 0, "", {});
        text587.text = "0";
        text587.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_393.add(text587);

        // coin587
        const coin587 = this.add.image(79, 15, "catalogs", "coin");
        coin587.scaleX = 0.9;
        coin587.scaleY = 0.9;
        buy_393.add(coin587);

        // buy_394
        const buy_394 = this.add.container(1230, 340);
        buy_394.scaleX = 0.9;
        buy_394.scaleY = 0.9;
        pg6.add(buy_394);

        // buy588
        const buy588 = this.add.image(-9.200676616845726, 3.5735591223294136, "catalogs", "buy");
        buy_394.add(buy588);

        // text_588
        const text_588 = this.add.text(-43, -11, "", {});
        text_588.text = "0";
        text_588.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_394.add(text_588);

        // coin_588
        const coin_588 = this.add.image(38.799323383154274, 3.5735591223294136, "catalogs", "coin");
        coin_588.scaleX = 0.9;
        coin_588.scaleY = 0.9;
        buy_394.add(coin_588);

        // container_5
        const container_5 = this.add.container(349, 753);
        container_5.scaleX = 0.9;
        container_5.scaleY = 0.9;
        pg6.add(container_5);

        // buy_2dwadwad
        const buy_2dwadwad = this.add.image(3.630565756287183, 0.24339080454893747, "catalogs", "buy");
        container_5.add(buy_2dwadwad);

        // coin_2dwadwad
        const coin_2dwadwad = this.add.image(48.63056575628718, 0.24339080454893747, "catalogs", "coin");
        coin_2dwadwad.scaleX = 0.9;
        coin_2dwadwad.scaleY = 0.9;
        container_5.add(coin_2dwadwad);

        // text_3dddaw
        const text_3dddaw = this.add.text(-30.168750649962817, -14.330156558732313, "", {});
        text_3dddaw.text = "0";
        text_3dddaw.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        container_5.add(text_3dddaw);

        // buy_65
        const buy_65 = this.add.container(621, 740);
        buy_65.scaleX = 0.9;
        buy_65.scaleY = 0.9;
        pg6.add(buy_65);

        // buy2124
        const buy2124 = this.add.image(34, 15, "catalogs", "buy");
        buy_65.add(buy2124);

        // text2124
        const text2124 = this.add.text(0, 0, "", {});
        text2124.text = "0";
        text2124.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_65.add(text2124);

        // coin2124
        const coin2124 = this.add.image(79, 15, "catalogs", "coin");
        coin2124.scaleX = 0.9;
        coin2124.scaleY = 0.9;
        buy_65.add(coin2124);

        // buy_360
        const buy_360 = this.add.container(610, 330);
        buy_360.scaleX = 0.9;
        buy_360.scaleY = 0.9;
        pg6.add(buy_360);

        // buy800
        const buy800 = this.add.image(33, 15, "catalogs", "buy");
        buy_360.add(buy800);

        // text2117
        const text2117 = this.add.text(0, 0, "", {});
        text2117.text = "0";
        text2117.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_360.add(text2117);

        // coin2117
        const coin2117 = this.add.image(79, 15, "catalogs", "coin");
        coin2117.scaleX = 0.9;
        coin2117.scaleY = 0.9;
        buy_360.add(coin2117);

        // container_6
        const container_6 = this.add.container(311, 330);
        container_6.scaleX = 0.9;
        container_6.scaleY = 0.9;
        pg6.add(container_6);

        // buy2115
        const buy2115 = this.add.image(34, 15, "catalogs", "buy");
        container_6.add(buy2115);

        // text2115
        const text2115 = this.add.text(0, 0, "", {});
        text2115.text = "0";
        text2115.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        container_6.add(text2115);

        // coin2115
        const coin2115 = this.add.image(79, 15, "catalogs", "coin");
        coin2115.scaleX = 0.9;
        coin2115.scaleY = 0.9;
        container_6.add(coin2115);

        // secret926
        const secret926 = this.add.rectangle(228, 293, 40, 40);
        secret926.scaleX = 0.2842551982262872;
        secret926.scaleY = 0.30577828818816355;
        secret926.fillColor = 837887;
        secret926.fillAlpha = 100;
        pg6.add(secret926);

        // secret_5
        const secret_5 = this.add.rectangle(511, 274, 64, 64);
        secret_5.scaleX = 0.2842551982262872;
        secret_5.scaleY = 0.30577828818816355;
        secret_5.fillColor = 837887;
        secret_5.fillAlpha = 100;
        pg6.add(secret_5);

        // secret_6
        const secret_6 = this.add.rectangle(1092, 516, 64, 64);
        secret_6.scaleX = 0.2;
        secret_6.scaleY = 0.2;
        secret_6.fillColor = 837887;
        secret_6.fillAlpha = 100;
        pg6.add(secret_6);

        // secret_7
        const secret_7 = this.add.rectangle(498, 717, 64, 64);
        secret_7.scaleX = 0.2842551982262872;
        secret_7.scaleY = 0.30577828818816355;
        secret_7.fillColor = 837887;
        secret_7.fillAlpha = 100;
        pg6.add(secret_7);

        // secret_4
        const secret_4 = this.add.rectangle(1138, 734, 64, 64);
        secret_4.scaleX = 0.2842551982262872;
        secret_4.scaleY = 0.30577828818816355;
        secret_4.fillColor = 837887;
        secret_4.fillAlpha = 100;
        pg6.add(secret_4);

        // buy_40
        const buy_40 = this.add.container(1247, 740);
        buy_40.scaleX = 0.9;
        buy_40.scaleY = 0.9;
        pg6.add(buy_40);

        // buy_1dwdwads
        const buy_1dwdwads = this.add.image(34, 15, "catalogs", "buy");
        buy_40.add(buy_1dwdwads);

        // coin_1ddddawssss
        const coin_1ddddawssss = this.add.image(79, 15, "catalogs", "coin");
        coin_1ddddawssss.scaleX = 0.9;
        coin_1ddddawssss.scaleY = 0.9;
        buy_40.add(coin_1ddddawssss);

        // text_2ddddds
        const text_2ddddds = this.add.text(0, 0, "", {});
        text_2ddddds.text = "0";
        text_2ddddds.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_40.add(text_2ddddds);

        // buy_41
        const buy_41 = this.add.container(1250, 538);
        buy_41.scaleX = 0.9;
        buy_41.scaleY = 0.9;
        pg6.add(buy_41);

        // buy_1ddwasawdsaaa
        const buy_1ddwasawdsaaa = this.add.image(34, 15, "catalogs", "buy");
        buy_41.add(buy_1ddwasawdsaaa);

        // coin_1aaaaa
        const coin_1aaaaa = this.add.image(79, 15, "catalogs", "coin");
        coin_1aaaaa.scaleX = 0.9;
        coin_1aaaaa.scaleY = 0.9;
        buy_41.add(coin_1aaaaa);

        // text_2aaaaa
        const text_2aaaaa = this.add.text(0, 0, "", {});
        text_2aaaaa.text = "0";
        text_2aaaaa.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_41.add(text_2aaaaa);

        // flip_pg5_back
        const flip_pg5_back = this.add.image(201, 747, "catalogs", "flip");
        pg6.add(flip_pg5_back);

        // flip_pg7
        const flip_pg7 = this.add.image(1318, 747, "catalogs", "flip");
        flip_pg7.flipX = true;
        pg6.add(flip_pg7);

        // secret_29
        const secret_29 = this.add.rectangle(1181, 680, 64, 64);
        secret_29.scaleX = 0.2842551982262872;
        secret_29.scaleY = 0.30577828818816355;
        secret_29.fillColor = 837887;
        secret_29.fillAlpha = 100;
        pg6.add(secret_29);

        // secret_30
        const secret_30 = this.add.rectangle(584, 506, 64, 64);
        secret_30.scaleX = 0.2842551982262872;
        secret_30.scaleY = 0.30577828818816355;
        secret_30.fillColor = 837887;
        secret_30.fillAlpha = 100;
        pg6.add(secret_30);

        // pg7
        const pg7 = this.add.container(0, 0);
        pg7.visible = false;

        // pg
        const pg = this.add.image(0, 0, "oct24furn", "oct24furn3");
        pg.setOrigin(0, 0);
        pg7.add(pg);

        // secret_10
        const secret_10 = this.add.rectangle(221, 629, 64, 64);
        secret_10.scaleX = 0.2842551982262872;
        secret_10.scaleY = 0.30577828818816355;
        secret_10.fillColor = 837887;
        secret_10.fillAlpha = 100;
        pg7.add(secret_10);

        // buy_80
        const buy_80 = this.add.container(1230, 737);
        buy_80.scaleX = 0.9;
        buy_80.scaleY = 0.9;
        pg7.add(buy_80);

        // buy55
        const buy55 = this.add.image(-266, 26, "catalogs", "buy");
        buy_80.add(buy55);

        // text55
        const text55 = this.add.text(-291, 11, "", {});
        text55.text = "0";
        text55.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_80.add(text55);

        // coin55
        const coin55 = this.add.image(-220, 26, "catalogs", "coin");
        coin55.scaleX = 0.9;
        coin55.scaleY = 0.9;
        buy_80.add(coin55);

        // buy_78
        const buy_78 = this.add.container(649, 779);
        buy_78.scaleX = 0.9;
        buy_78.scaleY = 0.9;
        pg7.add(buy_78);

        // buy378w
        const buy378w = this.add.image(-3, -20, "catalogs", "buy");
        buy_78.add(buy378w);

        // text_378w
        const text_378w = this.add.text(-29, -33, "", {});
        text_378w.text = "0";
        text_378w.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_78.add(text_378w);

        // coin_378w
        const coin_378w = this.add.image(44, -20, "catalogs", "coin");
        coin_378w.scaleX = 0.9;
        coin_378w.scaleY = 0.9;
        buy_78.add(coin_378w);

        // container_1
        const container_1 = this.add.container(324, 747);
        container_1.scaleX = 0.9;
        container_1.scaleY = 0.9;
        pg7.add(container_1);

        // buy_8
        const buy_8 = this.add.image(26, 15, "catalogs", "buy");
        container_1.add(buy_8);

        // coin_7
        const coin_7 = this.add.image(71, 15, "catalogs", "coin");
        coin_7.scaleX = 0.9;
        coin_7.scaleY = 0.9;
        container_1.add(coin_7);

        // text_8
        const text_8 = this.add.text(0, 0, "", {});
        text_8.text = "0";
        text_8.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        container_1.add(text_8);

        // buy_101
        const buy_101 = this.add.container(657, 553);
        buy_101.scaleX = 0.9;
        buy_101.scaleY = 0.9;
        pg7.add(buy_101);

        // buy230
        const buy230 = this.add.image(-8, -3, "catalogs", "buy");
        buy_101.add(buy230);

        // text_230
        const text_230 = this.add.text(-34, -17, "", {});
        text_230.text = "0";
        text_230.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_101.add(text_230);

        // coin_230
        const coin_230 = this.add.image(40, -3, "catalogs", "coin");
        coin_230.scaleX = 0.9;
        coin_230.scaleY = 0.9;
        buy_101.add(coin_230);

        // buy_213
        const buy_213 = this.add.container(357, 554);
        buy_213.scaleX = 0.9;
        buy_213.scaleY = 0.9;
        pg7.add(buy_213);

        // buy661
        const buy661 = this.add.image(-10, -4, "catalogs", "buy");
        buy_213.add(buy661);

        // text_661
        const text_661 = this.add.text(-36, -18, "", {});
        text_661.text = "0";
        text_661.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_213.add(text_661);

        // coin_661
        const coin_661 = this.add.image(38, -4, "catalogs", "coin");
        coin_661.scaleX = 0.9;
        coin_661.scaleY = 0.9;
        buy_213.add(coin_661);

        // buy
        const buy = this.add.container(939, 584);
        buy.scaleX = 0.9;
        buy.scaleY = 0.9;
        pg7.add(buy);

        // buy378ww
        const buy378ww = this.add.image(-3, -20, "catalogs", "buy");
        buy.add(buy378ww);

        // text_378ww
        const text_378ww = this.add.text(-29, -33, "", {});
        text_378ww.text = "0";
        text_378ww.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy.add(text_378ww);

        // coin_378ww
        const coin_378ww = this.add.image(44, -20, "catalogs", "coin");
        coin_378ww.scaleX = 0.9;
        coin_378ww.scaleY = 0.9;
        buy.add(coin_378ww);

        // buy_42
        const buy_42 = this.add.container(594, 358);
        buy_42.scaleX = 0.9;
        buy_42.scaleY = 0.9;
        pg7.add(buy_42);

        // buy378d
        const buy378d = this.add.image(-3, -20, "catalogs", "buy");
        buy_42.add(buy378d);

        // text_378d
        const text_378d = this.add.text(-29, -33, "", {});
        text_378d.text = "0";
        text_378d.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_42.add(text_378d);

        // coin_378d
        const coin_378d = this.add.image(44, -20, "catalogs", "coin");
        coin_378d.scaleX = 0.9;
        coin_378d.scaleY = 0.9;
        buy_42.add(coin_378d);

        // buy_43
        const buy_43 = this.add.container(1289, 358);
        buy_43.scaleX = 0.9;
        buy_43.scaleY = 0.9;
        pg7.add(buy_43);

        // buy378dd
        const buy378dd = this.add.image(-3, -20, "catalogs", "buy");
        buy_43.add(buy378dd);

        // text_378dd
        const text_378dd = this.add.text(-29, -33, "", {});
        text_378dd.text = "0";
        text_378dd.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_43.add(text_378dd);

        // coin_378dd
        const coin_378dd = this.add.image(44, -20, "catalogs", "coin");
        coin_378dd.scaleX = 0.9;
        coin_378dd.scaleY = 0.9;
        buy_43.add(coin_378dd);

        // buy_44
        const buy_44 = this.add.container(1289, 569);
        buy_44.scaleX = 0.9;
        buy_44.scaleY = 0.9;
        pg7.add(buy_44);

        // buy378
        const buy378 = this.add.image(-3, -20, "catalogs", "buy");
        buy_44.add(buy378);

        // text_378
        const text_378 = this.add.text(-29, -33, "", {});
        text_378.text = "0";
        text_378.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_44.add(text_378);

        // coin_378
        const coin_378 = this.add.image(44, -20, "catalogs", "coin");
        coin_378.scaleX = 0.9;
        coin_378.scaleY = 0.9;
        buy_44.add(coin_378);

        // buy_45
        const buy_45 = this.add.container(1288, 777);
        buy_45.scaleX = 0.9;
        buy_45.scaleY = 0.9;
        pg7.add(buy_45);

        // buy378ddd
        const buy378ddd = this.add.image(-3, -20, "catalogs", "buy");
        buy_45.add(buy378ddd);

        // text_378ddd
        const text_378ddd = this.add.text(-29, -33, "", {});
        text_378ddd.text = "0";
        text_378ddd.setStyle({ "align": "center", "color": "#683200", "fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        buy_45.add(text_378ddd);

        // coin_378ddd
        const coin_378ddd = this.add.image(44, -20, "catalogs", "coin");
        coin_378ddd.scaleX = 0.9;
        coin_378ddd.scaleY = 0.9;
        buy_45.add(coin_378ddd);

        // flip_pg6_back
        const flip_pg6_back = this.add.image(201, 747, "catalogs", "flip");
        pg7.add(flip_pg6_back);

        // flip_pg8
        const flip_pg8 = this.add.image(1318, 747, "catalogs", "flip");
        flip_pg8.flipX = true;
        pg7.add(flip_pg8);

        // secret_2
        const secret_2 = this.add.rectangle(524, 689, 64, 64);
        secret_2.scaleX = 0.2842551982262872;
        secret_2.scaleY = 0.30577828818816355;
        secret_2.fillColor = 837887;
        secret_2.fillAlpha = 100;
        pg7.add(secret_2);

        // secret_8
        const secret_8 = this.add.rectangle(234, 450, 64, 64);
        secret_8.scaleX = 0.15;
        secret_8.scaleY = 0.15;
        secret_8.fillColor = 837887;
        secret_8.fillAlpha = 100;
        pg7.add(secret_8);

        // secret_9
        const secret_9 = this.add.rectangle(930, 267, 64, 64);
        secret_9.scaleX = 0.2842551982262872;
        secret_9.scaleY = 0.30577828818816355;
        secret_9.fillColor = 837887;
        secret_9.fillAlpha = 100;
        pg7.add(secret_9);

        // secret_11
        const secret_11 = this.add.rectangle(419, 270, 50, 50);
        secret_11.scaleX = 0.2842551982262872;
        secret_11.scaleY = 0.30577828818816355;
        secret_11.fillColor = 837887;
        secret_11.fillAlpha = 100;
        pg7.add(secret_11);

        // secret_23
        const secret_23 = this.add.rectangle(1154, 513, 50, 50);
        secret_23.scaleX = 0.2842551982262872;
        secret_23.scaleY = 0.30577828818816355;
        secret_23.fillColor = 837887;
        secret_23.fillAlpha = 100;
        pg7.add(secret_23);

        // secret_24
        const secret_24 = this.add.rectangle(1169, 304, 50, 50);
        secret_24.scaleX = 0.2842551982262872;
        secret_24.scaleY = 0.30577828818816355;
        secret_24.fillColor = 837887;
        secret_24.fillAlpha = 100;
        pg7.add(secret_24);

        // pg8
        const pg8 = this.add.container(0, 0);
        pg8.visible = false;

        // nov24furnback
        const nov24furnback = this.add.image(0, 0, "nov24furn", "nov24furnback");
        nov24furnback.setOrigin(0, 0);
        pg8.add(nov24furnback);

        // flip_42
        const flip_42 = this.add.image(524, 741, "catalogs", "flip");
        pg8.add(flip_42);

        // x_2
        const x_2 = this.add.image(524, 192, "catalogs", "x");
        x_2.flipX = true;
        pg8.add(x_2);

        // pagex
        const pagex = this.add.sprite(1318, 199, "catalogs", "x");
        pagex.visible = false;

        // wallet
        const wallet = this.add.container(21, 40);
        wallet.visible = false;

        // text
        const text = this.add.text(1132, 872, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "YOUR COINS: 999999";
        text.setStyle({ "align": "center", "fontFamily": "CCFaceFront", "fontSize": "32px", "fontStyle": "bold italic", "stroke": "#000000ff", "strokeThickness":12});
        wallet.add(text);

        // block (components)
        new Interactive(block);

        // x_3 (components)
        const x_3Button = new Button(x_3);
        x_3Button.spriteName = "x";
        x_3Button.callback = () => this.scene.stop();

        // flip_43 (components)
        const flip_43Button = new Button(flip_43);
        flip_43Button.spriteName = "flip";
        flip_43Button.callback = () => this.onPage2Click();

        // buy3w (components)
        const buy3wButton = new Button(buy3w);
        buy3wButton.spriteName = "buy";
        buy3wButton.callback = () => { this.interface.prompt.showFurniture(2258) };

        // text3w (components)
        const text3wFurnitureBuy = new FurnitureBuy(text3w);
        text3wFurnitureBuy.id = 2258;

        // buy3u (components)
        const buy3uButton = new Button(buy3u);
        buy3uButton.spriteName = "buy";
        buy3uButton.callback = () => { this.interface.prompt.showFurniture(2255) };

        // text3u (components)
        const text3uFurnitureBuy = new FurnitureBuy(text3u);
        text3uFurnitureBuy.id = 2255;

        // buy3s (components)
        const buy3sButton = new Button(buy3s);
        buy3sButton.spriteName = "buy";
        buy3sButton.callback = () => { this.interface.prompt.showFurniture(2249) };

        // text3s (components)
        const text3sFurnitureBuy = new FurnitureBuy(text3s);
        text3sFurnitureBuy.id = 2249;

        // buy3r (components)
        const buy3rButton = new Button(buy3r);
        buy3rButton.spriteName = "buy";
        buy3rButton.callback = () => { this.interface.prompt.showFurniture(2261) };

        // text3r (components)
        const text3rFurnitureBuy = new FurnitureBuy(text3r);
        text3rFurnitureBuy.id = 2261;

        // buy3q (components)
        const buy3qButton = new Button(buy3q);
        buy3qButton.spriteName = "buy";
        buy3qButton.callback = () => { this.interface.prompt.showFurniture(2251) };

        // text3q (components)
        const text3qFurnitureBuy = new FurnitureBuy(text3q);
        text3qFurnitureBuy.id = 2251;

        // buy3p (components)
        const buy3pButton = new Button(buy3p);
        buy3pButton.spriteName = "buy";
        buy3pButton.callback = () => { this.interface.prompt.showFurniture(2253) };

        // text3p (components)
        const text3pFurnitureBuy = new FurnitureBuy(text3p);
        text3pFurnitureBuy.id = 2253;

        // buy3o (components)
        const buy3oButton = new Button(buy3o);
        buy3oButton.spriteName = "buy";
        buy3oButton.callback = () => { this.interface.prompt.showFurniture(2259) };

        // text3o (components)
        const text3oFurnitureBuy = new FurnitureBuy(text3o);
        text3oFurnitureBuy.id = 2259;

        // buy3n (components)
        const buy3nButton = new Button(buy3n);
        buy3nButton.spriteName = "buy";
        buy3nButton.callback = () => { this.interface.prompt.showFurniture(2254) };

        // text3n (components)
        const text3nFurnitureBuy = new FurnitureBuy(text3n);
        text3nFurnitureBuy.id = 2254;

        // buy3 (components)
        const buy3Button = new Button(buy3);
        buy3Button.spriteName = "buy";
        buy3Button.callback = () => { this.interface.prompt.showFurniture(2250) };

        // text3 (components)
        const text3FurnitureBuy = new FurnitureBuy(text3);
        text3FurnitureBuy.id = 2250;

        // secret151 (components)
        const secret151SimpleButton = new SimpleButton(secret151);
        secret151SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(2260); };

        // secret46 (components)
        const secret46SimpleButton = new SimpleButton(secret46);
        secret46SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(2257); };

        // secret155 (components)
        const secret155SimpleButton = new SimpleButton(secret155);
        secret155SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(2262); };

        // secret_12 (components)
        const secret_12SimpleButton = new SimpleButton(secret_12);
        secret_12SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(2248); };

        // secret_13 (components)
        const secret_13SimpleButton = new SimpleButton(secret_13);
        secret_13SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(2252); };

        // secret_14 (components)
        const secret_14SimpleButton = new SimpleButton(secret_14);
        secret_14SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(2256); };

        // flip_pg1 (components)
        const flip_pg1Button = new Button(flip_pg1);
        flip_pg1Button.spriteName = "flip";
        flip_pg1Button.callback = () => this.onPage1Click();

        // flip_pg3 (components)
        const flip_pg3Button = new Button(flip_pg3);
        flip_pg3Button.spriteName = "flip";
        flip_pg3Button.callback = () => this.onPage3Click();

        // buy3k (components)
        const buy3kButton = new Button(buy3k);
        buy3kButton.spriteName = "buy";
        buy3kButton.callback = () => { this.interface.prompt.showFurniture(254) };

        // text3k (components)
        const text3kFurnitureBuy = new FurnitureBuy(text3k);
        text3kFurnitureBuy.id = 254;

        // buy3j (components)
        const buy3jButton = new Button(buy3j);
        buy3jButton.spriteName = "buy";
        buy3jButton.callback = () => { this.interface.prompt.showFurniture(168) };

        // text3j (components)
        const text3jFurnitureBuy = new FurnitureBuy(text3j);
        text3jFurnitureBuy.id = 168;

        // buy3h (components)
        const buy3hButton = new Button(buy3h);
        buy3hButton.spriteName = "buy";
        buy3hButton.callback = () => { this.interface.prompt.showFurniture(606) };

        // text3h (components)
        const text3hFurnitureBuy = new FurnitureBuy(text3h);
        text3hFurnitureBuy.id = 606;

        // buy3g (components)
        const buy3gButton = new Button(buy3g);
        buy3gButton.spriteName = "buy";
        buy3gButton.callback = () => { this.interface.prompt.showFurniture(347) };

        // text3g (components)
        const text3gFurnitureBuy = new FurnitureBuy(text3g);
        text3gFurnitureBuy.id = 347;

        // buy3e (components)
        const buy3eButton = new Button(buy3e);
        buy3eButton.spriteName = "buy";
        buy3eButton.callback = () => { this.interface.prompt.showFurniture(351) };

        // text3e (components)
        const text3eFurnitureBuy = new FurnitureBuy(text3e);
        text3eFurnitureBuy.id = 351;

        // buy3d (components)
        const buy3dButton = new Button(buy3d);
        buy3dButton.spriteName = "buy";
        buy3dButton.callback = () => { this.interface.prompt.showFurniture(580) };

        // text3d (components)
        const text3dFurnitureBuy = new FurnitureBuy(text3d);
        text3dFurnitureBuy.id = 580;

        // secret_15 (components)
        const secret_15SimpleButton = new SimpleButton(secret_15);
        secret_15SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(253); };

        // secret_16 (components)
        const secret_16SimpleButton = new SimpleButton(secret_16);
        secret_16SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(583); };

        // secret_17 (components)
        const secret_17SimpleButton = new SimpleButton(secret_17);
        secret_17SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(584); };

        // secret_18 (components)
        const secret_18SimpleButton = new SimpleButton(secret_18);
        secret_18SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(581); };

        // flip_pg2_back (components)
        const flip_pg2_backButton = new Button(flip_pg2_back);
        flip_pg2_backButton.spriteName = "flip";
        flip_pg2_backButton.callback = () => this.onPage2_1Click();

        // flip_pg4 (components)
        const flip_pg4Button = new Button(flip_pg4);
        flip_pg4Button.spriteName = "flip";
        flip_pg4Button.callback = () => this.onPage4Click();

        // buy3a (components)
        const buy3aButton = new Button(buy3a);
        buy3aButton.spriteName = "buy";
        buy3aButton.callback = () => { this.interface.prompt.showFurniture(687) };

        // text3a (components)
        const text3aFurnitureBuy = new FurnitureBuy(text3a);
        text3aFurnitureBuy.id = 687;

        // buy39 (components)
        const buy39Button = new Button(buy39);
        buy39Button.spriteName = "buy";
        buy39Button.callback = () => { this.interface.prompt.showFurniture(344) };

        // text39 (components)
        const text39FurnitureBuy = new FurnitureBuy(text39);
        text39FurnitureBuy.id = 344;

        // buy37 (components)
        const buy37Button = new Button(buy37);
        buy37Button.spriteName = "buy";
        buy37Button.callback = () => { this.interface.prompt.showFurniture(154) };

        // text37 (components)
        const text37FurnitureBuy = new FurnitureBuy(text37);
        text37FurnitureBuy.id = 154;

        // buy36 (components)
        const buy36Button = new Button(buy36);
        buy36Button.spriteName = "buy";
        buy36Button.callback = () => { this.interface.prompt.showFurniture(653) };

        // text36 (components)
        const text36FurnitureBuy = new FurnitureBuy(text36);
        text36FurnitureBuy.id = 653;

        // buy34 (components)
        const buy34Button = new Button(buy34);
        buy34Button.spriteName = "buy";
        buy34Button.callback = () => { this.interface.prompt.showFurniture(650) };

        // text34 (components)
        const text34FurnitureBuy = new FurnitureBuy(text34);
        text34FurnitureBuy.id = 650;

        // buy31 (components)
        const buy31Button = new Button(buy31);
        buy31Button.spriteName = "buy";
        buy31Button.callback = () => { this.interface.prompt.showFurniture(315) };

        // text31 (components)
        const text31FurnitureBuy = new FurnitureBuy(text31);
        text31FurnitureBuy.id = 315;

        // flip_pg3_back (components)
        const flip_pg3_backButton = new Button(flip_pg3_back);
        flip_pg3_backButton.spriteName = "flip";
        flip_pg3_backButton.callback = () => this.onPage3_1Click();

        // flip_pg5 (components)
        const flip_pg5Button = new Button(flip_pg5);
        flip_pg5Button.spriteName = "flip";
        flip_pg5Button.callback = () => this.onPage5Click();

        // secret_21 (components)
        const secret_21SimpleButton = new SimpleButton(secret_21);
        secret_21SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(651); };

        // buy_9 (components)
        const buy_9Button = new Button(buy_9);
        buy_9Button.spriteName = "buy";
        buy_9Button.callback = () => { this.interface.prompt.showFurniture(988) };

        // text_9 (components)
        const text_9FurnitureBuy = new FurnitureBuy(text_9);
        text_9FurnitureBuy.id = 988;

        // buy_9dwada (components)
        const buy_9dwadaButton = new Button(buy_9dwada);
        buy_9dwadaButton.spriteName = "buy";
        buy_9dwadaButton.callback = () => { this.interface.prompt.showFurniture(986) };

        // text_9dwadwadwadd (components)
        const text_9dwadwadwaddFurnitureBuy = new FurnitureBuy(text_9dwadwadwadd);
        text_9dwadwadwaddFurnitureBuy.id = 989;

        // buy_4 (components)
        const buy_4Button = new Button(buy_4);
        buy_4Button.spriteName = "buy";
        buy_4Button.callback = () => { this.interface.prompt.showFurniture(579) };

        // text_4 (components)
        const text_4FurnitureBuy = new FurnitureBuy(text_4);
        text_4FurnitureBuy.id = 579;

        // buy771 (components)
        const buy771Button = new Button(buy771);
        buy771Button.spriteName = "buy";
        buy771Button.callback = () => { this.interface.prompt.showFurniture(2087) };

        // text_771 (components)
        const text_771FurnitureBuy = new FurnitureBuy(text_771);
        text_771FurnitureBuy.id = 2087;

        // buy2149 (components)
        const buy2149Button = new Button(buy2149);
        buy2149Button.spriteName = "buy";
        buy2149Button.callback = () => { this.interface.prompt.showFurniture(643) };

        // text770 (components)
        const text770FurnitureBuy = new FurnitureBuy(text770);
        text770FurnitureBuy.id = 643;

        // buy658 (components)
        const buy658Button = new Button(buy658);
        buy658Button.spriteName = "buy";
        buy658Button.callback = () => { this.interface.prompt.showFurniture(2122) };

        // text908 (components)
        const text908FurnitureBuy = new FurnitureBuy(text908);
        text908FurnitureBuy.id = 2122;

        // buy2090 (components)
        const buy2090Button = new Button(buy2090);
        buy2090Button.spriteName = "buy";
        buy2090Button.callback = () => { this.interface.prompt.showFurniture(2119) };

        // text2090 (components)
        const text2090FurnitureBuy = new FurnitureBuy(text2090);
        text2090FurnitureBuy.id = 2119;

        // buy929 (components)
        const buy929Button = new Button(buy929);
        buy929Button.spriteName = "buy";
        buy929Button.callback = () => { this.interface.prompt.showFurniture(2120) };

        // text929 (components)
        const text929FurnitureBuy = new FurnitureBuy(text929);
        text929FurnitureBuy.id = 2120;

        // buy813 (components)
        const buy813Button = new Button(buy813);
        buy813Button.spriteName = "buy";
        buy813Button.callback = () => { this.interface.prompt.showFurniture(2121) };

        // text813 (components)
        const text813FurnitureBuy = new FurnitureBuy(text813);
        text813FurnitureBuy.id = 2121;

        // buy_7 (components)
        const buy_7Button = new Button(buy_7);
        buy_7Button.spriteName = "buy";
        buy_7Button.callback = () => { this.interface.prompt.showFurniture(2092) };

        // text_7 (components)
        const text_7FurnitureBuy = new FurnitureBuy(text_7);
        text_7FurnitureBuy.id = 2092;

        // secret2151 (components)
        const secret2151SimpleButton = new SimpleButton(secret2151);
        secret2151SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(450); };

        // secret2167 (components)
        const secret2167SimpleButton = new SimpleButton(secret2167);
        secret2167SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(681); };

        // secret (components)
        const secretSimpleButton = new SimpleButton(secret);
        secretSimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(644); };

        // secret_1 (components)
        const secret_1SimpleButton = new SimpleButton(secret_1);
        secret_1SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(913); };

        // secret_3 (components)
        const secret_3SimpleButton = new SimpleButton(secret_3);
        secret_3SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(768); };

        // flip_pg4_back (components)
        const flip_pg4_backButton = new Button(flip_pg4_back);
        flip_pg4_backButton.spriteName = "flip";
        flip_pg4_backButton.callback = () => this.onPage4_1Click();

        // flip_pg6 (components)
        const flip_pg6Button = new Button(flip_pg6);
        flip_pg6Button.spriteName = "flip";
        flip_pg6Button.callback = () => this.onPage6Click();

        // secret_25 (components)
        const secret_25SimpleButton = new SimpleButton(secret_25);
        secret_25SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(914); };

        // secret_26 (components)
        const secret_26SimpleButton = new SimpleButton(secret_26);
        secret_26SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(903); };

        // secret_27 (components)
        const secret_27SimpleButton = new SimpleButton(secret_27);
        secret_27SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(772); };

        // secret_28 (components)
        const secret_28SimpleButton = new SimpleButton(secret_28);
        secret_28SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(2295); };

        // buy586 (components)
        const buy586Button = new Button(buy586);
        buy586Button.spriteName = "buy";
        buy586Button.callback = () => { this.interface.prompt.showFurniture(647) };

        // text_586 (components)
        const text_586FurnitureBuy = new FurnitureBuy(text_586);
        text_586FurnitureBuy.id = 647;

        // buy_1DWADWAdAW (components)
        const buy_1DWADWAdAWButton = new Button(buy_1DWADWAdAW);
        buy_1DWADWAdAWButton.spriteName = "buy";
        buy_1DWADWAdAWButton.callback = () => { this.interface.prompt.showFurniture(116) };

        // text_2dddsawdsa (components)
        const text_2dddsawdsaFurnitureBuy = new FurnitureBuy(text_2dddsawdsa);
        text_2dddsawdsaFurnitureBuy.id = 116;

        // buy587 (components)
        const buy587Button = new Button(buy587);
        buy587Button.spriteName = "buy";
        buy587Button.callback = () => { this.interface.prompt.showFurniture(113) };

        // text587 (components)
        const text587FurnitureBuy = new FurnitureBuy(text587);
        text587FurnitureBuy.id = 113;

        // buy588 (components)
        const buy588Button = new Button(buy588);
        buy588Button.spriteName = "buy";
        buy588Button.callback = () => { this.interface.prompt.showFurniture(765) };

        // text_588 (components)
        const text_588FurnitureBuy = new FurnitureBuy(text_588);
        text_588FurnitureBuy.id = 765;

        // buy_2dwadwad (components)
        const buy_2dwadwadButton = new Button(buy_2dwadwad);
        buy_2dwadwadButton.spriteName = "buy";
        buy_2dwadwadButton.callback = () => { this.interface.prompt.showFurniture(115) };

        // text_3dddaw (components)
        const text_3dddawFurnitureBuy = new FurnitureBuy(text_3dddaw);
        text_3dddawFurnitureBuy.id = 115;

        // buy2124 (components)
        const buy2124Button = new Button(buy2124);
        buy2124Button.spriteName = "buy";
        buy2124Button.callback = () => { this.interface.prompt.showFurniture(111) };

        // text2124 (components)
        const text2124FurnitureBuy = new FurnitureBuy(text2124);
        text2124FurnitureBuy.id = 111;

        // buy800 (components)
        const buy800Button = new Button(buy800);
        buy800Button.spriteName = "buy";
        buy800Button.callback = () => { this.interface.prompt.showFurniture(2113) };

        // text2117 (components)
        const text2117FurnitureBuy = new FurnitureBuy(text2117);
        text2117FurnitureBuy.id = 2113;

        // buy2115 (components)
        const buy2115Button = new Button(buy2115);
        buy2115Button.spriteName = "buy";
        buy2115Button.callback = () => { this.interface.prompt.showFurniture(112) };

        // text2115 (components)
        const text2115FurnitureBuy = new FurnitureBuy(text2115);
        text2115FurnitureBuy.id = 112;

        // secret926 (components)
        const secret926SimpleButton = new SimpleButton(secret926);
        secret926SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(2114); };

        // secret_5 (components)
        const secret_5SimpleButton = new SimpleButton(secret_5);
        secret_5SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(907);};

        // secret_6 (components)
        const secret_6SimpleButton = new SimpleButton(secret_6);
        secret_6SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(773);};

        // secret_7 (components)
        const secret_7SimpleButton = new SimpleButton(secret_7);
        secret_7SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(913);};

        // secret_4 (components)
        const secret_4SimpleButton = new SimpleButton(secret_4);
        secret_4SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(120); };

        // buy_1dwdwads (components)
        const buy_1dwdwadsButton = new Button(buy_1dwdwads);
        buy_1dwdwadsButton.spriteName = "buy";
        buy_1dwdwadsButton.callback = () => { this.interface.prompt.showFurniture(766) };

        // text_2ddddds (components)
        const text_2dddddsFurnitureBuy = new FurnitureBuy(text_2ddddds);
        text_2dddddsFurnitureBuy.id = 766;

        // buy_1ddwasawdsaaa (components)
        const buy_1ddwasawdsaaaButton = new Button(buy_1ddwasawdsaaa);
        buy_1ddwasawdsaaaButton.spriteName = "buy";
        buy_1ddwasawdsaaaButton.callback = () => { this.interface.prompt.showFurniture(646) };

        // text_2aaaaa (components)
        const text_2aaaaaFurnitureBuy = new FurnitureBuy(text_2aaaaa);
        text_2aaaaaFurnitureBuy.id = 646;

        // flip_pg5_back (components)
        const flip_pg5_backButton = new Button(flip_pg5_back);
        flip_pg5_backButton.spriteName = "flip";
        flip_pg5_backButton.callback = () => this.onPage5_1Click();

        // flip_pg7 (components)
        const flip_pg7Button = new Button(flip_pg7);
        flip_pg7Button.spriteName = "flip";
        flip_pg7Button.callback = () => this.onPage7Click();

        // secret_29 (components)
        const secret_29SimpleButton = new SimpleButton(secret_29);
        secret_29SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(2290); };

        // secret_30 (components)
        const secret_30SimpleButton = new SimpleButton(secret_30);
        secret_30SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(902); };

        // secret_10 (components)
        const secret_10SimpleButton = new SimpleButton(secret_10);
        secret_10SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(966); };

        // buy55 (components)
        const buy55Button = new Button(buy55);
        buy55Button.spriteName = "buy";
        buy55Button.callback = () => { this.interface.prompt.showFurniture(455) };

        // text55 (components)
        const text55FurnitureBuy = new FurnitureBuy(text55);
        text55FurnitureBuy.id = 455;

        // buy378w (components)
        const buy378wButton = new Button(buy378w);
        buy378wButton.spriteName = "buy";
        buy378wButton.callback = () => { this.interface.prompt.showFurniture(764) };

        // text_378w (components)
        const text_378wFurnitureBuy = new FurnitureBuy(text_378w);
        text_378wFurnitureBuy.id = 764;

        // buy_8 (components)
        const buy_8Button = new Button(buy_8);
        buy_8Button.spriteName = "buy";
        buy_8Button.callback = () => { this.interface.prompt.showFurniture(119) };

        // text_8 (components)
        const text_8FurnitureBuy = new FurnitureBuy(text_8);
        text_8FurnitureBuy.id = 119;

        // buy230 (components)
        const buy230Button = new Button(buy230);
        buy230Button.spriteName = "buy";
        buy230Button.callback = () => { this.interface.prompt.showFurniture(452) };

        // text_230 (components)
        const text_230FurnitureBuy = new FurnitureBuy(text_230);
        text_230FurnitureBuy.id = 452;

        // buy661 (components)
        const buy661Button = new Button(buy661);
        buy661Button.spriteName = "buy";
        buy661Button.callback = () => { this.interface.prompt.showFurniture(454) };

        // text_661 (components)
        const text_661FurnitureBuy = new FurnitureBuy(text_661);
        text_661FurnitureBuy.id = 454;

        // buy378ww (components)
        const buy378wwButton = new Button(buy378ww);
        buy378wwButton.spriteName = "buy";
        buy378wwButton.callback = () => { this.interface.prompt.showFurniture(654) };

        // text_378ww (components)
        const text_378wwFurnitureBuy = new FurnitureBuy(text_378ww);
        text_378wwFurnitureBuy.id = 654;

        // buy378d (components)
        const buy378dButton = new Button(buy378d);
        buy378dButton.spriteName = "buy";
        buy378dButton.callback = () => { this.interface.prompt.showFurniture(2095) };

        // text_378d (components)
        const text_378dFurnitureBuy = new FurnitureBuy(text_378d);
        text_378dFurnitureBuy.id = 2095;

        // buy378dd (components)
        const buy378ddButton = new Button(buy378dd);
        buy378ddButton.spriteName = "buy";
        buy378ddButton.callback = () => { this.interface.prompt.showFurniture(2085) };

        // text_378dd (components)
        const text_378ddFurnitureBuy = new FurnitureBuy(text_378dd);
        text_378ddFurnitureBuy.id = 2085;

        // buy378 (components)
        const buy378Button = new Button(buy378);
        buy378Button.spriteName = "buy";
        buy378Button.callback = () => { this.interface.prompt.showFurniture(370) };

        // text_378 (components)
        const text_378FurnitureBuy = new FurnitureBuy(text_378);
        text_378FurnitureBuy.id = 370;

        // buy378ddd (components)
        const buy378dddButton = new Button(buy378ddd);
        buy378dddButton.spriteName = "buy";
        buy378dddButton.callback = () => { this.interface.prompt.showFurniture(2103) };

        // text_378ddd (components)
        const text_378dddFurnitureBuy = new FurnitureBuy(text_378ddd);
        text_378dddFurnitureBuy.id = 2103;

        // flip_pg6_back (components)
        const flip_pg6_backButton = new Button(flip_pg6_back);
        flip_pg6_backButton.spriteName = "flip";
        flip_pg6_backButton.callback = () => this.onPage6_1Click();

        // flip_pg8 (components)
        const flip_pg8Button = new Button(flip_pg8);
        flip_pg8Button.spriteName = "flip";
        flip_pg8Button.callback = () => this.onPage8Click();

        // secret_2 (components)
        const secret_2SimpleButton = new SimpleButton(secret_2);
        secret_2SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(2106); };

        // secret_8 (components)
        const secret_8SimpleButton = new SimpleButton(secret_8);
        secret_8SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(453); };

        // secret_9 (components)
        const secret_9SimpleButton = new SimpleButton(secret_9);
        secret_9SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(908); };

        // secret_11 (components)
        const secret_11SimpleButton = new SimpleButton(secret_11);
        secret_11SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(2296); };

        // secret_23 (components)
        const secret_23SimpleButton = new SimpleButton(secret_23);
        secret_23SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(947); };

        // secret_24 (components)
        const secret_24SimpleButton = new SimpleButton(secret_24);
        secret_24SimpleButton.callback = () => { this.interface.prompt.showSecretFurniture(911); };

        // flip_42 (components)
        const flip_42Button = new Button(flip_42);
        flip_42Button.spriteName = "flip";
        flip_42Button.callback = () => this.onPage7_1Click();

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
        this.pagex = pagex;
        this.text = text;
        this.wallet = wallet;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

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
        this.pagex.visible = false
        this.wallet.visible = false
    }

    onPage9Click() {
        this.pg8.visible = false
        this.pg9.visible = true
        this.pagex.visible = false
        this.wallet.visible = false
    }

    onPage10Click() {
        this.pg9.visible = false
        this.pg10.visible = true
        this.pagex.visible = false
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
    }

    onPage15Click() {
        this.pg14.visible = false
        this.pg15.visible = true
        this.wallet.visible = false
        this.pagex.visible = false
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
        this.pagex.visible = true
        this.wallet.visible = true
    }

    onPage8_1Click() {
        this.pg9.visible = false
        this.pg8.visible = true
        this.pagex.visible = true
        this.wallet.visible = true
    }

    onPage9_1Click() {
        this.pg10.visible = false
        this.pg9.visible = true
        this.pagex.visible = true
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
    }

    onPage14_1Click() {
        this.pg15.visible = false
        this.pg14.visible = true
        this.pagex.visible = true
        this.wallet.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
