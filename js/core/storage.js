(function(){
 const KEY='seawar_reconstruction_final';
 const defaults={login:'jsjdjsdjs',password:'',sex:1,level:1,xp:0,money:1750,piastr:0,iron:0,pearl:0,crystal:0,key:0,rum:0,hummer:0,hp:400,maxHp:400,power:24,defense:20,speed:28,maneuver:0,repair:0,goldBank:0,piastrBank:0,dailyClaimed:false,invisible:false,gunpowder:0,gunpowderMax:70,quests:0,labels:0,skills:0,trophies:0,profession:'',ship:'Стартовый корабль',shipDurability:100,crew:'',chat:[],mail:[]};
 function get(){try{return Object.assign({},defaults,JSON.parse(localStorage.getItem(KEY)||'{}'));}catch(e){return Object.assign({},defaults)}}
 function save(s){localStorage.setItem(KEY,JSON.stringify(s));return s}
 function reset(){localStorage.removeItem(KEY);return get()}
 window.SW_STORE={KEY,defaults,get,save,reset};
})();
