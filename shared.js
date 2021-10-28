var backdrop=document.querySelector('.backdrop');//doesn't have to be same as name of class


//--------------- overwrites the css display style
// backdrop.style.display = 'block';

// Adding the event listener
var modal=document.querySelector('.modal');
var selectPlanButtons=document.querySelectorAll('.plan button');


// adding event listener to these buttons
for(var i = 0; i < selectPlanButtons.length ;i++){
    selectPlanButtons[i].addEventListener('click', function(){
        modal.style.display='block';
        backdrop.style.display='block';

    });
}