GET http://localhost:5000/:

{
    "message": "Halo pemilik API Key: 12345! selamat datang library data simple",
    "waktu_proses": "0ms"
}

GET http://localhost:5000/api/products:

{
    "success": true,
    "message": "product list",
    "data": [
        {
            "id": 1,
            "name": "Re:Zero -Starting Life in Another World- Volume 1",
            "price": 12.99,
            "description": "A story about a boy transported to a fantasy world, who discovers he has the power to return from death.",
            "category": "Isekai",
            "stock": 25
        },
        {
            "id": 2,
            "name": "Sword Art Online: Aincrad",
            "price": 14.5,
            "description": "Players become trapped in a virtual reality MMORPG, where death in the game means death in real life.",
            "category": "Virtual Reality",
            "stock": 18
        },
        {
            "id": 3,
            "name": "The Rising of the Shield Hero Volume 1",
            "price": 13.25,
            "description": "A young man is summoned as one of four legendary heroes, only to be betrayed and must rise from the lowest station.",
            "category": "Fantasy",
            "stock": 15
        },
        {
            "id": 4,
            "name": "Classroom of the Elite Volume 1",
            "price": 11.99,
            "description": "A seemingly average student navigates the intricate social hierarchies and secret competition of a prestigious high school.",
            "category": "Psychological",
            "stock": 22
        },
        {
            "id": 5,
            "name": "That Time I Got Reincarnated as a Slime Volume 1",
            "price": 12.75,
            "description": "A corporate worker is reincarnated as a slime in a fantasy world, gaining unique powers and building a nation of monsters.",
            "category": "Isekai",
            "stock": 30
        },
        {
            "id": 6,
            "name": "Spice and Wolf Volume 1",
            "price": 16,
            "description": "A traveling merchant forms an unlikely partnership with a wise wolf deity in the form of a young girl.",
            "category": "Fantasy Romance",
            "stock": 12
        },
        {
            "id": 7,
            "name": "Overlord Volume 1: The Undead King",
            "price": 13.99,
            "description": "A player decides to stay in a virtual game world as his powerful overlord character after it shuts down.",
            "category": "Dark Fantasy",
            "stock": 20
        },
        {
            "id": 8,
            "name": "My Youth Romantic Comedy Is Wrong, As I Expected Volume 1",
            "price": 11.5,
            "description": "A cynical high school loner is forced to join a club that helps students with their problems.",
            "category": "Romantic Comedy",
            "stock": 28
        }
    ]
}

GET http://localhost:5000/api/products/1:

{
    "success": true,
    "message": "Product founded",
    "data": {
        "id": 1,
        "name": "Re:Zero -Starting Life in Another World- Volume 1",
        "price": 12.99,
        "description": "A story about a boy transported to a fantasy world, who discovers he has the power to return from death.",
        "category": "Isekai",
        "stock": 25
    }
}

GET http://localhost:5000/api/search?name=sword:
GET http://localhost:5000/api/search?category=virtual reality:

{
    "success": true,
    "message": "search results",
    "data": [
        {
            "id": 2,
            "name": "Sword Art Online: Aincrad",
            "price": 14.5,
            "description": "Players become trapped in a virtual reality MMORPG, where death in the game means death in real life.",
            "category": "Virtual Reality",
            "stock": 18
        }
    ]
}

GET http://localhost:5000/api/search?name=Re:Zero&sortBy=name&sortOrder=asc:

{
    "success": true,
    "message": "search results",
    "data": [
        {
            "id": 1,
            "name": "Re:Zero -Starting Life in Another World- Volume 1",
            "price": 12.99,
            "description": "A story about a boy transported to a fantasy world, who discovers he has the power to return from death.",
            "category": "Isekai",
            "stock": 25
        }
    ]
}

GET http://localhost:5000/api/search?category=Isekai&sortBy=price&sortOrder=asc:

{
    "success": true,
    "message": "search results",
    "data": [
        {
            "id": 5,
            "name": "That Time I Got Reincarnated as a Slime Volume 1",
            "price": 12.75,
            "description": "A corporate worker is reincarnated as a slime in a fantasy world, gaining unique powers and building a nation of monsters.",
            "category": "Isekai",
            "stock": 30
        },
        {
            "id": 1,
            "name": "Re:Zero -Starting Life in Another World- Volume 1",
            "price": 12.99,
            "description": "A story about a boy transported to a fantasy world, who discovers he has the power to return from death.",
            "category": "Isekai",
            "stock": 25
        }
    ]
}

POST http://localhost:5000/api/products:

{
    "success": true,
    "message": "Product created succesfully",
    "data": {
        "id": 9,
        "name": "The Angel Next Door Spoils Me Rotten Volume 1",
        "price": 15,
        "description": "The story about Amane Fujimiya, a solitary high school student, who unexpectedly becomes close to the school angel, Mahiru Shiina, who turns out to be living in the apartment next door.",
        "category": "Romantic comedy",
        "stock": 12
    }
}

PUT http://localhost:5000/api/products/9:

{
    "success": true,
    "message": "Product update succesfully",
    "data": {
        "id": 9,
        "name": "The Angel Next Door Spoils Me Rotten Volume 1",
        "price": 15,
        "description": "The story about Amane Fujimiya, a solitary high school student, who unexpectedly becomes close to the school angel, Mahiru Shiina, who turns out to be living in the apartment next door.",
        "category": "Romantic comedy",
        "stock": 20
    }
}

DELETE http://localhost:5000/api/products/9:

{
    "success": true,
    "message": "Product deleted succesfully"
}

