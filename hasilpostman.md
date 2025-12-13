CATEGORY:

POST http://localhost:3000/api/v1/categories/:

{
    "success": true,
    "message": "Kategori berhasil ditambahkan",
    "data": {
        "id": "eee53e98-8430-488a-ac6a-f338d7efeeb8",
        "name": "fantasy",
        "createdAt": "2025-12-13T03:02:55.828Z",
        "updatedAt": "2025-12-13T03:02:55.828Z",
        "deletedAt": null
    }
}

{
    "success": true,
    "message": "Kategori berhasil ditambahkan",
    "data": {
        "id": "8240ca34-5554-4ee8-a323-97208e8609d5",
        "name": "gore",
        "createdAt": "2025-12-13T03:05:05.179Z",
        "updatedAt": "2025-12-13T03:05:05.179Z",
        "deletedAt": null
    }
}

{
    "success": true,
    "message": "Kategori berhasil ditambahkan",
    "data": {
        "id": "31fa9fa9-6757-4a68-82e1-c34f8e4cebd0",
        "name": "Romance",
        "createdAt": "2025-12-13T03:05:55.542Z",
        "updatedAt": "2025-12-13T03:05:55.542Z",
        "deletedAt": null
    }
}

PUT http://localhost:3000/api/v1/categories/eee53e98-8430-488a-ac6a-f338d7efeeb8:

{
    "success": true,
    "message": "Kategori berhasil diupdate",
    "data": {
        "id": "eee53e98-8430-488a-ac6a-f338d7efeeb8",
        "name": "School life",
        "createdAt": "2025-12-13T03:02:55.828Z",
        "updatedAt": "2025-12-13T03:08:04.497Z",
        "deletedAt": null
    }
}

GET  http://localhost:3000/api/v1/categories/:

{
    "success": true,
    "message": "Daftar kategori",
    "data": [
        {
            "id": "8240ca34-5554-4ee8-a323-97208e8609d5",
            "name": "gore",
            "createdAt": "2025-12-13T03:05:05.179Z",
            "updatedAt": "2025-12-13T03:05:05.179Z",
            "deletedAt": null
        },
        {
            "id": "31fa9fa9-6757-4a68-82e1-c34f8e4cebd0",
            "name": "Romance",
            "createdAt": "2025-12-13T03:05:55.542Z",
            "updatedAt": "2025-12-13T03:05:55.542Z",
            "deletedAt": null
        },
        {
            "id": "eee53e98-8430-488a-ac6a-f338d7efeeb8",
            "name": "School life",
            "createdAt": "2025-12-13T03:02:55.828Z",
            "updatedAt": "2025-12-13T03:08:04.497Z",
            "deletedAt": null
        }
    ]
}

GET  http://localhost:3000/api/v1/categories/8240ca34-5554-4ee8-a323-97208e8609d5:

{
    "success": true,
    "message": "Kategori ditemukan",
    "data": {
        "id": "8240ca34-5554-4ee8-a323-97208e8609d5",
        "name": "gore",
        "createdAt": "2025-12-13T03:05:05.179Z",
        "updatedAt": "2025-12-13T03:05:05.179Z",
        "deletedAt": null
    }
}

http://localhost:3000/api/v1/categories/search?name=Romance:

{
    "success": true,
    "message": "Hasil pencarian",
    "data": [
        {
            "id": "31fa9fa9-6757-4a68-82e1-c34f8e4cebd0",
            "name": "Romance",
            "createdAt": "2025-12-13T03:05:55.542Z",
            "updatedAt": "2025-12-13T03:05:55.542Z",
            "deletedAt": null
        }
    ]
}

DELETE http://localhost:3000/api/v1/categories/31fa9fa9-6757-4a68-82e1-c34f8e4cebd0:

{
    "success": true,
    "message": "Kategori berhasil dihapus",
    "data": {
        "id": "31fa9fa9-6757-4a68-82e1-c34f8e4cebd0",
        "name": "Romance",
        "createdAt": "2025-12-13T03:05:55.542Z",
        "updatedAt": "2025-12-13T03:34:33.501Z",
        "deletedAt": "2025-12-13T03:34:33.470Z"
    }
}

AUTHOR: 

POST http://localhost:3000/api/v1/author/:

{
    "success": true,
    "message": "author berhasil ditambahkan",
    "data": {
        "id": "304bbac9-4e46-40e8-b070-18a6ccf24530",
        "name": "Ryukishi07",
        "email": "Ryukishi07@gmail.com",
        "createdAt": "2025-12-13T03:38:12.986Z",
        "updatedAt": "2025-12-13T03:38:12.986Z",
        "deletedAt": null
    }
}

