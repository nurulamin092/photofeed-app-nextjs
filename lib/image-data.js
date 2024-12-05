const photos = [
    {
        id: "94a7e01b-8576-4d18-8b84-6ae588db02d9",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1733103373160-003dc53ccdba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=53",
            name: "Alex B",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "de05d078-6f6d-4272-a08f-5a805a23aba4",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1538998073820-4dfa76300194?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zmxvd2VyfGVufDB8fDB8fHww",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=54",
            name: "Brian Xelo",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "8265198d-e2e1-4221-addc-8244f39fdd62",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=55",
            name: "Ceza Des",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "6cf6c10d-8ba8-46d7-b246-0e1fd5e270df",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1518024289781-effedb9d938d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyJTIwZ3JhZGVufGVufDB8fDB8fHww",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=56",
            name: "Karim Bulletin",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "a7f14fb2-9b2d-43bb-98af-6c70158e9c55",
        title: "The White Warmth",
        url: "https://images.unsplash.com/photo-1603356954332-3c3b9f13ce8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlciUyMGdyYWRlbnxlbnwwfHwwfHx8MA%3D%3D",
        tags: ["nature", "flower", "green"],
        views: "6M",
        share: "2.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=57",
            name: "Madan PA",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 120
        },
        likes: 80
    },
    {
        id: "6bea51c4-1123-425f-90c9-9148724872e5",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1678756716523-460282e59ba3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlciUyMGdyYWRlbnxlbnwwfHwwfHx8MA%3D%3D",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=58",
            name: "Moina Lam",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "02983ddd-338d-4382-b0c8-316caa21b4a5",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1603356954332-3c3b9f13ce8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlciUyMGdyYWRlbnxlbnwwfHwwfHx8MA%3D%3D",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=59",
            name: "Nat B",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "552f7d8d-d9eb-4edc-98a9-cec20c90d90c",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1505714583924-07c06cc475b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlZXxlbnwwfHwwfHx8MA%3D%3D",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=60",
            name: "Taral X",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1540289917366-db90f08d2397?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=61",
            name: "Zhoom B",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "9761a3ea-2c2c-4b6e-a618-a6e4d26cf729",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=62",
            name: "T Manhattan",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "154ca3f8-07ec-464f-9eac-6775ec37bba1",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1517554558809-9b4971b38f39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=63",
            name: "Abhinash Chahal",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "9e396ae7-9ae4-4fec-86e3-4fc52c73b73a",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1542127186-6e67e7d5316f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=64",
            name: "Cyrun X",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "ddd5975e-d728-4e68-98d1-3b961ab9c18e",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1733227152851-908b8dfe6602?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=65",
            name: "Matas Currian",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 420
        },
        likes: 100
    },
    {
        id: "dcbada31-fa30-4c25-9721-b46b1e6a8d6f",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1595522115181-964a1c59baa3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VlfGVufDB8fDB8fHww",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=66",
            name: "Somani Dal",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    },
    {
        id: "f536658e-a274-431f-843d-34116dcc1b7e",
        title: "The Beautiful Nature",
        url: "https://images.unsplash.com/photo-1595522115181-964a1c59baa3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VlfGVufDB8fDB8fHww",
        tags: ["nature", "river", "ocean"],
        views: "10M",
        share: "4.56M",
        uploaded: "2024-01-31",
        author: {
            avatar: "https://i.pravatar.cc/150?img=67",
            name: "Tom Holla",
            bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
            followers: 220
        },
        likes: 100
    }
];



const getAllPhotos = () => {
    return photos.map(({ id, title, url }) => ({
        id,
        title,
        url,
    }));
};
const getPhotosById = (id) => {
    return photos.find(photo => photo.id === id)
}


export {
    getAllPhotos, getPhotosById
}