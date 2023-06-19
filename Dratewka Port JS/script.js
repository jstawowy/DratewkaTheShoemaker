window.onload = function() {
    var smok_zyje = true
    var czesci_owcy = 0

    class Miejsce {
        constructor(x, y) {
            this.x = x
            this.y = y
            this.download()
        }
        download() {
            this.opis = data[this.y][this.x].opis
            this.obrazek = data[this.y][this.x].obrazek
            this.kolor = data[this.y][this.x].kolor
            this.kierunki = data[this.y][this.x].mozliwosci.split(', ')
            if (data[this.y][this.x].itemy == undefined)
                this.itemy = []
            else
                this.itemy = data[this.y][this.x].itemy
            if (data[this.y][this.x].zaleznosci == undefined)
                this.zaleznosci = []
            else
                this.zaleznosci = data[this.y][this.x].zaleznosci
        }
        upload() {
            data[this.y][this.x].obrazek = this.obrazek
            data[this.y][this.x].kierunki = this.kierunki
            data[this.y][this.x].itemy = this.itemy
            data[this.y][this.x].zaleznosci = this.zaleznosci
        }
        mozna_isc(kierunek) {
            return this.kierunki.includes(kierunek)
        }
    }
    
    var menu = {
        x: 6,
        y: 3,
        opis: document.getElementById("opis"),
        obrazek: document.getElementById("obrazek"),
        kompas: document.getElementById("kompas"),
        kierunki: document.getElementById("kierunki"),
        itemy: document.getElementById("itemy"),
        plecak: document.getElementById("plecak"),
        item: null,
    
        miejsce: new Miejsce(6, 3),

        do: function(komenda) {
            var argument = komenda.split(' ').slice(1).join(' ')
            var komenda = komenda.split(' ')[0]
            switch (komenda) {
                case 'NORTH': case 'N': case 'SOUTH': case 'S': case 'EAST': case 'E': case 'WEST': case 'W':
                    this.move(komenda)
                    break
                case 'TAKE': case 'T':
                    this.take(argument)
                    break
                case 'DROP': case 'D':
                    this.drop(argument)
                    break
                case 'VOCABULARY': case 'V':
                    this.vocabulary()
                    break
                case 'GOSSIPS': case 'G':
                    this.gossips()
                    break
                case 'USE': case 'U':
                    this.use(argument)
                    break
                default:
                    wyswietl_komunikat("Try another word or V for vocabulary")
            }
            this.miejsce.upload()
            this.miejsce = new Miejsce(this.x, this.y)
            this.wyswietl_wszystko()
        },

        move(direction) {
            switch (direction) {
                case 'N':
                    direction = 'NORTH'
                    break
                case 'S':
                    direction = 'SOUTH'
                    break
                case 'E':
                    direction = 'EAST'
                    break
                case 'W':
                    direction = 'WEST'
                    break
            }
            if (this.x == 1 && this.y == 3&& direction == 'WEST' && smok_zyje) {
                wyswietl_komunikat(["You can't go that way...", "The dragon sleeps in a cave!"])
                return
            }
            if (this.miejsce.mozna_isc(direction)) {
                switch (direction) {
                    case 'NORTH':
                        this.y--
                        break
                    case 'SOUTH':
                        this.y++
                        break
                    case 'EAST':
                        this.x++
                        break
                    case 'WEST':
                        this.x--
                        break
                }
                wyswietl_komunikat("You are going "+direction.toLowerCase()+"...")
            } else
                wyswietl_komunikat("You can't go that way!")
        },
        
        take: function(nazwa) {
            var item = this.miejsce.itemy[this.miejsce.itemy.map(x => x.nazwa).indexOf(nazwa)]
            if (item == undefined) {
                wyswietl_komunikat("There isn't anything like that here")
                return
            }
            if (item.flaga == 0) {
                wyswietl_komunikat("You can't carry it")
                return
            }
            if (this.item != null) {
                wyswietl_komunikat("You are carrying something")
                return
            }
            this.miejsce.itemy.splice(this.miejsce.itemy.indexOf(item), 1)
            this.item = item
            wyswietl_komunikat("You are taking "+item.odmieniona_nazwa)
        },

        drop: function(nazwa) {
            if (this.item == null) {
                wyswietl_komunikat("You are not carrying anything")
                return
            }
            if (this.item.nazwa != nazwa) {
                wyswietl_komunikat("You are not carrying it")
                return
            }
            if (this.miejsce.itemy.filter(x => x.flaga == 1).length >= 3) {
                wyswietl_komunikat("You can't store any more here")
                return
            }
            this.miejsce.itemy.push(this.item)
            wyswietl_komunikat("You are about to drop "+this.item.odmieniona_nazwa)
            this.item = null
        },

        use: function(nazwa) {
            if (this.item == null || this.item.nazwa != nazwa) {
                wyswietl_komunikat("You aren't carrying anything like that")
                return
            }
            if (nazwa == "PRIZE") {
                this.win()
                return
            }
            var dep = this.miejsce.zaleznosci[this.miejsce.zaleznosci.map(x => x.tool.nazwa).indexOf(nazwa)]
            if (dep == undefined || (nazwa == "KNIFE" && smok_zyje)) {
                wyswietl_komunikat("Nothing happened")
                return
            }

            if (dep.l) {
                this.item = null
                this.miejsce.itemy.push(dep.effect)
            } else
                this.item = dep.effect
            if (dep.milestone)
                czesci_owcy++

            var odpowiedz = dep.komunikat.split(' (timeout) ')
            
            if (czesci_owcy >= 6) {
                czesci_owcy = -1
                odpowiedz.push("Your fake sheep is full of poison and ready to be eaten by dragon")
                for (let i=0; i<this.miejsce.itemy.length; i++) {
                    if (this.miejsce.itemy[i].flaga == 0) {
                        this.miejsce.itemy.splice(i, 1)
                        i = -1
                    }
                }
                this.item = {
                    odmieniona_nazwa: "a SHEEP",
                    flaga: 1,
                    nazwa: "SHEEP"
                }
            }
            if (nazwa == "SHEEP") {
                this.miejsce.obrazek = "data/martwy_smok.bmp"
                smok_zyje = false
            }

            wyswietl_komunikat(odpowiedz)
            this.miejsce.zaleznosci.splice(this.miejsce.zaleznosci.indexOf(dep), 1)
        },

        vocabulary: function() {
            var v = document.getElementById("vocabulary")
            var interface = document.getElementById("interface")
            v.style.display = "block"
            interface.style.display = "none"
            setTimeout(() => {
                document.onkeydown = function() {
                    v.style.display = "none"
                    interface.style.display = "block"
                    document.getElementById("input").focus()
                    document.onkeydown = null
                }
            }, 50);
        },

        gossips: function() {
            var g = document.getElementById("gossips")
            var interface = document.getElementById("interface")
            g.style.display = "block"
            interface.style.display = "none"
            setTimeout(() => {
                document.onkeydown = function() {
                    g.style.display = "none"
                    interface.style.display = "block"
                    document.getElementById("input").focus()
                    document.onkeydown = null
                }
            }, 50);
        },

        wyswietl_wszystko: function() {
            this.opis.innerHTML = this.miejsce.opis
            this.obrazek.src = this.miejsce.obrazek
            this.obrazek.style.backgroundColor = this.miejsce.kolor
            this.kompas.src = "data/kompasy/kompas_"+this.miejsce.kierunki.map(x => x[0]).join('_')+".bmp"
            this.kierunki.innerHTML = "You can go "+this.miejsce.kierunki.join(', ')
            if (this.miejsce.itemy.length == 0)
                this.itemy.innerHTML = "You see nothing"
            else
                this.itemy.innerHTML = "You see "+this.miejsce.itemy.map(x => x.odmieniona_nazwa).join(', ')
            if (this.item == null)
                this.plecak.innerHTML = "You are carrying nothing"
            else
                this.plecak.innerHTML = "You are carrying "+this.item.odmieniona_nazwa
        },

        win() {
            game.style.display = "none"
            p.style.display = "block"
            document.getElementById("sztos").style.display = "block"
            p.innerHTML = "VICTORY!"
            hejnal.currentTime = 0
            hejnal.play()
        }
    }
    
    function wyswietl_komunikat(komunikaty) {
        var odpowiedz = document.getElementById("interakcja")
        if (Array.isArray(komunikaty)) {
            for (let i=0; i<komunikaty.length; i++) {
                setTimeout(() => {
                    odpowiedz.innerHTML = komunikaty[i]
                }, i*1500);
            }
            setTimeout(() => {
                odpowiedz.innerHTML = "What now?"
            }, komunikaty.length*1500);
        } else {
            odpowiedz.innerHTML = komunikaty
            setTimeout(() => {
                odpowiedz.innerHTML = "What now?"
            }, 1500);
        }
    }
    var input = document.getElementById("input")
    input.onblur = input.focus
    document.onfocus = input.focus

    var komenda = ''

    input.oninput = function(event) {
        if (komenda.length < event.target.value.length) {
            let newchar = event.target.value[event.target.value.length-1]
            if (newchar.toUpperCase() == newchar)
                newchar = newchar.toLowerCase()
            else
                newchar = newchar.toUpperCase()
            event.target.value = event.target.value.slice(0, event.target.value.length-1)+newchar
            komenda += newchar
        }
        else {
            komenda = event.target.value
        }
        event.target.style.width = komenda.length+'ch'
    }

    input.onkeydown = function(event) {
        if (event.which == 13) { //enter
            menu.do(komenda)
            komenda = ''
            event.target.value = ''
            event.target.style.width = '0px'
        }
    }

    menu.wyswietl_wszystko()

    var hejnal = document.getElementById("hejnal")
    var hello = document.getElementById("hello")
    var opis_a = document.getElementById("opis_a")
    var opis_b = document.getElementById("opis_b")
    var game = document.getElementById("game")
    var p = document.getElementsByTagName("p")[0]
    document.onkeydown = function() {
        hejnal.play()
        p.innerHTML = "Press any key to skip"
        var start = function() {
            start = null
            hejnal.pause()
            hello.style.display = "none"
            opis_a.style.display = "block"
            document.onkeydown = function() {
                opis_a.style.display = "none"
                opis_b.style.display = "block"
                document.onkeydown = function() {
                    opis_b.style.display = "none"
                    game.style.display = "block"
                    p.style.display = "none"
                    input.focus()
                    document.onkeydown = null
                }
            }
        }
        document.onkeydown = start
        hejnal.onended = start
    }
}