{
    "success": true,
    "message": "author berhasil ditambahkan",
    "data": {
        "id": "677760b9-1856-4cf0-b086-689c90ea0493",
        "name": "HERO",
        "email": "HERO@gmail.com",
        "createdAt": "2025-12-13T03:40:28.053Z",
        "updatedAt": "2025-12-13T03:40:28.053Z",
        "deletedAt": null
    }
}

{
    "success": true,
    "message": "author berhasil ditambahkan",
    "data": {
        "id": "8fc0b54b-3aa0-43e8-9587-4aa0c4852c8e",
        "name": "masashi kishimoto",
        "email": "masashi@gmail.com",
        "createdAt": "2025-12-13T03:41:58.606Z",
        "updatedAt": "2025-12-13T03:41:58.606Z",
        "deletedAt": null
    }
}

GET http://localhost:3000/api/v1/author/:

{
    "success": true,
    "message": "Daftar author",
    "data": [
        {
            "id": "304bbac9-4e46-40e8-b070-18a6ccf24530",
            "name": "Ryukishi07",
            "email": "Ryukishi07@gmail.com",
            "createdAt": "2025-12-13T03:38:12.986Z",
            "updatedAt": "2025-12-13T03:38:12.986Z",
            "deletedAt": null
        },
        {
            "id": "677760b9-1856-4cf0-b086-689c90ea0493",
            "name": "HERO",
            "email": "HERO@gmail.com",
            "createdAt": "2025-12-13T03:40:28.053Z",
            "updatedAt": "2025-12-13T03:40:28.053Z",
            "deletedAt": null
        },
        {
            "id": "8fc0b54b-3aa0-43e8-9587-4aa0c4852c8e",
            "name": "masashi kishimoto",
            "email": "masashi@gmail.com",
            "createdAt": "2025-12-13T03:41:58.606Z",
            "updatedAt": "2025-12-13T03:41:58.606Z",
            "deletedAt": null
        }
    ]
}

GET http://localhost:3000/api/v1/author/8fc0b54b-3aa0-43e8-9587-4aa0c4852c8e:

{
    "success": true,
    "message": "author ditemukan",
    "data": {
        "id": "8fc0b54b-3aa0-43e8-9587-4aa0c4852c8e",
        "name": "masashi kishimoto",
        "email": "masashi@gmail.com",
        "createdAt": "2025-12-13T03:41:58.606Z",
        "updatedAt": "2025-12-13T03:41:58.606Z",
        "deletedAt": null
    }
}

PUT  http://localhost:3000/api/v1/author/8fc0b54b-3aa0-43e8-9587-4aa0c4852c8e:

{
    "success": true,
    "message": "author berhasil diupdate",
    "data": {
        "id": "8fc0b54b-3aa0-43e8-9587-4aa0c4852c8e",
        "name": "tatsuki fujimoto",
        "email": "fujimoto@gmail.com",
        "createdAt": "2025-12-13T03:41:58.606Z",
        "updatedAt": "2025-12-13T03:46:19.073Z",
        "deletedAt": null
    }
}

GET http://localhost:3000/api/v1/author/search?name=ryukishi07:

{
    "success": true,
    "message": "Hasil pencarian",
    "data": [
        {
            "id": "304bbac9-4e46-40e8-b070-18a6ccf24530",
            "name": "Ryukishi07",
            "email": "Ryukishi07@gmail.com",
            "createdAt": "2025-12-13T03:38:12.986Z",
            "updatedAt": "2025-12-13T03:38:12.986Z",
            "deletedAt": null
        }
    ]
}

DELETE http://localhost:3000/api/v1/author/304bbac9-4e46-40e8-b070-18a6ccf24530:

{
    "success": true,
    "message": "author berhasil dihapus",
    "data": {
        "id": "304bbac9-4e46-40e8-b070-18a6ccf24530",
        "name": "Ryukishi07",
        "email": "Ryukishi07@gmail.com",
        "createdAt": "2025-12-13T03:38:12.986Z",
        "updatedAt": "2025-12-13T03:52:18.829Z",
        "deletedAt": "2025-12-13T03:52:18.827Z"
    }
}

