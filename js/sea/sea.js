(function(){
 let enemy={hp:120,maxHp:120,attack:14};
 function fire(){const s=SW_STORE.get();const dmg=10+Math.floor(Math.random()*16);enemy.hp=Math.max(0,enemy.hp-dmg);s.gunpowder=Math.min(s.gunpowderMax,s.gunpowder+1);if(enemy.hp===0){s.money+=150;s.xp+=20;enemy={hp:120,maxHp:120,attack:14}}else{s.hp=Math.max(0,s.hp-enemy.attack)}SW_STORE.save(s);SW_ROUTER.render()}
 function board(){const s=SW_STORE.get();if(enemy.hp<=0){s.money+=75;s.xp+=10}else{s.hp=Math.max(0,s.hp-5);s.money+=50;s.xp+=5}SW_STORE.save(s);SW_ROUTER.render()}
 function state(){return enemy}
 window.SW_SEA={fire,board,state};
})();
