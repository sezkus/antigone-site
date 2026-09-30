(function(){
  var b=document.body, tr=document.getElementById('btn-tr'), en=document.getElementById('btn-en');
  function set(l){b.classList.toggle('en',l==='en');document.documentElement.setAttribute('data-lang',l);tr.setAttribute('aria-pressed',l==='tr');en.setAttribute('aria-pressed',l==='en');try{localStorage.setItem('antigone-lang',l)}catch(e){}}
  var l='tr';try{l=localStorage.getItem('antigone-lang')||((navigator.language||'tr').slice(0,2)==='tr'?'tr':'en')}catch(e){}
  if(location.hash==='#en')l='en';
  set(l);tr.onclick=function(){set('tr')};en.onclick=function(){set('en')};
})();
