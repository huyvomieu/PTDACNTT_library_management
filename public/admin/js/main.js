var inputActive = document.querySelector("input[activeNavbar]")
if (inputActive) {
    var value = inputActive.getAttribute('activeNavbar');
    console.log(value)
    var itemNav = document.querySelector(`a[${value}]`);
    itemNav.classList.add('active');
}