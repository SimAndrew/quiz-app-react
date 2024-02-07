## Quiz App React

---

### About:

A Quiz React application built with React. Contains 15 questions, for each correct answer you get points, for each wrong answer you get nothing. At the end of the quiz, you can view the statistics of the points received for the answers and the high score functionality. 

The application fetches questions from `src/questions.json` deployed on [my-json-server.typicode.com](https://my-json-server.typicode.com/) .

You can try here: [quizz-reactjs-app.netlify.app](https://quizz-reactjs-app.netlify.app/)

---

### Sample task, photo:

- Right answer

![image](https://github.com/SimAndrew/quiz-app-react/assets/44125451/0a56f68f-c1de-491a-8889-3d12ca49e3dd)

- Wrong answer

![image](https://github.com/SimAndrew/quiz-app-react/assets/44125451/537b8ab5-198e-4fb2-816f-e5bc6d8c3c44)

- Finish the quiz. View total score

![image](https://github.com/SimAndrew/quiz-app-react/assets/44125451/8dd6851c-d6f0-457e-ae68-d6b3626c711c)

- src/questions.json contain 15 questions

```
{
  "questions": [
    {
    "question": "Which is the most popular JavaScript framework?",
    "options": ["Angular", "React", "Svelte", "Vue"],
    "correctOption": 1,
    "points": 10
    },
  ]
}
```

---

### Technologies:

- [React JS](https://react.dev/)
- [Vite JS](https://vitejs.dev/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- [Deploy src/questions.json on My JSON Server](https://my-json-server.typicode.com/SimAndrew/quiz-app-react/questions)
- [my-json-server.typicode.com](https://my-json-server.typicode.com/)
- [Deploying on Netlify](https://www.netlify.com/)

---

### Run the app:

- Clone a project: `git clone`

```
https://github.com/SimAndrew/quiz-app-react.git
```

- Open project code in your editor.
- Install the dependencies, enter into the terminal:

```
npm install
```

- Run the project, enter into the terminal:

```
npm run dev
```

- To run `src/questions.json` on `localhost:8000/questions` edit `src/components/App.jsx`

```
useEffect(function () {
// From My my-json-server.typicode.com :
		fetch(
			'https://my-json-server.typicode.com/SimAndrew/quiz-app-react/questions',
		)
// To:
		fetch('http://localhost:8000/questions')

			.then((res) => res.json())
			.then((data) => dispatch({ type: 'dataReceived', payload: data }))
			.catch((err) => dispatch({ type: 'dataFailed' }));
}, []);

```

- To run enter into the terminal:

```
npx json-server --watch src/questions.json --port 8000
```
