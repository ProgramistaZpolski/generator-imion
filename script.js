"use strict";

let count = 0;

const data = {
	"pl": {
		"names": [
			"Marian",
			"Jan",
			"Piotr",
			"Mariusz",
			"Kuba",
			"Bartłomiej",
			"Szymon",
			"Hubert",
			"Maksymilian",
			"Adam",
			"Adrian",
			"Antoni",
			"Artur",
			"Bolesław",
			"Damian",
			"Dawid",
			"Dominik",
			"Emil",
			"Filip",
			"Kamil",
			"Kacper"
		],
		"surnames": [
			"Wiśniewski",
			"Wójcik",
			"Nowak",
			"Kowalski",
			"Kamiński",
			"Lewandowski",
			"Zieliński",
			"Piotrowski",
			"Szymański"
		]
	},
	"en": {
		"names": [
			"Felix",
			"Leo",
			"Jackson",
			"Walter",
			"Lincoln",
			"Benjamin",
			"Daniel",
			"Ehtan",
			"Henry",
			"Harry",
			"Jack",
			"Jacob",
			"Logan", // Paul
			"Greg",
			"James",
			"Oliver"
		],
		"surnames": [
			"Smith",
			"Clark",
			"Roberts",
			"Willson",
			"Scott",
			"Cook",
			"Jones",
			"Williams",
			"Walker"
		]
	},
	"de": {
		"names": [
			"Albrecht",
			"Alois",
			"Bernd",
			"Birgit",
			"Eugen",
			"Franz",
			"Gerhard",
			"Hans",
			"Jakob",
			"Jörg",
			"Karl",
			"Karsten",
			"Achim",
			"Dieter",
			"Egon",
			"Gandolf"
		],
		"surnames": [
			"Müller",
			"Schmidt",
			"Schneider",
			"Fischer",
			"Weber",
			"Meyer",
			"Schulz",
			"Becker",
			"Koch",
			"Klein",
			"Hoffman"
		]
	},
	"jp": {
		"names": [
			"Ren",
			"Minato",
			"Taishi",
			"Hiroto",
			"Daito",
			"Akito",
			"Haruto", // naruto run
			"Yuuma", // czemu mi sie to skojarzyło z roomba
			"Miki",
			"Itsuki",
			"Izuki",
			"Asahi",
			"Chiyo",
			"Ryuto",
			"Rento" // rento  rent   rent a car
		],
		"surnames": [
			"Satō",
			"Suzuki", // Suzuki Ignis Hybrid with Dual Camera Brake Support 
			"Takahashi",
			"Tanaka",
			"Watanabe",
			"Itō",
			"Nakamura",
			"Kobayashi",
			"Kobayashi",
			"Katō",
			"Yoshida" // toshiba
		]
	}
};

function gen(country, kukank) {
	count++;
	if (count === 10) { // dodałem japoński tylko po to żeby to zrobić
		document.querySelector("[data-kukanq]").innerText = "Kukanqowy";
	} else if (count === 20) {
		document.querySelector("[data-kukanq]").innerText = "Pankozowy";
	};
	const a = data[country];
	const h = a.names[Math.floor(Math.random() * a.names.length)] + " " + a.surnames[Math.floor(Math.random() * a.surnames.length)];
	if (kukank) {
		document.querySelector("p").innerText = `${h} to kasztan`;
	} else {
		document.querySelector("p").innerText = `${h}`;
	};
};