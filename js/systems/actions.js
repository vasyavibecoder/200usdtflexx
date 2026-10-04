(function(){
 function render(){SW_ROUTER.render()}
 const A={
  claim(){const s=SW_STORE.get();if(s.dailyClaimed)return; s.money+=250;s.dailyClaimed=true;SW_STORE.save(s);render()},
  heal(){const s=SW_STORE.get();if(s.money<20)return alert('Недостаточно золота');s.money-=20;s.hp=s.maxHp;SW_STORE.save(s);render()},
  fire(){SW_SEA.fire()},
  board(){SW_SEA.board()},
  invis(){const s=SW_STORE.get();s.invisible=!s.invisible;SW_STORE.save(s);render()},
  logout(){SW_STORE.reset();location.href='/';},
  reset(){if(confirm('Сбросить локальный прогресс?')){SW_STORE.reset();render()}},
  buy(item){const s=SW_STORE.get();const price=Number(item)||100;if(s.money<price)return alert('Недостаточно золота');s.money-=price;s.xp+=5;SW_STORE.save(s);render()},
  sell(item){const s=SW_STORE.get();const price=Number(item)||50;s.money+=price;SW_STORE.save(s);render()},
  bank(item){const s=SW_STORE.get();const n=Math.max(0,Number(item)||100);if(s.money<n)return alert('Недостаточно золота');s.money-=n;s.goldBank+=n;SW_STORE.save(s);render()},
  xp(){const s=SW_STORE.get();s.xp+=25;if(s.xp>=100){s.xp-=100;s.level++}SW_STORE.save(s);render()}
 };
 window.SW_ACTIONS={run(a,arg){(A[a]||(()=>alert('Действие пока не определено: '+a)) (arg))}};
})();
