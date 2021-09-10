// mainpage slider start
let slidertest = document.querySelector('.slide');

if (slidertest) {
    $(document).ready(function () {
        $('.slider-test').slick({
            dots: true,
            arrows: true,
        });
    });
}
// mainpage slider end

// header sticky
window.onscroll = function () {
    myFunction()
};

var header = document.querySelector(".bottom-header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


// tab functinality starts
var x = document.getElementsByClassName('btn');
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('click', function (event) {
        filterSelection(event.target.getAttribute('title'));
    });
}

function filterSelection(elementToShow) {
    console.log('elementToShow', elementToShow);
    if (elementToShow != 'all') {
        // Get an array of elements with the class name, All.
        var x = document.getElementsByClassName('all');
        // For each of them
        for (var i = 0; i < x.length; i++) {
            // Make them invisible
            x[i].style.display = 'none';
        }
        // Get an array of elements with the class name, Other than All.
        var y = document.getElementsByClassName(elementToShow);
        for (var j = 0; j < y.length; j++) {
            // Make them invisible
            y[j].style.display = 'block';
        }
    } else {
        // If the parameter provided is all, we want to display everything
        // Get an array of elements with the class name, All.
        var x = document.getElementsByClassName('all');
        // For each of them
        for (var i = 0; i < x.length; i++) {
            //Make them visible
            x[i].style.display = 'block';
        }
    }
}

// tab functinality ends


// form validation starts
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname')
let password = document.querySelector('.password')
let email = document.querySelector('.email')
let form = document.querySelector('form');
let flag = true;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (fname.value === '' || fname.value == null) {
        fname.nextElementSibling.innerHTML = '*First Name is required';
        flag = false;
    } else {
        fname.nextElementSibling.innerHTML = '';
        flag = true;
    }

    if (lname.value === '' || lname.value == null) {
        lname.nextElementSibling.innerHTML = '*Last Name is required';
        flag = false;
    } else {
        lname.nextElementSibling.innerHTML = '';
        flag = true;
    }

    if (password.value === '' || password.value == null) {
        password.nextElementSibling.innerHTML = '*Password is required';
        flag = false;
    } else {
        password.nextElementSibling.innerHTML = '';
        flag = true;
    }

    if (email.value === '' || email.value == null) {
        email.nextElementSibling.innerHTML = '*Email is required';
        flag = false;
    } else {
        email.nextElementSibling.innerHTML = '';
        flag = true;
    }

    if (flag) {
        resetForm();
    }
})

function resetForm() {
    fname.value = '';
    lname.value = '';
    password.value = '';
    email.value = '';
}

// form validation ends 

// modal starts here

let modal = document.createElement('div');
let imgBox = document.createElement('div');
let boxImg = document.createElement('img');
let close = document.createElement('button');
let information = document.querySelectorAll('.project-imgs .overlay .plus');

modal.classList.add('modal');
imgBox.classList.add('box');
close.classList.add('btn');
imgBox.appendChild(close);
imgBox.appendChild(boxImg);
modal.appendChild(imgBox);
document.body.appendChild(modal);

information.forEach(function (val) {
    val.addEventListener('click', function () {
        let imageSrc = val.parentElement.previousElementSibling.firstChild.getAttribute("src");
        let img = val.querySelector('img');
        boxImg.src = imageSrc;
        modal.classList.add('popUp');
    });
});

close.addEventListener('click', function () {
    modal.classList.remove('popUp');
});


modal.addEventListener('click', function () {
    modal.classList.remove('popUp');
});

// modal ends here

// loadmore starts here
let item = 0;
let btn = document.querySelector('.see');

btn.addEventListener("click", function () {
    let secondFacility = document.querySelector('.secondFacility');
    secondFacility.classList.remove("inActive")
    btn.remove()
})

// loadmore ends here


// bottomtotop btn start
let scrollBtn = document.querySelector('.top');

window.addEventListener("scroll", function () {
    let scrollVal = this.scrollY;

    if (scrollVal > 600) {
        scrollBtn.classList.add('active');
    } else {
        scrollBtn.classList.remove('active');
    }
});

scrollBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
// bottomtotop btn end