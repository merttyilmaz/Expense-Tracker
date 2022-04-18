I used Next.js and Tailwind CSS. Next.js has file based routing so no need for a routing mechanism. Project structure is made up of components, context and hooks folders as well as a file called util.js which houses a currencyFormatter function. Component folder houses custom or reusable components. Context folder houses useContext hook and related state and functions. Hook folder houses all my custom hooks. I have only one which is useLocalStorage hook.

----------------------------------------------------------------------------------------------

Hardest thing I did in this project was adding the localStorage hook because Next.js is a server side rendering framework which means that it renders on the server and HTML is sent to the client. Servers don't have localStorage so the workaround for it is that we have to add checks and controls to see if the code is on the server or the client.

----------------------------------------------------------------------------------------------

![image](https://user-images.githubusercontent.com/38688568/163854122-00a621d8-fd07-4700-bb13-af5f7748961d.png)

User has to add an income source first. Then he has to add an expense category like bills or entertainment.

![image](https://user-images.githubusercontent.com/38688568/163855289-4b4127dc-1427-4acf-80af-691be853562b.png)

After adding a expense category you can add an expense to the category by pressing add expense button. Adding expense increases both the related categories and total incomes progress bars.

![image](https://user-images.githubusercontent.com/38688568/163855920-3c56be0b-6600-42ae-a907-54eaae1ca930.png)

Financial Forecast page shows the percantages of incomes and expense categories. Expense Categorieses values(expenses) are made up of the related category. I didn't create a real forecast because it requires minimum of 2 dataset to calculate and suggest things.

----------------------------------------------------------------------------------------------

yarn or npm i to install dependencies. yarn dev or npm run dev to start development build.
