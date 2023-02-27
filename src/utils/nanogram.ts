export const nanoGen = (size: number): number[][] => {
  const rows: number[][] = [];
  const columns: number[][] = [];

  for (let i = 0; i < size; i++) {
    const row = [];
    const column = [];
    for (let j = 0; j < Math.floor(size / 2); j++) {
      const randomRow = Math.round(Math.random());
      const randomColumn = Math.round(Math.random());
      row.push(randomRow);
      column.push(randomColumn);
    }
    rows.push(row);
    columns.push(column);
  }

  const grid: number[][] = [];

  for (let i = 0; i < size; i++) {
    const row = new Array(size).fill(0);
    grid.push(row);
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      const index = size - j - 1;
      if (rows[i][j] === 1) {
        grid[i][index] = 1;
      }
    }

    for (let j = 0; j < columns[i].length; j++) {
      const index = size - j - 1;
      if (columns[i][j] === 1) {
        grid[index][i] = 1;
      }
    }
  }

  return grid;
};

export const clueInfo = (grid: number[][]): any[][] => {
  const rows: any[][] = [];
  const columns = [];

  for (let x of grid) {
    let repeatCount = 0;
    const row: any[] = [];
    for (let y of x) {
      if (y === 1) {
        repeatCount++;
      } else {
        if (repeatCount > 0) {
          row.push(repeatCount);
        }
        repeatCount = 0;
      }
    }
    if (repeatCount > 0) {
      row.push(repeatCount);
    }
    repeatCount = 0;
    rows.push(row);
  }

  return rows;
};
