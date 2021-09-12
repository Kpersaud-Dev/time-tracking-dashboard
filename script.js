const daily = document.getElementById('daily'),
      weekly = document.getElementById('weekly'),
      monthly = document.getElementById('monthly'),
      currentWork = document.querySelector('#current-work-time'),
      previousWork = document.getElementById('previous-work-time'),
      currentPlay = document.getElementById('current-play-time'),
      previousPlay = document.getElementById('previous-play-time'),
      currentStudy = document.getElementById('current-study-time'),
      previousStudy = document.getElementById('previous-study-time'),
      currentExercise = document.getElementById('current-exercise-time'),
      previousExercise = document.getElementById('previous-exercise-time'),
      currentSocial = document.getElementById('current-social-time'),
      previousSocial = document.getElementById('previous-social-time'),
      currentCare = document.getElementById('current-care-time'),
      previousCare = document.getElementById('previous-care-time');


const fetchData = async () => {
  const res = await fetch('data.json');
  const data = await res.json();

  displayData(data);
}

fetchData();

// Display JSON data
const displayData = (jsonData) => {

  // If Daily, Weekly, Or Monthly are selected

  if(daily.classList.contains('active')) {

  currentWork.innerText = `${jsonData[0].timeframes.daily.current} hr`;
  previousWork.innerText = `Yesterday - ${jsonData[0].timeframes.daily.previous} hrs`;

  currentPlay.innerText = `${jsonData[1].timeframes.daily.current} hr`;
  previousPlay.innerText = `Yesterday - ${jsonData[1].timeframes.daily.previous} hrs`;

  currentStudy.innerText = `${jsonData[2].timeframes.daily.current} hr`;
  previousStudy.innerText = `Yesterday - ${jsonData[2].timeframes.daily.previous} hrs`;

  currentExercise.innerText = `${jsonData[3].timeframes.daily.current} hr`;
  previousExercise.innerText = `Yesterday - ${jsonData[3].timeframes.daily.previous} hrs`;

  currentSocial.innerText = `${jsonData[4].timeframes.daily.current} hr`;
  previousSocial.innerText = `Yesterday - ${jsonData[4].timeframes.daily.previous} hrs`;

  currentCare.innerText = `${jsonData[5].timeframes.daily.current} hr`;
  previousCare.innerText = `Yesterday - ${jsonData[5].timeframes.daily.previous} hrs`;
  } else if(weekly.classList.contains('active')) {
    
  currentWork.innerText = `${jsonData[0].timeframes.weekly.current} hr`;
  previousWork.innerText = `Previous Week - ${jsonData[0].timeframes.weekly.previous} hrs`;

  currentPlay.innerText = `${jsonData[1].timeframes.weekly.current} hr`;
  previousPlay.innerText = `Previous Week - ${jsonData[1].timeframes.weekly.previous} hrs`;

  currentStudy.innerText = `${jsonData[2].timeframes.weekly.current} hr`;
  previousStudy.innerText = `Previous Week - ${jsonData[2].timeframes.weekly.previous} hrs`;

  currentExercise.innerText = `${jsonData[3].timeframes.weekly.current} hr`;
  previousExercise.innerText = `Previous Week - ${jsonData[3].timeframes.weekly.previous} hrs`;

  currentSocial.innerText = `${jsonData[4].timeframes.weekly.current} hr`;
  previousSocial.innerText = `Previous Week - ${jsonData[4].timeframes.weekly.previous} hrs`;

  currentCare.innerText = `${jsonData[5].timeframes.weekly.current} hr`;
  previousCare.innerText = `Previous Week - ${jsonData[5].timeframes.weekly.previous} hrs`;
  } else if (monthly.classList.contains('active')) {
  
  currentWork.innerText = `${jsonData[0].timeframes.monthly.current} hr`;
  previousWork.innerText = `Previous Month - ${jsonData[0].timeframes.monthly.previous} hrs`;

  currentPlay.innerText = `${jsonData[1].timeframes.monthly.current} hr`;
  previousPlay.innerText = `Previous Month - ${jsonData[1].timeframes.monthly.previous} hrs`;

  currentStudy.innerText = `${jsonData[2].timeframes.monthly.current} hr`;
  previousStudy.innerText = `Previous Month - ${jsonData[2].timeframes.monthly.previous} hrs`;

  currentExercise.innerText = `${jsonData[3].timeframes.monthly.current} hr`;
  previousExercise.innerText = `Previous Month - ${jsonData[3].timeframes.monthly.previous} hrs`;

  currentSocial.innerText = `${jsonData[4].timeframes.monthly.current} hr`;
  previousSocial.innerText = `Previous Month - ${jsonData[4].timeframes.monthly.previous} hrs`;

  currentCare.innerText = `${jsonData[5].timeframes.monthly.current} hr`;
  previousCare.innerText = `Previous Month - ${jsonData[5].timeframes.monthly.previous} hrs`;
  }

}


// Event Listeners

daily.addEventListener('click', e => {
  e.target.classList.add('active');

  weekly.classList.remove('active');
  monthly.classList.remove('active');
  fetchData();
});

weekly.addEventListener('click', e => {
  e.target.classList.add('active');

  daily.classList.remove('active');
  monthly.classList.remove('active');
  fetchData();
});

monthly.addEventListener('click', e => {
  e.target.classList.add('active');

  daily.classList.remove('active');
  weekly.classList.remove('active');
  fetchData();
});





