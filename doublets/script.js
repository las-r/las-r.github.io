// Doublets script

// Constants
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const selectedWords = document.getElementById("selectedWords");
const words = [
    "ace", "act", "add", "ado", "ads", "age", "aid", "aim", "air", "ale", "all", "and", "ant", "any", "ape", "apt", "arc", "are", "ark", "arm", "art", "ash", "ask", "ate",
    "awe", "axe", "bad", "bag", "ban", "bar", "bat", "bay", "bed", "bee", "beg", "bet", "bid", "big", "bin", "bit", "bob", "bog", "boo", "bow", "box", "boy", "bud", "bug",
    "bum", "bun", "bus", "but", "buy", "bye", "cab", "can", "cap", "car", "cat", "cob", "cod", "cog", "con", "cop", "cow", "cry", "cub", "cue", "cup", "cut", "dad", "dam",
    "day", "den", "dew", "did", "die", "dig", "dim", "dip", "dog", "dot", "dry", "dub", "due", "dug", "dye", "ear", "eat", "ebb", "egg", "ego", "elf", "elk", "elm", "end",
    "era", "eve", "eye", "fab", "fan", "far", "fat", "fax", "fee", "few", "fig", "fin", "fit", "fix", "fly", "foe", "fog", "for", "fox", "fry", "fun", "fur", "gag", "gap",
    "gas", "gel", "gem", "get", "gig", "gin", "god", "got", "gum", "gun", "gut", "guy", "gym", "had", "ham", "has", "hat", "hay", "hem", "hen", "her", "hey", "hid", "him",
    "hip", "his", "hit", "hog", "hop", "hot", "how", "hub", "hue", "hug", "hum", "hut", "ice", "icy", "ill", "ink", "inn", "ion", "ire", "ivy", "jab", "jam", "jar", "jaw",
    "jay", "jet", "jew", "job", "jog", "joy", "jug", "jun", "kay", "key", "kid", "kin", "kit", "lab", "lad", "lag", "lap", "law", "lay", "led", "leg", "let", "lid", "lie",
    "lip", "lit", "log", "lot", "low", "mad", "man", "map", "mat", "may", "men", "met", "mix", "mob", "mod", "mom", "mop", "mud", "mug", "nab", "nap", "net", "new", "nod",
    "not", "now", "nun", "nut", "oak", "odd", "off", "oil", "old", "one", "orb", "ore", "our", "out", "owl", "own", "pad", "pal", "pan", "par", "pat", "paw", "pay", "pea",
    "pen", "pet", "pig", "pin", "pit", "pod", "pop", "pot", "pro", "pub", "pup", "put", "rad", "rag", "ram", "ran", "rap", "rat", "raw", "ray", "red", "rib", "rid", "rig",
    "rim", "rip", "rob", "rod", "rot", "row", "rub", "rug", "rum", "run", "rye", "sad", "sag", "saw", "say", "sea", "see", "set", "sew", "she", "shy", "sin", "sip", "sir",
    "sit", "six", "ski", "sky", "sly", "sob", "son", "sow", "soy", "spa", "spy", "sub", "sue", "sum", "sun", "tab", "tag", "tan", "tap", "tar", "tax", "tea", "ten", "the",
    "tie", "tin", "tip", "toe", "ton", "too", "top", "toy", "try", "tub", "two", "use", "van", "vex", "via", "vie", "vow", "wad", "wag", "war", "was", "wax",
    "way", "web", "wed", "wee", "wet", "who", "why", "wig", "win", "wit", "woe", "won", "woo", "wow", "wry", "yak", "yam", "yap", "yes", "yet", "you", "zip", "zoo", "fap",
    "dab", "dap", "hag", "abs", "gay", "nip", "cot", "bot", "ail", "amp", "ass", "ave", "awl", "awn", "baa", "bib", "bio", "bop", "bra", "brr", "bum", "cad", "cam", "caw",
    "chi", "coo", "cos", "coy", "dab", "dal", "dam", "dee", "def", "dip", "doe", "dol", "duo", "ebb", "eel", "emu", "eon",, "fad", "fag", "fay",
    "fib", "fir", "flu", "fob", "fro", "gal", "gee", "gnu", "goo", "goy", "hah", "haw", "hay", "heh", "hem", "hep", "hex", "hie", "hip", "hob", "hod", "hoe", "hon", "hop",
    "hos", "hum", "hut", "ilk", "imp", "ink", "ins", "jab", "jig", "jot", "jut", "keg", "ken", "kip", "koi", "lax", "lea", "lee", "lei", "leo", "lib", "lob", "lop", "lot",
    "lox", "lug", "lye", "maw", "meg", "meh", "mem", "mew", "mid", "mim", "moa", "moo", "mow", "nag", "nah", "nay", "neb", "neg", "nib", "nil", "nix", "nob", "nog", "noo",
    "nor", "oil", "oke", "ole", "oms", "one", "oof", "ooh", "oot", "ops", "opt", "orb", "orc", "ova", "owl", "own", "pac", "pap", "pax", "pee",
    "peg", "pep", "per", "phi", "pip", "pis", "pit", "ply", "poi", "poo", "pop", "pox", "psi", "pug", "pun", "pup", "pus", "qua", "rad", "rag", "raj", "ram", "rap", "ras",
    "rat", "raw", "rex", "rib", "rid", "rip", "rob", "roc", "roe", "rom", "rot", "row", "rub", "rue", "rug", "rum", "rut", "rye", "sac", "sap", "sat", "sax",
    "scr", "sec", "see", "sen", "seq", "sew", "sex", "shy", "sic", "sim", "sin", "sip", "sir", "sis", "sit", "six", "ski", "sly", "sob", "sod", "sol", "sop", "sow",
    "soy", "spa", "sty", "sue", "sup", "tab", "tad", "tag", "tam", "tan", "tao", "tap", "tar", "tat", "taw", "tax", "tea", "tee", "ten", "tic", "til", "tin", "tip", "tod",
    "toe", "tog", "tom", "ton", "too", "top", "tor", "tot", "tow", "toy", "try", "tub", "tug", "tui", "tun", "tup", "tut", "two", "ugh", "uke", "ump", "uni", "ups", "urn",
    "use", "van", "vat", "vee", "vet", "vex", "via", "vie", "vim", "voe", "vow", "wad", "wag", "wan", "wap", "war", "was", "wax", "way", "web", "wed", "wee", "wen", "wet",
    "wha", "who", "why", "wig", "win", "wis", "wit", "woe", "wok", "won", "woo", "wow", "wry", "wye", "yen", "yep", "yes", "yet", "yew", "yip", "yob", "yok",
    "you", "yow", "yuk", "yum", "zag", "zap", "zed", "zee", "zen", "zig", "zip", "zit", "zoo", "lua", "cum", "tac", "ill", "bod", "ted", "yin", "pew"
];

