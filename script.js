//Step 1: Make variables for each monster 
let monster = new Array(7).fill(0);
let select = new Array(10).fill(0);
var holder = 0;
var A = 0;
var B = 0;
var C = 0;
var D = 0;


let filledArray = new Array(10).fill('hello');


function SelectA() {
  if (select[holder] == 0) {
    select[holder] = 1;
    A = 1;
  }
}

function SelectB() {
  if (select[holder] == 0) {
    select[holder] = 1;
    B = 1;
  }
}

function SelectC() {
  if (select[holder] == 0) {
    select[holder] = 1;
    C = 1;
  }
}

function SelectD() {
  if (select[holder] == 0) {
    select[holder] = 1;
    D = 1;
  }
}


function Question1() {

  if (A == 1 && select[holder] == 1) {
    monster[0] = monster[0] + 1;
  }
  if (B == 1 && select[holder] == 1) {
    monster[4] = monster[4] + 1;
  }
  if (C == 1 && select[holder] == 1) {
    monster[5] = monster[5] + 1;
  }
  if (D == 1 && select[holder] == 1) {
    monster[1] = monster[1] + 1;
  }

  alert('Question 1 entered');
  A = 0;
  B = 0;
  C = 0;
  D = 0;
  holder = 1;
}

function Question2() {

  if (A == 1 && select[holder] == 1) {
    monster[6] = monster[6] + 1;
  }
  if (B == 1 && select[holder] == 1) {
    monster[3] = monster[3] + 1;
  }

  if (B == 1 && select[holder] == 1) {
    monster[3] = monster[3] + 1;
  }

  alert('Question 2 entered');
  A = 0;
  B = 0;
  C = 0;
  D = 0;
  holder = 2;
}

function Question3() {

  if (A == 1 && select[holder] == 1) {
    monster[2] = monster[2] + 1;
  }
  if (B == 1 && select[holder] == 1) {
    monster[0] = monster[0] + 1;
  }
  if (C == 1 && select[holder] == 1) {
    monster[5] = monster[5] + 1;
  }
  if (D == 1 && select[holder] == 1) {
    monster[1] = monster[1] + 1;
  }

  alert('Question 3 entered');
  A = 0;
  B = 0;
  C = 0;
  D = 0;
  holder = 3;
}

function Question4() {

  if (A == 1 && select[holder] == 1) {
    monster[1] = monster[1] + 1;
  }
  if (B == 1 && select[holder] == 1) {
    monster[4] = monster[4] + 1;
  }
  if (C == 1 && select[holder] == 1) {
    monster[3] = monster[3] + 1;
  }
  if (D == 1 && select[holder] == 1) {
    monster[5] = monster[5] + 1;
  }

  alert('Question 4 entered');
  A = 0;
  B = 0;
  C = 0;
  D = 0;
  holder = 4;
}

function Question5() {

  if (A == 1 && select[holder] == 1) {
    monster[2] = monster[2] + 1;
  }
  if (B == 1 && select[holder] == 1) {
    monster[5] = monster[5] + 1;
  }
  if (C == 1 && select[holder] == 1) {
    monster[4] = monster[4] + 1;
  }
  if (D == 1 && select[holder] == 1) {
    monster[0] = monster[0] + 1;
  }

  alert('Question 5 entered');
  A = 0;
  B = 0;
  C = 0;
  D = 0;
  holder = 5;
}

function Question6() {

  if (A == 1 && select[holder] == 1) {
    monster[3] = monster[3] + 1;
  }
  if (B == 1 && select[holder] == 1) {
    monster[0] = monster[0] + 1;
  }
  if (C == 1 && select[holder] == 1) {
    monster[5] = monster[5] + 1;
  }
  if (D == 1 && select[holder] == 1) {
    monster[4] = monster[4] + 1;
  }

  alert('Question 6 entered');
  A = 0;
  B = 0;
  C = 0;
  D = 0;
  holder = 6;
}

function Question7() {

  if (A == 1 && select[holder] == 1) {
    monster[2] = monster[2] + 1;
  }
  if (B == 1 && select[holder] == 1) {
    monster[6] = monster[6] + 1;
  }
  if (C == 1 && select[holder] == 1) {
    monster[4] = monster[4] + 1;
  }
  if (D == 1 && select[holder] == 1) {
    monster[3] = monster[3] + 1;
  }

  alert('Question 7 entered');
  A = 0;
  B = 0;
  C = 0;
  D = 0;
  holder = 7;
}

function Question8() {

  if (A == 1 && select[holder] == 1) {
    monster[3] = monster[3] + 1;
  }
  if (B == 1 && select[holder] == 1) {
    monster[6] = monster[6] + 1;
  }
  if (C == 1 && select[holder] == 1) {
    monster[2] = monster[2] + 1;
  }
  if (D == 1 && select[holder] == 1) {
    monster[4] = monster[4] + 1;
  }

  alert('Question 8 entered');
  A = 0;
  B = 0;
  C = 0;
  D = 0;
  holder = 8;
}

function Question9() {

  if (A == 1 && select[holder] == 1) {
    monster[6] = monster[6] + 1;
  }
  if (B == 1 && select[holder] == 1) {
    monster[2] = monster[2] + 1;
  }
  if (C == 1 && select[holder] == 1) {
    monster[0] = monster[0] + 1;
  }
  if (D == 1 && select[holder] == 1) {
    monster[2] = monster[2] + 1;
  }

  alert('Question 9 entered');
  A = 0;
  B = 0;
  C = 0;
  D = 0;
  holder = 9;
}

function Question10() {

  if (A == 1 && select[holder] == 1) {
    monster[6] = monster[6] + 1;
  }
  if (B == 1 && select[holder] == 1) {
    monster[1] = monster[1] + 1;
  }
  if (C == 1 && select[holder] == 1) {
    monster[2] = monster[2] + 1;
  }
  if (D == 1 && select[holder] == 1) {
    monster[3] = monster[3] + 1;
  }

  alert('Question 10 entered');
  A = 0;
  B = 0;
  C = 0;
  D = 0;
}

let YOU = -1

function Monsterification() {
  YOU = 0;
  for (let i = 1; i < 7; i++) {
    if (monster[i] > monster[YOU]) {
      YOU = i;
    }
  }

  //now we need to check which monster you are!

  if (YOU == 0) {
    alert('Jelly cube')
  }
  if (YOU == 1) {
    alert('Shia LaBeouf')
  }
  if (YOU == 2) {
    alert('Giant Space Hampster')
  }
  if (YOU == 3) {
    alert('Darth Vader')
  }
  if (YOU == 4) {
    alert('Mimic')
  }
  if (YOU == 5) {
    alert('Gibbering Mouther')
  }
  if (YOU == 6) {
    alert('False hydra')
  }

}



