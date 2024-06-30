import prisma from "@/prisma/prisma";

export async function getExpense() {
  return await prisma.expense.findMany();
}
export async function createExpense(data: { amount: number; title: string }) {
  return await prisma.expense.create({
    data,
  });
}