// Variables
let targetWord = words[(Math.floor(Math.random() * words.length))];
let currentWord = words[(Math.floor(Math.random() * words.length))];
let selectedLetter;

// Functions
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function flashLetter() {
    if (selectedLetter) {
        let selectedElement = document.getElementById("l" + selectedLetter);

        selectedElement.style.borderColor = "#777";
        await wait(500);
        selectedElement.style.borderColor = "#000";
        await wait(500); 
    }
}

// Check if both words are the same
while (targetWord == currentWord) {
    currentWord = words[(Math.floor(Math.random() * words.length))];
}

// Display words
selectedWords.innerHTML = "<b>" + currentWord + "</b> - <b>" + targetWord + "</b>";
l1.innerHTML = "<h3>" + currentWord[0] + "</h3>";
l2.innerHTML = "<h3>" + currentWord[1] + "</h3>";
l3.innerHTML = "<h3>" + currentWord[2] + "</h3>";

// Change selected letter
window.addEventListener("keypress", (event) => {
    if (selectedLetter) {
        let selectedButton = document.getElementById("l" + selectedLetter);

        if ("qwertyuiopasdfghjklzxcvbnm".includes(event.key)) {
            let oldWord = currentWord;

            currentWord = currentWord.split("");
            currentWord[selectedLetter - 1] = event.key;
            currentWord = currentWord.join("");
            if (words.includes(currentWord)) {
                selectedButton.innerHTML = "<h3>" + event.key + "</h3>";
            }
            else {
                currentWord = oldWord;
            }

            selectedButton.style.borderColor = "#000"
            selectedLetter = null;

            if (currentWord == targetWord) {
                l1.style.pointerEvents = "none";
            l2.style.pointerEvents = "none";
            l3.style.pointerEvents = "none";

                selectedWords.innerHTML = "you win"
            }
        }
    }
});

// Flash selected letter
setInterval(flashLetter, 1000)