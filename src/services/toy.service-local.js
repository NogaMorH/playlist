import { storageService } from "./async-storage.service"

export const toyService = {
    query,
    getById,
    remove,
    save
}

const STORAGE_KEY = 'toys'
const gDefaultToys = [
    {
        "_id": "t101",
        "name": "Talking Doll",
        "price": 123,
        "labels": [
            "Doll",
            "Battery Powered",
            "Baby"
        ],
        "createdAt": 1631031801011,
        "inStock": true
    },
    {
        "_id": "t102",
        "name": "Car",
        "price": 70,
        "labels": [
            "On wheels",
            "Battery Powered"
        ],
        "createdAt": 1631031801023,
        "inStock": false
    },
    {
        "_id": "t103",
        "name": "Lego",
        "price": 90,
        "labels": [
            "Box game",
            "Puzzle"
        ],
        "createdAt": 1631031801031,
        "inStock": true
    },
    {
        "_id": "t104",
        "name": "Cowboy doll",
        "price": 50,
        "labels": [
            "Doll",
            "Battery Powered"
        ],
        "createdAt": 1631031801019,
        "inStock": false
    },
    {
        "_id": "t105",
        "name": "Puzzle",
        "price": 90,
        "labels": [
            "Box game",
            "Puzzle"
        ],
        "createdAt": 1631031801010,
        "inStock": true
    }
]

function query() {
    return storageService.query(STORAGE_KEY)
        .then(toys => {
            // if (!toys || !toys.length) {
            //     httpService.postMany(STORAGE_KEY, gDefaultToys)
            //     toys = gDefaultToys
            // }
            return toys
        })
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        toy.createdAt = Date.now()
        toy.inStock = true
        return storageService.post(STORAGE_KEY, toy)
    }
}