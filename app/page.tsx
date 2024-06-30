import { getExpense } from "./api/expense";
import NewExpenseForm from "./components/new-expense-form";

export default async function Home() {
  //fetch expenses
  const expenses = await getExpense();
  return (
    <section className="py-24 flex justify-center ">
      <div className="w-5/6 border-2 border-red-600 border-dotted">
        <h1 className="text-3xl ml-5 font-bold">Expense Tracker</h1>
        <h1 className="text-zinc-500  ml-5">
          Using Neon: ServerLess Postgress
        </h1>

        <div className="w-4/6 ml-52 mt-8 flex items-start justify-between gap-10">
          <div className="grow">
            <h3 className="text-xl font-bold">Items</h3>
            <ul className="mt-4 flex flex-col gap-1">
              {expenses.map((expense) => (
                <li key={expense.id} className="flex justify-between">
                  <span>{expense.title}</span>
                  <span>{expense.amount}</span>
                </li>
              ))}
            </ul>
          </div>
          <NewExpenseForm />
        </div>
      </div>
    </section>
  );
}
