export const sentence = [
	{
		id: 1,
		sentence: 'The quick brown fox jumps over the lazy dog',
		words: [
			{ 'The': 'The (артикль)', known: true },
			{ 'quick': 'тез', known: false },
			{ 'brown': 'күрөң', known: false },
			{ 'fox': 'түлкү', known: true },
			{ 'jumps': 'секирет', known: true },
			{ 'over': 'устунон', known: true },
			{ 'lazy': 'жалкоо', known: false },
			{ 'dog': 'ит', known: true },
		],
		grammar: [
			{ rule: 'Present Simple', isNew: false, pageId: 1 },
			{ rule: 'Present Continues', isNew: true, pageId: 2 }
		]
	},
	{
		id: 2,
		sentence: 'My mom is 45 years old but she looks very young',
		words: [
			{ 'My': 'Менин', known: true },
			{ 'mom': 'апа', known: true },
			{ 'is': 'is (артикль)', known: true },
			{ 'years': 'жыл', known: false },
			{ 'old': 'карыган, эски', known: false },
			{ 'but': 'бирок', known: false },
			{ 'she': 'ал (аял, кыз)', known: false },
			{ 'looks': 'көрүнөт', known: false },
			{ 'very': 'абдан', known: true },
			{ 'young': 'жаш', known: false },
		],
		grammar: [
			{ rule: 'Present Simple', isNew: false, pageId: 1 },
			{ rule: 'Present Continues', isNew: false, pageId: 2 },
			{ rule: 'Present Perfect', isNew: true, pageId: 3 }
		]
	},
	{
		id: 3,
		sentence: 'Although my father is very angry, he has a heart like sugar and everyone knows it.',
		words: [
			{ 'Although': 'болсо да', known: false },
			{ 'my': 'менин', known: true },
			{ 'father': 'ата', known: true },
			{ 'is': 'is (артикль)', known: false },
			{ 'very': 'абдан', known: false },
			{ 'angry': 'ачуулуу', known: false },
			{ 'he': 'ал (бала, эркек)', known: true },
			{ 'has': 'бар', known: false },
			{ 'like': 'ошондой (окшош)', known: false },
			{ 'sugar': 'кант', known: false },
			{ 'and': 'анан (жана)', known: true },
			{ 'everyone': 'баары', known: false },
			{ 'knows': 'билет', known: true }
		],
		grammar: [
			{ rule: 'Present Simple', isNew: false, pageId: 1 },
		]
	},
	{
		id: 4,
		sentence: 'My aunt lives abroad, so we can\'t meet her very often',
		words: [
			{ 'My': 'менин', known: true },
			{ 'aunt': 'жеңе', known: false },
			{ 'lives': 'жашайт', known: false },
			{ 'abroad': 'чет өлкөдө', known: false },
			{ 'so': 'ошондуктан', known: true },
			{ 'we': 'биз', known: false },
			{ 'сan\'t': 'кыла албайбыз', known: true },
			{ 'meet': 'жолугушуу', known: false },
			{ 'her': 'ал (аял, кыз)', known: true },
			{ 'very': 'абдан', known: false },
			{ 'often': 'көп учурда', known: true },
		],
		grammar: [
			{ rule: 'Present Simple', isNew: false, pageId: 1 },
			{ rule: 'Present Continues', isNew: true, pageId: 2 }
		]
	},
	{
		id: 5,
		sentence: 'We made chocolate cake with my little sister today',
		words: [
			{ 'We': 'Биз', known: true },
			{ 'made': 'жасадык', known: false },
			{ 'chocolate': 'шоколад', known: false },
			{ 'cake': 'торт', known: true },
			{ 'with': 'чогуу', known: false },
			{ 'my': 'менин', known: true },
			{ 'little': 'кичи (кичинекей)', known: false },
			{ 'sister': 'эже', known: false },
			{ 'today': 'бугун', known: true },
		],
		grammar: [
			{ rule: 'Present Simple', isNew: false, pageId: 1 },
			{ rule: 'Present Continues', isNew: true, pageId: 2 }
		]
	},
]