PRODUCTS:

 POST http://localhost:3000/api/v1/products/:

 {
    "success": true,
    "message": "Produk berhasil ditambahkan",
    "data": {
        "id": "f31751c8-76ed-48a2-82b4-779ae8237ce1",
        "name": "chainsaw man volume 1",
        "description": "seorang pria bernama denji yang mendapatkan kekuatan untuk berubah menjadi iblis gergaji",
        "price": "15",
        "stock": 23,
        "categoryId": null,
        "authorId": null,
        "createdAt": "2025-12-13T06:33:21.301Z",
        "updatedAt": "2025-12-13T06:33:21.301Z",
        "deletedAt": null
    }
}

{
    "success": true,
    "message": "Produk berhasil ditambahkan",
    "data": {
        "id": "36b97a17-2426-4d67-a856-54ed35b9e1b9",
        "name": "horimiya volume 1",
        "description": "kisah romansa SMA tentang Kyoko Hori, siswi populer yang di rumah menjadi pengurus rumah tangga, dan Izumi Miyamura, siswa pendiam yang di luar sekolah ternyata punya tindikan dan tato, serta sifat lembut; saat rahasia mereka terungkap, keduanya menjadi dekat dan saling jatuh cinta, mengungkap sisi diri mereka yang tersembunyi dan membangun hubungan yang manis dan realistis, bukan hanya tentang mereka berdua tapi juga teman-teman sekelas mereka.",
        "price": "10",
        "stock": 13,
        "categoryId": "eee53e98-8430-488a-ac6a-f338d7efeeb8",
        "authorId": "677760b9-1856-4cf0-b086-689c90ea0493",
        "createdAt": "2025-12-13T06:41:52.770Z",
        "updatedAt": "2025-12-13T06:41:52.770Z",
        "deletedAt": null
    }
}

GET http://localhost:3000/api/v1/products/:

{
    "success": true,
    "message": "Daftar produk",
    "data": [
        {
            "id": "f31751c8-76ed-48a2-82b4-779ae8237ce1",
            "name": "chainsaw man volume 1",
            "description": "seorang pria bernama denji yang mendapatkan kekuatan untuk berubah menjadi iblis gergaji",
            "price": "15",
            "stock": 23,
            "categoryId": "8240ca34-5554-4ee8-a323-97208e8609d5",
            "authorId": "8fc0b54b-3aa0-43e8-9587-4aa0c4852c8e",
            "createdAt": "2025-12-13T06:33:21.301Z",
            "updatedAt": "2025-12-13T06:37:36.768Z",
            "deletedAt": null,
            "category": {
                "id": "8240ca34-5554-4ee8-a323-97208e8609d5",
                "name": "gore",
                "createdAt": "2025-12-13T03:05:05.179Z",
                "updatedAt": "2025-12-13T03:05:05.179Z",
                "deletedAt": null
            },
            "author": {
                "id": "8fc0b54b-3aa0-43e8-9587-4aa0c4852c8e",
                "name": "tatsuki fujimoto",
                "email": "fujimoto@gmail.com",
                "createdAt": "2025-12-13T03:41:58.606Z",
                "updatedAt": "2025-12-13T03:46:19.073Z",
                "deletedAt": null
            }
        },
        {
            "id": "36b97a17-2426-4d67-a856-54ed35b9e1b9",
            "name": "horimiya volume 1",
            "description": "kisah romansa SMA tentang Kyoko Hori, siswi populer yang di rumah menjadi pengurus rumah tangga, dan Izumi Miyamura, siswa pendiam yang di luar sekolah ternyata punya tindikan dan tato, serta sifat lembut; saat rahasia mereka terungkap, keduanya menjadi dekat dan saling jatuh cinta, mengungkap sisi diri mereka yang tersembunyi dan membangun hubungan yang manis dan realistis, bukan hanya tentang mereka berdua tapi juga teman-teman sekelas mereka.",
            "price": "10",
            "stock": 13,
            "categoryId": "eee53e98-8430-488a-ac6a-f338d7efeeb8",
            "authorId": "677760b9-1856-4cf0-b086-689c90ea0493",
            "createdAt": "2025-12-13T06:41:52.770Z",
            "updatedAt": "2025-12-13T06:41:52.770Z",
            "deletedAt": null,
            "category": {
                "id": "eee53e98-8430-488a-ac6a-f338d7efeeb8",
                "name": "School life",
                "createdAt": "2025-12-13T03:02:55.828Z",
                "updatedAt": "2025-12-13T03:08:04.497Z",
                "deletedAt": null
            },
            "author": {
                "id": "677760b9-1856-4cf0-b086-689c90ea0493",
                "name": "HERO",
                "email": "HERO@gmail.com",
                "createdAt": "2025-12-13T03:40:28.053Z",
                "updatedAt": "2025-12-13T03:40:28.053Z",
                "deletedAt": null
            }
        }
    ]
}


