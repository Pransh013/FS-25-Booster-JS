printPatternI(11);
printPatternII(5);
printPatternIII(5);
printPatternIV(9);

function printPatternI(n) {
  let rows = (n + 1) / 2;
  let st = 1;
  let sp = rows - 1;

  for (let i = 1; i <= rows; i++) {
    let ans = "";
    for (let j = 1; j <= sp; j++) {
      ans += "  ";
    }

    for (let j = 1; j <= st; j++) {
      ans += j + " ";
    }
    st += 2;
    sp--;
    console.log(ans);
  }
}

function printPatternII(n) {
  let rows = 2 * n - 1;
  let st = 1;
  let sp = n - 1;

  for (let i = 1; i <= rows; i++) {
    let ans = "";
    for (let j = 1; j <= sp; j++) {
      ans += "  ";
    }

    for (let j = 1; j <= st; j++) {
      ans += j + " ";
    }
    if (i < n) {
      st++;
      sp--;
    } else {
      st--;
      sp++;
    }
    console.log(ans);
  }
}

function printPatternIII(n) {
  let rows = 2 * n - 1;
  let st = 1;
  for (let i = 1; i <= rows; i++) {
    let ans = "";
    for (let j = st; j >= 1; j--) {
      ans += j + " ";
    }
    if (i < n) {
      st++;
    } else {
      st--;
    }
    console.log(ans);
  }
}

function printPatternIV(n) {
  let rows = (n + 1) / 2;
  let st = n;
  let sp = 0;

  for (let i = 1; i <= rows; i++) {
    let ans = "";
    for (let j = 1; j <= sp; j++) {
      ans += "  ";
    }

    for (let j = 1; j <= st; j++) {
      ans += j + " ";
    }
    st -= 2;
    sp++;
    console.log(ans);
  }
}
