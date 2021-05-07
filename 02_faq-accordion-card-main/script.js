document.querySelectorAll('.accordion__question').forEach(item => {
    item.addEventListener('click', (event) => {
        
        //Open accordion item
        if(!item.classList.contains('open')){
            console.log('toggle accordion button');
            
            item.nextElementSibling.style.display = 'block';
            let accHeight = item.nextElementSibling.clientHeight;
            console.log(accHeight);
            item.nextElementSibling.style.height = accHeight + 'px';
            item.nextElementSibling.style.display = '';

            item.nextElementSibling.classList = 'accordion__collapse collapsing';

            setTimeout(() => {
                console.log('open accordion content')
                item.nextElementSibling.classList = 'accordion__collapse open'; 
                item.nextElementSibling.style.height = '';
            },  300);
        }
        //Close accordion item   
        else {   
            //Remove "collapse open" from .accordion__collapse, add "collapsing"
            item.nextElementSibling.classList = 'accordion__collapse collapsing';
            //After X aomunt of time, remove "collapsing" class and add "collapse" class    
            setTimeout(() => {
                console.log('close accordion content');
                item.nextElementSibling.classList = "accordion__collapse collapse";    
            }, 300);        
        }


        item.classList.toggle('open');
        item.nextElementSibling.classList.toggle('open');   
    });
});