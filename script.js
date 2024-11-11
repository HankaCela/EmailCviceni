const formalGoodbye = (name) => {
  return 'S uctivou poklonou, ' + name;
};

// Funkce pro neformální pozdrav
const rudeGoodbye = (name) => {
  return 'Se měj, ' + name;
};

// Funkce pro generování běžného pozdravu
const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

// Funkce pro vyplnění předmětu emailu
const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

// Funkce pro vyplnění těla emailu, nyní bere i pozdravovou funkci
const fillBody = (body, name, goodbyeFunction) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML += body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodbyeFunction(name); // Použití pozdravové funkce
};

// Příklad použití s formálním pozdravem
fillSubject('Obchodní sdělení');
fillBody(
  'Kupte mycí prostředek, který vám vytře zrak, se slevou 50 %.', 
  'Jan Čistý', 
  formalGoodbye
);

// Příklad použití s neformálním pozdravem
fillSubject('Pozvánka na oslavu narozenin');
fillBody('Zítra oslava. 18:00 ve Starý hospodě.', 'Patrik Veselý', rudeGoodbye);