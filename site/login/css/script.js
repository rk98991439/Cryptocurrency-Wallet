const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// color change 

const toggleSwitch = document.querySelector('.toggle-checkbox');

function switchTheme(event) {
	if (event.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		// set the background color to black
		document.body.style.backgroundColor = "#FFA900";
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		// set the background color to white
		document.body.style.backgroundColor = "#FFD085";
	}
}

toggleSwitch.addEventListener('change', switchTheme);