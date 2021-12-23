let clubs = [
    {
      name: 'Barcelona',
      best_club: 'CF Barcelona',
      population: '12030563'
    },
    {
      name: 'London',
      best_club: 'Arsenal',
      population: '120305333'
    },
    {
      name: 'Madrid',
      best_club: 'Atletico',
      population: '120305633'
    },
    {
      name: 'Valencia',
      best_club: 'Valencia CF',
      population: '120305644'
    },
    {
      name: 'Rome',
      best_club: 'Roma',
      population: '120303333333'
    },
    {
        name: 'Milano',
        best_club: 'AC Milan',
        population: '234654654'
    }
]

for (let i=0; i<clubs.length; i++){
  if((clubs[i].name)=='Rome'){
    console.log(`Nie sme ekipa od Rim i se vikame => ${clubs[i].best_club}`)
  }
}

clubs.sort(function(a, b) {
  return parseInt(b.population) - parseInt(a.population);
});
clubs.forEach(club =>{
  //console.log(`Gradot ${club.name} ima populacija ${club.population} i najpoznatiot klub e ${club.best_club}`);
  console.log(club.best_club);
})

// Dodadete uste edna ekipa od Rim vo podatocite :point_up: Racno vo samata niza
// Izlistajte gi site ekipi od Rim, formatirani na sledniot nacin:
// ‘Nie sme ekipa od Rim: ime_na_ekipa’
// 2. Ispecatete gi site klubovi od najgolemiot grad po populacija