PUT http://localhost:3000/api/v1/products/f31751c8-76ed-48a2-82b4-779ae8237ce1:

{
    "success": true,
    "message": "Produk berhasil diupdate",
    "data": {
        "id": "f31751c8-76ed-48a2-82b4-779ae8237ce1",
        "name": "chainsaw man volume 1",
        "description": "seorang pria bernama denji yang mendapatkan kekuatan untuk berubah menjadi iblis gergaji",
        "price": "15",
        "stock": 23,
        "categoryId": "8240ca34-5554-4ee8-a323-97208e8609d5",
        "authorId": "8fc0b54b-3aa0-43e8-9587-4aa0c4852c8e",
        "createdAt": "2025-12-13T06:33:21.301Z",
        "updatedAt": "2025-12-13T06:37:36.768Z",
        "deletedAt": null
    }
}

GET  http://localhost:3000/api/v1/products/f31751c8-76ed-48a2-82b4-779ae8237ce1:

{
    "success": true,
    "message": "Produk ditemukan",
    "data": {
        "id": "f31751c8-76ed-48a2-82b4-779ae8237ce1",
        "name": "chainsaw man volume 1",
        "description": "seorang pria bernama denji yang mendapatkan kekuatan untuk berubah menjadi iblis gergaji",
        "price": "15",
        "stock": 23,
        "categoryId": "8240ca34-5554-4ee8-a323-97208e8609d5",
        "authorId": "8fc0b54b-3aa0-43e8-9587-4aa0c4852c8e",
        "createdAt": "2025-12-13T06:33:21.301Z",
        "updatedAt": "2025-12-13T06:37:36.768Z",
        "deletedAt": null
    }
}

GET http://localhost:3000/api/v1/products/search?name=horimiya:

{
    "success": true,
    "message": "Hasil pencarian",
    "data": [
        {
            "id": "36b97a17-2426-4d67-a856-54ed35b9e1b9",
            "name": "horimiya volume 1",
            "description": "kisah romansa SMA tentang Kyoko Hori, siswi populer yang di rumah menjadi pengurus rumah tangga, dan Izumi Miyamura, siswa pendiam yang di luar sekolah ternyata punya tindikan dan tato, serta sifat lembut; saat rahasia mereka terungkap, keduanya menjadi dekat dan saling jatuh cinta, mengungkap sisi diri mereka yang tersembunyi dan membangun hubungan yang manis dan realistis, bukan hanya tentang mereka berdua tapi juga teman-teman sekelas mereka.",
            "price": "10",
            "stock": 13,
            "categoryId": "eee53e98-8430-488a-ac6a-f338d7efeeb8",
            "authorId": "677760b9-1856-4cf0-b086-689c90ea0493",
            "createdAt": "2025-12-13T06:41:52.770Z",
            "updatedAt": "2025-12-13T06:41:52.770Z",
            "deletedAt": null,
            "category": {
                "id": "eee53e98-8430-488a-ac6a-f338d7efeeb8",
                "name": "School life",
                "createdAt": "2025-12-13T03:02:55.828Z",
                "updatedAt": "2025-12-13T03:08:04.497Z",
                "deletedAt": null
            },
            "author": {
                "id": "677760b9-1856-4cf0-b086-689c90ea0493",
                "name": "HERO",
                "email": "HERO@gmail.com",
                "createdAt": "2025-12-13T03:40:28.053Z",
                "updatedAt": "2025-12-13T03:40:28.053Z",
                "deletedAt": null
            }
        }
    ]
}

DELETE http://localhost:3000/api/v1/products/f31751c8-76ed-48a2-82b4-779ae8237ce1:

{
    "success": true,
    "message": "Produk berhasil dihapus",
    "data": {
        "id": "f31751c8-76ed-48a2-82b4-779ae8237ce1",
        "name": "chainsaw man volume 1",
        "description": "seorang pria bernama denji yang mendapatkan kekuatan untuk berubah menjadi iblis gergaji",
        "price": "15",
        "stock": 23,
        "categoryId": "8240ca34-5554-4ee8-a323-97208e8609d5",
        "authorId": "8fc0b54b-3aa0-43e8-9587-4aa0c4852c8e",
        "createdAt": "2025-12-13T06:33:21.301Z",
        "updatedAt": "2025-12-13T06:47:14.159Z",
        "deletedAt": "2025-12-13T06:47:14.153Z"
    }
}

