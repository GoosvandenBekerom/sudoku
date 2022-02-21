document.addEventListener('DOMContentLoaded', () => {
  let board = document.getElementById("sudoku")

  let grid = [
    [0, 0, 0,   0, 0, 0,   0, 0, 0,],
    [0, 0, 0,   0, 0, 0,   0, 0, 0,],
    [0, 0, 0,   0, 0, 0,   0, 0, 0,],
    
    [0, 0, 0,   0, 0, 0,   0, 0, 0,],
    [0, 0, 0,   0, 0, 0,   0, 0, 0,],
    [0, 0, 0,   0, 0, 0,   0, 0, 0,],
  
    [0, 0, 0,   0, 0, 0,   0, 0, 0,],
    [0, 0, 0,   0, 0, 0,   0, 0, 0,],
    [0, 0, 0,   0, 0, 0,   0, 0, 0,],
  ]
  
  for (y = 0; y < 9; y++) {
    let row = createRow(board)
    for (x = 0; x < 9; x++) {
      createCell(row)
    }
  }
})

function createRow(parent) {
  var row = document.createElement("row");
  row.className = "row";
  parent.appendChild(row)
  return row
}

function createCell(parent) {
  var input = document.createElement("input");
  input.className = "cell";
  input.type = "number"
  input.maxLength = 1;
  input.min = 1
  input.max = 9
  input.addEventListener('input', e => {
    input.value = e.data
  })

  parent.appendChild(input)
  return input
}
