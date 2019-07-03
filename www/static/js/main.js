const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

toggle.addEventListener('change', function() {
  localStorage.setItem('toggleState', toggle.checked);
});

document.getElementById("changeAllel").addEventListener('click', ()=>{
       if(document.getElementById("Element_change").classList.contains('menu_header')){
        document.getElementById("Element_change").classList.remove('menu_header') 
        document.getElementById("Element_change").classList.add('menu_header1')
        document.getElementById("logo_id").classList.remove('logotyous')
        document.getElementById("logo_id").classList.add('logotyous1')
        document.getElementById("hello_change").classList.remove('inform_block')
        document.getElementById("hello_change").classList.add('inform_block1')
        document.getElementById("rofler").classList.remove('navigation_header')
        document.getElementById("rofler").classList.add('navigation_header1')
       }
       else{
        document.getElementById("Element_change").classList.remove('menu_header1') 
        document.getElementById("Element_change").classList.add('menu_header') 
        document.getElementById("logo_id").classList.remove('logotyous1')
        document.getElementById("logo_id").classList.add('logotyous')
        document.getElementById("hello_change").classList.remove('inform_block1')
        document.getElementById("hello_change").classList.add('inform_block')
        document.getElementById("rofler").classList.remove('navigation_header1')
        document.getElementById("rofler").classList.add('navigation_header')
       }
})