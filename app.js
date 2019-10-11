const mySiema = new Siema({
  duration: 250,
  loop: true
});

// listen for keydown event
setInterval(() => mySiema.next(), 2000);
