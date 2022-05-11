// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }

//CreateMessenger - Lex Env
//createMessenger()
// {
//     'environment record': {
//         'message': ...,
//      'sender': ...,
//      'sendMessage': ...,
//     'setMessage': ...,
//     'setSender'...,
//     },
// 'outherLexicalEnv: global'
// }

//Run - Lex Env
// {
//     'environment record': {
//     },
// 'outherLexicalEnv: global'
// }

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

// if (false) {
//   function sum(a, b) {
//     return a + b;
//   }
// }

// sum(5, 10);

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  console.log(55);

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
// messanger.sendMessage('Ann');

run();
