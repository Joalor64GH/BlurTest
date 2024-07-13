/* 0.5.4 2021-04-23 21:06:13 */
var app = new function () {
    this.name = "Xrun", this.version = "2", this.date = "2022", this.folder = "asset-v2/", this.looptime = 6957, this.bpm = 138, this.totalframe = 338, this.nbpolo = 7, this.nbloopbonus = 6, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 23, this.recminloop = 3, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#210210", this.col0 = "#863D38", this.col1 = "#762C29", this.col2 = "#662024", this.col3 = "#49101A", this.col4 = "#3FOC19", this.animearray = [{
        name: "1_kick",
        color: "775A39",
        uniqsnd: !0
    }, {
        name: "2_sparrow",
        color: "775A39",
        uniqsnd: !0
    }, {
        name: "3_woodpeckers",
        color: "775A39",
        uniqsnd: !0
    }, {
        name: "4_crab",
        color: "775A39",
        uniqsnd: !0
    }, {
        name: "5_drummer",
        color: "775A39",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "445242",
        uniqsnd: !1
    }, {
        name: "7_xagone",
        color: "445242",
        uniqsnd: !1
    }, {
        name: "8_bubbels",
        color: "445242",
        uniqsnd: !0
    }, {
        name: "9_dou",
        color: "445242",
        uniqsnd: !1
    }, {
        name: "10_elk",
        color: "445242",
        uniqsnd: !0
    }, {
        name: "11_sticlafluier",
        color: "36484D",
        uniqsnd: !1
    }, {
        name: "12_eyewatch",
        color: "36484D",
        uniqsnd: !1
    }, {
        name: "13_harmo",
        color: "36484D",
        uniqsnd: !1
    }, {
        name: "14_pearl",
        color: "36484D",
        uniqsnd: !1
    }, {
        name: "15_brass",
        color: "36484D",
        uniqsnd: !1
    }, {
        name: "16_capitan",
        color: "762C29",
        uniqsnd: !1
    }, {
        name: "17_ahoy",
        color: "762C29",
        uniqsnd: !0
    }, {
        name: "18_choir",
        color: "762C29",
        uniqsnd: !1
    }, {
        name: "19_tragic",
        color: "762C29",
        uniqsnd: !1
    }, {
        name: "20_siren",
        color: "762C29",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "The Lost",
        src: "c2-b1-lost-hb.webm",
        code: "1,2,6,12,16",
        sound: "bonus-lost",
        aspire: "aspire"
    }, {
        name: "Tragic",
        src: "c2-b2-tragic-hb.webm",
        code: "2,5,7,15,19",
        sound: "bonus-tragic",
        aspire: "aspire-tragic"
    }, {
        name: "Trauma",
        src: "c2-b3-trauma-hb.webm",
        code: "6,10,13,18,20",
        sound: "bonus-trauma",
        aspire: "aspire"
    }], this.unlockerarray = [];
    for (var e = 0, n = this.animearray.length; e < n; e++) {
        var o = this.animearray[e].name;
        this.animearray[e].soundA = o + "_a", this.animearray[e].soundB = this.animearray[e].uniqsnd ? o + "_a" : o + "_b", this.animearray[e].anime = o + "-sprite.png", this.animearray[e].animeData = o + ".json"
    }
};