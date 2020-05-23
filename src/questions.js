import cleaning from './cleaning.png';
import cooking from './cookingma.png';
import hoarder from './hoarder.png';
import messy from './messy.png';
import perfect from './perfect.png';
const quizQuestions = [
  {
    question:
      'When you see a bag of chips laying on the table opened, what do you do?',
    answers: [
      {
        type: 'Obsessive Cleaner',
        content: 'Seal the bag and put them in the cabinet',
      },
      {
        type: 'Chef',
        content: 'Eat them with a special dip you made out of quarantine foods',
      },
      {
        type: 'Hoarder',
        content:
          "Leave it, it's not going anywhere. You're not going anywhere!",
      },
    ],
  },
  {
    question:
      'When you see a 2 for 1 special for toilet paper, but you already have 16 rolls at home, you...',
    answers: [
      {
        type: 'Obsessive Cleaner',
        content:
          'Ignore it, you rather grab some lysol and get the heck out of there!',
      },
      {
        type: 'Chef',
        content:
          'Replace the toilet paper with some instant coffee and make dalgona',
      },
      {
        type: 'Hoarder',
        content:
          'Buy it! In fact, buy an additional. You just never know in these times! ',
      },
    ],
  },
  {
    question: 'Which of these images resembles your life?',
    answers: [
      {
        type: 'Obsessive Cleaner',
        content: cleaning,
      },
      {
        type: 'Chef',
        content: cooking,
      },
      {
        type: 'Hoarder',
        content: hoarder,
      },
    ],
  },
  {
    question: 'Which of these images describes your handwriting?',
    answers: [
      {
        type: ['Obsessive Cleaner, Hoarder'],
        content: perfect,
      },
      {
        type: 'Chef',
        content: messy,
      },
    ],
  },
];

export default quizQuestions;
