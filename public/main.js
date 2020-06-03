var helpNow = document.querySelector('.help-now');
var helpLater = document.querySelector('.help-later');
var helpDiary = document.querySelector('.help-diary');

helpNow.addEventListener('click', openHelpNow)
helpLater.addEventListener('click', openHelpLater)
helpDiary.addEventListener('click', openHelpDiary)

function openHelpNow() {
  console.log('Now')
}

function openHelpLater() {
  console.log('Later')
}

function openHelpDiary() {
  console.log('Diary')
}
