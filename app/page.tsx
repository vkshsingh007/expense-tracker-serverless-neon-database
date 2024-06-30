import { getExpense } from "./api/expense";
import NewExpenseForm from "./components/new-expense-form";

export default async function Home() {
  //fetch expenses
  const expenses = await getExpense();
  return (
    <section className="py-8 md:py-24 flex justify-center">
      <div className="w-full md:w-5/6 border-2 border-red-600 border-dotted p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold">Expense Tracker</h1>
        <h2 className="text-zinc-500 mt-2 md:mt-4">
          Using Neon: ServerLess Postgress
        </h2>

        <div className="mt-8 md:flex md:items-start md:justify-between md:gap-10">
          <div className="w-full md:w-2/3">
            <h3 className="text-xl md:text-2xl font-bold">Items</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {expenses.map((expense) => (
                <li key={expense.id} className="flex justify-between">
                  <span>{expense.title}</span>
                  <span>{expense.amount}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 md:mt-0 w-full md:w-1/3">
            <NewExpenseForm />
          </div>
        </div>
      </div>
    </section>
  );
}
