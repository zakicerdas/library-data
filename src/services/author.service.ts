import  prisma  from "../prisma";
import type { Author } from "../generated/client";

export const getAllAuthor = async (): Promise<Author[]> => {
    return await prisma.author.findMany();
};

export const getAuthorById = async (id: string): Promise<Author> => {
    const author = await prisma.author.findUnique({
        where: { id },
    });
    
    if (!author) {
        throw new Error('Author not found');
    }
    
    return author;
};

export const createAuthor = async (data: { name: string; email: string; }): Promise<Author> => {
    return await prisma.author.create({
        data: {
            name: data.name,
            email: data.email,
        },
    });
};

export const updateAuthor = async (id: string, data: Partial<Author>): Promise<Author> => {
    await getAuthorById(id); 

    return await prisma.author.update({
        where: { id },
        data,
    });
};

export const deleteAuthor = async (id: string): Promise<Author> => {
    await getAuthorById(id); // Cek existance

    return await prisma.author.update({
        where: { id },
        data:{
            deletedAt: new Date()
        }
    });
};

export const searchAuthor = async (name?: string): Promise<Author[]> => {
    let result = await getAllAuthor();
    if (name) {
        result = result.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
    }
    return result;
};