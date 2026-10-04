(function(){
 const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
 function nav(){return `<nav class="sw-nav"><a href="/city/">Город</a><a href="/sea/">Море</a><a href="/user/">Профиль</a><a href="/ship/">Корабль</a><a href="/shop/">Верфь</a><a href="/market/">Рынок</a><a href="/bank/">Банк</a><a href="/day_prize/">Подарок</a><a href="/settings/">Настройки</a></nav>`}
 function res(){const s=SW_STORE.get();const a=[['money','money.png'],['piastr','piastr.png'],['iron','iron.png'],['pearl','pearl.png'],['crystal','crystal.png'],['key','key.png'],['rum','rum.png'],['hummer','hummer.png']];return `<div class="resources">${a.map(([k,img])=>`<span><img src="${assetUrl('/assets/icons/res/'+img)}"><b>${esc(s[k])}</b></span>`).join('')}</div>`}
 function shell(title,body){document.title=title;document.body.innerHTML=`<div class="sw-wrap"><header class="sw-head"><a class="logo" href="/city/">Пираты</a>${nav()}${res()}</header><main class="sw-main"><div class="crumb">${esc(title)}</div>${body}</main><footer class="sw-foot"><a href="/city/">Город</a> · <a href="/sea/">Пират</a> · Онлайн игра</footer></div>`;bind();}
 function bind(){document.querySelectorAll('[data-action]').forEach(el=>el.addEventListener('click',()=>SW_ACTIONS.run(el.dataset.action,el.dataset.arg||'')));document.querySelectorAll('[data-href]').forEach(el=>el.addEventListener('click',()=>location.href=el.dataset.href));}
 window.SW_UI={esc,res,shell,bind};
})();
