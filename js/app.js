import Store from "./store.js";
import View from"./view.js";


const players = [
  {
    id:1,
    name:"Player 1",
    iconClass:"fa-x",
    colorClass:"turquoise",
  },
  {
    id:2,
    name:"Player 2",
    iconClass:"fa-o",
    colorClass:"yellow",
  },
];

function init() {
  const view = new View();
  const store = new Store('live-t3--storage-key', players); 

  //current tab stage changes
  store.addEventListener('statechange', () => {
    view.render(store.game, store.stats)
  });

  //different tab stage changes
  window.addEventListener('storage', ()=>{
    view.render(store.game, store.stats);
  })

//the first load of the document
view.render(store.game, store.stats);

  view.bindGameResetEvent((event)=>{
    store.reset();
  });

  view.bindNewRoundEvent((event)=>{
    store.newRound();
    });

  view.bindPlayerMoveEvent((square) => {
   const existingMove=store.game.moves.find((move)=>move.squareId === +square.id)
   
   if(existingMove){
    return;
   }
   
   //Advanced to the next state by pushing a move to the moves array
   store.playerMove(+square.id); 

  });


}

 window.addEventListener("load",init);

