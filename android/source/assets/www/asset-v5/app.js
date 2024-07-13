/* 0.5.4 2021-04-23 21:06:13 */
var app = new function () {
    this.name = "Wolfgang", this.version = "5", this.date = "2024", this.folder = "asset-v5/", this.looptime = 6350, this.bpm = 151, this.totalframe = 304, this.nbpolo = 7, this.nbloopbonus = [4], this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 27, this.recminloop = 2, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#000000", this.col0 = "#d9be00", this.col1 = "#d9be00", this.col2 = "#000000", this.col3 = "#6e2e00", this.col4 = "#ffffff", this.animearray = [{
        name: "01_scout",
        color: "82499e",
        uniqsnd: !0
    },
    {
        name: "02_clippor",
        color: "82499e",
        uniqsnd: !0
    },
    {
        name: "03_cl4ym0r3",
        color: "82499e",
        uniqsnd: !0
    },
    {
        name: "04_visarus",
        color: "82499e",
        uniqsnd: !0
    },
    {
        name: "05_dewie",
        color: "82499e",
        uniqsnd: !1
    },
    {
        name: "06_roar",
        color: "DC2A4A",
        uniqsnd: !0
    },
    {
        name: "07_bluerose",
        color: "DC2A4A",
        uniqsnd: !0
    },
    {
        name: "08_lover",
        color: "DC2A4A",
        uniqsnd: !0
    },
    {
        name: "09_barru",
        color: "DC2A4A",
        uniqsnd: !0
    },
    {
        name: "10_bazardg",
        color: "DC2A4A",
        uniqsnd: !1
    },
    {
        name: "11_rick",
        color: "FFD52B",
        uniqsnd: !1
    },
    {
        name: "12_freaker",
        color: "FFD52B",
        uniqsnd: !0
    },
    {
        name: "13_riser",
        color: "FFD52B",
        uniqsnd: !1
    },
    {
        name: "14_sasha",
        color: "FFD52B",
        uniqsnd: !0
    },
    {
        name: "15_cubix",
        color: "FFD52B",
        uniqsnd: !1
    },
    {
        name: "16_jake",
        color: "0A8AC6",
        uniqsnd: !1
    },
    {
        name: "17_drdoctor",
        color: "0A8AC6",
        uniqsnd: !0
    },
    {
        name: "18_yori",
        color: "0A8AC6",
        uniqsnd: !1
    },
    {
        name: "19_resonance",
        color: "0A8AC6",
        uniqsnd: !1
    },
    {
        name: "20_ido",
        color: "0A8AC6",
        uniqsnd: !0
    },
    ], this.bonusarray = [{
        name: "Gray World",
        src: "b1-gray_world-hb.webm",
        code: "2,8,10,12,13",
        sound: "bonus-gray_world",
        aspire: "aspire-gray_world"
    }], this.unlockerarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var s = this.animearray[n].name;
        this.animearray[n].soundA = s + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? s + "_a" : s + "_b", this.animearray[n].anime = s + "-sprite.png", this.animearray[n].animeData = s + ".json"
    }
};