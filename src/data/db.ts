/* 
    This file will contain the payload given from Amazon. It will act as a db for our application
*/

const MovieDB = [
    {
        "_type": "{urn:amazon:catalog:type:title}",
        "urn": "{urn:amazon:catalog:title:bb}",

        "marketplace": "us",
        "release-date": {
            "__type": "datetime",
            "epoch": 1360000000000
        },
        "title": "Batman Begins",

        "contributions": ["{urn:amazon:catalog:movie-contrib:from-wb}",
            "{urn:amazon:catalog:movie-contrib:from-sony}"],
        "views": [{
            "_type": "{urn:amazon:catalog:type:contrib-metadata}",

            "locale": "en-US",
            "title": "Batman Begins",
            "studios": ["Warner Bros"],
            "synopsis": {
                "short-synopsis": "A young Bruce Wayne (Christian Bale) travels to the Far East, where he's trained by Henri Ducard (Liam Neeson), a member of the mysterious League of Shadows. When Ducard reveals the League's sinister true purpose, Wayne returns to Gotham intent on cleaning up the city honorably. With the help of Alfred (Michael Caine), his loyal butler, and others, Batman is born.",
                "_type": {
                    "__type": "urn",
                    "value": "urn:amazon:catalog:type:synopsis"
                },
                "long-synopsis": "A young Bruce Wayne (Christian Bale) travels to the Far East, where he's trained in the martial arts by Henri Ducard (Liam Neeson), a member of the mysterious League of Shadows. When Ducard reveals the League's true purpose -- the complete destruction of Gotham City -- Wayne returns to Gotham intent on cleaning up the city honorably. With the help of Alfred (Michael Caine), his loyal butler, and Lucius Fox (Morgan Freeman), a tech expert at Wayne Enterprises, Batman is born."
            },
            "ratings": [{
                "_type": "{urn:amazon:catalog:type:rating}",
                "scheme": "amazon_maturity_rating",
                "rating": "13+"
            }],
            "writers": ["Bob Kane", "David S. Goyer"],
            "actors": [{
                "_type": "{urn:amazon:catalog:type:actor}",

                "name": "Christian Bale",
                "characters": ["Bruce Wayne", "Batman"]
            }, {
                "_type": "{urn:amazon:catalog:type:actor}",

                "name": "Michael Caine",
                "characters": ["Alfred"]
            }],
            "directors": ["Christopher Nolan"],
            "producers": ["Charles Roven"],
            "creators": ["Bob Kane"]
        }],
        "offers": ["{urn:amazon:catalog:offer:sony-offer}",
            "{urn:amazon:catalog:offer:wb-offer}"],
        "image-url": "http://foo.com/bb.jpg",
        "cover-image-url": "http://foo.com/bb-cover.jpg",
        "hero-image-url": "http://foo.com/bb-hero.jpg",
        "original-language": "en",
        "runtime-in-minutes": 140,
        "genres": ["Action - Superheroes"],
        "asin-master": "BT9S5JYVDC",
        "asin-hdvod": "BT8S5JYVDD",
        "asin-sdvod": "BT7S5JYVDE",
        "asin-hdest": "BT6S5JYVDF",
        "asin-sdest": "BT5S5JYVDG"
    }
];

export default MovieDB;