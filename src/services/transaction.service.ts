import prisma  from "../prisma";

export const checkout = async (userId: string, items: { productId: string; quantity: number }[]) => {
  return await prisma.$transaction(async (tx) => {
    let total = 0;
    const transactionItemsData = [];

    for (const item of items) {
      const product = await tx.product.findUnique({
        where: { id: item.productId }
      });

      if (!product) {
        throw new Error(`Product ID ${item.productId} not found`);
      }

      if (product.stock < item.quantity) {
        throw new Error(`Insufficient stock for product ${product.name}`);
      }

      const currentPrice = Number(product.price);
      total += currentPrice * item.quantity;

      transactionItemsData.push({
        productId: item.productId,
        quantity: item.quantity,
        priceAtTime: product.price 
      });

      await tx.product.update({
        where: { id: item.productId },
        data: { stock: { decrement: item.quantity } }
      });
    }

  
    const newTransaction = await tx.transaction.create({
      data: {
        userId,
        total,
        items: {
          create: transactionItemsData 
        }
      },
      include: {
        items: {
          include: { product: true } 
        }
      }
    });

    return newTransaction;
  });
};

export const getTransactionById = async (id: string) => {
  return await prisma.transaction.findUnique({
    where: { id },
    include: {
      user: true, // Ambil data user
      items: {    // Ambil data items
        include: {
          product: true // Di dalam item, ambil data produknya (Nested Include)
        }
      }
    }
  });
};

export const getAllTransactions = async () => {
  return await prisma.transaction.findMany({
    include: {
      user: true,
      items: {
        include: {
          product: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
};