const DATA = [
	{
		id: 1,
		name: "Sports",
		routeName: "/sports",
		topics: [
			{
				id: 1,
				name: "Football",
				imageUrl: "/images/football.jpg",
				questions: [
					{
						id: 1,
						question:
							"Which player scored the fastest hat-trick in the Premier League?",
						option1: "1. Sadio Mane ",
						option2: "2. Ronaldo",
						option3: "3. Rooney",
						option4: "4. Bale",
						correctOption: 1,
					},
					{
						id: 2,
						question:
							"Which team won the first Premier League title?",
						option1: "1. Liverpool",
						option2: "2. Blackburn Rovers",
						option3: "3. Manchester United",
						option4: "4. Chelsea",
						correctOption: 3,
					},
					{
						id: 3,
						question:
							"The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?",
						option1: "1. Roberto Firmino",
						option2: "2. Shane Long",
						option3: "3. Peter Crouch",
						option4: "4. Sergio Aguero",
						correctOption: 2,
					},
					{
						id: 4,
						question: "Which country has won the most World Cups?",
						option1: "1. Germany",
						option2: "2. Brazil",
						option3: "3. France",
						option4: "4. Argentina",
						correctOption: 2,
					},
					{
						id: 5,
						question:
							"The record number of World Cup goals is 16, scored by who?",
						option1: "1. Lionel Messi",
						option2: "2. Cristiano Ronadlo",
						option3: "3. Toni Kroos",
						option4: "4. Miroslav Klose",
						correctOption: 4,
					},
					{
						id: 6,
						question:
							"Which Portuguese team did Ronaldo play for before signing for Manchester United?",
						option1: "1. Sporting Lisbon",
						option2: "2. Real Madrid",
						option3: "3. Malmo",
						option4: "4. PSG",
						correctOption: 1,
					},
					{
						id: 7,
						question:
							"Which German multinational sportswear company is Messi an ambassador for?",
						option1: "1. Nike",
						option2: "2. Puma",
						option3: "3. Adidas",
						option4: "4. New Balance",
						correctOption: 3,
					},
					{
						id: 8,
						question:
							"Ronaldo helped Portugal win the European Championship in which year?",
						option1: "1. 2016",
						option2: "2. 2005",
						option3: "3. 2012",
						option4: "4. 2017",
						correctOption: 1,
					},
					{
						id: 9,
						question:
							"Which club has won the most Champions League titles?",
						option1: "1. Bayern Munich",
						option2: "2. Manchester United",
						option3: "3. Real Madrid",
						option4: "4. AC Milan",
						correctOption: 3,
					},
					{
						id: 10,
						question:
							"In video game FIFA 20, team Piemonte Calcio represents which real-life club?",
						option1: "1. FC Barcelona",
						option2: "2. FC Porto",
						option3: "3. Inter Milan",
						option4: "4. Juventus",
						correctOption: 4,
					},
				],
			},
			{
				id: 2,
				name: "Cricket",
				imageUrl: "/images/cricket.jpg",
			},
			{
				id: 3,
				name: "Basketball",
				imageUrl: "/images/basketball.jpg",
			},
			{
				id: 4,
				name: "Olympics",
				imageUrl: "/images/Olympic.svg",
			},
		],
	},
	{
		id: 2,
		name: "Programming",
		routeName: "/programming",
		topics: [
			{
				id: 1,
				name: "C++",
				imageUrl: "/images/c++.svg",
			},
			{
				id: 2,
				name: "Python",
				imageUrl: "/images/Python.svg",
			},
			{
				id: 3,
				name: "Java",
				imageUrl: "/images/java.svg",
			},
			{
				id: 4,
				name: "CSS",
				imageUrl: "/images/CSS.svg",
			},
			{
				id: 5,
				name: "HTML",
				imageUrl: "/images/HTML.svg",
			},
		],
		// },
		// {
		// 	id: 3,
		// 	name: "Technology",
		// 	routeName: "/technology",
		// 	topics: [
		// 		{
		// 			id: 1,
		// 			name: "Football",
		// 			imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
		// 		},
		// 		{
		// 			id: 2,
		// 			name: "Cricket",
		// 			imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
		// 		},
		// 		{
		// 			id: 3,
		// 			name: "Basketball",
		// 			imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
		// 		},
		// 		{
		// 			id: 4,
		// 			name: "Olympics",
		// 			imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
		// 		},
		// 		{
		// 			id: 5,
		// 			name: "Olympics",
		// 			imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
		// 		},
		// 		{
		// 			id: 6,
		// 			name: "Olympics",
		// 			imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
		// 		},
		// 	],
		// },
		// {
		// 	id: 4,
		// 	name: "Geography",
		// 	routeName: "/geography",
		// 	topics: [
		// 		{
		// 			id: 1,
		// 			name: "Football",
		// 			imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
		// 		},
		// 		{
		// 			id: 2,
		// 			name: "Cricket",
		// 			imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
		// 		},
		// 		{
		// 			id: 3,
		// 			name: "Basketball",
		// 			imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
		// 		},
		// 		{
		// 			id: 4,
		// 			name: "Olympics",
		// 			imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
		// 		},
		// 		{
		// 			id: 5,
		// 			name: "Olympics",
		// 			imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
		// 		},
		// 		{
		// 			id: 6,
		// 			name: "Olympics",
		// 			imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
		// 		},
		// 	],
		// },
		// {
		// 	id: 5,
		// 	name: "History",
		// 	routeName: "/history",
		// 	topics: [
		// 		{
		// 			id: 1,
		// 			name: "Football",
		// 			imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
		// 		},
		// 		{
		// 			id: 2,
		// 			name: "Cricket",
		// 			imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
		// 		},
		// 		{
		// 			id: 3,
		// 			name: "Basketball",
		// 			imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
		// 		},
		// 		{
		// 			id: 4,
		// 			name: "Olympics",
		// 			imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
		// 		},
		// 		{
		// 			id: 5,
		// 			name: "Olympics",
		// 			imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
		// 		},
		// 		{
		// 			id: 6,
		// 			name: "Olympics",
		// 			imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
		// 		},
		// 	],
	},
];

export default DATA;
